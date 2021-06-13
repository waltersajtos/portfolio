<div class="social-media">
  <div>
    <h2 class="name">Walter Sajtos</h2>
    <p class="country">The Netherlands</p>
  </div>
  <div class="list">
    <div class="list-item">
      <em class="fa fa-envelope"/>
      <p>waltersajtos@outlook.com</p>
    </div>
    <div class="list-item">
      <em class="fab fa-github"/>
      <p>/waltersajtos</p>
    </div>
    <div class="list-item">
      <em class="fab fa-linkedin-in"/>
      <p>/in/waltersajtos</p>
    </div>
    <div class="list-item">
      <em class="fab fa-discord"/>
      <p>Golem#6969</p>
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/styles/variables";

  .social-media {
    display: flex;
    flex-direction: column;
    gap: 60px;

    .name {
      color: white;
      font-size: 36px;
    }

    .country {
      font-size: 22px;
    }

    .list {
      display: flex;
      flex-direction: column;

      gap: 30px;

      .list-item {
        display: flex;
        align-items: center;
        gap: 10px;

        em {
          font-size: 40px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }
</style>
