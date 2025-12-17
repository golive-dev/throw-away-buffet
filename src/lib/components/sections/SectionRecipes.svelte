<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { fly, fade } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    // Recipe Data
    const recipes = [
        {
            id: "baja-fish",
            title: "The Baja Fish Taco",
            tagline: "Coastal vibes, zero sand in your food.",
            image: "recipe-baja-new.jpg",
            slots: ["Warm Flour Tortillas", "Hard Taco Shells"],
            ovals: ["Chipotle Cream", "Salsa Verde", "Pico de Gallo"],
            decks: ["Purple Cabbage Slaw", "Sliced Radishes", "Fresh Cilantro"],
        },
        {
            id: "ballpark-dog",
            title: "The Ballpark Dog",
            tagline: "Bring the stadium home.",
            image: "recipe-ballpark-new.jpg",
            slots: ["Brioche Buns", "Sausages"],
            ovals: ["Yellow Mustard", "Tomato Ketchup", "Sweet Relish"],
            decks: ["Crispy Fried Onions", "Chopped Bacon", "Sauerkraut"],
        },
        {
            id: "gyro-station",
            title: "The Gyro Station",
            tagline: "A Greek feast without the smashed plates.",
            image: "recipe-gyro-new.jpg",
            slots: ["Pita Bread (Folded)", "Pita Bread (Halved)"],
            ovals: ["Tzatziki Yogurt", "Hummus", "Garlic Sauce"],
            decks: ["Crumbled Feta", "Kalamata Olives", "Diced Cucumber"],
        },
        {
            id: "sunday-sundae",
            title: "The Sunday Sundae",
            tagline: "The sweetest way to end the party.",
            image: "recipe-sundae-new.jpg",
            slots: ["Waffle Cones", "Wafer Rolls"],
            ovals: ["Hot Fudge", "Salted Caramel", "Strawberry Sauce"],
            decks: ["Rainbow Sprinkles", "Chopped Nuts", "Cherries & M&Ms"],
        },
    ];

    let selectedRecipe: (typeof recipes)[0] | null = $state(null);
    let open = $state(false);

    function openRecipe(recipe: (typeof recipes)[0]) {
        selectedRecipe = recipe;
        open = true;
    }

    function closeRecipe() {
        open = false;
        setTimeout(() => (selectedRecipe = null), 300);
    }
</script>

<section
    id="inspiration"
    class="py-20 md:py-28 bg-[#FAFAF7] text-zinc-900 relative overflow-hidden"
