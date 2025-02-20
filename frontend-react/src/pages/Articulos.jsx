import { useEffect, useState } from "react";
import useStore from "../store/useStore";

function Articulos() {
    const { productos, preciosEspeciales, usuarioId, setUsuarioId, fetchProductos, fetchPreciosEspeciales } = useStore();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchProductos().finally(() => setLoading(false));
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Artículos</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Ingrese ID de usuario"
                    className="border p-2 rounded w-60"
                    value={usuarioId}
                    onChange={(e) => setUsuarioId(e.target.value)}
                />
                <button
                    onClick={() => {
                        setLoading(true);
                        fetchPreciosEspeciales(usuarioId).finally(() => setLoading(false));
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Ver Precios Especiales
                </button>
            </div>

            {loading ? <p className="text-gray-500 text-center">Cargando datos...</p> : null}

            <table className="w-full border-collapse border border-gray-300 shadow-lg text-sm sm:text-base">
                <thead>
                <tr className="bg-blue-500 text-white">
                    <th className="p-2 border border-gray-300">Nombre</th>
                    <th className="hidden sm:table-cell p-2 border border-gray-300">Marca</th>
                    <th className="hidden md:table-cell p-2 border border-gray-300">Categoría</th>
                    <th className="p-2 border border-gray-300">Stock</th>
                    <th className="p-2 border border-gray-300">Precio Normal</th>
                    <th className="p-2 border border-gray-300">Precio Especial</th>
                </tr>
                </thead>
                <tbody>
                {productos.map((prod) => (
                    <tr key={prod._id} className="bg-white hover:bg-gray-200">
                        <td className="p-2 border border-gray-300">{prod.name}</td>
                        <td className="hidden sm:table-cell p-2 border border-gray-300">{prod.brand}</td>
                        <td className="hidden md:table-cell p-2 border border-gray-300">{prod.category}</td>
                        <td className="p-2 border border-gray-300">{prod.stock}</td>
                        <td className="p-2 border border-gray-300">${prod.price}</td>
                        <td className="p-2 border border-gray-300">
                            {preciosEspeciales[prod._id] ? (
                                <span className="text-green-500 font-bold">${preciosEspeciales[prod._id]}</span>
                            ) : (
                                "N/A"
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Articulos;