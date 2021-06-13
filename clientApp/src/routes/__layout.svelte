<script lang="ts">
	import NavBar from '../components/navigation.svelte';
	import Hamburger from '../components/hamburger.svelte';
	import ScrollToTop from '../components/scrollToTop.svelte';

	let open = false;
	let y;
</script>

<Hamburger bind:open />
<NavBar bind:open />
<div class="page" class:open>
	<slot />
</div>

<ScrollToTop visible={y > 1300} />

<svelte:window bind:scrollY={y} />

<style global lang="scss">
	@import '../styles/styles.scss';

	.page.open {
		max-height: calc(100vh - 2 * #{$page-padding});
		overflow-y: hidden;
	}
</style>
