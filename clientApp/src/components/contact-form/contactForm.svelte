<script lang="ts">
  import mailService from '../../services/email.service';
  import CallToAction from '../callToAction.svelte';

  const mailClient = new mailService();

  let form, name, email, subject, message;

  const sendEmail = () => {
    mailClient
      .sendEmail({name, email, subject, message})
      .catch(() => console.error('Could not send email...'));
  };

  const submitForm = () => {
    if (name && email && message && subject && name.length > 0 && email.length > 0 && message.length > 0) {
      sendEmail();
    }
  };


</script>


<form bind:this={form}>
  <div class="row">
    <label class="input" class:has-input={name && name.length > 0}>
      <label class="input-label" for="name">Full name*</label>
      <input class="input-field" bind:value={name} id="name" name="name" required type="text" placeholder="Full name*"/>
    </label>
    <label class="input" class:has-input={email && email.length > 0}>
      <label class="input-label" for="email">Email*</label>
      <input class="input-field" bind:value={email} id="email" name="email" required type="email" placeholder="Email*"/>
    </label>
    <label class="input" class:has-input={subject && subject.length > 0}>
      <label class="input-label" for="subject">Subject*</label>
      <input class="input-field" bind:value={subject} id="subject" name="subject" required type="text"
             placeholder="Subject*"/>
    </label>
  </div>
  <label class="input" class:has-input={message && message.length > 0}>
    <label class="input-label" for="message">Message*</label>
    <textarea class="input-field" bind:value={message} cols="30" id="message" name="message" required rows="10"
              placeholder="Message*"></textarea>
  </label>

  <CallToAction url="" title="Submit" onRoute={submitForm}/>
</form>

<style lang="scss">
  @import "src/styles/_variables.scss";

  form {
    display: inline-flex;
    flex-direction: column;
    gap: 30px;

    @media(max-width: 1300px) {
      order: 1;
    }

    @media(max-width: 600px) {
      width: 90%;
      gap: 20px;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 50px;

      @media(max-width: 600px) {
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 20px
      }
    }

    .input {
      position: relative;
      display: block;

      &.has-input {
        .input-label {
          opacity: 1;
          transform: none;
        }

        .input-field {
          padding: 1.4rem 0.8rem 0.34rem;
        }
      }
    }

    .input-label {
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
      padding: 0 0.8rem;
      margin-top: 0.2rem;
      overflow: hidden;
      font-size: 0.8rem;
      color: $accent-color-pink;
      opacity: 0;
      transition: all 200ms ease-out;
      transform: translateY(0.4rem);
      pointer-events: none;
      user-select: none;
    }

    .input-field {
      display: block;
      width: 100%;
      padding: 0.94rem 0.8rem 0.8rem;
      background-color: rgba(255, 255, 255, 0.05);
      color: $text-secondary;
      appearance: none;
      transition: all 200ms ease-out;
      border: 0;
      border-radius: 0;

      &:focus {
        box-shadow: 0 0 0 2px $accent-color-pink;
        outline: 0;
      }
    }
  }
</style>
