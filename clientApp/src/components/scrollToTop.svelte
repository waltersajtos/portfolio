<script lang="ts">
	export let visible;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="scroll-to-top" class:visible on:click={scrollToTop}>
	<em class="fa fa-chevron-up" />
</div>

<style lang="scss">
	@import 'src/styles/variables';

	.scroll-to-top {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: $page-padding;
		right: $page-padding;
		background: $accent-color-pink;
		width: $page-padding;
		height: $page-padding;
		border-radius: 9999px;
		font-size: 70px;
		opacity: 0;
		transition: opacity 0.5s ease-in;
		pointer-events: none;
		z-index: 100;

		&.visible {
			opacity: 1;
			pointer-events: auto;
		}

		&:hover {
			cursor: pointer;
		}

		@media (max-width: $breakpoint-mobile) {
			bottom: $page-padding-mobile;
			right: $page-padding-mobile;
		}
	}
</style>
