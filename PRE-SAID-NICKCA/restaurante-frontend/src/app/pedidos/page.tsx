"use client";

import { useEffect, useState } from "react";

const API = "http://localhost:3000";

interface Plato {
  id: number;
  nombre: string;
  precio: number;
}

interface Mesa {
  id: number;
  numero: number;
}

interface Pedido {
  id: number;
  mesa: Mesa;
  platos: Plato[];
  estado: string;
  total: number;
  createdAt: string;
}

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [mesaId, setMesaId] = useState("");
  const [platoIds, setPlatoIds] = useState<number[]>([]);

  const fetchData = () => {
    Promise.all([
      fetch(`${API}/pedidos`).then((r) => r.json()),
      fetch(`${API}/platos`).then((r) => r.json()),
      fetch(`${API}/mesas`).then((r) => r.json()),
    ])
      .then(([pedidos, platos, mesas]) => {
        setPedidos(Array.isArray(pedidos) ? pedidos : []);
        setPlatos(Array.isArray(platos) ? platos : []);
        setMesas(Array.isArray(mesas) ? mesas : []);
      })
      .catch(() => setError(true));
  };

  useEffect(fetchData, []);

  const togglePlato = (id: number) => {
    setPlatoIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const crearPedido = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${API}/pedidos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mesaId: parseInt(mesaId), platoIds }),
    });
    setMesaId("");
    setPlatoIds([]);
    setShowForm(false);
    fetchData();
  };

  const estadoColors: Record<string, string> = {
    pendiente: "bg-yellow-100 text-yellow-700",
    en_preparacion: "bg-blue-100 text-blue-700",
    listo: "bg-green-100 text-green-700",
    entregado: "bg-gray-100 text-gray-700",
  };

  if (error) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-600">Error de conexión</h1>
        <p className="text-gray-600 mt-2">No se pudo conectar con el backend</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Pedidos</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showForm ? "Cancelar" : "Nuevo Pedido"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={crearPedido}
          className="bg-white rounded-xl shadow-md p-6 mb-6"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mesa
            </label>
            <select
              value={mesaId}
              onChange={(e) => setMesaId(e.target.value)}
              required
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="">Seleccionar mesa</option>
              {mesas.map((m) => (
                <option key={m.id} value={m.id}>
                  Mesa {m.numero}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Platos
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {platos.map((p) => (
                <label
                  key={p.id}
                  className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer ${
                    platoIds.includes(p.id)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={platoIds.includes(p.id)}
                    onChange={() => togglePlato(p.id)}
                    className="sr-only"
                  />
                  <span className="text-sm">
                    {p.nombre} - S/ {p.precio.toFixed(2)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Crear Pedido
          </button>
        </form>
      )}

      <div className="space-y-4">
        {pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Pedido #{pedido.id}
                </h3>
                <p className="text-gray-500">
                  Mesa {pedido.mesa?.numero || pedido.mesa?.id || "?"}
                </p>
                <p className="text-sm text-gray-400">
                  {new Date(pedido.createdAt).toLocaleString("es-PE")}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    estadoColors[pedido.estado] || "bg-gray-100"
                  }`}
                >
                  {pedido.estado}
                </span>
                <p className="text-xl font-bold text-gray-800 mt-2">
                  S/ {Number(pedido.total).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-600">Platos:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {(pedido.platos || []).map((plato) => (
                  <span
                    key={plato.id}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {plato.nombre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
