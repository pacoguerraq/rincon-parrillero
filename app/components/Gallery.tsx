"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const galleryImages = [
        {
            src: "/gallery-1.jpg",
            alt: "Parrillada de arrachera y chorizo en Rincón Parrillero",
        },
        {
            src: "/gallery-2.jpg",
            alt: "Pollo al carbón dorado perfectamente asado",
        },
        {
            src: "/gallery-3.jpg",
            alt: "Cortes premium de carne en la parrilla",
        },
        {
            src: "/gallery-4.jpg",
            alt: "Itacate completo con guarniciones tradicionales",
        },
        {
            src: "/gallery-5.jpg",
            alt: "Interior del restaurante Rincón Parrillero",
        },
        {
            src: "/gallery-6.jpg",
            alt: "Asador profesional con carnes al carbón",
        },
        {
            src: "/gallery-7.jpg",
            alt: "Platillo especial de carne y pollo combinados",
        },
        {
            src: "/gallery-8.jpg",
            alt: "Detalle de cortes premium listos para servir",
        },
    ];

    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedImage]);

    return (
        <section
            id="galeria"
            ref={ref}
            className="py-20 md:py-32 bg-gradient-to-b from-white to-neutral-light"
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
                        Galería
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                        La experiencia Rincón Parrillero
                    </h2>
                    <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
                        Nada se compara con el aroma del carbón y el sonido de la carne
                        asándose. Explora nuestra galería y déjate tentar por nuestros
                        cortes, pollos al carbón e itacates servidos con el toque artesanal
                        que nos distingue.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                                    Ver imagen
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        aria-label="Cerrar"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage((prev) =>
                                prev === 0 ? galleryImages.length - 1 : (prev || 0) - 1
                            );
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        aria-label="Anterior"
                    >
                        ‹
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage((prev) =>
                                (prev || 0) === galleryImages.length - 1 ? 0 : (prev || 0) + 1
                            );
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        aria-label="Siguiente"
                    >
                        ›
                    </button>

                    <div
                        className="relative w-full max-w-5xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].alt}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm">
                        {selectedImage + 1} / {galleryImages.length}
                    </div>
                </motion.div>
            )}
        </section>
    );
}