<script lang="ts">
	import Promo from "./Promo.svelte"
	import Logo from "./Logo.svelte"
	import MainMenu from "./mainMenu/index.svelte"

	export let promo = false
</script>

<header>
	<nav aria-label="Top" class="border-b bg-white border-gray-200 relative">
		<!-- Promo -->
		{#if promo}
			<Promo />
		{/if}
		<div
			class="bg-white mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
		>
			<!-- Logo (lg+) -->
			<div class="hidden lg:flex lg:items-center">
				<Logo />
			</div>

			<MainMenu />

			<!-- MobileNav -->

			<!-- Logo (lg-) -->
			<div class="lg:hidden">
				<Logo />
			</div>
		</div>
	</nav>
</header>
