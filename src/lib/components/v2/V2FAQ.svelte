<script lang="ts">
    import { Plus } from "lucide-svelte";

    const faqs = [
        {
            q: "How many guests does one tray cover?",
            a: "One tray sets a full grazing spread for 4 to 6 guests — three shells or buns upright, dips in the liquid zones, toppings on the decks. For bigger crowds, run trays down the table: the 9-pack covers most house parties with spares left over.",
        },
        {
            q: "Can it handle hot food? What about wet stuff like salsa?",
            a: "Yes. The sugarcane fiber is thermal-flexed for hot wings on one end and an ice cream bar on the other. The curved liquid zones hold guac, queso, and salsa without soak-through for the whole length of a party.",
        },
        {
            q: "Is it actually compostable, or is that marketing?",
            a: "It's molded sugarcane fiber (bagasse) — no plastic lining, no toxic bleach. In industrial composting it breaks down in roughly 90 days. A backyard pile works too; it just takes longer. A plastic platter takes about 500 years.",
        },
        {
            q: "When will my order ship?",
            a: "We're in our first production run and orders ship in the sequence they come in. Launch pricing locks the moment you order, so the earlier you grab a pack, the earlier it lands and the less you pay.",
        },
        {
            q: "What if I don't love it?",
            a: "The Party Promise: host one party, and if it wasn't your easiest hosting night ever, email us within 60 days for a full refund. No return label, no questions, keep the unused trays.",
        },
        {
            q: "Can I order for an event or resell it?",
            a: "For 50+ units, caterers, or wholesale, write to wholesale@throwawaybuffet.com — we have event and reseller pricing.",
        },
    ];
</script>

<section id="faq" class="px-4 md:px-6 py-16 md:py-24 bg-[var(--cream)] scroll-mt-20">
    <div class="max-w-3xl mx-auto">
        <h2 class="font-display text-4xl md:text-5xl leading-[0.95] text-center mb-12">
            Fair questions
        </h2>

        <div class="space-y-3">
            {#each faqs as faq}
                <details class="group rounded-xl bg-white border border-[var(--line)] open:shadow-sm">
                    <summary
                        class="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-bold text-[15px] md:text-base [&::-webkit-details-marker]:hidden"
                    >
                        {faq.q}
                        <Plus
                            class="w-5 h-5 shrink-0 text-[var(--red)] transition-transform group-open:rotate-45"
                            stroke-width="3"
                            aria-hidden="true"
                        />
                    </summary>
                    <p class="px-5 pb-5 text-[var(--ink-soft)] font-medium leading-relaxed">
                        {faq.a}
                    </p>
                </details>
            {/each}
        </div>
    </div>
</section>
