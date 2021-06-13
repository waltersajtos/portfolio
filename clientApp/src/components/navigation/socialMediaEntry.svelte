<script lang="ts">
  export let icon;
  export let detail;
</script>

<div class="social-media-entry">
  <em class={icon}></em>
  <p>{detail}</p>
</div>

<style lang="scss">
  .social-media-entry {
    display: flex;
    align-items: center;
    font-size: 30px;
    gap: 20px;
  }
</style>
