import { useMachine } from "@xstate/svelte"
import { createMachine, interpret } from "xstate"

export const modalsMachine =
	/** @xstate-layout N4IgpgJg5mDOIC5QFsD2ECGAbWA6AxlqrJAMSoAOYAdgMoCWU1AktYqBcfQC72ptIQAD0QBaAIwAGSbmkAOAEwB2OQFY5ANg0AWJRoCcAGhABPRPplylkhQrniNk1ePEBmVQF8PxtJhy5YRhZqAHkqalJCYjB2EE5A3n5YkQRROwVcbQNbV205PILtYzNUvNxxBX0lXPzavM8vY2p0OFjfbDwokghY+J4+AVAUiTtM1W1xyYnp4rFx3A1K63FVVQ11cW1XRpB2-0CmVjCaXq5EweExdMzshRqC-KLTRBXLawVtSrX9CrUdvfggj652SYlckg0N30OQehVmqQqSgWlR0VQM4j0bi8XiAA */
	createMachine({
		tsTypes: {} as import("./modalsMachine.typegen").Typegen0,
		id: "modals",
		initial: "closed",
		states: {
			closed: {
				on: {
					openSignIn: {
						target: "signInOpen",
					},
				},
			},
			signInOpen: {
				on: {
					close: {
						target: "closed",
					},
				},
			},
		},
	})

const service = interpret(modalsMachine).start()

export default service
