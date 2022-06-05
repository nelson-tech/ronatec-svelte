<script lang="ts">
	import { Popover, PopoverButton, PopoverPanel, Transition } from "@rgossiaux/svelte-headlessui"
	import { Icon } from "@steeze-ui/svelte-icon"
	import { ChevronDown } from "@steeze-ui/heroicons"
	import type MenuItemType from "$lib/menus/types"
	import { children } from "svelte/internal"

	export let megaItem: MenuItemType
	export let getStyle: (props: any) => string

	$: path = megaItem.path || "/"

	const headerStyle = "font-extrabold text-base text-gray-900"
</script>

<Popover let:open>
	<div class="relative flex">
		<PopoverButton
			class={getStyle({
				open,
				path,
			})}
		>
			{megaItem.label}
			<Icon
				src={ChevronDown}
				class={`transition ml-1 w-4 h-4 ${open && "transform rotate-180"} text-gray-400`}
			/>
		</PopoverButton>
	</div>
	<Transition
		show={open}
		enter="transition ease-out duration-200"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="transition ease-in duration-150"
		leaveFrom="opacity-100"
		leaveTo="opacity-0"
		class="absolute top-full inset-x-0 mt-1 z-20"
	>
		<PopoverPanel class="absolute inset-0 bg-white text-gray-500 sm:text-sm">
			<div class="relative bg-white shadow">
				<div class="max-w-7xl mx-auto px-8">
					<div class="grid grid-cols-3 items-start ml-8 pt-6 pb-6">
						{#if megaItem.children}
							{#each megaItem.children as column, i (column.label + i + column.path)}
								{#if column.label === "Menu-Column"}
									<div>
										{#if column.children}
											{#each column.children as subColumn, subIndex (column.label + subColumn.label + subColumn.path)}
												<div
													class={subIndex > 0
														? "mt-8"
														: subColumn.label === "Browse All"
														? "mb-8"
														: ""}
												>
													<p id={`desktop-featured-heading-${megaItem.id}`} class={headerStyle}>
														<a
															href={subColumn.path}
															title={subColumn.label}
															class={`${
																subColumn.label === "Browse All"
																	? "text-accent hover:text-highlight"
																	: "hover:text-accent"
															}  transition`}
														>
															{subColumn.label}
														</a>
													</p>

													<ul aria-labelledby={`desktop-featured-heading-${megaItem.id}`} class="">
														{#if subColumn.children}
															{#each subColumn.children as item (subColumn.label + item.label + item.path)}
																<li class="flex w-full group">
																	<a
																		href={item.path}
																		title={item.label}
																		class="w-full hover:text-highlight"
																	>
																		<div class="py-2 w-full">
																			{item.label}
																		</div>
																	</a>
																</li>
															{/each}
														{/if}
													</ul>
												</div>
											{/each}
										{/if}
									</div>
								{:else}
									<p id={`desktop-featured-heading-${megaItem.id}`} class={headerStyle}>
										<a href={column.path} title={column.label}>
											{column.label}
										</a>
									</p>

									<ul aria-labelledby={`desktop-featured-heading-${megaItem.id}`} class="mt-2">
										{#if column.children}
											{#each column.children as item (item.id)}
												<li class="flex w-full group">
													<a href={item.path} title={item.label} class="w-full hover:text-gray-800">
														<div class="py-2 w-full">
															{item.label}
														</div>
													</a>
												</li>
											{/each}
										{/if}
									</ul>
								{/if}
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</PopoverPanel>
	</Transition>
</Popover>
