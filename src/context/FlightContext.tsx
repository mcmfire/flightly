"use client";

import React, { createContext, useState, ReactNode } from "react";
import type { Flight } from "@/types/flights";

export const FlightContext = createContext<{
    flights: Flight[] | null;
    setFlights: React.Dispatch<React.SetStateAction<Flight[] | null>>;
}>({
    flights: null,
    setFlights: () => null,
});

export const FlightProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [flights, setFlights] = useState<Flight[] | null>(null);

    const value = React.useMemo(() => ({
        flights,
        setFlights,
    }), [flights]);

    return (
        <FlightContext.Provider value={value}>
            {children}
        </FlightContext.Provider>
    );
};
