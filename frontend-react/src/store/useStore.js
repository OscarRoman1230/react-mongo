import {create} from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const useStore = create((set) => ({
    productos: [],
    preciosEspeciales: {}, // Almacenará los precios especiales con productId como clave
    usuarioId: "",

    setUsuarioId: (id) => set({usuarioId: id}),

    fetchProductos: async () => {
        try {
            const res = await axios.get(`${API_URL}/productos`);
            set({productos: res.data});
        } catch (error) {
            console.error("Error al obtener productos", error);
        }
    },

    fetchPreciosEspeciales: async (usuarioId) => {
        if (!usuarioId) return;
        try {
            const res = await axios.get(`${API_URL}/precios-especiales/${usuarioId}`);

            if (res.data && res.data.productos) {
                const preciosMap = res.data.productos.reduce((acc, item) => {
                    acc[item.productId._id] = item.precioEspecial;
                    return acc;
                }, {});

                set({ preciosEspeciales: preciosMap });

                if (Object.keys(preciosMap).length === 0) {
                    alert("No se encontraron precios especiales para este usuario.");
                }
            } else {
                set({ preciosEspeciales: {} });
            }
        } catch (error) {
            alert("Error al obtener precios especiales. Intente nuevamente.");
            console.error("Error al obtener precios especiales", error);
        }
    },
}));

export default useStore;
