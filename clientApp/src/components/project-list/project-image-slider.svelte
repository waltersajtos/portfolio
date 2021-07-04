<script type="ts">
  import getImageUrl from '../../utils/getImageUrl';

  export let project;

  let items = project?.images?.map(image => getImageUrl(image.url));

  console.log(project)
</script>

{#if items.length > 0}
  <div id={`s-${project.id}`} class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      {#each items as item, index}
        <button type="button" data-bs-target={`#s-${project.id}`} data-bs-slide-to={`${index}`} class={index === 0 ? 'active' : null}
                aria-label={`Slide ${index}`}></button>
      {/each}
    </div>
    <div class="carousel-inner">
      {#each items as item, index}
        <div class={`carousel-item ${index === 0 ? 'active' : null}`} data-bs-interval="3000">
          <img src={item} class="d-block" alt={`${item} ${index + 1}`}/>
        </div>
      {/each}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target={`#s-${project.id}`} data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target={`#s-${project.id}`} data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
{/if}

<style lang="scss">
  :global(.carousel-item img) {
    width: 100%;
    height: auto;
    object-fit: contain;
    aspect-ratio: 16 / 9;
    border-radius: 13px;
  }
</style>
