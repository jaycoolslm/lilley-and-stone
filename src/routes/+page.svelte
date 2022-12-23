<script lang="ts">
	// components
	import Hero from '$lib/components/image/Hero.svelte';
	import CenterText from '$lib/components/text/CenterText.svelte';
	import TextImage from '$lib/components/image/TextImage.svelte';
	import LargeTextFromLeft from '$lib/components/text/LargeTextFromLeft.svelte';
	import List from '$lib/components/List/index.svelte';
	// images
	import pm_2 from '$lib/assets/meeting/pm_2.jpg';
	import building_2 from '$lib/assets/school/building_2.jpg';
	import circleStop from '$lib/assets/logos/circle-stop-regular.svg';
	import consult from '$lib/assets/logos/person-chalkboard-solid.svg';
</script>

<main>
	<Hero
		image={{ src: building_2, alt: 'Saving Lilley and Stone' }}
		header="Saving Lilley and Stone"
	/>

	<TextImage image={{ src: pm_2, alt: 'Saving Lilly and Stone' }}>
		<h1 style="margin-bottom: 1rem">We deeply care about our town</h1>
		<ul style="margin-bottom: 1rem">
			<li>History</li>
			<li>Buildings</li>
			<li>Green spaces</li>
			<li>Educational and cultural facilities</li>
			<li>Day to day quality of life for residents</li>
			<li>Future legacy for our children and the next generation</li>
		</ul>
		<p style="margin-bottom: 1rem">
			The Lilley and Stone site is central to all the above and we feel moved to act.
		</p>
	</TextImage>
	<List
		title="Our objectives"
		cardDetails={[
			{
				title: 'Halt progress',
				body: 'Halt the rapid progress of this proposal by the trustees and their agents MLN.',
				icon: circleStop
			},
			{
				title: 'Consultation',
				body: 'We need a much longer consultation period to properly explore all other options.',
				icon: consult
			}
		]}
	/>

	<div class="petition">
		<a href="/">Sign our petition</a>
	</div>

	<List title="What we object to" />

	<div class="email-list">
		<h2 id="email-update">Enter your email for updates!</h2>
		<span>
			<label>Email</label>
			<input type="email" />
		</span>
	</div>
</main>

<style lang="scss">
	h1 {
		font-family: 'Playfair Display', serif;
		font-size: 40px;
	}
	ul {
		list-style-position: inside;
	}
	.petition {
		width: 100vw;
		display: flex;
		height: 10vh;
		justify-content: center;
		align-items: center;
		margin: 3em 0;
		a {
			text-decoration: none;
			color: black;
			background-color: #e7c22c;
			border-radius: 100%;
			width: 50px;
			height: 50px;
			white-space: nowrap;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.7s ease;
			animation: pulse 3s infinite ease;
			font-weight: 700;
			font-size: 1.5em;
			&:hover {
				width: 200px;
				height: 160px;
			}
		}
	}
	@keyframes pulse {
		0% {
			width: 50px;
			height: 50px;
		}
		50% {
			width: 80px;
			height: 80px;
		}
		100% {
			width: 50px;
			height: 50px;
		}
	}
	.email-list {
		width: 100%;
		height: 10vh;
		background-color: #e7c22c;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h2 {
			margin-bottom: 1rem;
		}
	}
</style>
