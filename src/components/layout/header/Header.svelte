<script lang="ts">
	import Promo from "./Promo"
	import Logo from "./Logo"
	import MainMenu from "./MainMenu"
	import UserNav from "./UserNav"

	import MobileMenuButton from "./buttons/MobileMenu"
	import SearchButton from "./buttons/Search"

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

			<!-- Main Menu (lg+) -->
			<MainMenu />

			<!-- Left-side nav (lg-) -->
			<div class="flex-1 flex items-center lg:hidden">
				<MobileMenuButton />

				<SearchButton />
			</div>

			<!-- Logo (lg-) -->
			<div class="lg:hidden">
				<Logo />
			</div>

			<UserNav />
		</div>
	</nav>
</header>
