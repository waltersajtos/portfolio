<script lang="ts">
	import Arrows from '../components/arrows.svelte';
  import ContactForm from '../components/contact-form/index.svelte';
  import CallToAction from '../components/callToAction.svelte';

</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="hero">
		<h1>Let's have a chat!</h1>
		<p>
			Do you have a project idea, job offer or just want to have a chat feel free to contact me
			through LinkedIn or the contact form below!
		</p>
  <CallToAction title="About me" url="about" />
	<Arrows />
</div>

<ContactForm/>


<style lang="scss">
	.header {
		display: flex;
		flex-direction: column;
		margin-top: auto;
		gap: 30px;
	}
</style>
