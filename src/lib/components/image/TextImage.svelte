<script lang="ts">
	interface Image {
		src: string;
		alt: string;
		style?: string;
	}
	export let image: Image;
	export let textLeft: boolean = false;
</script>

<main style={textLeft ? 'flex-wrap:wrap-reverse' : 'flex-wrap:wrap'}>
	{#if textLeft}
		<div class="slot">
			<slot />
		</div>
		<img style={image.style} src={image.src} alt={image.alt} />
	{:else}
		<img style={image.style} src={image.src} alt={image.alt} />

		<div class="slot">
			<slot />
		</div>
	{/if}
</main>

<style lang="scss">
	main {
		// width: 100vw;
		display: flex;
		// flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		text-align: justify;

		div,
		img {
			width: 80vw;
			max-width: 500px;
			margin: 50px;
		}
	}

	@keyframes toright {
	}
</style>
