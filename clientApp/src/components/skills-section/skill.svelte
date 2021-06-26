<script lang="ts">
  import Tag from "../project-list/projectTag.svelte";
  import axios from "axios";
  import getImageUrl from "../../utils/getImageUrl";

  export let skill;


  const getSvg = async (url: string) => {
    const response = await axios.get(getImageUrl(url));
    return response.data;
  };
</script>

<section>
  <div class="icon">
    {#await getSvg(skill.icon.url) then svg}
      {@html svg}
    {/await}
  </div>
  <div class="right">
    <h2>{skill.title}</h2>
    <div class="tags">
      {#each skill.tags as tag}
        <Tag {tag}/>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  section {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 2fr;
    width: 100%;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 0;

      :global(svg) {
        max-height: 100%;
        max-width: 100%;
        height: auto;
        border-radius: 9px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .tags {
        height: 25px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
      }
    }

    @media (max-width: 1300px) {

      .tags {
        height: 15px;
      }
    }
  }
</style>
