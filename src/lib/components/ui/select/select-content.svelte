<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { fade } from "svelte/transition";
    import { cn } from "$lib/utils";

    let { class: className = undefined, children } = $props();

    interface SelectContext {
        open: Writable<boolean>;
    }
    const { open } = getContext<SelectContext>("select");
</script>

{#if $open}
    <div
        transition:fade={{ duration: 100 }}
        class={cn(
            "absolute top-full mt-1 z-50 min-w-[8rem] w-full overflow-hidden rounded-md border bg-white text-popover-foreground shadow-md",
            className,
        )}
    >
        <div class="p-1">
            {@render children()}
        </div>
    </div>
{/if}
