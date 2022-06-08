<script lang="ts">
	import {
		Menu,
		MenuButton,
		MenuItems,
		Transition,
	} from "@rgossiaux/svelte-headlessui"

	type NormalizedMenuItem = {
		path: string
		label: string
		id: string
		children: NormalizedMenuItem[] | null
		mega?: boolean
	}

	export let menuItem: NormalizedMenuItem
	export let getStyle: (props: any) => string

	$: path = menuItem.path || "/"
</script>

<Menu let:open class="relative h-full">
	<div class="flex h-full">
		<MenuButton
			title={menuItem.label}
			class={getStyle({
				open,
				path,
			})}
		>
			{menuItem.label}
			<div
				class={`transition ml-1 w-4 h-4 text-gray-400 ${
					open ? "transform rotate-180" : ""
				}`}
			>
				<ChevronDownIcon />
			</div>
		</MenuButton>
	</div>

	<Transition
		enter="transition ease-out duration-200"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="transition ease-in duration-150"
		leaveFrom="opacity-100"
		leaveTo="opacity-0"
		class="z-40 origin-top absolute -left-1/2 pt-2 w-64"
	>
		<MenuItems
			class="rounded-md bg-white outline-none overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 z-40"
		>
			{#if menuItem.children}
				{#each menuItem.children as item, i (menuItem.label + i + item.label)}
					<div>
						<a
							href={item.path}
							title={item.label}
							class="transition hover:bg-blue-main hover:text-white text-gray-700 block px-4 py-2 text-sm ring-transparent outline-none"
						>
							{item.label}
						</a>
					</div>
				{/each}
			{/if}
		</MenuItems>
	</Transition>
</Menu>
