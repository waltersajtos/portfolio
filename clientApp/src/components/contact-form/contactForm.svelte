<script lang="ts">
  import mailService from '../../services/email.service';
  import CallToAction from '../callToAction.svelte';
  import {notifier} from '@beyonk/svelte-notifications';
  import {bindClass, form} from 'svelte-forms';


  const mailClient = new mailService();

  let name, email, subject, message = "";
  let contactForm = form(() => ({
    name: {value: name, validators: ['required']},
    email: {value: email, validators: ['required', 'email']},
    subject: {value: subject, validators: ['required']},
    message: {value: message, validators: ['required']}
  }), {
    initCheck: false,
    validateOnChange: false,
    stopAtFirstError: false,
    stopAtFirstFieldError: false
  });

  const sendEmail = () => {
    mailClient
      .sendEmail({name, email, subject, message})
      .then(resetFormAndNotifyUser)
      .catch(() => notifier.danger('Could not send email...'));
  };

  const submitForm = () => {
    contactForm.validate()
    if ($contactForm.valid) {
      contactForm.reset()
      sendEmail();
    } else {
      notifier.danger('Please fill out all fields')
    }
  };

  const resetFormAndNotifyUser = () => {
    name = email = subject = message = undefined;
    notifier.success("Email sent successfully");
  }

</script>


<form>
  <div class="row">
    <div>
      {#if $contactForm?.fields.name.errors.includes('required')}
        <p class="error">Name is required</p>
      {/if}
      <label class="input" class:has-input={name && name.length > 0}>
        <label class="input-label" for="name">Full name*</label>
        <input class="input-field" bind:value={name} use:bindClass={{form:contactForm}} id="name" name="name"
               type="text"
               placeholder="Full name*"/>
      </label>
    </div>
    <div>
      {#if $contactForm?.fields.email.errors.includes('email')}
        <p class="error">Please enter a valid email address</p>
      {/if}
      <label class="input" class:has-input={email && email.length > 0}>
        <label class="input-label" for="email">Email*</label>
        <input class="input-field" bind:value={email} use:bindClass={{form:contactForm}} id="email" name="email"
               type="email"
               placeholder="Email*"/>
      </label>
    </div>
    <div>
      {#if $contactForm?.fields.subject.errors.includes('required')}
        <p class="error">Subject is required</p>
      {/if}
      <label class="input" class:has-input={subject && subject.length > 0}>
        <label class="input-label" for="subject">Subject*</label>
        <input class="input-field" bind:value={subject} use:bindClass={{form:contactForm}} id="subject" name="subject"
               type="text"
               placeholder="Subject*"/>
      </label>
    </div>
  </div>
  <div>
    {#if $contactForm?.fields.message.errors.includes('required')}
      <p class="error">Message is required</p>
    {/if}
    <label class="input" class:has-input={message && message.length > 0}>
      <label class="input-label" for="message">Message*</label>
      <textarea class="input-field" bind:value={message} use:bindClass={{form:contactForm}} id="message"
                name="message"
                rows="10"
                placeholder="Message*"></textarea>
    </label>
  </div>
  <div>
    <CallToAction url="" title="Submit" onRoute={submitForm}/>
  </div>

</form>

<style lang="scss">
  @import "src/styles/_variables.scss";

  form {
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;

    @media(max-width: 1300px) {
      width: 50%;
      order: 1;
    }

    @media(max-width: 1000px) {
      width: 100%;
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

    textarea {
      font-family: inherit;
      font-size: inherit;
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

          &.invalid {
            border-color: red;
          }
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

    div.disabled {
      pointer-events: none;
      opacity: .5;
    }

    p.error {
      color: $accent-color-pink;
      margin-bottom: 10px;
    }
  }
</style>
