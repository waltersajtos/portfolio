<script lang="ts">
  import axios from 'axios';
  import getImageUrl from '../../utils/getImageUrl';

  export let tag;

  const getSvg = async (url: string) => {
    const response = await axios.get(getImageUrl(url));
    return response.data;
  };
</script>

<div class="tag">
  {#if tag?.icon?.url}
    <div class="icon">
      {#await getSvg(tag?.icon?.url) then svg}
        {@html svg}
      {/await}
    </div>
  {/if}
  <p>{tag.title}</p>
</div>

<style lang="scss">
  @import '../../styles/variables';

  .tag {
    background: $accent-color-blue;
    display: flex;
    gap: 10px;
    height: 100%;
    padding: 0 10px;
    border-radius: 9px;

    p {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: white;
      min-height: 0;
      min-width: 0;
      flex-grow: 1;
    }

    .icon {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      min-height: 0;
      min-width: 0;
      width: fit-content;
      width: -moz-fit-content;
      overflow: hidden;

      :global(svg) {
        display: block;
        height: auto;
        width: 30px;
      }
    }
  }

  @media (max-width: $breakpoint-mobile) {
    .tag {
      height: 20px;
      gap: 5px;

      p {
        font-size: 10px;
      }
    }
  }
</style>
