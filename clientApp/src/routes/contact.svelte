<script lang="ts">
  import Arrows from "../components/arrows.svelte";

  import mailService from "../services/email.service";

  const mailClient = new mailService();

  let form, name, email, message;

  const sendEmail = () => {
    mailClient.sendEmail({name, email, message})
    .catch(() => console.error("Could not send email..."))
  }

  const submitForm = () => {
    if(name.length > 0 && email.length > 0 && message.length > 0) {
      sendEmail();
    }
  }
</script>

<div class="hero">
  <div class="header">
    <h1>Let's have a chat!</h1>
    <p>Do you have a project idea, job offer or just want to have a chat feel free to contact me through LinkedIn or the
      contact form below!</p>
  </div>

  <Arrows/>
</div>

<div class="social-media"></div>
<form bind:this={form} on:submit|preventDefault={sendEmail}>
  <input bind:value={name} type="text" name="name" id="name" required/>
  <input bind:value={email} type="email" name="email" id="email" required/>
  <textarea bind:value={message} name="message" id="message" cols="30" rows="10" required></textarea>
  <a class="call-to-action" on:click={submitForm}>
    <div class="bar"></div>
    <h2>Submit</h2>
  </a>
</form>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    gap: 30px;
  }
</style>
