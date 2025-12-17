<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    let { placeholder } = $props();

    interface SelectContext {
        selectedValue: Writable<any>;
    }
    const { selectedValue } = getContext<SelectContext>("select");
</script>

<span class="block truncate">
    {#if $selectedValue}
        <span class="capitalize">{$selectedValue}</span>
    {:else}
        <span class="text-muted-foreground">{placeholder}</span>
    {/if}
</span>
