"use client";

import { useContext } from "react";
import { FlightContext } from "@/context/FlightContext";
import Card from "./Card";
import { MdAirplanemodeInactive } from "react-icons/md";

export default function FlightInfo() {
    const { flights } = useContext(FlightContext);

    if (!flights) return;

    return (
        <>
            {flights.map((flight, index) => (
                <Card key={`${flight._id}-${index}`} flight={flight} />
            ))}
            {flights && flights.length === 0 && (
                <>
                    <MdAirplanemodeInactive className="text-5xl" size={48} />
                    <p className="lg:text-lg">No matching flights found in the search.</p>
                </>
            )}
        </>
    );
}