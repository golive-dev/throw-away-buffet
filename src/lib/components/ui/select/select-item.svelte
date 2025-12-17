<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { Check } from "lucide-svelte";
    import { cn } from "$lib/utils";

    let { value, children, class: className = undefined } = $props();

    interface SelectContext {
        select: (val: any) => void;
        selectedValue: Writable<any>;
    }
    const { select, selectedValue } = getContext<SelectContext>("select");

    let isSelected = $derived($selectedValue === value);
</script>

<button
    onclick={() => select(value)}
    class={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-gray-100 hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
        isSelected && "bg-gray-100 font-medium",
    )}
>
    {#if isSelected}
        <span
            class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
        >
            <Check class="h-4 w-4" />
        </span>
    {/if}
    {@render children()}
</button>
