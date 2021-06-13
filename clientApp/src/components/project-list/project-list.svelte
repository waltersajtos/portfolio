<script lang="ts">
  import {onMount} from 'svelte';
  import Saos from 'saos';

  import type {Project} from "/models/Project";

  import projectService from "../../services/project.service.ts";
  import ProjectComponent from "../../components/project-list/project.svelte";

  let projects: Project[] = [];
  let service = new projectService();
  let error = null;

  const animations = ["from-left", "from-right", "scale-in-center", "slide-in-elliptic-top-fwd"];
  const pickRandomAnimation = () => {
    return animations[Math.floor((Math.random() * animations.length))]
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
        <Saos animation={`${pickRandomAnimation()} 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both`} once={true}>
          <ProjectComponent project={project}/>
        </Saos>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @import "src/styles/variables";

  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-from-right {
    0% {
      transform: rotateX(-50deg) translateX(200vw) skewX(50deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }

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
