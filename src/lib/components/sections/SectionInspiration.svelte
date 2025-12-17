<script lang="ts">
    import { cn } from "$lib/utils";
    import { fade } from "svelte/transition";
    import { Button } from "$lib/components/ui/button";

    let activeTab: "taco" | "hotdog" | "icecream" = $state("taco"); // "taco" | "hotdog" | "icecream"

    const scenarios = {
        taco: {
            title: "Taco Tuesday",
            image: "/hero-tray.jpg", // Using real photo as requested
            hotspots: [
                { top: "75%", left: "20%", text: "Shells stay upright" },
                { top: "40%", left: "50%", text: "Liquid gold center" },
            ],
            description:
                "The classic. Hard shells in the slots, salsa in the ovals, toppings on the side. It's a fiesta, not a physics problem.",
        },
        hotdog: {
            title: "The Hot Dog Station",
            image: "/recipe-hotdog-new.jpg",
            hotspots: [
                { top: "75%", left: "50%", text: "Fits buns perfectly" },
                { top: "30%", left: "50%", text: "Condiment central" },
            ],
            description:
                "Buns fit in the slots just as well as shells. Ketchup, mustard, and relish get their own VIP sections. Onions and bacon stay crisp on the side.",
        },
        icecream: {
            title: "The Ice Cream Sunday",
            image: "/recipe-icecream-new.jpg", // New real photo
            hotspots: [
                { top: "70%", left: "50%", text: "Cones don't roll!" },
                { top: "25%", left: "80%", text: "Toppings galore" },
            ],
            description:
                "Holds your cones while you grab the toppings. Chocolate, caramel, and strawberry in the dips. Nuts and sprinkles on deck. Zero sticky hands.",
        },
    };
</script>

<section
    id="inspiration"
    class="py-20 md:py-28 bg-[var(--color-secondary)] relative overflow-hidden"
>
    <!-- Wavy Separator (SVG) at top -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            class="relative block w-[calc(100%+1.3px)] h-[50px] fill-[#FAFAF7]"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
        </svg>
    </div>

    <div class="container mx-auto px-4 mt-12">
        <div class="text-center mb-16 space-y-4">
            <h2
                class="text-4xl md:text-5xl font-heading font-bold text-foreground"
            >
                Engineered for Tacos.<br />
                <span class="italic font-serif text-muted-foreground"
                    >Perfect for Everything.</span
                >
            </h2>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex justify-center flex-wrap gap-4 mb-12">
            <button
                class={cn(
                    "px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 border border-transparent",
                    activeTab === "taco"
                        ? "bg-primary text-white shadow-lg scale-105"
                        : "bg-white/50 text-muted-foreground hover:bg-white hover:text-foreground",
                )}
                onclick={() => (activeTab = "taco")}
            >
                Taco Tuesday
            </button>
            <button
                class={cn(
                    "px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 border border-transparent",
                    activeTab === "hotdog"
                        ? "bg-amber-600 text-white shadow-lg scale-105"
                        : "bg-white/50 text-muted-foreground hover:bg-white hover:text-foreground",
                )}
                onclick={() => (activeTab = "hotdog")}
            >
                The Hot Dog Station
            </button>
            <button
                class={cn(
                    "px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 border border-transparent",
                    activeTab === "icecream"
                        ? "bg-pink-500 text-white shadow-lg scale-105"
                        : "bg-white/50 text-muted-foreground hover:bg-white hover:text-foreground",
                )}
                onclick={() => (activeTab = "icecream")}
            >
                The Ice Cream Sunday
            </button>
        </div>

        <!-- Interactive Slider Area -->
        <div
            class="max-w-5xl mx-auto bg-white rounded-3xl p-4 md:p-8 shadow-2xl relative min-h-[500px] flex items-center justify-center overflow-hidden"
        >
            {#key activeTab}
                <div
                    class="flex flex-col md:flex-row items-center gap-8 w-full h-full"
                    in:fade={{ duration: 400 }}
                >
                    <!-- Image Area -->
                    <div
                        class="relative w-full md:w-2/3 aspect-[4/3] rounded-2xl overflow-hidden group"
                    >
                        <img
                            src={scenarios[activeTab].image}
                            alt={scenarios[activeTab].title}
                            class="w-full h-full object-contain md:object-cover bg-[#F5F5F0]"
                        />

                        <!-- Hotspots -->
                        {#each scenarios[activeTab].hotspots as spot}
                            <div
                                class="absolute w-6 h-6 bg-white rounded-full shadow-lg cursor-pointer z-10 flex items-center justify-center group/spot"
                                style="top: {spot.top}; left: {spot.left}; animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;"
                            >
                                <div
                                    class="w-2 h-2 bg-primary rounded-full"
                                ></div>

                                <!-- Tooltip -->
                                <div
                                    class="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 min-w-[140px] bg-black/80 backdrop-blur text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover/spot:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                                >
                                    {spot.text}
                                    <div
                                        class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black/80"
                                    ></div>
                                </div>
                            </div>
                        {/each}
                    </div>

                    <!-- Text Area (Desktop Sidebar) -->
                    <div class="w-full md:w-1/3 space-y-6 text-left">
                        <h3
                            class="text-3xl font-heading font-bold text-foreground"
                        >
                            {scenarios[activeTab].title}
                        </h3>
                        <p
                            class="text-lg text-muted-foreground leading-relaxed"
                        >
                            {scenarios[activeTab].description}
                        </p>

                    </div>
                </div>
            {/key}
        </div>
    </div>
</section>

<style>
    @keyframes pulse-ring {
        0% {
            transform: scale(0.33);
        }
        80%,
        100% {
            opacity: 0;
        }
    }
</style>
