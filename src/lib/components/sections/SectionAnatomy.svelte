<script>
    import { cn } from "$lib/utils";

    // Labels positioning based on the visual layout of the tray
    // Dip Zone (Center Ovals)
    // Topping Deck (Side Rectangles)
    // No-Fall Slot (Bottom slots)
</script>

<section class="py-20 md:py-28 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2
                class="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
            >
                The Anatomy of the Perfect Bite.
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every curve has a purpose. Designed for maximum holding capacity
                and zero mess.
            </p>
        </div>

        <div class="relative max-w-4xl mx-auto">
            <!-- Background Image (Empty Tray) -->
            <div class="relative aspect-square md:aspect-4/3 w-full">
                <!-- Using the white tray image -->
                <img
                    src="/hero-tray.jpg"
                    alt="Empty Tray Anatomy"
                    class="w-full h-full object-contain opacity-40 mix-blend-multiply grayscale-[0.2]"
                />

                <!-- Overlays / Annotations -->

                <!-- The Dip Zone (Center) -->
                <div
                    class="absolute top-[35%] left-1/2 -translate-x-1/2 text-center group"
                >
                    <div
                        class="w-32 h-24 border-2 border-dashed border-primary rounded-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    ></div>
                    <span
                        class="inline-block px-4 py-2 bg-white shadow-lg rounded-full text-sm font-bold border border-gray-100 relative z-10"
                    >
                        The Dip Zone
                    </span>
                    <div class="w-px h-12 bg-gray-400 mx-auto my-2"></div>
                    <p
                        class="text-xs md:text-sm font-medium max-w-37.5 mx-auto text-gray-600 bg-white/80 p-2 rounded backdrop-blur leading-tight"
                    >
                        Oval shape designed for the perfect scoop. Ideal for
                        Guac, Salsa, or Queso.
                    </p>
                </div>

                <!-- The Topping Deck (Right Side - approximates) -->
                <div class="absolute top-[20%] right-[15%] text-left group">
                    <span
                        class="text-red-600 inline-block px-4 py-2 bg-white shadow-lg rounded-full text-sm font-bold border border-gray-100"
                    >
                        The Topping Deck
                    </span>
                    <div
                        class="w-12 h-px bg-gray-400 -ml-12 -mt-3.75 rotate-45 origin-right"
                    ></div>
                    <p
                        class="text-xs md:text-sm font-medium max-w-40 mt-4 text-gray-600 bg-white/80 p-2 rounded backdrop-blur leading-tight"
                    >
                        Deep walls keep your cheese, lettuce, and pico de gallo
                        separated and clean.
                    </p>
                </div>

                <!-- The No-Fall Slot (Bottom Center) -->
                <div
                    class="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center group"
                >
                    <p
                        class="text-xs md:text-sm font-medium max-w-50 mx-auto text-gray-600 bg-white/80 p-2 rounded backdrop-blur mb-2 leading-tight"
                    >
                        Engineered grooves to hold 3 hard shells, buns, or cones
                        upright.
                    </p>
                    <div class="w-px h-12 bg-gray-400 mx-auto mb-2"></div>
                    <span
                        class="text-red-600 inline-block px-4 py-2 bg-white shadow-lg rounded-full text-sm font-bold border border-gray-100"
                    >
                        The No-Fall Slot
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
