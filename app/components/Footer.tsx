"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://www.facebook.com/rinconparrilleroqro",
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/rinconparrilleromx",
        },
    ];

    const quickLinks = [
        { name: "Nosotros", href: "#nosotros" },
        { name: "Menú", href: "#menu" },
        { name: "Galería", href: "#galeria" },
        { name: "Ubicación", href: "#ubicacion" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <footer className="bg-neutral-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="/logo.png"
                                    alt="Rincón Parrillero Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="ml-3 text-2xl font-serif font-bold">
                                Rincón Parrillero
                            </span>
                        </div>
                        <p className="text-white/70 mb-6 leading-relaxed">
                            Conservando la tradición de la auténtica parrilla mexicana desde Querétaro.
                        </p>
                        <p className="text-primary font-serif italic font-semibold">
                            "Conservando Tradición"
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-primary transition-colors duration-300 inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-white/70 text-sm">
                                    Epigmenio Gonzales 999, Local 1, Plaza Real, Real Solare., El Marques, Mexico, 76240
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <div className="text-white/70 text-sm">
                                    <a href="tel:4426155877" className="hover:text-primary transition-colors block">
                                        442 615 58 77
                                    </a>
                                    <a href="tel:4428913599" className="hover:text-primary transition-colors block">
                                        442 891 35 99
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a
                                    href="mailto:rinconcitoparrillero.qro@gmail.com"
                                    className="text-white/70 hover:text-primary transition-colors text-sm"
                                >
                                    rinconcitoparrillero.qro@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Hours */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6">Síguenos</h3>
                        <div className="flex gap-3 mb-8">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5 text-white group-hover:text-neutral-dark transition-colors" />
                                </motion.a>
                            ))}
                        </div>

                        <h4 className="text-sm font-semibold mb-3">Horario</h4>
                        <p className="text-white/70 text-sm">
                            <span className="block font-semibold text-white mb-1">
                                Lunes - Domingo
                            </span>
                            10:00 a.m. - 6:00 p.m.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Rincón Parrillero. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                            <span>Desarrollado con</span>
                            <Heart className="w-4 h-4 text-primary fill-primary" />
                            <span>por</span>
                            <a
                                href="https://pacoguerraq.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-light font-semibold transition-colors"
                            >
                                pacoguerraq.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
        </footer>
    );
}