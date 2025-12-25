import { createAuthClient } from "better-auth/react"
import { emailOTPClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({

    baseURL: process.env.BETTER_AUTH_URL || "https://classroom-ai-one.vercel.app", // the base url of your auth server
    plugins: [
        emailOTPClient(),
    ]
})
