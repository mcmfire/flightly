"use client";

import Image from "next/image";
import SlackLogo from "@/../public/slack-logo.webp";

interface QuickToolProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QuickTool({ setIsModalOpen }: Readonly<QuickToolProps>) {
    return (
        <div className="fixed bottom-0 right-0 px-5 lg:px-10 py-5">
            <button className="flex items-center p-3 gap-3 bg-white shadow-sm shadow-black rounded-md"
                type="button" onClick={() => setIsModalOpen(true)}>
                <Image className="shrink-0" src={SlackLogo} alt="Slack Logo" width={30} height={30} />
                Get Notified
            </button>
        </div>
    );
}