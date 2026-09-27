<script>
    import { cn } from "$lib/utils";
</script>

<section class="py-20 md:py-28 bg-[#FAFAF7] overflow-hidden">
    <div class="container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16 space-y-4">
            <span
                class="inline-block text-sm font-bold tracking-[2px] text-primary uppercase"
            >
                The Specs
            </span>
            <h2
                class="text-4xl md:text-5xl font-heading font-bold text-foreground"
            >
                Obsessively Designed.
            </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Specs / Text -->
            <div class="space-y-12 order-2 lg:order-1">
                <div class="space-y-6">
                    <!-- Feature 1: The Smart Grid -->
                    <div class="flex gap-6 group">
                        <div
                            class="w-16 h-16 shrink-0 rounded-2xl bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300"
                        >
                            <!-- Grid Icon -->
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                class="w-8 h-8"
                            >
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold font-heading mb-2">
                                The Smart Grid.
                            </h3>
                            <p class="text-muted-foreground leading-relaxed">
                                Strategically designed compartments. Serve a
                                dozen options simultaneously without mixing
                                flavors. Instant organization.
                            </p>
                        </div>
                    </div>

                    <!-- Feature 2: Thermal Flex -->
                    <div class="flex gap-6 group">
                        <div
                            class="w-16 h-16 shrink-0 rounded-2xl bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300"
                        >
                            <!-- Thermometer Icon -->
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                class="w-8 h-8"
                            >
                                <path
                                    d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold font-heading mb-2">
                                Thermal Flex.
                            </h3>
                            <p class="text-muted-foreground leading-relaxed">
                                Engineered for extremes. Serve hot or cold food
                                with total confidence. Hot dip? Cold cuts? Yes.
                            </p>
                        </div>
                    </div>

                    <!-- Feature 3: Go-Anywhere Design -->
                    <div class="flex gap-6 group">
                        <div
                            class="w-16 h-16 shrink-0 rounded-2xl bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300"
                        >
                            <!-- Feather Icon -->
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                class="w-8 h-8"
                            >
                                <path
                                    d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
                                ></path>
                                <line x1="16" y1="8" x2="2" y2="22"></line>
                                <line x1="17.5" y1="15" x2="9" y2="15"></line>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold font-heading mb-2">
                                Go-Anywhere Design.
                            </h3>
                            <p class="text-muted-foreground leading-relaxed">
                                Ultralight and portable. Your buffet is no
                                longer tied to the kitchen. Take it to the
                                garden, the park, or the stadium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Macro Zoom Image -->
            <div
                class="order-1 lg:order-2 relative h-[600px] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
                <!-- Using a crop of the white tray to simulate a macro shot of the fiber -->
                <img
                    src="/hero-tray.jpg"
                    alt="Close up of fiber texture"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    class="w-full h-full object-cover scale-150 origin-bottom-left hover:scale-[1.6] transition-transform duration-1000"
                />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                ></div>
                <div
                    class="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-mono text-zinc-500 shadow-sm"
                >
                    MATERIAL: MOLDED SUGARCANE FIBER
                </div>
            </div>
        </div>
    </div>
</section>
