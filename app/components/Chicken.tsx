"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Chicken() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const chickenMenu = [
        {
            number: "#1",
            name: "Medio Pollo",
            description: "½ Pollo Entero al Carbón, Cebolla Asada, Tortillas, Salsa y Limones",
            price: "$129",
        },
        {
            number: "#2",
            name: "Pollo Entero",
            description: "1 Pollo Entero al Carbón, Cebolla Asada, Tortillas, Salsa y Limones",
            price: "$219",
            featured: true,
        },
        {
            number: "#3",
            name: "Pollo Nopalero",
            description: "1 Pollo Entero al Carbón + Nopales Asados, Arroz, Frijoles, Cebolla Asada, Tortillas, Salsa y Limones",
            price: "$319",
            featured: true,
        },
        {
            number: "#4",
            name: "Pollo Toluqueño",
            description: "1 Pollo Entero al Carbón + 2 Chorizos Toluqueños, Arroz, Frijoles, Cebolla Asada, Tortillas, Salsa y Limones",
            price: "$315",
        },
        {
            number: "#5",
            name: "Pollo y Sirloin",
            description: "1 Pollo Entero al Carbón + 500 g Sirloin, Cebolla Asada, Tortillas, Salsa y Limones",
            price: "$549",
            featured: true,
        },
        {
            number: "#7",
            name: "Pollo Personal",
            description: "½ Pollo Entero al Carbón + Refresco 400 ml, Arroz o Frijoles, Cebolla Asada, Tortillas, Salsa y Limones",
            price: "$169",
        },
    ];

    return (
        <section
            id="pollos"
            ref={ref}
            className="py-20 md:py-32 bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                            Tus Favoritos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                            Pollos al carbón con el auténtico sabor parrillero
                        </h2>
                        <p className="text-lg text-neutral-gray leading-relaxed mb-6">
                            Pollo entero o medio, asado al carbón con guarniciones que
                            completan la experiencia.
                        </p>
                        <p className="text-base text-neutral-gray font-medium mb-8">
                            Todos incluyen cebolla asada, tortillas, salsa y limones.
                        </p>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/chicken-hero.jpg"
                                alt="Pollo al carbón con guarniciones en Rincón Parrillero Querétaro"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* Chicken Menu Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chickenMenu.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className={`bg-gradient-to-br from-white to-neutral-light rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.featured ? "border-2 border-primary ring-4 ring-primary/20" : ""
                                }`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-4xl font-serif font-bold text-primary/20">
                                    {item.number}
                                </span>
                                {item.featured && (
                                    <span className="bg-primary text-neutral-dark text-xs font-bold px-3 py-1 rounded-full">
                                        POPULAR
                                    </span>
                                )}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-neutral-dark mb-3">
                                {item.name}
                            </h3>
                            <p className="text-neutral-gray text-sm leading-relaxed mb-4 min-h-[80px]">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-gray/20">
                                <span className="text-3xl font-bold text-secondary">
                                    {item.price}
                                </span>
                                <a
                                    href={`https://wa.me/5214426155877?text=Hola, me interesa el ${item.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-secondary hover:text-secondary-dark font-semibold text-sm transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Ordenar
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://wa.me/5214426155877"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-neutral-dark font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Ordenar por WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}