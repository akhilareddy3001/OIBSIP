require("dotenv").config();

const { initializeApp, cert, getApps } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

// Check variables WITHOUT printing secrets
console.log("Firebase Project ID loaded:", !!projectId);
console.log("Firebase Client Email loaded:", !!clientEmail);
console.log("Firebase Private Key loaded:", !!privateKey);

if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
        "Firebase credentials missing from server/.env"
    );
}

if (getApps().length === 0) {
    initializeApp({
        credential: cert({
            projectId,
            clientEmail,
            privateKey: privateKey.replace(/\\n/g, "\n"),
        }),
    });
}

module.exports = getAuth();