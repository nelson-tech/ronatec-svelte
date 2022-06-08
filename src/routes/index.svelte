<script context="module" lang="ts">
	import {
		KQL_GetCart,
		KQL_GetProductsWithCategories,
		KQL_GetUser,
	} from "$lib/api/graphql/stores"
	import serverQuery from "$wp/serverQuery"
	import SignInForm from "$components/SignInForm"

	const getCart = {
		store: KQL_GetCart,
	}
	const products = { store: KQL_GetProductsWithCategories, variables: {} }
	export const load = serverQuery([{ store: KQL_GetUser }])
</script>

<script lang="ts">
	$: user = $KQL_GetUser.data?.customer
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
{JSON.stringify(user)}
<SignInForm />
