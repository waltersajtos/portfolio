<script lang="ts">
  import {onMount} from 'svelte';
  import Saos from 'saos';

  import type {Project} from "/models/Project";

  import projectService from "../../services/project.service.ts";
  import ProjectComponent from "../../components/project-list/project.svelte";

  let projects: Project[] = [];
  let service = new projectService();
  let error = null;

  const animations = [
    "slide-from-left",
    "slide-from-right",
    "scale-in-center",
    "slide-in-top",
    "tilt-in-fwd",
    "slide-in-bck-top"
  ];

  let picked = [];

  const pickRandomAnimation = () => {
    if (picked.length === animations.length) picked = [];

    let availableAnimations = animations.filter(animation => !(picked.indexOf(animation) >= 0));
    let pickedAnimation = availableAnimations[Math.floor((Math.random() * animations.length))];
    picked.push(pickedAnimation);

    return pickedAnimation;
  }

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
      {#each projects as project, i}
        <Saos animation={`${pickRandomAnimation()} .7s cubic-bezier(0.35, 0.5, 0.65, 0.95) both`} once={true} top={250}>
          <ProjectComponent project={project} even={i % 2 === 0}/>
        </Saos>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @import "src/styles/variables";
  @import "src/styles/animations";

  .projects-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 100px;
    gap: 330px;

    @media(max-width: 1300px) {
      gap: 100px;
    }
  }
</style>
