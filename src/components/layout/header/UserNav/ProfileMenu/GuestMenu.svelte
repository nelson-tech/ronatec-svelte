<script lang="ts">
	import { MenuItem } from "@rgossiaux/svelte-headlessui"
	import modalsMachine from "$machines/modalsMachine"

	let open = false
	const setLoginOpen = (newOpen: boolean) => {
		open = newOpen
	}
	const { send } = modalsMachine
</script>

<div>
	<MenuItem>
		<div
			on:click={() => {
				send("openSignIn")
			}}
			class="transition cursor-pointer flex items-center outline-none ring-transparent text-highlight px-4 py-2 text-sm hover:bg-highlight hover:text-white"
		>
			<div class="h-4 w-4 mr-1.5">
				<LoginIcon />
			</div>
			<div class="target">Sign in</div>
		</div>
	</MenuItem>
	<MenuItem>
		<div class="group">
			<a
				href="/register"
				class="transition flex items-center text-blue-dark outline-none ring-transparent px-3.5 py-2 text-sm hover:bg-accent hover:text-white"
			>
				<div class="h-4 w-4 mr-2"><ClipboardCheckIcon /></div>

				<div class="target">Register</div>
			</a>
		</div>
	</MenuItem>
</div>
