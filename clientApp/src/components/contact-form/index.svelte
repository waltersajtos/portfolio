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
  .wrapper {
    margin-top: 400px;
    display: flex;
    align-items: center;
    gap: 140px;
    flex-wrap: wrap;

    .separator {
      background-color: #707070;
      width: 3px;
      height: 500px;
    }
  }
</style>
