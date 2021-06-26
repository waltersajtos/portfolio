<script type="ts">
	import getImageUrl from '../../utils/getImageUrl';
	import ProjectTag from './projectTag.svelte';

	export let project, even;
</script>

<div class="project" class:even>
	<div class="description">
		<h2>{project.name}</h2>
		<p>{project.description}</p>
		<div class="tags">
			{#each project.tags as tag}
				<ProjectTag {tag} />
			{/each}
		</div>
		<div class="links">
			{#if project.githubUrl}
				<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="github">
					<em class="fa fa-github" />
				</a>
			{/if}
			{#if project.liveUrl}
				<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="live-url">
					<em class="fa fa-globe" />
          <span style="display: none">LiveUrl</span>
				</a>
			{/if}
		</div>
	</div>
	<div class="image">
		<img alt="" src={getImageUrl(project.images[0]?.url)} />
	</div>
</div>

<style lang="scss">
	@import '../../styles/variables';

	.project {
		display: grid;

		.description {
			order: 1;
		}

		.image {
			order: 0;
		}

		@media (min-width: 1300px) {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			gap: 160px;

			&.even {
				.description {
					order: 0;
				}

				.image {
					order: 1;
				}
			}
		}

		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;
			gap: 40px;

			.image img {
				max-width: 90vw;
			}

			.tags {
				height: 20px;
			}
		}

		.image {
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 0;

			img {
        width: 100%;
        height: 100%;
				max-height: 100%;
				max-width: 100%;
				border-radius: 9px;
			}
		}

		.description {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			gap: 30px;
			min-height: 0;
			max-width: 99vw;
			max-height: 470px;
			height: clamp(0px, 100%, 350px);
			margin: auto 0;

			h2 {
				font-size: 36px;
			}

			p {
				font-size: 22px;
				max-width: 96vw;
			}

			.tags {
				height: 38px;
				display: flex;
				align-items: center;
        flex-wrap: wrap;
				gap: 20px;
			}

			.links {
				display: flex;
				gap: 30px;

				a {
					text-decoration: none;
					color: white;
					font-size: 40px;
				}
			}
		}
	}
</style>
