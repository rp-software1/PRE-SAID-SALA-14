"use client";

import { useEffect, useState } from "react";

const API = "http://localhost:3000";

interface Plato {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
}

export default function PlatosPage() {
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const fetchPlatos = () => {
    fetch(`${API}/platos`)
      .then((r) => r.json())
      .then(setPlatos)
      .catch(() => setError(true));
  };

  useEffect(fetchPlatos, []);

  const crearPlato = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${API}/platos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio: parseFloat(precio) }),
    });
    setNombre("");
    setPrecio("");
    setShowForm(false);
    fetchPlatos();
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
        <h1 className="text-3xl font-bold text-gray-800">Platos</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showForm ? "Cancelar" : "Nuevo Plato"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={crearPlato}
          className="bg-white rounded-xl shadow-md p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="number"
              placeholder="Precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
              step="0.01"
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

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-3 text-gray-600 font-semibold">ID</th>
              <th className="text-left px-6 py-3 text-gray-600 font-semibold">Nombre</th>
              <th className="text-left px-6 py-3 text-gray-600 font-semibold">Precio</th>
              <th className="text-left px-6 py-3 text-gray-600 font-semibold">Disponible</th>
            </tr>
          </thead>
          <tbody>
            {platos.map((plato) => (
              <tr key={plato.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{plato.id}</td>
                <td className="px-6 py-4 font-medium">{plato.nombre}</td>
                <td className="px-6 py-4">S/ {plato.precio.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      plato.disponible
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {plato.disponible ? "Disponible" : "No disponible"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
