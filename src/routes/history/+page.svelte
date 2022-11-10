<script lang="ts">
	import CenterText from '$lib/components/text/CenterText.svelte';

	import img38 from '$lib/assets/history/1838.jpg';
	import img40 from '$lib/assets/history/1840.jpg';
</script>

<section>
	<CenterText>
		<h1>History of Lilley & Stone</h1>
		<p>
			The foundation has always had an enormously important impact on the town’s history since a
			charity was first set up in the 17th C by John Lilley and Henry Stone. Originally it was to
			support the poor and young girls working in the already established Jersey School where they
			spun blue wool into jersey or worsted. Eventually the Jersey school closed and in 1910, a
			girls’ grammar school opened on the present site in the grade 2 listed arts and crafts
			building on the London Road. Other school buildings were also provided by the Jersey School
			funds. So, after nearly 300 years the trustees of John Lilley and Henry Stone had successfully
			accommodated their charity to the needs and times. In the field of education, this trust has
			continuously served the people of Newark.
			<br />
			<img src={img38} alt="Lilley & Stone Plaque 1838" />

			<br />
			The school thrived for more than 60 years until the 11+ was abolished in the 1970s at which point
			the school underwent a number of changes and was closed in 2016. Since that time the buildings
			have fallen into disrepair. The trustees have been unable to find a solution for its continued
			use as an educational resource for the young people of the town, who are the beneficiaries of the
			Lilley and Stone Trust.
			<br />
			<br />
			We are unsure of the various changes that have been made to the status of the site to enable it
			to be sold, but are making strenuous investigations here.
			<br />
			<br />
			As we understand it, the trustees have appointed MLN Land and Properties to act as agents in the
			sale of the site. MLN have in turn appointed Broadgrove Planning to push through a housing scheme.
			Both MLN and Broadgrove are based near Manchester. The proposed development consists of at least
			80 houses and will convert the listed buildings as offices/pop up spaces? Access will be achieved
			through new roads joining Harewood Avenue at one end and London Road at the other.
			<br />
			<br />
			Unfortunately, the trustees have been extremely reluctant to discuss anything to do with the project
			with any members of the public. It’s proving hard to know what other alternatives they have considered.
			<br />
			<br />
			From what little we’ve been able to glean, the trustees seem resolved that the whole site must
			be sold and then proceeds used to fund other educational projects around the town. This is very
			vague and doesn’t at the moment justify the loss of such a great civic asset. The site itself does
			not appear to be the prime concern, similarly detailed thoughts about how it serves the beneficiaries
			have not been forthcoming.
		</p>
		<img src={img40} alt="Lilley & Stone Plaque 1840" />
	</CenterText>
</section>

<style lang="scss">
	h1 {
		font-family: 'Island Moments', cursive;
		font-size: 2em;
	}
	img {
		width: 100%;
		margin: 1em 0;
	}
	p {
		text-align: justify;
		margin: 1em 0;
	}
</style>
