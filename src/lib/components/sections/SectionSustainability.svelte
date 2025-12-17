<script lang="ts">
    import { cn } from "$lib/utils";
    import { Leaf, Sprout, Recycle, Utensils } from "lucide-svelte";
</script>

<section
    id="sustainability"
    class="py-20 md:py-28 bg-[#2E5948] text-[#EFE8D8] overflow-hidden relative"
>
    <!-- Background Texture/Noise (Optional) -->
    <div
        class="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
        style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E');"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span
                class="inline-block px-4 py-1 rounded-full border border-[#EFE8D8]/30 text-xs font-bold tracking-widest uppercase mb-4"
            >
                Party without the Hangover... for the Planet
            </span>
            <h2
                class="text-5xl md:text-7xl font-heading font-bold text-white leading-[0.9]"
            >
                Leave memories, <br />
                <span class="italic font-serif opacity-80">not trash.</span>
            </h2>
        </div>

        <!-- 3-Step Lifecycle -->
        <div class="grid md:grid-cols-3 gap-12 mb-24 relative">
            <!-- Connector Line (Desktop) -->
            <div
                class="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#EFE8D8]/30 to-transparent border-t border-dashed border-[#EFE8D8]/50"
            ></div>

            <!-- Step 1: The Source -->
            <div class="text-center relative group">
                <div
                    class="w-20 h-20 mx-auto bg-[#EFE8D8] rounded-full flex items-center justify-center text-[#2E5948] mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-500"
                >
                    <Sprout class="w-10 h-10" />
                </div>
                <h3 class="text-2xl font-bold font-heading mb-3 text-white">
                    The Source
                </h3>
                <p class="text-[#EFE8D8]/80 leading-relaxed max-w-xs mx-auto">
                    <span class="font-bold text-white">Plant-Based.</span> Made from
                    molded natural fiber pulp. Zero plastics, zero toxic bleaches.
                </p>
            </div>

            <!-- Step 2: The Party -->
            <div class="text-center relative group">
                <div
                    class="w-20 h-20 mx-auto bg-[#EFE8D8] rounded-full flex items-center justify-center text-[#2E5948] mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-500 delay-100"
                >
                    <Utensils class="w-10 h-10" />
                </div>
                <h3 class="text-2xl font-bold font-heading mb-3 text-white">
                    The Party
                </h3>
                <p class="text-[#EFE8D8]/80 leading-relaxed max-w-xs mx-auto">
                    <span class="font-bold text-white">Non-Toxic Serving.</span>
                    Safe for your food and family. No chemicals leaching into your
                    hot salsa.
                </p>
            </div>

            <!-- Step 3: The Return -->
            <div class="text-center relative group">
                <div
                    class="w-20 h-20 mx-auto bg-[#EFE8D8] rounded-full flex items-center justify-center text-[#2E5948] mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-500 delay-200"
                >
                    <Leaf class="w-10 h-10" />
                </div>
                <h3 class="text-2xl font-bold font-heading mb-3 text-white">
                    The Return
                </h3>
                <p class="text-[#EFE8D8]/80 leading-relaxed max-w-xs mx-auto">
                    <span class="font-bold text-white">Earth-Bound.</span> Biodegrades
                    in ~90 days in industrial composting conditions.
                </p>
            </div>
        </div>

        <!-- Impact Comparison -->
        <div
            class="bg-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto"
        >
            <h3
                class="text-center text-2xl font-bold font-heading mb-10 text-white"
            >
                The Decomposition Race
            </h3>

            <div class="space-y-8">
                <!-- Competitor -->
                <div class="space-y-2">
                    <div
                        class="flex justify-between text-sm uppercase tracking-wider font-bold opacity-70"
                    >
                        <span>Plastic Plate</span>
                        <span>500 Years</span>
                    </div>
                    <div
                        class="h-12 bg-white/5 rounded-full overflow-hidden relative"
                    >
                        <div
                            class="absolute top-0 left-0 h-full bg-red-500/80 w-full animate-[grow-x_2s_ease-out_forwards] origin-left flex items-center justify-end pr-4"
                        >
                            <span class="text-white text-xs font-bold"
                                >FOREVER...</span
                            >
                        </div>
                    </div>
                </div>

                <!-- Us -->
                <div class="space-y-2">
                    <div
                        class="flex justify-between text-sm uppercase tracking-wider font-bold text-[#EFE8D8]"
                    >
                        <span class="flex items-center gap-2"
                            >Throw Away Buffet <div
                                class="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                            ></div></span
                        >
                        <span class="text-green-300">~3 Months</span>
                    </div>
                    <div
                        class="h-12 bg-white/5 rounded-full overflow-hidden relative"
                    >
                        <!-- Very short bar -->
                        <div
                            class="absolute top-0 left-0 h-full bg-green-500 w-[5%] animate-[grow-check_1s_ease-out_forwards] origin-left rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                        ></div>
                    </div>
                </div>
            </div>

            <p class="text-center mt-8 text-sm opacity-60 italic">
                *Based on standard industrial composting conditions vs
                traditional petroleum-based plastics.
            </p>
        </div>
    </div>
</section>
