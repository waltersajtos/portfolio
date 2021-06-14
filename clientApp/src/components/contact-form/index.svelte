<script lang="ts">
  import ContactForm from "./contactForm.svelte";
  import SocialMedia from "./SocialMedia.svelte";
</script>

<div class="wrapper">
  <ContactForm/>
  <div class="separator"></div>
  <SocialMedia/>
</div>

<style lang="scss">
  @import "src/styles/variables";

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100vh;
    margin-top: 100px;

    @media(max-width: 1300px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 100px
    }

    @media(max-width: 600px) {
      flex-wrap: nowrap;
      height: auto;
      margin-top: 0;
    }

    @media(min-width: 1400px) {
      .separator {
        background-color: #707070;
        width: 3px;
        height: 500px;
      }
    }
  }
</style>
