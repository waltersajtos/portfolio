<script lang="ts">
  import {wordCloud} from "../services/icon.service.ts";
  import CallToAction from "../components/callToAction.svelte";
</script>


<div class="background">
  {@html wordCloud}
</div>
<div class="hero">
  <h3>Hi there! I'm Walter 👋</h3>
  <h1>A Full Stack <br>
    Web Developer</h1>
  <p>
    I'm a software developer from the Netherlands.
    I'm still in college but got a part-time job at WeMakeIt.
    I enjoy challenging myself and learning new stuff every day.
  </p>
  <CallToAction title="View projects" url="projects"/>
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
