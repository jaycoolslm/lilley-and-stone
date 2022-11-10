<footer>
	<div>
		<a href="/contact"><h4>Get in touch</h4></a>
		<a href="mailto:limitlessaudio@outlook.com">Email</a>
		<a href="tel:07903893911">07903893911</a>
	</div>
	<div>
		<h4>Connect</h4>
		<a href="https://www.linkedin.com/company/pizza-pizza-design-services/" target="_blank"
			>LinkedIn</a
		>
		<a href="https://www.instagram.com/limitless.audio/">Instagram</a>
		<a href="https://www.facebook.com/limitlessaudioevents">Facebook</a>
	</div>
	<div class="hide">
		<h4>Services</h4>
		<a href="/contact">Event Packages</a>
		<a href="/contact">Equipment Rental</a>
		<a href="/contact">DJ Hire</a>
	</div>
	<div class="full-width">
		<h4>Website created by Jay Cool © 2022</h4>
		<p>Data Privacy</p>
		<p>Imprint</p>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		background-color: #1b1b1b;
		color: white;
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: 200px;
			margin: 20px 0;
			a {
				color: white;
				text-decoration: none;
			}
			&.full-width {
				min-width: 100vw;
			}
		}
		@media screen and (max-width: 600px) {
			.hide {
				display: none;
			}
		}
	}
</style>
