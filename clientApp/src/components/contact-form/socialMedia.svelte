<div class="social-media">
  <div>
    <h2 class="name">Walter Sajtos</h2>
    <p class="country">The Netherlands</p>
  </div>
  <div class="list">
    <div class="list-item">
      <em class="fa fa-envelope"/>
      <a href="mailto:waltersajtos@outlook.com" rel="noopener noreferrer">
        <p>waltersajtos@outlook.com</p>
      </a>
    </div>
    <div class="list-item">
      <em class="fab fa-github"/>
      <a href="https://github.com/waltersajtos" target="_blank" rel="noopener noreferrer">
        <p>/waltersajtos</p>
      </a>
    </div>
    <div class="list-item">
      <em class="fab fa-linkedin-in"/>
      <a href="https://linkedin.com/in/waltersajtos" target="_blank" rel="noopener noreferrer">
        <p>/in/waltersajtos</p>
      </a>
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

    @media(max-width: 1300px) {
      order: 0;
    }

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

        a {
          text-decoration-color: $text-secondary;
        }
      }
    }
  }
</style>
