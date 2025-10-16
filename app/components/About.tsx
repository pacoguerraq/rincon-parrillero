"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Flame, Award, Heart } from "lucide-react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            icon: Flame,
            title: "Asado al Carbón",
            description: "Cada platillo preparado con fuego tradicional y carbón natural",
        },
        {
            icon: Award,
            title: "Calidad Premium",
            description: "Cortes selectos y ingredientes frescos de primera calidad",
        },
        {
            icon: Heart,
            title: "Tradición Mexicana",
            description: "El auténtico sabor de la parrilla mexicana conservado",
        },
    ];

    return (
        <section
            id="nosotros"
            ref={ref}
            className="py-20 md:py-32 bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/gallery/gallery-14.jpg"
                                alt=""
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-primary text-neutral-dark p-8 rounded-2xl shadow-xl hidden md:block">
                            <p className="text-4xl font-bold font-serif">+10</p>
                            <p className="text-sm font-semibold">Años de Tradición</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                            Quiénes Somos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                            Tradición y sabor a la parrilla desde Querétaro
                        </h2>
                        <div className="space-y-4 text-neutral-gray text-lg leading-relaxed mb-8">
                            <p>
                                En Rincón Parrillero creemos que una buena carne asada es más
                                que una comida: es una tradición que une.
                            </p>
                            <p>
                                Desde nuestros inicios en Querétaro, nos especializamos en
                                preparar cortes de calidad premium y pollos al carbón con ese
                                toque artesanal que solo el fuego puede dar.
                            </p>
                            <p>
                                Nuestro compromiso es conservar la esencia de la parrilla
                                mexicana —por eso nuestro lema es{" "}
                                <span className="text-primary font-semibold italic">
                                    "Conservando tradición"
                                </span>
                                .
                            </p>
                            <p>
                                Cada platillo se prepara al momento, con ingredientes frescos,
                                atención personalizada y el sabor ahumado que nos distingue.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-3 gap-6 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                                        <feature.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-neutral-dark mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-neutral-gray">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="#menu"
                            className="inline-block px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Conoce Nuestro Menú
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}