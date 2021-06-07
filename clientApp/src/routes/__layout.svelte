<script lang="ts">
  import NavBar from "../components/navigation.svelte";
  import Hamburger from "../components/hamburger.svelte"

  let open = false;
</script>

<Hamburger bind:open/>
<NavBar bind:open/>
<div class="page">
  <slot></slot>
</div>

<style global lang="scss">
  @import "../styles/styles.scss";


</style>
