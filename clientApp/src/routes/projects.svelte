<script lang="ts">
  import ProjectList from "../components/project-list/project-list.svelte"
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
  </div>
  <div class="arrows">
    <em class="arrow fa fa-chevron-down"></em>
    <em class="arrow fa fa-chevron-down"></em>
    <em class="arrow fa fa-chevron-down"></em>
  </div>
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

  .arrows {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    margin-top: auto;

    .arrow {
      color: transparent;
      font-size: 88px;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: $accent-color-pink;
      line-height: 40px;
      transition: .5s ease-in-out;

      @for $i from 0 through 3 {
        &:nth-child(#{$i}) {
          opacity: .2 * $i;
        }
      }

      &:hover {
        color: $accent-color-pink;
      }
    }
  }
</style>