>
    <!-- Decorative texture -->
    <div
        class="absolute inset-0 opacity-5 bg-[url('/noise.png')] pointer-events-none"
    ></div>

    <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span
                class="inline-block text-sm font-bold tracking-[2px] text-primary uppercase"
            >
                Versatility
            </span>
            <h2 class="text-4xl md:text-5xl font-heading font-bold">
                More Than Just Tacos.
            </h2>
            <p class="text-lg text-zinc-600">
                Discover endless combinations. One tray, a world of flavors.
            </p>
        </div>

        <!-- Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each recipes as recipe, i}
                <button
                    class="group relative block w-full aspect-3/4 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left"
                    onclick={() => openRecipe(recipe)}
                >
                    <!-- Image -->
                    <div class="absolute inset-0 bg-zinc-900">
                        {#if recipe.image}
                            <img
                                src="/{recipe.image}"
                                alt={recipe.title}
                                class="w-full h-full object-cover opacity-90 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out"
                            />
                        {:else}
                            <div
                                class="w-full h-full bg-zinc-200 flex items-center justify-center"
                            >
                                <span class="text-zinc-400"
                                    >Image Loading...</span
                                >
                            </div>
                        {/if}
                    </div>

                    <!-- Gradient Overlay for Legibility -->
                    <div
                        class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none"
                    ></div>

                    <!-- Overlay Content -->
                    <div
                        class="absolute inset-0 p-6 flex flex-col justify-end text-white"
                    >
                        <div
                            class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                        >
                            <h3
                                class="text-2xl font-heading font-bold mb-1 leading-tight"
                            >
                                {recipe.title}
                            </h3>
                            <p
                                class="text-sm text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium"
                            >
                                {recipe.tagline}
                            </p>
                        </div>

                        <!-- Hover Icon -->
                        <div
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-100"
                        >
                            <svg
                                class="w-8 h-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                    </div>
                </button>
            {/each}
        </div>
    </div>
</section>

<!-- Custom Modal Overlay -->
{#if open && selectedRecipe}
    <div
        class="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4"
        role="dialog"
        aria-modal="true"
    >
        <!-- Backdrop with Blur -->
        <div
            class="absolute inset-0 bg-black/60 backdrop-blur-[5px]"
            transition:fade={{ duration: 300 }}
            onclick={closeRecipe}
            onkeydown={(e) => e.key === 'Escape' && closeRecipe()}
            role="button"
            tabindex="-1"
            aria-label="Close modal"
        ></div>

        <!-- Modal Content -->
        <div
            class="relative w-full md:max-w-150 h-[85vh] md:h-auto md:max-h-[85vh] bg-[#FAFAF7] rounded-t-3xl md:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            transition:fly={{
                y: "100%",
                duration: 400,
                opacity: 1,
                easing: quintOut,
            }}
            onclick={(e) => e.stopPropagation()}
            onkeydown={(e) => e.key === 'Escape' && closeRecipe()}
            role="dialog"
            tabindex="-1"
        >
            <!-- Close Button (Sticky) -->
            <button
                class="absolute top-4 right-4 z-20 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white transition-all duration-200 border border-white/10 shadow-lg"
                onclick={closeRecipe}
                aria-label="Close"
            >
                <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <!-- Scrollable Body -->
            <div class="flex-1 overflow-y-auto">
                <!-- Hero Header -->
                <div class="relative h-72 md:h-80 bg-zinc-200 shrink-0">
                    <img
                        src="/{selectedRecipe.image}"
                        alt={selectedRecipe.title}
                        class="w-full h-full object-cover"
                    />
                    <!-- Gradient Overlay -->
                    <div
                        class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"
                    ></div>

                    <!-- Text Content -->
                    <div class="absolute bottom-6 left-6 right-6">
                        <h2
                            class="text-3xl md:text-4xl text-white font-bold font-serif mb-2 drop-shadow-md"
                        >
                            {selectedRecipe.title}
                        </h2>
                        <p
                            class="text-zinc-100 text-sm md:text-base font-medium opacity-90 drop-shadow"
                        >
                            {selectedRecipe.tagline}
                        </p>
                    </div>
                </div>

                <!-- Shopping List -->
                <div class="p-6 md:p-8 space-y-8">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4 text-zinc-300">
                            <h4
                                class="font-bold text-sm border-b border-zinc-200 pb-2 uppercase tracking-[2px] text-zinc-400 flex-1"
                            >
                                Shopping List
                            </h4>
                        </div>

                        <div class="space-y-6">
                            <!-- Slots -->
                            <div
                                class="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr] gap-4 md:gap-6 items-start"
                            >
                                <span
                                    class="text-[10px] md:text-xs font-bold uppercase text-zinc-400 mt-2.5 text-right tracking-wider"
                                    >The Slots</span
                                >
                                <div class="flex flex-wrap gap-2">
                                    {#each selectedRecipe.slots as item}
                                        <span
                                            class="px-3 py-1.5 bg-zinc-100 text-zinc-600 border border-zinc-200 rounded-full text-sm font-medium shadow-sm"
                                        >
                                            {item}
                                        </span>
                                    {/each}
                                </div>
                            </div>

                            <!-- Ovals -->
                            <div
                                class="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr] gap-4 md:gap-6 items-start"
                            >
                                <span
                                    class="text-[10px] md:text-xs font-bold uppercase text-zinc-400 mt-2.5 text-right tracking-wider"
                                    >The Ovals</span
                                >
                                <div class="flex flex-wrap gap-2">
                                    {#each selectedRecipe.ovals as item}
                                        <span
                                            class="px-3 py-1.5 bg-orange-50 text-orange-700 border border-orange-100 rounded-full text-sm font-medium shadow-sm"
                                        >
                                            {item}
                                        </span>
                                    {/each}
                                </div>
                            </div>

                            <!-- Decks -->
                            <div
                                class="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr] gap-4 md:gap-6 items-start"
                            >
                                <span
                                    class="text-[10px] md:text-xs font-bold uppercase text-zinc-400 mt-2.5 text-right tracking-wider"
                                    >The Decks</span
                                >
                                <div class="flex flex-wrap gap-2">
                                    {#each selectedRecipe.decks as item}
                                        <span
                                            class="px-3 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-full text-sm font-medium shadow-sm"
                                        >
                                            {item}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sticky CTA Footer -->
            <div
                class="p-4 md:p-6 bg-white/80 backdrop-blur-md border-t border-zinc-100 z-10 shrink-0"
            >
                <Button
                    class="w-full bg-primary hover:bg-[#b0220a] text-white font-bold h-12 md:h-14 text-base md:text-lg rounded-full shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all"
                    onclick={() => {
                        closeRecipe();
                        document
                            .getElementById("waitlist")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Get the Trays for this Recipe
                </Button>
            </div>
        </div>
    </div>
{/if}
