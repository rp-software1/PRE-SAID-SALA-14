"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API = "http://localhost:3000";

export default function Dashboard() {
  const [data, setData] = useState({ platos: 0, mesas: 0, pedidos: 0 });
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/platos`).then((r) => r.json()),
      fetch(`${API}/mesas`).then((r) => r.json()),
      fetch(`${API}/pedidos`).then((r) => r.json()),
    ])
      .then(([platos, mesas, pedidos]) => {
        setData({
          platos: Array.isArray(platos) ? platos.length : 0,
          mesas: Array.isArray(mesas) ? mesas.length : 0,
          pedidos: Array.isArray(pedidos) ? pedidos.length : 0,
        });
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-600">Error de conexión</h1>
        <p className="text-gray-600 mt-2">
          No se pudo conectar con el backend en {API}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Dashboard del Restaurante
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/platos">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-600">Platos</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">{data.platos}</p>
            <p className="text-gray-500 mt-2">Total de platos registrados</p>
          </div>
        </Link>
        <Link href="/mesas">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-600">Mesas</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">{data.mesas}</p>
            <p className="text-gray-500 mt-2">Total de mesas registradas</p>
          </div>
        </Link>
        <Link href="/pedidos">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-600">Pedidos</h2>
            <p className="text-4xl font-bold text-orange-600 mt-2">{data.pedidos}</p>
            <p className="text-gray-500 mt-2">Pedidos registrados</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
