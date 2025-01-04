"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import SlackLogo from "@/../public/slack-logo.webp";
import Image from "next/image";

interface ModalProps {
    title: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export default function Modal({ title, setIsModalOpen, children }: Readonly<ModalProps>) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="w-full md:w-3/4 lg:w-1/3 bg-white rounded-md shadow-lg">
                <div className="flex justify-between items-center px-2.5 py-2.5 bg-gray-400 rounded-t-md">
                    <div className="flex gap-2.5">
                        <Image className="shrink-0" src={SlackLogo} alt="Slack Logo" width={24} height={24} />
                        <p className="font-semibold">{title}</p>
                    </div>
                    <button type="button" className="p-2 rounded-md hover:bg-gray-300"
                        onClick={() => setIsModalOpen(false)}>
                        <IoCloseSharp className="text-2xl" size={24} />
                    </button>
                </div>
                <div className="flex flex-col p-5 gap-5">
                    {children}
                </div>
            </div>
        </div>
    );
}