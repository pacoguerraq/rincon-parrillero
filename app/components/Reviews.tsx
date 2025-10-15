"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Reviews() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const reviews = [
        {
            name: "Ana Pia",
            rating: 5,
            text: "Muy buen lugar para comer, el servicio excelente y la comida muy rica. Hamburguesa de arrachera y piña con papas exquisitas.",
            avatar: "AP",
        },
        {
            name: "David Iracheta",
            rating: 5,
            text: "Excelente carne de primera calidad, se sirve al punto ideal. El servicio a domicilio es excelente y aceptan tarjeta.",
            avatar: "DI",
        },
        {
            name: "Alberto Fernández",
            rating: 5,
            text: "Excelente lugar para tacos de arrachera y chorizo. La calidad y el precio son muy buenos.",
            avatar: "AF",
        },
        {
            name: "María González",
            rating: 5,
            text: "Los pollos al carbón están deliciosos y siempre bien cocidos. Las porciones son generosas y el sabor incomparable.",
            avatar: "MG",
        },
        {
            name: "Carlos Ramírez",
            rating: 5,
            text: "Pedimos la parrillada especial y fue más que suficiente para la familia. Todo estaba fresco y con excelente sazón.",
            avatar: "CR",
        },
    ];

    return (
        <section
            id="resenas"
            ref={ref}
            className="py-20 md:py-32 bg-white relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                        Testimonios
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">
                        Nuestros clientes lo confirman
                    </h2>
                    <div className="flex items-center justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-6 h-6 fill-primary text-primary" />
                        ))}
                    </div>
                    <p className="text-lg text-neutral-gray">
                        La satisfacción de nuestros clientes es nuestro mayor orgullo
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                                >
                                    <div className="bg-gradient-to-br from-neutral-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-primary text-primary"
                                                />
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-neutral-gray text-base leading-relaxed mb-6 italic">
                                            "{review.text}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-neutral-gray/20">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                                <span className="text-primary font-bold text-lg">
                                                    {review.avatar}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-neutral-dark">
                                                    {review.name}
                                                </p>
                                                <p className="text-sm text-neutral-gray">
                                                    Cliente verificado
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-neutral-dark z-10"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-neutral-dark z-10"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://www.google.com/search?q=rincon+parrillero+queretaro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Deja tu Opinión en Google
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}