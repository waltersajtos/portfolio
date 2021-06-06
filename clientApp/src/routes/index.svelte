<script lang="ts">
  import {wordCloud} from "../services/icon.service.ts";
</script>

<main>
  <div class="background">
  {@html wordCloud}
  </div>
  <div class="hero">
    <h3>Hi there! I'm Walter 👋</h3>
    <h1>A Full Stack <br>
      Web Developer</h1>
    <p>I'm currently working as a developer for WeMakeIt, in the Netherlands. We make custom platforms for clients to help grow their business.</p>
    <a class="call-to-action" href="projects">
      <div class="bar"></div>
      <h2>View projects</h2>
    </a>
  </div>

</main>

<style lang="scss">
  @import "src/styles/_variables.scss";
  main {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;

    .background {
      position: fixed;
      width: 1250px;
      height: 810px;
      transform: rotate(-8deg);
      opacity: .35;
      z-index: -1;

      top: 50px;
      right: 150px;
    }

    .hero {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-left: 280px;

      p {
        max-width: 540px;
        wrap-option: wrap;
        line-height: 42px;
      }
    }

    @media(max-width: $breakpoint-mobile) {
      align-items: flex-start;
      .background {
        display: none;
      }

      .hero {
        margin-top: 180px;
        margin-left: 40px;

        p {
          line-height: 23px;
          max-width: 280px;
        }
      }
    }
  }

</style>
