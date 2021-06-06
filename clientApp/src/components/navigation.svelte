<script>
  export let open = false;
</script>

<nav class="nav" class:open>
  <div class="nav__content">
    <div class="left">

    </div>
    <div class="right">
      <div class="list">
        <div class="list-item"><a on:click={() => open = false} href=".">Home</a></div>
        <div class="list-item"><a on:click={() => open = false} href="projects">Projects</a></div>
        <div class="list-item"><a on:click={() => open = false} href="about">About</a></div>
        <div class="list-item"><a on:click={() => open = false} href="contact">Contact</a></div>
      </div>
    </div>
  </div>
</nav>

<style lang="scss">
  @import "src/styles/variables";

  .nav {
    $transition--length: 1;
    $font--color--active: $text-primary;
    $width: 100vw;
    $height: 100vh;
    $font--size--calc: calc(2vw + 10px);
    $transition--easing: cubic-bezier(.77, 0, .175, 1);
    $menu--items--count: 4;

    position: fixed;

    &.open {
      visibility: visible;

      z-index: 2;

      &:before, &:after {
        transform: translateX(0%) translateY(0%);
      }

      &:after {
        transition-delay: .1s;
      }

      &:before {
        transition-delay: 0s;
      }

      .list-item {
        opacity: 1;
        transform: translateX(0%);
        transition: opacity .3s ease, transform .3s ease, color .3s ease;
        @for $i from 0 through $menu--items--count {
          &:nth-child(#{$i}) {
            transition-delay: $transition--length * $i / 8 + .5 + s;
          }
        }
      }
    }

    &:before, &:after {
      content: "";
      position: fixed;
      width: $width;
      height: $height;
      background: rgba(249, 34, 75, .5);
      z-index: -1;
      transition: transform $transition--easing $transition--length + s;
      transform: translateX(0%) translateY(-100%);
    }

    &:after {
      background: linear-gradient(90deg, rgba(36, 34, 43, 1) 0%, rgba(9, 8, 11, 1) 50%, rgba(254, 63, 63, 1) 50%, rgba(249, 34, 75, 1) 100%);
      transition-delay: 0s;
    }

    &:before {
      transition-delay: .1s;
    }

    &__content {
      position: fixed;
      width: $width;
      height: $height;
      font-size: $font--size--calc;
      font-weight: 200;
      cursor: pointer;

      display: grid;
      grid-template-columns: 1fr 1fr;

      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 65px;
        font-weight: bold;

        .list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 100px;
        }
      }

      .left {

      }
    }

    .list-item {
      position: relative;
      transition-delay: $transition--length + s;

      a {
        text-decoration: none;
        color: $font--color--active;
      }

      opacity: 0;
      transform: translate(0%, 100%);
      transition: opacity .2s ease, transform .3s ease;
      margin-right: 25px;

      &:before {
        content: "";
        position: absolute;
        background: $font--color--active;
        width: 20px;
        height: 1px;
        top: 100%;
        transform: translate(0%, 0%);
        transition: all .3s ease;
        z-index: -1;
      }

      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
</style>
