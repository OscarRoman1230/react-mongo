import { Routes, Route, Link } from "react-router-dom";
import Articulos from "./pages/Articulos";
import Subida from "./pages/Subida";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 text-white p-4 shadow-md">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-lg font-bold">Tienda</h1>
                    <div className="space-x-4">
                        <Link to="/" className="hover:underline">Artículos</Link>
                        <Link to="/subida" className="hover:underline">Subida</Link>
                    </div>
                </div>
            </nav>
            <div className="max-w-4xl mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Articulos />} />
                    <Route path="/subida" element={<Subida />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
