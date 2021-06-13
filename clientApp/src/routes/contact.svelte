<script lang="ts">
	import Arrows from '../components/arrows.svelte';

	import mailService from '../services/email.service';

	const mailClient = new mailService();

	let form, name, email, message;

	const sendEmail = () => {
		mailClient
			.sendEmail({ name, email, message })
			.catch(() => console.error('Could not send email...'));
	};

	const submitForm = () => {
		if (name.length > 0 && email.length > 0 && message.length > 0) {
			sendEmail();
		}
	};
</script>

<div class="hero">
	<div class="header">
		<h1>Let's have a chat!</h1>
		<p>
			Do you have a project idea, job offer or just want to have a chat feel free to contact me
			through LinkedIn or the contact form below!
		</p>
	</div>

	<Arrows />
</div>

<div class="social-media" />
<form bind:this={form} on:submit|preventDefault={sendEmail}>
	<input bind:value={name} id="name" name="name" required type="text" />
	<input bind:value={email} id="email" name="email" required type="email" />
	<textarea bind:value={message} cols="30" id="message" name="message" required rows="10" />
	<a class="call-to-action" on:click={submitForm}>
		<div class="bar" />
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
