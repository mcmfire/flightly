"use client";

import QuickTool from "@/components/QuickTool";
import Modal from "@/components/Modal";
import { useEffect, useRef, useState } from "react";
import { saveWebhook } from "./actions";

export default function Overlay() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const slackWebhookRef = useRef<HTMLInputElement>(null);

    function handleSlackSave() {
        const slackWebhook = slackWebhookRef.current;
        if (!slackWebhook) return;

        saveWebhook(slackWebhook.value);
        localStorage.setItem("slackWebhook", slackWebhook.value);
    }

    useEffect(() => {
        if (!isModalOpen) return;

        const slackWebhook = slackWebhookRef.current;

        if (slackWebhook) {
            const savedWebhook = localStorage.getItem("slackWebhook");
            slackWebhook.value = savedWebhook ?? "";
        }
    }, [isModalOpen]);

    return (
        <>
            <QuickTool setIsModalOpen={setIsModalOpen} />
            {isModalOpen && (
                <Modal title="Slack Notifications" setIsModalOpen={setIsModalOpen}>
                    <p>Enter a Slack webhook to receive notifications whenever a flight is delayed.</p>
                    <div className="flex">
                        <input ref={slackWebhookRef} type="text" className="w-full p-2.5 border border-gray-300 rounded-l-md" />
                        <button type="button" className="px-5 py-2.5 text-white bg-black rounded-r-md"
                            onClick={handleSlackSave}>
                            Save
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
}