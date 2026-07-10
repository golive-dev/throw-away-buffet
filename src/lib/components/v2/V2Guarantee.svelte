<script lang="ts">
    import { Leaf, ShieldCheck } from "lucide-svelte";
</script>

<section class="px-4 md:px-6 py-16 md:py-24">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8">
        <!-- Eco: reassurance, not the lead -->
        <div class="rounded-2xl bg-[var(--green)] text-white p-8 md:p-10">
            <Leaf class="w-8 h-8 text-[var(--yellow)] mb-5" aria-hidden="true" />
            <h2 class="font-display text-3xl md:text-4xl leading-[0.95] mb-4">
                Toss it without the guilt trip
            </h2>
            <p class="text-white/85 font-medium leading-relaxed mb-6">
                Every tray is molded sugarcane fiber — the pulp left over after
                sugar gets pressed. No plastic lining, no bleach. It breaks
                down in about 90 days in industrial compost. A plastic platter
                takes 500 years.
            </p>
            <dl class="grid grid-cols-2 gap-4">
                <div class="rounded-xl bg-white/10 p-4">
                    <dt class="text-xs font-bold uppercase tracking-wide text-white/60 mb-1">
                        This tray
                    </dt>
                    <dd class="font-display text-2xl text-[var(--yellow)]">~90 days</dd>
                </div>
                <div class="rounded-xl bg-white/10 p-4">
                    <dt class="text-xs font-bold uppercase tracking-wide text-white/60 mb-1">
                        Plastic platter
                    </dt>
                    <dd class="font-display text-2xl">500 years</dd>
                </div>
            </dl>
        </div>

        <!-- Risk reversal -->
        <div class="rounded-2xl border-2 border-dashed border-[var(--line)] bg-[var(--paper)] p-8 md:p-10 flex flex-col justify-center">
            <div
                class="w-24 h-24 rounded-full border-4 border-[var(--red)] text-[var(--red)] flex flex-col items-center justify-center -rotate-6 mb-6"
                aria-hidden="true"
            >
                <ShieldCheck class="w-7 h-7 mb-0.5" />
                <span class="font-display text-[10px] leading-none">60 days</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl leading-[0.95] mb-4">
                The Party Promise
            </h2>
            <p class="text-[var(--ink-soft)] font-medium leading-relaxed mb-4">
                Host one party on us. If the Throwaway Buffet doesn't give you
                the easiest hosting night you've ever had, email us within 60
                days and we'll refund every cent.
            </p>
            <p class="font-bold">
                No return label. No questions. Keep the leftover trays.
            </p>
        </div>
    </div>
</section>
