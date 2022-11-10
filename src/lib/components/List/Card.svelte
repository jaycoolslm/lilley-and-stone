<script lang="ts">
	export let number: number;
	export let icon: string = '';
	export let title: string;
	export let body: string;
</script>

<main>
	<div>
		{#if icon}
			<img src={icon} alt="Saving Lilly & Stone" />
		{:else}
			<h2>0{number}</h2>
		{/if}
	</div>

	<h3>{title}</h3>
	<p>{body}</p>
</main>

<style lang="scss">
	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		div {
			background-color: #e7c22c;
			border-radius: 100%;
			display: inline-block;
			width: 2.5em;
			height: 2.5em;
			font-size: 2em;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				height: 70%;
				width: 70%;
			}
		}
		// h2 {
		// 	display: flex;
		// 	justify-content: center;
		// 	align-items: center;
		// }

		h3 {
			font-family: 'Playfair Display', serif;
			font-weight: 800;
			font-size: 26px;
		}

		p {
			font-family: 'Playfair Display', serif;
			text-align: center;
			max-width: 240px;
		}
	}
</style>
