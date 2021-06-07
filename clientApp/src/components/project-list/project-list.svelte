<script lang="ts">
  import {onMount} from 'svelte';
  import type {Project} from "/models/Project";

  import projectService from "../../services/project.service.ts";
  import ProjectComponent from "../../components/project-list/project.svelte";

  let projects: Project[] = [];
  let service = new projectService();
  let error = null;

  onMount(async () => {
    try {
      service.getProjects().then(value => projects = value as Project[]);
    } catch (e) {
      error = e;
    }
  });
</script>

<div class="projects">
  {#if error !== null}
    {error}
  {:else}
    <div class="projects-wrapper">
      {#each projects as project}
        <ProjectComponent project={project}/>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @import "src/styles/variables";

  .projects-wrapper {
    max-width: calc(100vw - 360px);
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 330px;

    @media(max-width: 1549px) {
      gap: 100px;
    }

    @media(max-width: 762px) {
      margin: 100px 5px;
    }
  }
</style>
