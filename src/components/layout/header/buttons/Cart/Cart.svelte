<script lang="ts">
	const setOpen = (open: boolean) => {
		return open
	}

	let cart: any = undefined
</script>

<button
	type="button"
	class="group -m-2 p-2 flex items-center"
	onClick={() => setOpen(true)}
	><div
		class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 transition"
		aria-hidden="true"
	>
		<ShoppingCartIcon />
	</div>

	<span
		class={`ml-2 text-sm font-medium text-gray-400 ${
			cart?.contents?.itemCount ?? "group-hover:text-gray-500"
		}`}
	>
		{cart?.contents?.itemCount ?? 0}
	</span>
	<span class="sr-only">items in cart, view bag</span>
</button>
