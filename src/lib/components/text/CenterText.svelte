<script lang="ts">
</script>

<main>
	<div class="slot"><slot /></div>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
		.slot {
			margin: 50px;
		}
	}
</style>
