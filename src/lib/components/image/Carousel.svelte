<script lang="ts">
	import Arrow from '$lib/util/Arrow.svelte';
	import { onMount } from 'svelte';
	interface Image {
		src: string;
		alt: string;
		style?: string;
	}
	export let images: Image[];

	let translation = 0;

	onMount(() => {
		setInterval(slideForward, 8000);
	});

	const slideForward = () => {
		const carouselMain: HTMLElement | null = document.getElementById('carousel');
		translation -= 100;
		if (translation <= images.length * -100) translation = 0;
		carouselMain!.style.transform = `translateX(${translation}%)`;
	};

	const slideBackward = () => {
		const carouselMain: HTMLElement | null = document.getElementById('carousel');
		if (translation < 0) {
			translation += 100;
			carouselMain!.style.transform = `translateX(${translation}%)`;
		}
	};
</script>

<section style="position: relative;">
	<main id="carousel">
		{#each images as image}
			<img style={image.style} src={image.src} alt={image.alt} />
		{/each}
	</main>

	<div class="toggle">
		{#each images as image, index}
			<div class={`circle ${index * -100 === translation ? 'active' : ''}`} />
		{/each}
	</div>
</section>

<style lang="scss">
	main {
		// max-height: 75vh;
		display: flex;
		transition: all 1s ease;
		img {
			min-width: 100vw;
			object-fit: cover;
			animation: shrink 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
		}
	}

	.toggle {
		position: absolute;
		bottom: 0;
		background-color: #2b2b2b;
		border-radius: 0 10px 0 0;
		.circle {
			display: inline-block;
			border-radius: 100%;
			width: 20px;
			height: 20px;
			background-color: #eee;
			margin: 8px 16px 0 16px;
			&.active {
				background-color: grey;
			}
		}
	}

	@keyframes shrink {
		0% {
			height: 100vh;
		}
		100% {
			height: 75vh;
		}
	}
</style>
