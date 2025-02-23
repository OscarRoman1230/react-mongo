import {useEffect, useState} from "react";
import axios from "axios";
import useStore from "../store/useStore";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function Subida() {
    const { fetchPreciosEspeciales, productos, fetchProductos } = useStore();
    const [usuarioId, setUsuarioId] = useState("");
    const [productoId, setProductoId] = useState("");
    const [precioEspecial, setPrecioEspecial] = useState("");

    useEffect(() => {
        fetchProductos().then(r => r); // Cargar los productos al montar el componente
    }, []);

    const guardarPrecioEspecial = () => {
        if (!usuarioId || !productoId || !precioEspecial) return alert("Todos los campos son obligatorios");

        axios
            .post(`${API_URL}/precios-especiales`, {
                usuarioId,
                productos: [{ productId: productoId, precioEspecial: Number(precioEspecial) }],
            })
            .then(() => {
                alert("Precio especial guardado");
                fetchPreciosEspeciales(usuarioId).then(r => r);
            })
            .catch(() => alert("Error al guardar precio especial"));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Subida de Precios Especiales</h1>
            <div className="space-y-2">
                <input
                    type="text"
                    placeholder="Ingrese ID de usuario"
                    className="border p-2 rounded w-full"
                    value={usuarioId}
                    onChange={(e) => setUsuarioId(e.target.value)}
                />

                <select
                    className="border p-2 rounded w-full"
                    value={productoId}
                    onChange={(e) => setProductoId(e.target.value)}
                >
                    <option value="">Selecciona un producto</option>
                    {productos.map((prod) => (
                        <option key={prod._id} value={prod._id}>
                            {prod.name} - {prod.brand} (${prod.price})
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Precio Especial"
                    className="border p-2 rounded w-full"
                    value={precioEspecial}
                    onChange={(e) => setPrecioEspecial(e.target.value)}
                />

                <button
                    onClick={guardarPrecioEspecial}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}

export default Subida;