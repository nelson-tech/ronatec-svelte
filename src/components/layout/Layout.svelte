<script lang="ts">
	import Header from "./Header"
	import Footer from "./Footer"
	import modalsMachine from "$machines/modalsMachine"
	import SignInForm from "$components/SignInForm"

	const { send } = modalsMachine
</script>

<Header promo />
<div class="p-8 max-w-6xl mx-auto">
	<slot />
	{$modalsMachine.value}
</div>
<Footer />

<Modal open={$modalsMachine.value === "signInOpen"} setOpen={send}>
	<SignInForm />
</Modal>
