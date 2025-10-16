"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, ShoppingCart, X } from "lucide-react";
import Image from "next/image";

type MenuItem = {
    name: string;
    price: string;
    image: string;
    description?: string;
};

type Category = {
    id: string;
    name: string;
    emoji: string;
    items: MenuItem[];
};

export default function Menu() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState<string>("pollos");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories: Category[] = [
        {
            id: "pollos",
            name: "Itacates de Pollo",
            emoji: "🍗",
            items: [
                { name: "Pollo Toluqueño", price: "$315", image: "/menu/pollo-toluqueno.jpg" },
                { name: "Medio Pollo", price: "$129", image: "/menu/medio-pollo.jpg" },
                { name: "Pollo & Sirloin", price: "$549", image: "/menu/pollo-sirloin.jpg" },
                { name: "Pollo & Costilla", price: "$449", image: "/menu/pollo-costilla.jpg" },
                { name: "Pollo Consentido", price: "$239", image: "/menu/pollo-consentido.jpg" },
                { name: "Pollo Nopalero", price: "$319", image: "/menu/pollo-nopalero.jpg" },
                { name: "Pollo Entero", price: "$219", image: "/menu/pollo-entero.jpg" },
                { name: "Pollo & Arrachera", price: "$420", image: "/menu/pollo-arrachera.jpg" },
                { name: "Paquete Personal de Pollo", price: "$169", image: "/menu/paquete-personal.jpg" },
            ],
        },
        {
            id: "carnes",
            name: "Itacates de Carne",
            emoji: "🥩",
            items: [
                { name: "Itacate 4", price: "$949", image: "/menu/itacate-4.jpg" },
                { name: "Itacate de Rib Eye", price: "$480", image: "/menu/itacate-rib-eye.jpg" },
                { name: "Costilla Cargada", price: "$249", image: "/menu/costilla-cargada.jpg" },
                { name: "Itacate Sirloin", price: "$339", image: "/menu/itacate-sirloin.jpg" },
                { name: "Itacate de New York", price: "$420", image: "/menu/itacate-new-york.jpg" },
                { name: "Itacate 2 (Arrachera Parrillera)", price: "$359", image: "/menu/itacate-2.jpg" },
                { name: "Itacate 3", price: "$489", image: "/menu/itacate-3.jpg" },
                { name: "Itacate 1 (Parrillada 1kg)", price: "$375", image: "/menu/itacate-1.jpg" },
                { name: "Itacate de Picaña", price: "$389", image: "/menu/itacate-picana.jpg" },
            ],
        },
        {
            id: "combos",
            name: "Pollo & Carne",
            emoji: "🔥",
            items: [
                { name: "Pollo & Arrachera", price: "$420", image: "/menu/pollo-arrachera-combo.jpg" },
                { name: "Pollo & Sirloin", price: "$549", image: "/menu/pollo-sirloin-combo.jpg" },
                { name: "Pollo & Costilla", price: "$449", image: "/menu/pollo-costilla-combo.jpg" },
            ],
        },
        {
            id: "paquetes",
            name: "Paquetes Fin de Semana",
            emoji: "📦",
            items: [
                { name: "Pollo & Barbacoa", price: "$549", image: "/menu/pollo-barbacoa.jpg" },
                { name: "Paquete Atasques", price: "$849", image: "/menu/paquete-atasques.jpg" },
            ],
        },
        {
            id: "salsas",
            name: "Salsas y Chicharrón",
            emoji: "🌶️",
            items: [
                { name: "Chicharrón de Serrano con Ajo y Cebolla", price: "$120", image: "/menu/chicharron-serrano.jpg", description: "Bote de 12 Oz" },
                { name: "Serrano Ahumado", price: "$120", image: "/menu/serrano-ahumado.jpg", description: "Bote de 12 Oz" },
                { name: "Salsa de 7 Chiles", price: "$120", image: "/menu/salsa-7-chiles.jpg", description: "Bote de 12 oz" },
            ],
        },
    ];

    const activeItems = categories.find(cat => cat.id === activeCategory)?.items || [];

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
                    className="text-center mb-12"
                >
                    <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                        Nuestro Menú
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                        El Mejor Itacate de Querétaro
                    </h2>
                    <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
                        Explora nuestro menú completo de itacates, pollos al carbón y carnes premium
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                                ? "bg-primary text-neutral-dark shadow-lg scale-105"
                                : "bg-white text-neutral-gray hover:text-neutral-dark hover:shadow-md"
                                }`}
                        >
                            <span className="mr-2">{category.emoji}</span>
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Menu Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
                    >
                        {activeItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setSelectedImage(item.image)}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="font-semibold text-neutral-dark text-sm mb-1 line-clamp-2">
                                        {item.name}
                                    </h3>
                                    {item.description && (
                                        <p className="text-xs text-neutral-gray mb-1">{item.description}</p>
                                    )}
                                    <p className="text-primary font-bold text-lg">{item.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="/menu-ejemplo.pdf"
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

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                            aria-label="Cerrar"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-3xl aspect-square"
                        >
                            <Image
                                src={selectedImage}
                                alt="Imagen del producto"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}