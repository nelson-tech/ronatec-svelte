<script lang="ts">
	import ProfileMenu from "./ProfileMenu"
	import SearchButton from "../buttons/Search"
	import CartButton from "../buttons/Cart"
</script>

<div class="flex-1 flex items-center justify-end">
	<div class="flex items-center lg:ml-8">
		<div class="hidden lg:flex mr-8">
			<SearchButton />
		</div>

		<ProfileMenu />
		<div class="ml-4 flow-root lg:ml-8">
			<CartButton />
		</div>
	</div>
</div>
