<script lang="ts">
    import { Check, X, Minus } from "lucide-svelte";

    type Cell = { icon: "yes" | "no" | "meh"; text: string };

    const rows: { label: string; plates: Cell; rental: Cell; tb: Cell }[] = [
        {
            label: "Setup",
            plates: { icon: "meh", text: "20 min of bowls and platters" },
            rental: { icon: "no", text: "Pickup drive plus assembly" },
            tb: { icon: "yes", text: "3 seconds, unfold and go" },
        },
        {
            label: "Cleanup",
            plates: { icon: "no", text: "45+ min at the sink" },
            rental: { icon: "no", text: "Scrub, dry, return" },
            tb: { icon: "yes", text: "Zero. Fold and compost" },
        },
        {
            label: "The spread",
            plates: { icon: "meh", text: "Mismatched bowls everywhere" },
            rental: { icon: "meh", text: "Cafeteria energy" },
            tb: { icon: "yes", text: "12 tidy compartments" },
        },
        {
            label: "The planet",
            plates: { icon: "no", text: "Plastic wrap and foil pans" },
            rental: { icon: "meh", text: "Reusable, but you wash it" },
            tb: { icon: "yes", text: "Composts in 90 days" },
        },
        {
            label: "Cost per party",
            plates: { icon: "meh", text: "$15–30 in disposables" },
            rental: { icon: "no", text: "$40+ in rental fees" },
            tb: { icon: "yes", text: "From $2 a tray" },
        },
    ];
</script>

<section class="px-4 md:px-6 py-16 md:py-24">
    <div class="max-w-5xl mx-auto">
        <h2 class="font-display text-4xl md:text-5xl leading-[0.95] text-center mb-12">
            Do the <span class="text-[var(--red)]">party math</span>
        </h2>

        <div class="overflow-x-auto rounded-2xl border border-[var(--line)]">
            <table class="w-full min-w-152 text-left border-collapse bg-white">
                <thead>
                    <tr class="border-b-2 border-dashed border-[var(--line)]">
                        <th class="p-4 md:p-5"><span class="sr-only">Category</span></th>
                        <th class="p-4 md:p-5 text-sm font-bold text-[var(--ink-soft)]">
                            Plates + bowls
                        </th>
                        <th class="p-4 md:p-5 text-sm font-bold text-[var(--ink-soft)]">
                            Catering rentals
                        </th>
                        <th class="p-4 md:p-5 bg-[var(--cream)]">
                            <span class="font-display text-base text-[var(--red)]">
                                Throwaway Buffet
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each rows as row}
                        <tr class="border-b border-[var(--line)] last:border-b-0">
                            <th class="p-4 md:p-5 font-display text-sm md:text-base align-top">
                                {row.label}
                            </th>
                            {#each [row.plates, row.rental] as cell}
                                <td class="p-4 md:p-5 align-top">
                                    <div class="flex items-start gap-2 text-sm font-medium text-[var(--ink-soft)]">
                                        {#if cell.icon === "no"}
                                            <X class="w-4 h-4 shrink-0 mt-0.5 text-[var(--red)]" stroke-width="3" aria-hidden="true" />
                                        {:else}
                                            <Minus class="w-4 h-4 shrink-0 mt-0.5 text-[var(--ink-soft)]" stroke-width="3" aria-hidden="true" />
                                        {/if}
                                        {cell.text}
                                    </div>
                                </td>
                            {/each}
                            <td class="p-4 md:p-5 align-top bg-[var(--cream)]">
                                <div class="flex items-start gap-2 text-sm font-bold">
                                    <Check class="w-4 h-4 shrink-0 mt-0.5 text-[var(--green)]" stroke-width="3" aria-hidden="true" />
                                    {row.tb.text}
                                </div>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</section>
