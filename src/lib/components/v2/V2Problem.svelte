<script lang="ts">
    import { X, Check } from "lucide-svelte";

    const oldWay = [
        "45 minutes at the sink while everyone else has fun",
        "A counter full of mismatched bowls and platters",
        "Serving dishes crusted with day-old queso",
        "“Whose Tupperware is this?” texts for a week",
    ];

    const newWay = [
        "Unfold one tray, load it, done in minutes",
        "Every dip, topping, and shell has its own spot",
        "Party ends: fold the whole spread and toss it",
        "You are on the couch before the guests reach their cars",
    ];
</script>

<section class="px-4 md:px-6 py-16 md:py-24">
    <div class="max-w-6xl mx-auto">
        <div class="max-w-2xl mb-10 md:mb-14">
            <h2 class="font-display text-4xl md:text-5xl leading-[0.95] mb-4">
                You know who never enjoys the party?
                <span class="text-[var(--red)]">The host.</span>
            </h2>
            <p class="text-lg text-[var(--ink-soft)] leading-relaxed">
                You cook for two days, set out fourteen bowls, and spend the
                night refilling, rinsing, and scrubbing. The party you planned
                happens without you. We built the fix: a buffet you throw away
                instead of washing.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-5 md:gap-8">
            <div class="rounded-2xl border-2 border-dashed border-[var(--line)] bg-[var(--paper)] p-6 md:p-8">
                <h3 class="font-display text-xl md:text-2xl text-[var(--ink-soft)] mb-5">
                    The old way
                </h3>
                <ul class="space-y-4">
                    {#each oldWay as item}
                        <li class="flex items-start gap-3 text-[var(--ink-soft)]">
                            <X class="w-5 h-5 shrink-0 mt-0.5 text-[var(--red)]" stroke-width="3" aria-hidden="true" />
                            <span class="font-medium leading-snug">{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="rounded-2xl bg-[var(--green-ink)] text-white p-6 md:p-8 shadow-[0_20px_50px_-20px_rgba(28,51,43,0.6)]">
                <h3 class="font-display text-xl md:text-2xl text-[var(--yellow)] mb-5">
                    The Throwaway way
                </h3>
                <ul class="space-y-4">
                    {#each newWay as item}
                        <li class="flex items-start gap-3">
                            <Check class="w-5 h-5 shrink-0 mt-0.5 text-[var(--yellow)]" stroke-width="3" aria-hidden="true" />
                            <span class="font-medium leading-snug">{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>
