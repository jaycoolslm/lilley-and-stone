<script lang="ts">
	import Socials from '../card/Socials.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	interface Links {
		name: string;
		slug: string;
	}

	let links: Links[] = [
		{ name: 'Home', slug: '/' },
		{ name: 'History', slug: '/history' },
		{ name: 'Gallery', slug: '/gallery' }
		// { name: 'Contact', slug: '/contact' }
	];

	export let hamburgerActive: boolean = false;

	onMount(() => {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos - 70) {
				document.getElementById('navbar')!.style.top = '0';
			} else {
				document.getElementById('navbar')!.style.top = '-12vh';
			}
			prevScrollpos = currentScrollPos;
		};
	});
</script>

<nav id="navbar">
	<div>
		<a href="/"> Saving Lilly & Stone </a>

		<button
			class={hamburgerActive ? 'hamburger hamburger--spin is-active' : 'hamburger hamburger--spin'}
			type="button"
			on:click={() => (hamburgerActive = !hamburgerActive)}
		>
			<span class="hamburger-box">
				<span class="hamburger-inner" />
			</span>
		</button>
	</div>

	<ul class={hamburgerActive ? 'open' : 'closed'}>
		{#each links as link}
			<li>
				<a on:click={() => (hamburgerActive = false)} href={link.slug}>{link.name}</a>
			</li>
		{/each}
		<Socials
			socials={[
				{
					url: 'https://www.instagram.com/limitless.audio/',
					alt: 'Limitless Audio Instagram',
					platform: 'instagram'
				},
				{
					url: 'https://www.facebook.com/limitlessaudioevents',
					alt: 'Limitless Audio Facebook',
					platform: 'facebook'
				},
				{
					url: 'https://www.linkedin.com/company/limitless-audio/',
					alt: 'Limitless Audio Linked In',
					platform: 'linkedin'
				},
				{
					url: 'mailto:limitlessaudio@outlook.com',
					alt: 'Limitless Audio Email',
					platform: 'mail'
				}
			]}
		/>
	</ul>
</nav>

<style lang="scss">
	nav {
		width: 100vw;
		height: 10vh;
		// height: 100vh;
		// overflow-x: hidden;
		// overflow-y: visible;
		display: block;
		position: fixed;
		top: 0;
		transition: top 0.3s;
		z-index: 102;
		div {
			min-width: 100vw;
			background-color: white;
			display: flex;
			justify-content: space-between;
			align-items: center;
			z-index: 100;
			height: 10vh;

			a {
				font-family: 'Island Moments', cursive;
				text-decoration: none;
				font-size: 3em;
				font-weight: 700;
				color: black;
				margin-left: 1em;
			}
		}

		ul {
			z-index: 99;
			position: absolute;
			top: var(--nav-height);
			left: 100%;
			height: calc(100vh - var(--nav-height));
			background-color: white;
			display: flex;
			flex-direction: column;
			width: 100vw;
			max-width: 500px;
			// z-index: 100;
			align-items: center;
			justify-content: space-evenly;
			transition: all 0.7s ease;
			list-style: none;
			&.open {
				transform: translateX(-100%);
			}
			li {
				&::after {
					content: '';
					display: block;
					width: 0;
					height: 2px;
					background: none repeat scroll 0 0 black;
					transition: all ease 0.2s;
				}
				&:hover::after {
					width: 100%;
				}

				a {
					text-decoration: none;
					font-size: 2em;
					color: #2b2b2b;
				}
			}
		}

		/* HAMBURGER ANIMATION */

		.hamburger {
			padding: 15px 15px;
			margin-right: 10px;
			display: inline-block;
			cursor: pointer;
			transition-property: opacity, filter;
			transition-duration: 0.15s;
			transition-timing-function: linear;
			font: inherit;
			color: inherit;
			text-transform: none;
			background-color: transparent;
			border: 0;
			overflow: visible;
			z-index: 100;
		}

		.hamburger:hover {
			opacity: 0.7;
		}

		.hamburger.is-active:hover {
			opacity: 0.7;
		}

		.hamburger.is-active .hamburger-inner,
		.hamburger.is-active .hamburger-inner::before,
		.hamburger.is-active .hamburger-inner::after {
			background-color: #000;
		}

		.hamburger-box {
			width: 40px;
			height: 24px;
			display: inline-block;
			position: relative;
		}

		.hamburger-inner {
			display: block;
			top: 50%;
			margin-top: -2px;
		}

		.hamburger-inner,
		.hamburger-inner::before,
		.hamburger-inner::after {
			width: 40px;
			height: 4px;
			background-color: #000;
			border-radius: 4px;
			position: absolute;
			transition-property: transform;
			transition-duration: 0.15s;
			transition-timing-function: ease;
		}

		.hamburger-inner::before,
		.hamburger-inner::after {
			content: '';
			display: block;
		}

		.hamburger-inner::before {
			top: -10px;
		}

		.hamburger-inner::after {
			bottom: -10px;
		}

		.hamburger--spin .hamburger-inner {
			transition-duration: 0.22s;
			transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		.hamburger--spin .hamburger-inner::before {
			transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
		}

		.hamburger--spin .hamburger-inner::after {
			transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		.hamburger--spin.is-active .hamburger-inner {
			transform: rotate(225deg);
			transition-delay: 0.12s;
			transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		.hamburger--spin.is-active .hamburger-inner::before {
			top: 0;
			opacity: 0;
			transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
		}

		.hamburger--spin.is-active .hamburger-inner::after {
			bottom: 0;
			transform: rotate(-90deg);
			transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
</style>
