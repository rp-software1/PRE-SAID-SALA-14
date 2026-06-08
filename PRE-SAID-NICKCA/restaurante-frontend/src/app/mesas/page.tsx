"use client";

import { useEffect, useState } from "react";

const API = "http://localhost:3000";

interface Mesa {
  id: number;
  numero: number;
  capacidad: number;
  estado: string;
}

const estadoColors: Record<string, string> = {
  disponible: "bg-green-100 border-green-400 text-green-700",
  ocupada: "bg-red-100 border-red-400 text-red-700",
  reservada: "bg-yellow-100 border-yellow-400 text-yellow-700",
};

const estadoBg: Record<string, string> = {
  disponible: "bg-green-500",
  ocupada: "bg-red-500",
  reservada: "bg-yellow-500",
};

export default function MesasPage() {
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [numero, setNumero] = useState("");
  const [capacidad, setCapacidad] = useState("");

  const fetchMesas = () => {
    fetch(`${API}/mesas`)
      .then((r) => r.json())
      .then(setMesas)
      .catch(() => setError(true));
  };

  useEffect(fetchMesas, []);

  const crearMesa = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${API}/mesas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        numero: parseInt(numero),
        capacidad: parseInt(capacidad),
      }),
    });
    setNumero("");
    setCapacidad("");
    setShowForm(false);
    fetchMesas();
  };

  const cambiarEstado = async (id: number, estado: string) => {
    await fetch(`${API}/mesas/${id}/estado`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado }),
    });
    fetchMesas();
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
        <h1 className="text-3xl font-bold text-gray-800">Mesas</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showForm ? "Cancelar" : "Nueva Mesa"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={crearMesa}
          className="bg-white rounded-xl shadow-md p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="number"
              placeholder="Número de mesa"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="number"
              placeholder="Capacidad"
              value={capacidad}
              onChange={(e) => setCapacidad(e.target.value)}
              required
              className="border rounded-lg px-3 py-2"
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition"
            >
              Crear
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${
              estadoColors[mesa.estado] || "border-gray-400"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Mesa {mesa.numero}
                </h3>
                <p className="text-gray-500">Capacidad: {mesa.capacidad} personas</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  estadoBg[mesa.estado]
                } text-white`}
              >
                {mesa.estado}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              {mesa.estado !== "disponible" && (
                <button
                  onClick={() => cambiarEstado(mesa.id, "disponible")}
                  className="flex-1 bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm hover:bg-green-200 transition"
                >
                  Disponible
                </button>
              )}
              {mesa.estado !== "ocupada" && (
                <button
                  onClick={() => cambiarEstado(mesa.id, "ocupada")}
                  className="flex-1 bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm hover:bg-red-200 transition"
                >
                  Ocupar
                </button>
              )}
              {mesa.estado !== "reservada" && (
                <button
                  onClick={() => cambiarEstado(mesa.id, "reservada")}
                  className="flex-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-sm hover:bg-yellow-200 transition"
                >
                  Reservar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
