<script lang="ts">
	export let image: {
		src: string;
		alt: string;
	};
	export let header: string = '';
	export let sub: string = '';
</script>

<section>
	<img src={image.src} alt={image.alt} />
	<h1>{header}</h1>
	{#if sub}
		<h3>{sub}</h3>
	{/if}
</section>

<style lang="scss">
	section {
		position: relative;
		height: 90vh;
		img {
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			animation: fadeout 1s ease forwards;
		}
		h1 {
			font-family: 'Island Moments', cursive;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, 0);
			font-size: 4em;
			text-align: center;
			animation: slideup 1s ease forwards;
		}
	}

	@keyframes slideup {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
	}

	@keyframes fadeout {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0.8;
		}
	}
</style>
