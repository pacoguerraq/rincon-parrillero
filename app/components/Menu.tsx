"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ShoppingCart } from "lucide-react";

export default function Menu() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const menuItems = [
        {
            name: "Parrillada 1 kg",
            description: "500 g arrachera + 250 g chorizo rojo + 250 g chistorra",
            price: "$375",
            featured: true,
        },
        {
            name: "Arrachera Parrillera",
            description: "1 kg arrachera + 500 g chistorra",
            price: "$359",
            featured: true,
        },
        {
            name: "Parrillada Especial",
            description: "Pollo entero al carbón + 1 kg arrachera",
            price: "$420",
            featured: true,
        },
        {
            name: "Rib Eye",
            description: "500 g",
            price: "$549",
        },
        {
            name: "T-Bone",
            description: "500 g",
            price: "$519",
        },
        {
            name: "Sirloin",
            description: "500 g",
            price: "$349",
        },
        {
            name: "New York",
            description: "500 g",
            price: "$299",
        },
    ];

    return (
        <section
            id="menu"
            ref={ref}
            className="py-20 md:py-32 bg-gradient-to-b from-neutral-light to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                        Nuestro Menú
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                        El Mejor Itacate de Querétaro
                    </h2>
                    <p className="text-lg text-neutral-gray max-w-3xl mx-auto mb-4">
                        Nuestros cortes son de primera calidad, asados al carbón y
                        acompañados de guarniciones tradicionales.
                    </p>
                    <p className="text-base text-neutral-gray max-w-2xl mx-auto font-medium">
                        Todos los itacates incluyen tortillas, nopales con cebolla, salsa y
                        limones.
                    </p>
                </motion.div>

                {/* Menu Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.featured ? "border-2 border-primary" : ""
                                }`}
                        >
                            {item.featured && (
                                <span className="inline-block bg-primary text-neutral-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    DESTACADO
                                </span>
                            )}
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-serif font-bold text-neutral-dark">
                                    {item.name}
                                </h3>
                                <span className="text-2xl font-bold text-primary">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-neutral-gray mb-4 text-sm leading-relaxed">
                                {item.description}
                            </p>
                            <a
                                href="https://wa.me/5214426155877"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-semibold text-sm transition-colors"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Ordenar ahora
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="/menu.pdf"
                        download
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
                    >
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        Descargar Menú Completo
                    </a>
                    <a
                        href="https://wa.me/5214426155877"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-neutral-dark font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        Haz tu Pedido
                    </a>
                </motion.div>
            </div>
        </section>
    );
}