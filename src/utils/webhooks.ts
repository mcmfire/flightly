"use server";

import { cookies } from "next/headers";

export async function notifySlack(flightNumber: string, delay: number) {
    const cookieStore = await cookies();

    try {
        const webhook = cookieStore.get("slackWebhook");

        if (!webhook) return;

        const response = await fetch(webhook.value, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: `Delayed Flight Alert: Flight ${flightNumber} is delayed by approximately ${delay} minutes.`,
            }),
        });

        if (!response.ok) throw new Error(response.statusText);
    }
    catch (error) {
        console.error(error);
    }
}