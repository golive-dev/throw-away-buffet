<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    let { value = $bindable(), children } = $props();

    let open = writable(false);
    let selectedValue = writable(value);

    setContext("select", {
        open,
        selectedValue,
        select: (val) => {
            value = val;
            selectedValue.set(val);
            open.set(false);
        },
    });

    $effect(() => {
        selectedValue.set(value);
    });
</script>

<div class="relative w-full">
    {@render children()}
</div>
