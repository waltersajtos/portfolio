<script lang="ts">
  import {onMount} from 'svelte';
  import type {Project} from "/models/Project";

  import projectService from "../services/project.service.ts";
  import ProjectComponent from "../components/project.svelte"

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
<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="page">
  <h1>Projects</h1>
  <p>
    Below you can see some of the projects I've been working on recently.
    Most of these are projects that I was able to work on thanks to the Delta Excellence program.
  </p>

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
