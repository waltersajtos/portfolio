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
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    height: 100%;
    padding: 0 10px;
    border-radius: 9px;
    width: fit-content;
    width: -moz-fit-content;

    p {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: white;
      text-align: center;
      min-height: 0;
    }

    .icon {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-height: 0;
      min-width: 0;

      :global(svg) {
        height: 80%;
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
