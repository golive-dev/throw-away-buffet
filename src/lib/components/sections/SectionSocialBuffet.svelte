<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { Button } from "$lib/components/ui/button";

    // Social Gallery Data
    const photos = [
        {
            id: 1,
            src: "/hero-tray.jpg",
            label: "@SarahsBday",
            alt: "Birthday party buffet setup",
            col: 0,
        },
        {
            id: 2,
            src: "/gallery-taco-night.jpg",
            label: "Taco Night",
            alt: "A full taco bar setup on a wooden table",
            col: 1,
        },
        {
            id: 3,
            src: "/gallery-bbq-burgers.jpg",
            label: "Backyard Grill",
            alt: "Burgers and hot dogs station",
            col: 2,
        },
        {
            id: 4,
            src: "/gallery-camping.jpg",
            label: "Camping Trip",
            alt: "Outdoor camping buffet setup",
            col: 0,
        },
        {
            id: 5,
            src: "/gallery-fruit-platter.jpg",
            label: "Sunday Brunch",
            alt: "Fresh fruit platter setup",
            col: 1,
        },
        {
            id: 6,
            src: "/gallery-ice-cream-social.jpg",
            label: "Ice Cream Social",
            alt: "Ice cream sundae toppings bar",
            col: 2,
        },
        {
            id: 7,
            src: "/gallery-charcuterie.jpg",
            label: "Date Night",
            alt: "Romantic charcuterie board setup",
            col: 0,
        },
        {
            id: 8,
            src: "/gallery-girls-night-2.jpg",
            label: "Girls Night",
            alt: "Friends celebrating with a buffet tray",
            col: 1,
        },
        {
            id: 9,
            src: "/gallery-compost.jpg",
            label: "Eco-Friendly",
            alt: "Biodegradable tray with organic waste",
            col: 2,
        },
    ];

    // Split into columns for masonry
    const col1 = photos.filter((p) => p.col === 0);
    const col2 = photos.filter((p) => p.col === 1);
    const col3 = photos.filter((p) => p.col === 2);

    let scrollY = 0;
    let parallaxOffset = 0;
    let sectionRef: HTMLElement;

    // Lightbox State
    let selectedPhoto: (typeof photos)[0] | null = null;

    function openLightbox(photo: (typeof photos)[0]) {
        selectedPhoto = photo;
    }

    function closeLightbox() {
        selectedPhoto = null;
    }

    // Parallax Effect
    $effect(() => {
        if (sectionRef) {
            // Simple parallax calculation
            // Adjust the divisor to control speed (higher = slower/subtler)
            // We want column 2 to move slightly differently
            const rect = sectionRef.getBoundingClientRect();
            // Only calc if visible-ish to save perf
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                parallaxOffset = window.scrollY * 0.15 * -1; // Move up faster
            }
        }
    });
</script>

<svelte:window bind:scrollY />

<section
    bind:this={sectionRef}
    class="relative py-24 bg-[#FAFAF7] overflow-hidden"
