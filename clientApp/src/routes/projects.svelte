<script lang="ts">
  import ProjectList from "../components/project-list/project-list.svelte";
  import Arrows from "../components/arrows.svelte";
  import CallToAction from "../components/callToAction.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>


<div class="hero">
  <div class="header">
    <h1>Projects</h1>
    <p>
      Below you can see some of the projects I've been working on recently.
      Most of these are projects that I was able to work on thanks to the Delta Excellence program.
    </p>
    <CallToAction title="Contact me" url="contact"/>
  </div>
  <Arrows/>
</div>

<ProjectList/>

<style lang="scss">
  @import "../styles/variables";

  .header {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    gap: 30px;
  }
</style>
