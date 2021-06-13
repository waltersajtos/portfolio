<div class="arrows">
  <em class="arrow fa fa-chevron-down"></em>
  <em class="arrow fa fa-chevron-down"></em>
  <em class="arrow fa fa-chevron-down"></em>
</div>

<style lang="scss">
  @import "../styles/variables";

  .arrows {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    margin-top: auto;

    .arrow {
      color: transparent;
      font-size: 88px;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: $accent-color-pink;
      line-height: 40px;
      transition: .5s ease-in-out;

      @for $i from 0 through 3 {
        &:nth-child(#{$i}) {
          opacity: .2 * $i;
        }
      }

      &:hover {
        color: $accent-color-pink;
      }
    }
  }
</style>
