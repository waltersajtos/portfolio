<script lang="ts">
	export let url, title, onRoute, alwaysButton;
</script>

<a class="call-to-action" class:alwaysButton href={url} on:click={onRoute} rel="noreferrer noopener">
	<div class="bar" />
	<h2>{title}</h2>
</a>

<style lang="scss">
	@import '../styles/variables';

	.call-to-action {
		display: flex;
		position: relative;
		align-items: center;
		color: white;
		width: fit-content;
		width: -moz-fit-content;
		flex-basis: auto;
		padding-right: 25px;
		text-decoration: none;
		text-transform: capitalize;

		.bar {
			position: absolute;
			left: 0;
			width: 10px;
			max-width: 100%;
			height: 140%;
			background-color: $accent-color-pink;
			margin-right: 15px;
			transition: ease-in-out 0.3s;
			z-index: -1;
		}

		&:hover {
			.bar {
				width: 100%;
				border-radius: 10px;
			}
		}

    &.alwaysButton {
      .bar {
        width: 100%;
        border-radius: 10px;
      }
    }

		@media (max-width: $breakpoint-mobile) {
			.bar {
				width: 100%;
				border-radius: 10px;
			}
		}

		h2 {
			margin-left: 25px;
		}
	}
</style>
