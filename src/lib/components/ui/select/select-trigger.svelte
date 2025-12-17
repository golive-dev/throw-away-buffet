<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { ChevronDown } from "lucide-svelte";
    import { cn } from "$lib/utils";

    let { class: className = undefined, children } = $props();

    interface SelectContext {
        open: Writable<boolean>;
    }
    const { open } = getContext<SelectContext>("select");

    function toggle() {
        $open = !$open;
    }
</script>

<button
    onclick={toggle}
    class={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
    )}
>
    {@render children()}
    <ChevronDown class="h-4 w-4 opacity-50" />
</button>
