<script lang="ts">
  import CallToAction from "../components/callToAction.svelte";
  import Arrows from "../components/arrows.svelte";
  import SkillsSection from "../components/skills-section/skills-section.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="hero">
  <h1>About me</h1>
  <p>
    I'm a software developer from the Netherlands. I'm still in college but got a part-time job at WeMakeIt.
    I enjoy challenging myself and learning new stuff every day
  </p>
  <CallToAction title="Contact me" url="contact"/>
  <Arrows />
</div>

<SkillsSection/>

<style lang="scss">
</style>
