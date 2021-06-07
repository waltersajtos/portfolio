<script>
  export let open = false;
</script>

<div id="hamburger" class:open on:click={() => open = !open}>
  <span class:open></span>
  <span class:open></span>
  <span class:open></span>
</div>

<style lang="scss">
  @import "src/styles/variables";

  #hamburger {
    z-index: 10;
    width: 60px;
    height: 45px;
    position: absolute;
    top: 100px;
    right: 100px;
    transform: rotate(0deg);
    transition: 1s ease-in-out;
    cursor: pointer;



    @media(max-width: $breakpoint-mobile) {
      top: 30px;
      right: 30px;
    }

    &.open {
      border-radius: 999px;
    }

    span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: $text-primary;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;

      &:nth-child(1) {
        top: 0;

        &.open {
          top: 18px;
          transform: rotate(135deg);
        }
      }
      &:nth-child(2) {
        top: 18px;

        &.open {
          opacity: 0;
          left: -60px;
        }
      }
      &:nth-child(3) {
        top: 36px;

        &.open {
          top: 18px;
          transform: rotate(-135deg);
        }
      }
    }
  }
</style>
