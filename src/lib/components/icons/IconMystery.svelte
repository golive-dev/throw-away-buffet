<script>
    export let className = "";
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={className}
>
    <!-- Tray (Charcoal) -->
    <path class="text-[var(--color-foreground)]" d="M14 20h4" />
    <path class="text-[var(--color-foreground)]" d="M6 20h4" />
    <path class="text-[var(--color-foreground)]" d="M21 20v1H3v-1" />

    <!-- Dome (Charcoal) -->
    <path
        class="text-[var(--color-foreground)]"
        d="M12 4a9 9 0 0 1 9 9v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a9 9 0 0 1 9-9"
    />

    <!-- Handle/Mystery Mark (Salsa Red) -->
    <path class="text-[var(--color-primary)] opacity-90" d="M12 4V2" />
    <circle
        cx="12"
        cy="13"
        r="2"
        class="text-[var(--color-primary)]"
        fill="currentColor"
        stroke="none"
        opacity="0.2"
    />
    <path class="text-[var(--color-primary)]" d="M12 10v4" />
    <path class="text-[var(--color-primary)]" d="M12 17v.01" />
</svg>
