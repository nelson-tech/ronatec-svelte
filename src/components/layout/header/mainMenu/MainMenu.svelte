<script lang="ts">
	import { PopoverGroup } from "@rgossiaux/svelte-headlessui"
	import { page } from "$app/stores"
	import mainMenu from "$lib/menus/main"
	import MegaMenu from "./MegaMenu.svelte"
	import Dropdown from "./Dropdown.svelte"

	type DesktopLinkStyleProps = {
		open: boolean
		path: string
	}

	type GetDesktopLinkStyleType = ({
		open,
		path,
	}: DesktopLinkStyleProps) => string

	const getDesktopLinkStyle: GetDesktopLinkStyleType = ({
		open,
		path,
	}): string => {
		const current =
			$page.url.pathname.slice(0, path.length) === path && path !== "/"
		return `transition-colors ease-out duration-200 py-2 px-3 rounded-md outline-none ${
			open || current ? "bg-gray-100" : "hover:bg-gray-100"
		} text-gray-900 font-medium inline-flex items-center`
	}
</script>

<div class="hidden h-full lg:flex items-center">
	<PopoverGroup class="ml-6"
		><div
			class="h-full flex items-center space-x-2 text-sm font-medium text-gray-600"
		>
			{#each mainMenu as menuItem (menuItem.id)}
				{#if menuItem.children}
					{#if menuItem.mega}
						<MegaMenu megaItem={menuItem} getStyle={getDesktopLinkStyle} />
					{:else}
						<Dropdown {menuItem} getStyle={getDesktopLinkStyle} />
					{/if}
				{:else}
					{@const path = menuItem.path || "/"}
					<div class="relative flex">
						<a
							href={path}
							title={menuItem.label}
							class={getDesktopLinkStyle({
								open: false,
								path,
							})}
						>
							{menuItem.label}
						</a>
					</div>
				{/if}
			{/each}
		</div></PopoverGroup
	>
</div>
