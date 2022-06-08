import { createMachine } from "xstate"

export const initAuthMachine = () =>
	/** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgOjVsAdugJYDGyJBUAxBAPYFjbEEBudA1k6ZmKRwEEMmRKAAOdWMRINRIAB6IATAEYl2AAwqArADZdAdgCcR7QBYAHFt0AaEAE9lui9iWmNZ8xqMBmbUZUAX0C7PBwwwhJyShowACc4ujjsMQAbCgAzJIBbbB4+QWE5CSkZAjlFBG0NbAslDR9VfQsDPQsjO0cEMw9sXRU-A2MGtzMlYNDhbCkoRggASQJqABkAeQBxVYBVABViyWliWSQFRG0DdTMDXXOejW12lU7EFXvanw-+iwe-SwmQMLTYizSCrDArDbzABy+1KR3KJ0qFzM2BUJiUZh6RkeuiUz26RnUQyUPmxPW+dQa-0BMwILCgi2oAFFWJEAARKWGHY6gSrOFxmfQGHxmPwaDQ3fFKZyudyeLF+ALUqa0+lg9C0BhgBBs9BcsoVM5WbAGFQtXTo0mCixSkzYbTaJQWTzGAL6D7BEIgAh0CBwOSAiJEMgUen6+GG7p4hyIIw1EwJsZXe6YozKrDYVJ0ZAQMMnErchG8xBmM21DwWi4aKymB1S-om9zVa4GcW49M4WmQRbhnmnboqFGmyxXEUOuOmfF2iwfEUYsYqXQ+YUdoEgiDq3tF-vk1wLkw+G6eNv4yy6VwXZftQmk7yr1VUHv5g4GxGIC3npTaUluaUqAx1E8MYIIePjYI0pa+A0gpGKW97AnSVCbs+cJ9ny7QmhYahYU6i6ltGXTTrOSYLkuK5emEW6Rma+L-tgCYmGo4rmISuieoEQA */
	createMachine({
		tsTypes: {} as import("./authMachine.typegen").Typegen0,
		context: { auth: null, error: null },
		id: "auth",
		initial: "authenticating",
		states: {
			authenticating: {
				invoke: {
					src: (ctx, event) => {
						console.log({ ctx, event })
						return new Promise((resolve, reject) => {
							// simulate a slow auth method
							setTimeout(resolve, 1000)
						})
					},
					id: "checkAuth",
					onDone: [
						{
							target: "signedIn",
						},
					],
					onError: [
						{
							target: "signedOut",
						},
					],
				},
			},
			loading: {},
			signedIn: {
				on: {
					LOGOUT: {
						target: "signingOut",
					},
				},
			},
			signedOut: {
				on: {
					LOGIN: {
						target: "signingIn",
					},
				},
			},
			signingIn: {
				on: {
					"Event 2": {
						target: "signedIn",
					},
				},
			},
			signingOut: {
				on: {
					"done: t": {
						target: "signedOut",
					},
				},
			},
		},
	})
