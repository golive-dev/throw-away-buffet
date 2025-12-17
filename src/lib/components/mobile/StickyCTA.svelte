<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    let visible = $state(false);

    function handleScroll() {
        // Show after scrolling past 80% of the viewport (past Hero roughly)
        visible = window.scrollY > window.innerHeight * 0.8;
    }
</script>

<svelte:window onscroll={handleScroll} />

{#if visible}
    <div
        transition:fly={{ y: 100, duration: 300 }}
        class="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-40 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]"
    >
        <Button
            size="lg"
            class="w-full bg-primary hover:bg-[#b0220a] text-white rounded-full h-14 text-lg font-bold shadow-lg"
            onclick={() =>
                document
                    .getElementById("waitlist")
                    ?.scrollIntoView({ behavior: "smooth" })}
        >
            Join the Waitlist
        </Button>
    </div>
{/if}
