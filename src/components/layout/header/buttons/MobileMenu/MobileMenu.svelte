<script lang="ts">
	const setMobileMenuOpen = (open: boolean) => open
</script>

<button
	type="button"
	class="-ml-2 bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 transition"
	onClick={() => setMobileMenuOpen(true)}
>
	<span class="sr-only focus:text-white">Open menu</span>
	<div class="w-6 h-6" aria-hidden="true"><MenuIcon /></div>
</button>
