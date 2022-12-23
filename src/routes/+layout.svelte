<script lang="ts">
	import Nav from '$lib/components/navigation/Nav.svelte';

	import Footer from '$lib/components/navigation/Footer.svelte';

	import { onMount } from 'svelte';
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
		margin-top: 10vh;
		position: relative;
		overflow-x: hidden;
	}
</style>
