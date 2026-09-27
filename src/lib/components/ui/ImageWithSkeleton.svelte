<script lang="ts">
    let {
        src,
        alt,
        class: className = "",
    }: {
        src: string;
        alt: string;
        class?: string;
    } = $props();

    let loaded = $state(false);
    let error = $state(false);

    function handleLoad() {
        loaded = true;
    }

    function handleError() {
        error = true;
        loaded = true;
    }
</script>

<div class="relative {className}">
    {#if !loaded}
        <div
            class="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"
        ></div>
    {/if}
    <img
        {src}
        {alt}
        loading="lazy"
        decoding="async"
        class="{className} {loaded
            ? 'opacity-100'
            : 'opacity-0'} transition-opacity duration-500"
        onload={handleLoad}
        onerror={handleError}
    />
    {#if error}
        <div
            class="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg"
        >
            <span>Failed to load image</span>
        </div>
    {/if}
</div>
