<script lang="ts">
    const stats = [
        { number: "3 sec", label: "from folded flat to full buffet" },
        { number: "12", label: "compartments, zero flavor collisions" },
        { number: "0", label: "dishes, platters, or bowls to wash" },
        { number: "90 days", label: "to compost vs 500 years for plastic" },
    ];
</script>

<section class="border-y-2 border-dashed border-[var(--line)] bg-[var(--cream)]">
    <div
        class="max-w-6xl mx-auto px-4 md:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8"
    >
        {#each stats as stat}
            <div class="text-center">
                <p class="font-display text-3xl md:text-4xl text-[var(--red)] mb-1">
                    {stat.number}
                </p>
                <p class="text-sm font-semibold text-[var(--ink-soft)] leading-snug max-w-45 mx-auto">
                    {stat.label}
                </p>
            </div>
        {/each}
    </div>
</section>
