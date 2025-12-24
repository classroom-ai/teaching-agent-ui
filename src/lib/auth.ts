import { betterAuth } from "better-auth";

import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { username } from "better-auth/plugins"
const client = new MongoClient("mongodb+srv://Faseeh99:_VdX4YVrG%23eq7PN@customers.murp9cg.mongodb.net/?appName=customers");
const db = client.db();
import { sendEmail } from './SendEmail'; // your email sending function


export const auth = betterAuth({
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

