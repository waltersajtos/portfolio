<script>
	import CallToAction from './callToAction.svelte';

	export let open = false;

	const closeNavigation = () => {
		setTimeout(() => {
			open = false;
		}, 100);
	};
</script>

<nav class="nav" class:open>
	<div class="content">
		<div class="left">
			<div class="list-item">
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
			<div class="list-item">
				<CallToAction onRoute={closeNavigation} title="Contact me" url="contact" />
			</div>
		</div>
		<div class="right">
			<div class="list">
				<div class="list-item"><a href="." on:click={closeNavigation}>Home</a></div>
				<div class="list-item"><a href="projects" on:click={closeNavigation}>Projects</a></div>
				<div class="list-item"><a href="about" on:click={closeNavigation}>About</a></div>
				<div class="list-item"><a href="contact" on:click={closeNavigation}>Contact</a></div>
			</div>
		</div>
	</div>
</nav>

<style lang="scss">
	@use "sass:math";
	@import '../styles/variables';

	.nav {
		$transition--length: 1;
		$font--color--active: $text-primary;
		$width: 100vw;
		$height: 100vh;
		$font--size--calc: calc(2vw + 10px);
		$transition--easing: cubic-bezier(0.77, 0, 0.175, 1);
		$menu--items--count: 6;
		overflow-y: hidden;

		@media (max-width: $breakpoint-mobile) {
			$font--size--calc: calc(1vw);
		}

		position: fixed;
		z-index: 2;
		pointer-events: none;

		&.open {
			visibility: visible;

			&:before,
			&:after {
				transform: translateX(0%) translateY(0%);
			}

			&:after {
				transition-delay: 0.1s;
			}

			&:before {
				transition-delay: 0s;
			}

			.list-item {
				pointer-events: auto;
				opacity: 1;
				transform: translateX(0%);
				transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
				@for $i from 0 through $menu--items--count {
					&:nth-child(#{$i}) {
						transition-delay: math.div($transition--length * $i, 8) + 0.5 + s;
					}
				}
			}
		}

		&:before,
		&:after {
			content: '';
			position: fixed;
			width: $width;
			height: $height;
			background: rgba(249, 34, 75, 0.5);
			z-index: -1;
			transition: transform $transition--easing $transition--length + s;
			transform: translateX(0%) translateY(-100%);
		}

		&:after {
			@media (max-width: $breakpoint-tablet) {
				background: linear-gradient(120deg, rgba(254, 63, 63, 1), rgba(249, 34, 75, 1));
			}

			background: linear-gradient(
				90deg,
				rgba(36, 34, 43, 1) 0%,
				rgba(9, 8, 11, 1) 50%,
				rgba(254, 63, 63, 1) 50%,
				rgba(249, 34, 75, 1) 100%
			);
			transition-delay: 0s;
		}

		&:before {
			transition-delay: 0.1s;
		}

		.content {
			position: fixed;
			width: $width;
			height: $height;
			font-size: $font--size--calc !important;
			font-weight: 200;
			cursor: pointer;

			display: grid;
			grid-template-columns: 1fr 1fr;

			@media (max-width: $breakpoint-tablet) {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.right,
			.left {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 65px;
				font-weight: bold;

				.list {
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 100px;
				}
			}

			@media (min-width: $breakpoint-tablet) {
				.right .list-item {
					&:before {
						content: '';
						position: absolute;
						background: $font--color--active;
						width: 0;
						height: 0;
						top: 100%;
						transform: translate(0%, 0%);
						transition: all 0.3s ease;
						z-index: -1;
					}

					&:hover {
						&:before {
							height: 3px;
							width: 100%;
						}
					}
				}
			}

			.left {
				flex-direction: column;
				gap: 70px;
				align-items: flex-start;
				justify-content: center;
				cursor: auto;
				margin-left: $page-padding;

				@media (max-width: $breakpoint-tablet) {
					display: none;
				}

        .name {
          color: white;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .country {
          font-size: 22px;
        }

				.list {
					gap: 20px;

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
              text-decoration: underline;
              text-decoration-color: $text-secondary;
              text-decoration-thickness: 2px;
            }
					}
				}
			}
		}

		.list-item {
			position: relative;
			transition-delay: $transition--length + s;

			a {
				text-decoration: none;
				color: $font--color--active;
			}

			opacity: 0;
			transform: translate(0%, 100%);
			transition: opacity 0.2s ease, transform 0.3s ease;
			margin-right: 25px;
		}
	}
</style>