>
    <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16 space-y-4">
            <span
                class="inline-block text-sm font-bold tracking-[2px] text-[var(--color-primary)] uppercase"
            >
                The Social Buffet
            </span>
            <h2
                class="text-4xl md:text-5xl font-heading font-bold text-zinc-900"
            >
                Spotted in the Wild.
            </h2>
            <p class="text-lg text-zinc-600 max-w-2xl mx-auto">
                Real parties. Real mess-free memories.
            </p>
        </div>

        <!-- Desktop Masonry (Hidden on Mobile) -->
        <div class="hidden md:grid grid-cols-3 gap-8 items-start min-h-[800px]">
            <!-- Column 1 -->
            <div class="space-y-8 pt-12">
                {#each col1 as photo}
                    <button
                        class="group relative block w-full rounded-lg overflow-hidden cursor-pointer"
                        onclick={() => openLightbox(photo)}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <!-- Floating Label -->
                        <div
                            class="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-bold text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20"
                        >
                            {photo.label}
                        </div>

                        <!-- Static Center View Button -->
                        <div
                            class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                        >
                            <div
                                class="w-20 h-20 bg-[#D9381E] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out opacity-0 group-hover:opacity-100"
                            >
                                View
                            </div>
                        </div>
                    </button>
                {/each}
            </div>

            <!-- Column 2 (Parallax) -->
            <div
                class="space-y-8 transition-transform duration-75 will-change-transform"
                style="transform: translateY({parallaxOffset}px)"
            >
                {#each col2 as photo}
                    <button
                        class="group relative block w-full rounded-lg overflow-hidden cursor-pointer"
                        onclick={() => openLightbox(photo)}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div
                            class="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-bold text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20"
                        >
                            {photo.label}
                        </div>

                        <div
                            class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                        >
                            <div
                                class="w-20 h-20 bg-[#D9381E] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out opacity-0 group-hover:opacity-100"
                            >
                                View
                            </div>
                        </div>
                    </button>
                {/each}
            </div>

            <!-- Column 3 -->
            <div class="space-y-8 pt-24">
                {#each col3 as photo}
                    <button
                        class="group relative block w-full rounded-lg overflow-hidden cursor-pointer"
                        onclick={() => openLightbox(photo)}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div
                            class="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-bold text-zinc-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20"
                        >
                            {photo.label}
                        </div>

                        <div
                            class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                        >
                            <div
                                class="w-20 h-20 bg-[#D9381E] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out opacity-0 group-hover:opacity-100"
                            >
                                View
                            </div>
                        </div>
                    </button>
                {/each}
            </div>
        </div>

        <!-- Mobile Carousel (Visible on Mobile) -->
        <div
            class="md:hidden flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide"
        >
            {#each photos as photo}
                <button
                    class="shrink-0 w-[85vw] snap-center relative rounded-lg overflow-hidden scroll-ml-4"
                    onclick={() => openLightbox(photo)}
                >
                    <img
                        src={photo.src}
                        alt={photo.alt}
                        class="w-full h-[400px] object-cover"
                    />
                    <div
                        class="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-bold text-zinc-900"
                    >
                        {photo.label}
                    </div>
                </button>
            {/each}
        </div>

        <!-- Final CTA -->
        <div class="text-center mt-20 space-y-6">
            <h3 class="text-2xl md:text-3xl font-serif text-zinc-900">
                Host a party. Tag @ThrowawayBuffet. Get featured.
            </h3>
            <a
                href="https://instagram.com"
                target="_blank"
                class="inline-block text-zinc-500 hover:text-[#D9381E] font-medium border-b border-zinc-300 hover:border-[#D9381E] transition-colors pb-0.5"
            >
                Follow us on Instagram
            </a>
        </div>
    </div>
</section>

<!-- Lightbox Modal -->
{#if selectedPhoto}
    <div
        class="fixed inset-0 z-[60] bg-zinc-900/95 backdrop-blur-md flex items-center justify-center p-4"
        transition:fade={{ duration: 200 }}
        onclick={closeLightbox}
        role="dialog"
        aria-modal="true"
    >
        <button
            class="absolute top-6 right-6 text-white text-opacity-50 hover:text-opacity-100 transition-opacity p-2"
        >
            <svg
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>

        <div
            class="flex flex-col md:flex-row max-w-6xl w-full max-h-[90vh] bg-[#FAFAF7] rounded-xl overflow-hidden shadow-2xl"
            onclick={(e) => e.stopPropagation()}
        >
            <!-- Image Left -->
            <div class="flex-1 bg-black relative">
                <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    class="w-full h-full object-contain md:object-cover"
                />
            </div>

            <!-- Content Right -->
            <div
                class="w-full md:w-[350px] p-8 flex flex-col justify-center bg-[#FAFAF7] border-l border-zinc-100"
            >
                <div class="space-y-2 mb-8">
                    <span
                        class="text-xs font-bold uppercase tracking-widest text-[#D9381E]"
                        >Spotted At</span
                    >
                    <h3 class="text-2xl font-serif font-bold text-zinc-900">
                        {selectedPhoto.label}
                    </h3>
                    <p class="text-zinc-500 text-sm">
                        We spotted this {selectedPhoto.alt.toLowerCase()} at a recent
                        event. Recreate the look with our bundled trays.
                    </p>
                </div>

                <Button
                    class="w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-full h-12"
                    onclick={() => {
                        closeLightbox();
                        document
                            .getElementById("waitlist")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Shop this look
                </Button>
            </div>
        </div>
    </div>
{/if}

<style>
    /* Hide scrollbar for mobile carousel */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
