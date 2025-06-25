import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                    Bienvenido a
                </h1>
                <h2 className="text-4xl md:text-6xl font-light text-blue-300 mb-8">
                    Eclipse Condos
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Tu hogar ideal te está esperando
                </p>
            </div>
        </div>
    );
};

export default Home;