<script lang="ts">
	import mail from '$lib/assets/logos/mail.svg';
	import { onMount } from 'svelte';

	// onMount(() => {
	// 	const social: HTMLElement | null = document.getElementById('social');
	// 	social!.addEventListener('click', openSocial);
	// });
	export let height: number = 50;
	interface Social {
		url: string;
		alt: string;
		platform: string;
		height?: number;
	}
	export let socials: Social[] = [];

	const fetchImage = async (platform: string): Promise<any> => {
		const image = await import(`../../assets/logos/${platform}.svg`);
		return image;
	};
	const openSocial = (url: string) => {
		window.open(url);
	};
</script>

<main>
	{#each socials as social}
		<a href={social.url} target="_blank">
			{#await fetchImage(social.platform)}
				<p>Loading</p>
			{:then value}
				<embed src={value.default} alt={social.alt} {height} />
			{/await}
		</a>
	{/each}
</main>

<style lang="scss">
	main {
		// background-color: #1b1b1b;
		padding: 16px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		a {
			margin: 8px 16px;
			display: grid;
			justify-content: center;
			embed {
				pointer-events: none;
			}
		}
	}
</style>
