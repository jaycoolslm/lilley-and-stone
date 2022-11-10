<script>
	import Gallery from 'svelte-image-gallery';

	import image from '$lib/assets/school/building_1.jpg';

	export let data;
	console.log(data);

	function handleClick(e) {
		console.log(e.detail.src);
	}
</script>

<Gallery on:click={handleClick}>
	<img src={image} />
</Gallery>
