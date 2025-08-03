import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const { theme } = useTheme();

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);


    if (theme === 'theme2') {
        return (
            <div className="flex" style={{ fontFamily: 'var(--font)', color: 'var(--text)' }}>
                <aside id="default-sidebar" className="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a className="flex items-center p-2 text-white rounded-lg cursor-pointer dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                                    <span className="fa fa-home ms-3"></span>
                                    <span className="ms-3">Home</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center p-2 text-white rounded-lg cursor-pointer dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                                    <span className="fa fa-dashboard ms-3"></span>
                                    <span className="ms-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center p-2 text-white rounded-lg cursor-pointer dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                                    <span className="fa fa-file-pdf-o ms-3"></span>
                                    <span className="ms-3">Reports</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center p-2 text-white rounded-lg cursor-pointer dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                                    <span className="fa fa-folder-open ms-3"></span>
                                    <span className="ms-3">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center p-2 text-white rounded-lg cursor-pointer dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                                    <span className="fa fa-user-circle ms-3"></span>
                                    <span className="ms-3">Account</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside >
                <main className="flex-1 p-6 ml-64">Dark Theme with sidebar layout</main>
            </div >
        );
    }

    if (theme === 'theme3') {
        return (
            <div className="p-4" style={{ fontFamily: 'var(--font)', color: 'var(--text)' }}>
                <h1 className="text-3xl mb-4">Welcome to the Product Store</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 productCard">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border p-4 rounded bg-white shadow hover:shadow-lg transition-all"
                        >
                            <h2 className="font-bold text-lg mb-2">{product.title}</h2>
                            <p className="text-sm">{product.description.slice(0, 100)}...</p>
                            <div className="grid grid-flow-col grid-rows-3 gap-4 mt-4">
                                <div className="flex justify-center items-center row-span-3">
                                    <img className='h-25' src={product.image} alt="Product Image" />
                                </div>
                                <div className="col-span-2">
                                    Price: {product.price}
                                </div>
                                <div className="col-span-2 row-span-2">
                                    Rating: {product.rating.rate}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Default theme1
    return (
        <div className="p-6 max-w-xl mx-auto text-center" style={{ fontFamily: 'var(--font)', color: 'var(--text)' }}>
            <h1 className="text-2xl mb-4">Minimal Content</h1>
            <p>This is a simple, minimalist layout.</p>
        </div>
    );
};

export default Home;
