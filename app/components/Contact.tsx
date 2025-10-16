"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, MapPin, Facebook, Instagram } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactMethods = [
        {
            icon: MessageCircle,
            title: "WhatsApp",
            description: "La forma más rápida de hacer tu pedido",
            action: "Chatea Ahora",
            href: "https://wa.me/5214426155877",
            color: "bg-green-600 hover:bg-green-700",
            numbers: ["442 615 58 77", "442 891 35 99"],
            featured: true,
        },
        {
            icon: Phone,
            title: "Llámanos",
            description: "Comunícate directamente con nosotros",
            action: "Llamar Ahora",
            href: "tel:4426155877",
            color: "bg-secondary hover:bg-secondary-dark",
            numbers: ["442 615 58 77", "442 891 35 99"],
        },
    ];

    const socialLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://www.facebook.com/rinconparrilleroqro",
            color: "hover:bg-blue-600",
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/rinconparrilleromx",
            color: "hover:bg-pink-600",
        },
    ];

    return (
        <section
            id="contacto"
            ref={ref}
            className="py-20 md:py-32 bg-gradient-to-b from-white to-neutral-light relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4B942' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                        Contacto
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                        Haz tu pedido ahora
                    </h2>
                    <p className="text-lg text-neutral-gray max-w-2xl mx-auto mb-4">
                        Contáctanos por WhatsApp o llámanos directamente para hacer tu
                        pedido
                    </p>
                    <p className="text-base font-semibold text-primary">
                        ¡Entrega a domicilio disponible! 🚚
                    </p>
                </motion.div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div
                                className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${method.featured ? "ring-4 ring-primary/20 scale-105" : ""
                                    }`}
                            >
                                {method.featured && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-neutral-dark text-xs font-bold px-4 py-1 rounded-full">
                                        RECOMENDADO
                                    </span>
                                )}

                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <method.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-2xl font-serif font-bold text-neutral-dark text-center mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-neutral-gray text-center mb-6">
                                    {method.description}
                                </p>

                                {/* Phone Numbers */}
                                <div className="space-y-2 mb-6">
                                    {method.numbers.map((number) => (
                                        <div
                                            key={number}
                                            className="flex items-center justify-center gap-2 text-neutral-dark font-semibold text-lg"
                                        >
                                            <Phone className="w-5 h-5 text-primary" />
                                            {number}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <a
                                    href={method.href}
                                    target={method.href.startsWith("http") ? "_blank" : undefined}
                                    rel={
                                        method.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={`block w-full ${method.color} text-white font-bold py-4 px-6 rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
                                >
                                    {method.action}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center items-center gap-4 mb-16"
                >
                    <span className="text-neutral-gray text-sm font-medium">
                        Síguenos en:
                    </span>
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-10 h-10 bg-neutral-dark ${social.color} rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg`}
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5 text-white" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Additional CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <p className="text-neutral-gray mb-6 text-lg">
                        ¿Prefieres visitarnos en persona?
                    </p>
                    <a
                        href="#ubicacion"
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector("#ubicacion");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-dark hover:bg-neutral-gray text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <MapPin className="w-5 h-5" />
                        Ver Ubicación y Horarios
                    </a>
                </motion.div>
            </div>
        </section>
    );
}