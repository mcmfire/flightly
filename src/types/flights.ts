export interface Flight {
    _id: string;
    number: string;
    iata: string;
    icao: string;
    date: Date | null;
    airline: {
        name: string;
        iata: string;
        icao: string;
    },
    departure: {
        airport: string;
        icao: string;
        iata: string;
        scheduled: Date | null;
        estimated: Date | null;
        actual: Date | null;
        runway: Date | null;
        terminal: string | null;
        gate: string | null;
        timezone: string;
        delay: number | null;
    };
    arrival: {
        airport: string;
        icao: string;
        iata: string;
        scheduled: Date | null;
        estimated: Date | null;
        actual: Date | null;
        runway: Date | null;
        terminal: string | null;
        gate: string | null;
        timezone: string;
    };
    status: "scheduled" | "active" | "landed" | "cancelled" | "incident" | "diverted" | "delayed";
};

export type Flights = Flight[];
