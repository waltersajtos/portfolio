<script>
  import {fly} from "svelte/transition";

  export let refresh = "";
  export let open;
</script>

{#key refresh}
    <div in:fly={!open ? {  x:-5, duration: 300, delay: 300 } : undefined}
         out:fly={!open ? { x: 5, duration: 300             } : undefined}>
  <slot/>

  </div>
{/key}
