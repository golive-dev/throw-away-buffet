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
    <!-- Clock Face (Charcoal) -->
    <circle cx="12" cy="12" r="10" class="text-[var(--color-foreground)]" />

    <!-- Hands (Agave Green) -->
    <polyline class="text-[var(--color-accent)]" points="12 6 12 12 16 14" />

    <!-- Drop Arrow (Salsa Red) - indicating price drop -->
    <path class="text-[var(--color-primary)]" d="M16 8l2 2 2-2" />
    <path class="text-[var(--color-primary)]" d="M18 10V4" />
</svg>
