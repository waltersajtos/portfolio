<script lang="ts">
  import SkillComponent from "./skill.svelte";
  import {getSkills} from '../../services/skill.service.js';
  import {onMount} from "svelte";

  let skills = [];
  let error = null;

  onMount(async () => {
    try {
      getSkills().then((value) => (skills = value.data));
    } catch (e) {
      error = e;
    }
  });
</script>

<h1>My Skills</h1>
{#if error !== null}
  {error}
{:else}
  <div class="grid">
    {#each skills as skill}
      <SkillComponent skill="{skill}"/>
    {/each}
  </div>
{/if}
<style lang="scss">
  h1 {
    margin-top: 5.1rem;
    margin-bottom: 5.1rem;
    white-space: nowrap;
  }
  .grid {
    display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(min(500px,100%), 1fr));
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 90px;

    @media(max-width:1400px) {
      grid-template-columns: auto;
    }
  }
</style>
