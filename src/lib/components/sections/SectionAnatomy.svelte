<script lang="ts">
    import { cn } from "$lib/utils";
    import { Droplets, Layers, UtensilsCrossed } from "lucide-svelte"; // Fallback icons

    // Feature Data
    const features = [
        {
            id: 1,
            title: 'The "No-Fall" Slots',
            description:
                "Deep grooves designed to hold 3 hard shells or buns upright. Say goodbye to toppings falling on the plate.",
            icon: UtensilsCrossed, // Placeholder
            target: { top: 65, left: 50 }, // Coordinates 0-100
            connectorStart: { y: 22 }, // Relative position on the right list 0-100
        },
        {
            id: 2,
            title: "The Liquid Zone",
            description:
                "Curved oval shapes perfect for scooping dips like guacamole or salsa without getting stuck in corners.",
            icon: Droplets,
            target: { top: 45, left: 50 },
            connectorStart: { y: 50 },
        },
        {
            id: 3,
            title: "The Topping Decks",
            description:
                "High walls keep your dry ingredients (lettuce, cheese, chips) contained and separated from the wet dips.",
            icon: Layers,
            target: { top: 25, left: 20 },
            connectorStart: { y: 78 },
        },
    ];
</script>

<section class="bg-[#F5F5F0] overflow-hidden py-12 lg:py-0">
    <!-- MOBILE HEADER (Visible only on mobile) -->
    <div class="container mx-auto px-8 mb-8 lg:hidden text-left space-y-4">
        <h2 class="text-4xl font-heading font-bold text-foreground">
            Built Different.
        </h2>
        <p class="text-xl text-muted-foreground font-medium">
            Every curve and compartment exists for a reason.
        </p>
    </div>

    <div class="flex flex-col lg:flex-row min-h-[auto] lg:min-h-screen">
        <!-- LEFT SIDE: Image (Desktop 50%) -->
        <div
            class="relative w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:order-1"
        >
            <div class="relative w-full max-w-lg aspect-square">
                <!-- Main Image -->
                <img
                    src="/gallery-taco-night.jpg"
                    alt="Tray filled with tacos and sides"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                    class="w-full h-full object-contain drop-shadow-2xl"
                />
            </div>
        </div>

        <!-- RIGHT SIDE: Content (Desktop 50%) -->
        <div
            class="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#F5F5F0] space-y-12 lg:order-2"
        >
            <!-- DESKTOP HEADER (Hidden on mobile) -->
            <div class="hidden lg:block text-left space-y-4">
                <h2
                    class="text-4xl md:text-5xl font-heading font-bold text-foreground"
                >
                    Built Different.
                </h2>
                <p class="text-xl text-muted-foreground font-medium">
                    Every curve and compartment exists for a reason.
                </p>
            </div>

            <!-- Visual List -->
            <div class="space-y-10 relative">
                {#each features as feature}
                    <div class="flex gap-6 group relative">
                        <!-- Icon -->
                        <div class="shrink-0 relative">
                            <div
                                class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-stone-200"
                            >
                                <svelte:component
                                    this={feature.icon}
                                    class="w-6 h-6 text-red-600"
                                />
                            </div>
                        </div>

                        <!-- Text -->
                        <div class="space-y-2">
                            <h3 class="text-xl font-bold text-foreground">
                                {feature.title}
                            </h3>
                            <p class="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
