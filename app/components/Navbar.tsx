"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Menú", href: "#menu" },
    { name: "Galería", href: "#galeria" },
    { name: "Reseñas", href: "#resenas" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-neutral-dark/95 backdrop-blur-sm shadow-lg"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <a href="#inicio" className="flex items-center">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                                <Image
                                    src="/logo.png"
                                    alt="Rincón Parrillero Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="ml-3 text-white font-serif text-xl sm:text-2xl font-bold">
                                Rincón Parrillero
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white hover:text-primary transition-colors duration-300 font-medium text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="tel:4426155877"
                                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-neutral-dark font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="hidden xl:inline">Llamar Ahora</span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-neutral-dark z-50 lg:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-white font-serif text-2xl font-bold">
                                        Menú
                                    </span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="flex flex-col space-y-1 flex-1">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            href={link.href}
                                            onClick={handleLinkClick}
                                            className="text-white hover:text-primary hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>

                                <a
                                    href="tel:4426155877"
                                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-neutral-dark font-semibold px-6 py-4 rounded-full transition-all duration-300 shadow-lg mt-6"
                                >
                                    <Phone className="w-5 h-5" />
                                    Llamar Ahora
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}