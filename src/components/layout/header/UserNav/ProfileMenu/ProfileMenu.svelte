<script lang="ts">
	import {
		Menu,
		MenuButton,
		MenuItems,
		Transition,
	} from "@rgossiaux/svelte-headlessui"

	import GuestMenu from "./GuestMenu.svelte"

	let loggedIn = false
</script>

<Menu
	data-testid="user-menu"
	class="hidden lg:block relative lg:flex-shrink-0 h-full"
	let:open
>
	<div>
		<div class="h-full">
			<MenuButton
				class={`font-bold text-sm rounded-md py-2 outline-none ${
					loggedIn ? "text-highlight" : "text-gray-400"
				} hover:text-gray-500`}
				data-testid="user-menu-button"
			>
				<span class="sr-only">Open user menu</span>
				<div class="h-6 w-6">
					<UserIcon />
				</div>
			</MenuButton>
		</div>
		<Transition
			leave="transition ease-in duration-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
			class="origin-top-right z-20 absolute -right-2 pt-2 w-48"
		>
			<MenuItems
				class="rounded-md bg-white outline-none overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 z-20"
			>
				{#if loggedIn}
					<!-- <AuthMenu data-testid="auth-menu" /> -->
				{:else}
					<GuestMenu />
				{/if}
			</MenuItems>
		</Transition>
	</div>
</Menu>
