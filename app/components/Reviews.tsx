"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export default function Reviews() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
        dragFree: false,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

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
            name: "Fabiola Torres",
            rating: 5,
            text: "Excelente lugar! La atención de David y su personal fueron súper cordiales y amables!!! Salsas deliciosas, sirloin todo muy bien!",
            avatar: "FT",
        },
        {
            name: "Cindy Astorga",
            rating: 5,
            text: "Excelente servicio lo recomiendo al mil, la actitud con la que te atienden es increíble, la comida deliciosa, pasas un momento inolvidable. Se los recomiendo mucho yo iré siempre de verdad nos veremos pronto 🙂 …",
            avatar: "CA",
        },
        {
            name: "Gabriela Santoyo",
            rating: 5,
            text: "Todo está súper rico! Las alitas, los taquitos de arrachera con su chimichurri hecho en casa y las papas a la francesa perfectamente crujientes por fuera y suavecitas por dentro son de mis preferidos.",
            avatar: "GS",
        },
        {
            name: "Alberto Fernández",
            rating: 5,
            text: "Excelente lugar para comer tacos de arrachera y chorizo. Sus cortes están excelentes y la calidad es precio es buena.",
            avatar: "AF",
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

                {/* Carousel Container */}
                <div className="relative">
                    {/* Embla Container */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0 p-2 px-4"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                                        className="h-full"
                                    >
                                        <div className="bg-gradient-to-br from-neutral-light to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                            {/* Stars */}
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary"
                                                    />
                                                ))}
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-neutral-gray text-sm md:text-base leading-relaxed mb-6 italic flex-grow">
                                                "{review.text}"
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center gap-4 pt-6 border-t border-neutral-gray/20">
                                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-primary font-bold text-lg">
                                                        {review.avatar}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-neutral-dark text-sm md:text-base">
                                                        {review.name}
                                                    </p>
                                                    <p className="text-xs md:text-sm text-neutral-gray">
                                                        Cliente verificado
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons - Desktop */}
                    <button
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-neutral-dark z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                        aria-label="Reseña anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-neutral-dark z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                        aria-label="Reseña siguiente"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`transition-all duration-300 rounded-full ${index === selectedIndex
                                    ? "w-8 h-2 bg-primary"
                                    : "w-2 h-2 bg-neutral-gray/30 hover:bg-neutral-gray/50"
                                    }`}
                                aria-label={`Ir a reseña ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://www.google.com/search?sca_esv=aa292efd2fdca36d&sxsrf=AE3TifN9_fVtWWwPyY6-gk0zGra2tjAFnw:1760582157673&q=rincon+parrillero+queretaro&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8j9Mvw9xfhxQqXrYCHJIeHieD0YAJOVIcavQLfDuzMn3oJtNj5OrYoVAp1taDmi576G48SDb5Q9i4EtHmZeETAMe2mfU-Lg3TKBbGR9dPHaWFE9PQ%3D%3D&sa=X&ved=2ahUKEwiOouzQ16eQAxWwkmoFHZFIEAcQrrQLegQINxAA&biw=997&bih=829&dpr=2#lrd=0x85d35d4ed1c217c9:0xad587eeeed6ca37c,3,,,,"
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