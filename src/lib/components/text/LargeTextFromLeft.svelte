<script lang="ts">
	export let caption: string = '';
	export let backgroundColor: string = '';
	export let textColor: string = '';
	import { onMount } from 'svelte';
	import Saos from '../../../../node_modules/saos/Saos.svelte';

	let innerHeight = 0;
	let innerWidth = 0;

	const animationVelocity = 1350; // px / s
	onMount(() => {
		innerHeight = window.innerHeight;
		innerWidth = window.innerWidth;
	});
</script>

<Saos
	animation={`from-left ${innerWidth / animationVelocity}s cubic-bezier(0.35, 0.5, 0.65, 0.95)`}
>
	<h1
		style={`
		background-color: ${backgroundColor};
		color: ${textColor};
	`}
	>
		{caption}
	</h1>
</Saos>

<!-- <button on:click={() => (ting = !ting)}>toggle</button> -->
<style lang="scss">
	$mobile: 500px;

	h1 {
		text-align: center;
		font-family: 'Abril Fatface', cursive;
		padding: 5vh;
		@media screen and (min-width: $mobile) {
			font-size: 3em;
		}
	}
	@keyframes -global-from-left {
		0% {
			transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}
</style>
