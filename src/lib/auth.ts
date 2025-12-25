import { betterAuth } from "better-auth";

import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { username } from "better-auth/plugins"
const URI = process.env.CONNECTION_STRING as string
const client = new MongoClient(URI);
const db = client.db();
import { sendEmail } from './SendEmail'; // your email sending function


export const auth = betterAuth({
    user: {
        additionalFields: {
            role: {
                type: ["user", "admin"],
                required: true,
                defaultValue: "user",
                input: false, // don't allow user to set role
            },
            lang: {
                type: "string",
                required: true,
                defaultValue: "en",
            },
        },
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            void sendEmail({
                to: user.email,
                subject: 'Verify your email address',
                text: `Click the link to verify your email: ${url}`
            })
        },
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
    },
    plugins: [
        username(),

    ],
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
});

