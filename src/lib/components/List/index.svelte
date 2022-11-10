<script lang="ts">
	import Card from './Card.svelte';

	export let title: string;

	export let cardDetails = [
		{
			title: "Trust's fulfillment",
			body: 'The plans do not adequately fulfill the remit of the trust. Selling the site would be a lost opportunity to continue using the land and buildings as a centre for excellence both educationally and culturally to serve the young people and the community of Newark at large. To indicate that profits from the sale of the site will allow the trustees to deliver substantial funding towards local sports facilities, helping to support health and wellbeing is far too vague and doesn’t meet the remit of the trust. We have also recently seen Woodhead go out of business, there was a bankrupt developer in the Robin Hood saga, profits in this climate are not guaranteed. Once the site is gone it is lost to the beneficiaries forever.'
		},
		{
			title: 'Loss of green',
			body: 'Loss of vital green space - we know about climate change and the need to be aware environmentally about how we develop our town centre. The people of Newark have already lost Lincoln Road Playing Fields, Flow-Serve, Elm Avenue, not to mention all the green spaces in the environs of the town. The library gardens were saved by the sheer number of townsfolk who protested in the strongest possible terms. The subsequent audit report which was commissioned found that there hadn’t been adequate consultation in the early stages and the cost to local people was 500K amongst other things - no one stood down or resigned over this. The level of trust in those that make strategic civic decisions for our town is at an all time low.'
		},
		{
			title: 'Housing',
			body: 'Housing - 3000 houses are being built on the outskirts of the town to fulfil the quota we are required to provide. Newark is a designated growth point. To build another 80 plus houses in the town centre would be an inappropriate use of such a strategic and historically important asset. The infrastructure is not yet in place to allow easy circulation. Where are the footpaths, cycle routes, park and ride, free circular bus schemes that are needed by the community? Where are the doctors, dentists and schools? The Lilley and Stone if developed sensitively and imaginatively might become a focal point of culture and recreation for the community. It could be an asset of standing in the East Midlands to draw people into the town.'
		},
		{
			title: 'Traffic',
			body: 'the number of additional cars resulting from 80 plus new homes would cause chaos in the residential streets surrounding Harewood Avenue and London Road.'
		},
		{
			title: 'Community ideas and input',
			body: 'it was evident from the meeting last week that there is a lot of talent locally. We heard from architects amongst others who had plenty of ideas about how the site might be best used. No one has consulted with the beneficiaries of the trust who are young people in Newark and Balderton. We would like to see much more use of local people and talent.'
		}
	];
</script>

<section>
	<h1>{title}</h1>
	<div>
		{#each cardDetails as { title, body, icon }, i}
			<Card {icon} number={i + 1} {title} {body} />
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		h1 {
			font-family: 'Playfair Display', serif;
			font-size: 40px;
			font-weight: 700;
			text-align: center;
			margin-bottom: 40px;
		}

		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			gap: 20px;
			max-width: 760px;
			margin: 0 auto;
		}
	}
</style>
