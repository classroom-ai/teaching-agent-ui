import { betterAuth } from "better-auth";

import Database from "better-sqlite3";
export const auth = betterAuth({
    database: new Database("./sqlite.db"),
    emailAndPassword: {
        enabled: true,
    },
})

// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// const client = new MongoClient("mongodb+srv://Faseeh99:_VdX4YVrG#eq7PN@customers.murp9cg.mongodb.net/?appName=customers");
// const db = client.db();

// export const auth = betterAuth({
//     database: mongodbAdapter(db, {
//         // Optional: if you don't provide a client, database transactions won't be enabled.
//         client
//     }),
// });

