const Contact = () => {
    return (
        <div className="p-4" style={{ fontFamily: 'var(--font)', color: 'var(--text)' }}>
            <h1 className="text-3xl mb-4">Contact Us</h1>
            <form className="max-w-md space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
                <textarea placeholder="Message" className="w-full p-2 border rounded" required />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;