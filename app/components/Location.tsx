"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function Location() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const schedule = [
        { day: "Lunes a Domingo", hours: "10:00 a.m. - 6:00 p.m." }
    ];

    const contactInfo = [
        {
            icon: Phone,
            title: "Teléfonos",
            content: ["442 615 58 77", "442 891 35 99"],
            href: "tel:4426155877",
        },
        {
            icon: MapPin,
            title: "Dirección",
            content: [
                "Epigmenio Gonzales 999, Local 1, Plaza Real, Real Solare., El Marques, Mexico, 76240"
            ],
            href: "https://maps.app.goo.gl/ryEh6XaT34nX8qD96",
        },
    ];

    return (
        <section
            id="ubicacion"
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
                        Visítanos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                        Ven a disfrutar o haz tu pedido
                    </h2>
                    <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
                        Te esperamos en nuestra sucursal o contáctanos para servicio a domicilio
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Map Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7470.036769429926!2d-100.2854879!3d20.5873068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35d4ed1c217c9%3A0xad587eeeed6ca37c!2sRinc%C3%B3n%20Parrillero!5e0!3m2!1sen!2smx!4v1760580368788!5m2!1sen!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Rincón Parrillero en Real Solare, Querétaro"
                        />
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Horarios */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-neutral-dark">
                                    Horarios
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {schedule.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center py-3 border-b border-neutral-gray/20 last:border-0"
                                    >
                                        <span className="font-semibold text-neutral-dark">
                                            {item.day}
                                        </span>
                                        <span className="text-primary font-bold">{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-white to-neutral-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                                            <info.icon className="w-6 h-6 text-secondary" />
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-neutral-dark">
                                            {info.title}
                                        </h3>
                                    </div>
                                    <div className="space-y-2">
                                        {info.content.map((line, i) => (
                                            <p key={i} className="text-neutral-gray">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href="https://maps.app.goo.gl/ryEh6XaT34nX8qD96"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <Navigation className="w-5 h-5" />
                                Ver en Google Maps
                            </a>
                            <a
                                href="https://wa.me/5214426155877"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-dark text-neutral-dark font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <Phone className="w-5 h-5" />
                                Ordenar por WhatsApp
                            </a>
                        </div>

                        {/* Delivery Notice */}
                        <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-6 text-center">
                            <p className="text-neutral-dark font-semibold mb-2">
                                🚚 Servicio a Domicilio Disponible
                            </p>
                            <p className="text-sm text-neutral-gray">
                                Realizamos entregas en la zona. ¡Contáctanos para más información!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}