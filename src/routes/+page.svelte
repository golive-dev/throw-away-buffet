<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import ImageWithSkeleton from "$lib/components/ui/ImageWithSkeleton.svelte";
    import IconSustainable from "$lib/components/icons/IconSustainable.svelte";
    import IconMystery from "$lib/components/icons/IconMystery.svelte";
    import IconPricing from "$lib/components/icons/IconPricing.svelte";
    import SectionNarrative from "$lib/components/sections/SectionNarrative.svelte";
    import SectionHowItWorks from "$lib/components/sections/SectionHowItWorks.svelte";
    import SectionPartyROI from "$lib/components/sections/SectionPartyROI.svelte";
    import SectionAnatomy from "$lib/components/sections/SectionAnatomy.svelte";
    import SectionInspiration from "$lib/components/sections/SectionInspiration.svelte";
    import SectionVersatility from "$lib/components/sections/SectionVersatility.svelte";
    import SectionRecipes from "$lib/components/sections/SectionRecipes.svelte";
    import SectionDetails from "$lib/components/sections/SectionDetails.svelte";
    import SectionSustainability from "$lib/components/sections/SectionSustainability.svelte";
    import SectionCTA from "$lib/components/sections/SectionCTA.svelte";
    import SectionSocialBuffet from "$lib/components/sections/SectionSocialBuffet.svelte";
    import { fade, scale } from "svelte/transition";

    let videoModalOpen = $state(false);

    function toggleVideoModal() {
        videoModalOpen = !videoModalOpen;
        if (videoModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
</script>

<div class="relative overflow-hidden">
    <!-- Hero Section -->
    <section
        class="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden bg-[#F5F5F0]"
    >
        <!-- Background Decor: Organic Shape (Top Right) -->
        <div
            class="absolute top-0 right-0 w-200 h-200 bg-accent opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"
        ></div>

        <div
            class="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10"
        >
            <!-- Left Column: Copy -->
            <div class="space-y-8 max-w-2xl">
                <span
                    class="inline-block text-sm font-bold tracking-[2px] text-accent uppercase"
                >
                    Finally, a Party Hack That Works
                </span>

                <h1
                    class="text-6xl md:text-[5rem] leading-[1.1] font-heading font-bold text-foreground"
                >
                    All the Fiesta. <br />
                    None of the <span class="italic font-serif">Mess.</span>
                </h1>

                <p
                    class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-125"
                >
                    The world's first biodegradable buffet station. Unfold it,
                    fill it, toss it. Host like a pro without touching a single
                    dish.
                </p>

                <div class="flex flex-wrap items-center gap-4">
                    <button
                        onclick={toggleVideoModal}
                        aria-label="Watch product video"
                        class="group flex items-center gap-3 px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
                    >
                        <div
                            class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white group-hover:scale-105 transition-transform"
                            aria-hidden="true"
                        >
                            <svg
                                class="w-4 h-4 ml-1 fill-foreground"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                ><path d="M8 5v14l11-7z" /></svg
                            >
                        </div>
                        <span class="text-muted-foreground font-medium"
                            >Watch Video</span
                        >
                    </button>
                </div>
            </div>

            <!-- Right Column: Visual -->
            <div class="relative">
                <div
                    class="relative z-10 w-full aspect-square md:aspect-4/3 flex items-center justify-center"
                >
                    <!-- Image with loading skeleton -->
                    <ImageWithSkeleton
                        src="/hero-tray.jpg"
                        alt="Tri-folded biodegradable buffet tray filled with Mexican food"
                        class="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />

                    <!-- Fun Sticker -->
                    <div
                        class="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-xl shadow-lg -rotate-6 max-w-50 border border-gray-100 animate-in fade-in zoom-in duration-1000 delay-500"
                    >
                        <div
                            class="text-sm font-handwriting text-foreground leading-tight"
                        >
                            <span class="block font-bold text-primary mb-1"
                                >Use once.</span
                            >
                            <span class="font-bold">Toss forever.</span>
                            <svg
                                class="absolute -right-6 -top-6 w-12 h-12 text-primary rotate-12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Social Proof Bar -->
    <div class="border-y border-organic bg-white/50 backdrop-blur-sm">
        <div class="container mx-auto px-6 py-4">
            <div
                class="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            >
                <!-- Using simple text/emojis as placeholders for logos as per prompt instruction to use icons -->
                <div
                    class="flex items-center gap-2 font-medium text-sm text-foreground"
                >
                    <span class="text-xl">♻️</span> 100% Biodegradable
                </div>
                <div
                    class="flex items-center gap-2 font-medium text-sm text-foreground"
                >
                    <span class="text-xl">⏱️</span> 3-Second Setup
                </div>
                <div
                    class="flex items-center gap-2 font-medium text-sm text-foreground"
                >
                    <span class="text-xl">🎉</span> Zero Cleanup Required
                </div>
                <div
                    class="hidden md:flex items-center gap-2 font-medium text-sm text-foreground"
                >
                    <span class="text-xl">🌿</span> Eco-Certified Materials
                </div>
            </div>
        </div>
    </div>

    <!-- Phase 3: The Narrative (Video + Hook) -->
    <SectionNarrative />

    <!-- Phase 4: How It Works (Moved UP - explain product early) -->
    <SectionHowItWorks />

    <!-- Phase 5: Anatomy (Product Details) -->
    <SectionAnatomy />

    <!-- Phase 6: Party ROI Calculator (Make it personal) -->
    <SectionPartyROI />

    <!-- Phase 7: Inspiration (Interactive Demo) -->
    <SectionInspiration />

    <!-- Phase 8: Versatility (Lifestyle Scenarios) -->
    <SectionVersatility />

    <!-- Phase 9: Recipes -->
    <SectionRecipes />

    <!-- Phase 10: Product Details/Specs -->
    <SectionDetails />

    <!-- Phase 11: Sustainability (Build trust before the ask) -->
    <SectionSustainability />

    <!-- Phase 13: Social Buffet Gallery (Social proof after signup) -->
    <SectionSocialBuffet />

    <!-- Phase 14: Final CTA -->
    <SectionCTA />

    <!-- Video Modal -->
    {#if videoModalOpen}
        <div
            class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            transition:fade={{ duration: 200 }}
            onclick={toggleVideoModal}
            onkeydown={(e) => e.key === "Escape" && toggleVideoModal()}
            role="dialog"
            aria-modal="true"
            tabindex="-1"
        >
            <div
                class="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
                onclick={(e) => e.stopPropagation()}
                onkeydown={(e) => e.stopPropagation()}
                role="document"
                transition:scale={{ duration: 300, start: 0.95 }}
            >
                <button
                    class="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    onclick={toggleVideoModal}
                    aria-label="Close video"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><line x1="18" y1="6" x2="6" y2="18"></line><line
                            x1="6"
                            y1="6"
                            x2="18"
                            y2="18"
                        ></line></svg
                    >
                </button>
                <video
                    class="w-full h-full object-contain"
                    src="https://customer-xluv7qo1atb4cagf.cloudflarestream.com/b309f3bf7f322366156082c76337f45b/downloads/default.mp4"
                    poster="https://customer-xluv7qo1atb4cagf.cloudflarestream.com/b309f3bf7f322366156082c76337f45b/thumbnails/thumbnail.jpg"
                    controls
                    autoplay
                    playsinline
                >
                    <track kind="captions" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    {/if}
</div>
