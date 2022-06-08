<script lang="ts">
	import SignInForm from "$components/SignInForm"
	let open = false

	const setSearchOpen = (newOpen: boolean) => {
		open = newOpen
	}
</script>

<button
	type="button"
	class="ml-2 cursor-pointer text-gray-400 hover:text-gray-500 transition w-6 h-6"
	on:click={() => setSearchOpen(true)}
>
	<span class="sr-only">Search</span>
	<SearchIcon />
</button>
