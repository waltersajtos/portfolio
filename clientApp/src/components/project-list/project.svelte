<script type="ts">
  import axios from "axios";
  import getImageUrl from "../../utils/getImageUrl";

  export let project;

  const getSvg = async (url: string) => {
    const response = await axios.get(getImageUrl(url));
    return response.data;
  }
</script>

  <div class="project">
    <div class="description">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div class="tags">
        {#each project.tags as tag}
          <div class="tag">
            <div>
              {#await getSvg(tag.icon.url)}
              {:then svg}
                {@html svg}
              {/await}
            </div>
            <p>{tag.title}</p>
          </div>
        {/each}
      </div>
      <div class="links">
        {#if project.githubUrl}
          <a href={project.githubUrl} target="_blank">
            <em class="fa fa-github"></em>
          </a>
        {/if}
        {#if project.liveUrl}
          <a href={project.liveUrl} target="_blank">
            <em class="fa fa-globe"></em>
          </a>
        {/if}
      </div>
    </div>
    <div class="image">
      <img src={getImageUrl(project.images[0].url)} alt=""/>
    </div>
  </div>
<style lang="scss">
  @import "../../styles/variables";

  .project {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;

    .image {
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 600px;

      img {
        width: 100%;
        max-width: 900px;
        height: auto;
        border-radius: 9px;
      }
    }

    &:nth-child(odd) {
      .description {
        order: 1;
      }

      .image {
        order: 0;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      max-width: 99vw;

      h2 {
        font-size: 36px;
      }

      p {
        font-size: 22px;
        max-width: 96vw;
      }

      .tags {
        height: 40px;
        display: flex;
        gap: 20px;

        .tag {
          background: $accent-color-blue;
          display: grid;
          grid-template-columns: 1fr 4fr;
          gap: 10px;
          padding: 0 10px;
          border-radius: 9px;
          min-width: 100px;
          max-width: 150px;

          div, p {
            display: flex;
            align-items: center;
          }

          p {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 14px;
            color: white;
            width: fit-content;
            text-align: center;
          }

          div {
            svg {
              fill: white;
              max-width: 100%;
              height: auto;
            }
          }
        }
      }

      .links {
        display: flex;
        gap: 30px;

        a {
          text-decoration: none;
          color: white;
          font-size: 40px;
        }
      }
    }

    @media(max-width: 1100px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .description {
        order: 1;
        gap: 20px;
      }

      .image {
        order: 0;

        img {
          max-width: 90vw;
        }
      }

      .tags {
        height: 20px;

        .tag {
          min-width: 60px;
          max-width: 80px;

          p {
            font-size: 11px;
          }
        }
      }
    }
  }
</style>
