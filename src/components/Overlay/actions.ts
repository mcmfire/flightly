"use server";

import { cookies } from "next/headers";

export async function saveWebhook(webhook: string) {
    const cookieStore = await cookies();

    cookieStore.set("slackWebhook", webhook);
}