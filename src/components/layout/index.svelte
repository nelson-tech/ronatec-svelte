<script lang="ts">
	import Header from "./header/index.svelte"
	import Footer from "./footer/index.svelte"
</script>

<Header promo />
<div class="p-8 max-w-6xl mx-auto">
	<slot />
</div>
<Footer />
