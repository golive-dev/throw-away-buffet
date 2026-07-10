<script lang="ts">
    const year = new Date().getFullYear();
</script>

<footer class="border-t border-[var(--line)] px-4 md:px-6 py-10">
    <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
    >
        <p class="font-display text-base">
            Throwaway<span class="text-[var(--red)]">Buffet</span>
        </p>
        <nav class="flex flex-wrap justify-center gap-x-8 gap-y-2 font-semibold text-[var(--ink-soft)]">
            <a href="#how" class="hover:text-[var(--red)] transition-colors">How it works</a>
            <a href="#faq" class="hover:text-[var(--red)] transition-colors">FAQ</a>
            <a href="/contact" class="hover:text-[var(--red)] transition-colors">Contact</a>
            <a href="mailto:wholesale@throwawaybuffet.com" class="hover:text-[var(--red)] transition-colors">
                Wholesale
            </a>
        </nav>
        <p class="text-[var(--ink-soft)] font-medium">
            © {year} Throwaway Buffet. All rights reserved.
        </p>
    </div>
</footer>
