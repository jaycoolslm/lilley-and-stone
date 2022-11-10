<script lang="ts">
	import Saos from '../../../../node_modules/saos/Saos.svelte';
	export let subtitle: string = '';
	interface Image {
		src: string;
		alt: string;
	}
	export let icon: Image;
	export let title: string = '';
	export let text: string = '';
</script>

<Saos once animation={`from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)`}>
	<div>
		<h3>{subtitle}</h3>
		<img src={icon.src} alt={icon.alt} />
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
</Saos>

<style lang="scss">
	@keyframes -global-from-bottom {
		0% {
			transform: translateY(20vh);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 400px;
		margin: 30px;
		color: white;
		> * {
			margin-bottom: 12px;
		}
		img {
			width: 100px;
			height: 100px;
		}
		h3 {
			color: #676767;
		}
	}
</style>
