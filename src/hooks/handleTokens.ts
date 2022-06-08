import type { RequestEvent } from "@sveltejs/kit/types/internal"
import { parse } from "cookie"

export async function handleTokens({
	event,
	resolve,
}: {
	event: RequestEvent
	resolve: any
}) {
	const cookies = parse(event.request.headers.get("cookie") || "")

	cookies && console.log("COOKIES", cookies)

	cookies["cart-session"] &&
		event.request.headers.set(
			"woocommerce-session",
			`Session ${cookies["cart-session"]}`
		)

	const response = await resolve(event)

	return response
}
