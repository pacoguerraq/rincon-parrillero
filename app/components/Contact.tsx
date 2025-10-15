"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, MessageCircle, Mail } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate form submission
        setStatus("success");
        setTimeout(() => {
            setStatus("idle");
            setFormData({ name: "", phone: "", message: "" });
        }, 3000);

        // In production, you would send this to WhatsApp or your backend
        const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}`;
        const whatsappUrl = `https://wa.me/5214426155877?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const quickActions = [
        {
            icon: Phone,
            title: "Llámanos",
            description: "442 615 58 77",
            href: "tel:4426155877",
            color: "bg-secondary",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            description: "Chatea con nosotros",
            href: "https://wa.me/5214426155877",
            color: "bg-green-600",
        },
        {
            icon: Mail,
            title: "Email",
            description: "info@rinconparrillero.com",
            href: "mailto:info@rinconparrillero.com",
            color: "bg-accent-blue",
        },
    ];

    return (
        <section
            id="contacto"
            ref={ref}
            className="py-20 md:py-32 bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4B942' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }} />
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
                        Haz tu pedido o reserva
                    </h2>
                    <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
                        Nuestro equipo estará encantado de atenderte. También puedes hacer tu pedido directamente por WhatsApp.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-neutral-light to-white p-8 rounded-2xl shadow-xl">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                                        placeholder="442 123 4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Mensaje / Pedido
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-gray/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                                        placeholder="Cuéntanos qué necesitas..."
                                    />
                                </div>

                                {status === "success" && (
                                    <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
                                        ¡Mensaje enviado! Te contactaremos pronto.
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
                                        Hubo un error. Por favor intenta de nuevo.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-neutral-dark font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <Send className="w-5 h-5" />
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border-2 border-primary/20">
                            <h3 className="text-2xl font-serif font-bold text-neutral-dark mb-4">
                                Contáctanos Directamente
                            </h3>
                            <p className="text-neutral-gray mb-6">
                                Elige la forma más conveniente para comunicarte con nosotros
                            </p>

                            <div className="space-y-4">
                                {quickActions.map((action, index) => (
                                    <motion.a
                                        key={action.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        href={action.href}
                                        target={action.href.startsWith("http") ? "_blank" : undefined}
                                        rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                                    >
                                        <div className={`w-14 h-14 ${action.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <action.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-neutral-dark group-hover:text-primary transition-colors">
                                                {action.title}
                                            </p>
                                            <p className="text-sm text-neutral-gray">
                                                {action.description}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* QR Code Section (Optional) */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <h4 className="font-serif font-bold text-xl text-neutral-dark mb-4">
                                Escanea para WhatsApp
                            </h4>
                            <div className="w-48 h-48 mx-auto bg-neutral-light rounded-xl flex items-center justify-center mb-4">
                                {/* Placeholder for QR code */}
                                <MessageCircle className="w-16 h-16 text-primary" />
                            </div>
                            <p className="text-sm text-neutral-gray">
                                Escanea este código QR con tu cámara para chatear directamente
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}