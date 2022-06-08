<script lang="ts" context="module">
	import "../app.css"
	import apiInit from "$wp/lib/init"

	apiInit()
</script>

<script lang="ts">
	import Layout from "$components/Layout"
</script>

<Layout>
	<slot />
</Layout>
