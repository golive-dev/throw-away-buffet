<script lang="ts">
    import { cn } from "$lib/utils";

    // Placeholder SVGs for the steps - adhering to "Linear Illustration" style
</script>

<section id="how-it-works" class="py-20 md:py-28 bg-[#FAFAF7] relative">
    <div class="container mx-auto px-4 text-center">
        <h2
            class="text-4xl md:text-5xl font-heading font-bold text-foreground mb-20"
        >
            Setup in Seconds. Clean Up in None.
        </h2>

        <div class="grid md:grid-cols-3 gap-12 relative">
            <!-- Connecting Line (Desktop) -->
            <div
                class="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 border-t-2 border-dotted border-gray-300 -z-10"
            ></div>

            <!-- Step 1 -->
            <div class="group relative bg-transparent p-6 space-y-6">
                <div
                    class="relative w-48 h-48 mx-auto bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500"
                >
                    <span
                        class="absolute -top-4 -left-4 text-8xl font-heading font-bold text-accent opacity-20 group-hover:opacity-40 transition-opacity"
                        >1</span
                    >
                    <!-- Simple Fold Icon -->
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        class="w-24 h-24 text-foreground"
                    >
                        <path d="M12 22v-9" />
                        <path d="M22 6L12 11L2 6" />
                        <path d="M22 18L12 22l-10-4" />
                        <path d="M2 6v12" />
                        <path d="M22 6v12" />
                    </svg>
                </div>
                <div>
                    <h3 class="text-2xl font-bold font-heading mb-3">
                        Instant Station.
                    </h3>
                    <p class="text-muted-foreground leading-relaxed">
                        Unfolds from a drawer to a full buffet in literally one second. No assembly required.
                    </p>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="group relative bg-transparent p-6 space-y-6">
                <div
                    class="relative w-48 h-48 mx-auto bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500"
                >
                    <span
                        class="absolute -top-4 -left-4 text-8xl font-heading font-bold text-[#7a422f] opacity-20 group-hover:opacity-40 transition-opacity"
                        >2</span
                    >
                    <!-- Fill Icon (Bowl/Food) -->
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        class="w-24 h-24 text-foreground"
                    >
                        <path d="M12 2L2 7l10 5l10-5l-10-5Z" />
                        <path d="M2 17l10 5l10-5" />
                        <path d="M2 12l10 5l10-5" />
                        <!-- Falling nacho bits -->
                        <circle
                            cx="12"
                            cy="8"
                            r="1"
                            fill="currentColor"
                            class="animate-bounce delay-100"
                        />
                        <path
                            d="M10 6l2 2"
                            stroke-width="1"
                            class="animate-pulse"
                        />
                    </svg>
                </div>
                <div>
                    <h3 class="text-2xl font-bold font-heading mb-3">
                        Everyone's Happy.
                    </h3>
                    <p class="text-muted-foreground leading-relaxed">
                        12 compartments mean no flavor collisions. Picky eaters, dietary restrictions, maximalists—all handled.
                    </p>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="group relative bg-transparent p-6 space-y-6">
                <!-- Vibrate logic on hover for the number 3 -->
                <div
                    class="relative w-48 h-48 mx-auto bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500"
                >
                    <span
                        class="absolute -top-4 -left-4 text-8xl font-heading font-bold text-primary opacity-20 group-hover:opacity-40 transition-opacity group-hover:animate-vibrate"
                        >3</span
                    >
                    <!-- Toss Icon (Bin) -->
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        class="w-24 h-24 text-foreground"
                    >
                        <polyline points="3 6 5 6 21 6" />
                        <path
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                    <!-- Eco Leaf -->
                    <svg
                        class="absolute bottom-4 right-4 w-8 h-8 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"
                        /><path
                            d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        />
                    </svg>
                </div>
                <div>
                    <h3 class="text-2xl font-bold font-heading mb-3">
                        Freedom.
                    </h3>
                    <p class="text-muted-foreground leading-relaxed">
                        When it's over, toss it. 100% compostable. You're back on the couch before your guests reach their cars.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
