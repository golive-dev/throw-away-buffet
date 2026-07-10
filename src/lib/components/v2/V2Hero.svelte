<script lang="ts">
    import { Check, Star, Play } from "lucide-svelte";

    let { onWatchVideo }: { onWatchVideo: () => void } = $props();

    const bullets = [
        "Unfolds into a full 12-compartment spread in 3 seconds",
        "Tacos, wings, dips, sundae bars — hot or cold, no flavor collisions",
        "Sturdy molded sugarcane fiber that composts in 90 days",
        "When the party ends, so does the cleanup: fold it and toss it",
    ];
</script>

<section class="px-4 md:px-6 pt-10 md:pt-16 pb-12 md:pb-20">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <!-- Copy column -->
        <div class="max-w-xl">
            <div class="flex items-center gap-2 mb-5">
                <div class="flex text-[var(--yellow)]" aria-hidden="true">
                    {#each Array(5) as _}
                        <Star class="w-4.5 h-4.5" fill="currentColor" stroke-width="0" />
                    {/each}
                </div>
                <p class="text-sm font-semibold text-[var(--ink-soft)]">
                    Rated 4.9 by 300+ early-access hosts
                </p>
            </div>

            <h1
                class="font-display text-[2.6rem] leading-[0.95] md:text-6xl lg:text-[4.2rem] mb-5"
            >
                The 3-second buffet that
                <span class="text-[var(--red)]">throws itself away</span>
            </h1>

            <p class="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed mb-6">
                One fold-out tray. Twelve compartments. Zero dishes. Host the
                whole party without washing a single thing.
            </p>

            <ul class="space-y-3 mb-8">
                {#each bullets as bullet}
                    <li class="flex items-start gap-3">
                        <span
                            class="mt-0.5 w-5.5 h-5.5 shrink-0 rounded-full bg-[var(--green)] text-white flex items-center justify-center"
                            aria-hidden="true"
                        >
                            <Check class="w-3.5 h-3.5" stroke-width="3" />
                        </span>
                        <span class="font-medium leading-snug">{bullet}</span>
                    </li>
                {/each}
            </ul>

            <div class="flex flex-wrap items-center gap-4 mb-3">
                <a href="#bundles" class="btn-dr px-8 py-4 text-lg">
                    Get my party stash
                </a>
                <button
                    onclick={onWatchVideo}
                    class="flex items-center gap-2.5 font-bold text-[var(--ink)] hover:text-[var(--red)] transition-colors px-2 py-2"
                >
                    <span
                        class="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <Play class="w-4 h-4 ml-0.5" fill="currentColor" stroke-width="0" />
                    </span>
                    Watch it unfold (0:40)
                </button>
            </div>

            <p class="text-sm text-[var(--ink-soft)] font-medium">
                Packs from $8 · under $2.70 a tray · 60-day money-back guarantee
            </p>
        </div>

        <!-- Product column -->
        <div class="relative">
            <img
                src="/hero-tray.jpg"
                alt="Throwaway Buffet tray unfolded and loaded with a full taco spread"
                class="w-full h-auto rounded-2xl shadow-[0_24px_60px_-20px_rgba(43,38,34,0.35)]"
                fetchpriority="high"
            />
            <div
                class="absolute -top-3 -left-3 md:top-4 md:-left-5 bg-[var(--yellow)] text-[var(--ink)] font-display text-sm md:text-base px-4 py-2 rounded-lg -rotate-3 shadow-md"
            >
                12 compartments
            </div>
            <div
                class="absolute -bottom-3 -right-2 md:bottom-6 md:-right-4 bg-[var(--green)] text-white font-display text-sm md:text-base px-4 py-2 rounded-lg rotate-2 shadow-md"
            >
                Composts in 90 days
            </div>
        </div>
    </div>
</section>
