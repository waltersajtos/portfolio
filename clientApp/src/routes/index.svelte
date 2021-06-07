<script lang="ts">
  import {wordCloud} from "../services/icon.service.ts";
</script>


<div class="background">
  {@html wordCloud}
</div>
<div class="hero">
  <h3>Hi there! I'm Walter 👋</h3>
  <h1>A Full Stack <br>
    Web Developer</h1>
  <p>I'm currently working as a developer for WeMakeIt, in the Netherlands. We make custom platforms for clients to
    help grow their business.</p>
  <a class="call-to-action" href="projects">
    <div class="bar"></div>
    <h2>View projects</h2>
  </a>
</div>

<style lang="scss">
  @import "src/styles/_variables.scss";

  .background {
    position: fixed;
    width: 1250px;
    height: 810px;
    transform: rotate(-8deg);
    opacity: .35;
    z-index: -1;

    bottom: 40px;
    left: 600px;
  }

  @media(max-width: $breakpoint-mobile) {
    .background {
      display: none;
    }
  }

</style>
