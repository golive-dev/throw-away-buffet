<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { X } from "lucide-svelte";
    import V2Hero from "$lib/components/v2/V2Hero.svelte";
    import V2ProofBar from "$lib/components/v2/V2ProofBar.svelte";
    import V2Problem from "$lib/components/v2/V2Problem.svelte";
    import V2HowItWorks from "$lib/components/v2/V2HowItWorks.svelte";
    import V2Menus from "$lib/components/v2/V2Menus.svelte";
    import V2Bundles from "$lib/components/v2/V2Bundles.svelte";
    import V2Compare from "$lib/components/v2/V2Compare.svelte";
    import V2Testimonials from "$lib/components/v2/V2Testimonials.svelte";
    import V2Guarantee from "$lib/components/v2/V2Guarantee.svelte";
    import V2FAQ from "$lib/components/v2/V2FAQ.svelte";
    import V2FinalCTA from "$lib/components/v2/V2FinalCTA.svelte";

    let videoOpen = $state(false);

    function toggleVideo() {
        videoOpen = !videoOpen;
        document.body.style.overflow = videoOpen ? "hidden" : "";
    }
</script>

<V2Hero onWatchVideo={toggleVideo} />
<V2ProofBar />
<V2Problem />
<V2HowItWorks />
<V2Menus />
<V2Bundles />
<V2Compare />
<V2Testimonials />
<V2Guarantee />
<V2FAQ />
<V2FinalCTA />

{#if videoOpen}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        transition:fade={{ duration: 150 }}
        onclick={toggleVideo}
        onkeydown={(e) => e.key === "Escape" && toggleVideo()}
        role="dialog"
        aria-modal="true"
        aria-label="Product video"
        tabindex="-1"
    >
        <div
            class="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video"
            onclick={(e) => e.stopPropagation()}
            onkeydown={(e) => e.stopPropagation()}
            role="document"
            transition:scale={{ duration: 200, start: 0.96 }}
        >
            <button
                class="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
                onclick={toggleVideo}
                aria-label="Close video"
            >
                <X class="w-5 h-5" aria-hidden="true" />
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
                Your browser does not support video.
            </video>
        </div>
    </div>
{/if}
