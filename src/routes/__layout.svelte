<script lang="ts" context="module">
	import "../app.css"
	import apiInit from "$wp/lib/init"

	apiInit()
</script>

<script lang="ts">
	import Layout from "$components/layout/index.svelte"
</script>

<Layout>
	<slot />
</Layout>
