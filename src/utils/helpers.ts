import type { Flight } from "@/types/flights";
import { notifySlack } from "./webhooks";

export function filterFlightData(data: [], date: string | null): Flight[] {
    const flights = data.map((item) => {
        const { flight, airline, departure, arrival, flight_date, flight_status } = item;

        const filteredData: Flight = {
            _id: `${flight["iata"]}-${String(flight_date).replace(/-/g, "")}`, // Unique ID
            number: flight["number"],
            iata: flight["iata"],
            icao: flight["icao"],
            date: new Date(flight_date),
            airline: {
                name: airline["name"],
                iata: airline["iata"],
                icao: airline["icao"],
            },
            departure: {
                airport: departure["airport"],
                icao: departure["icao"],
                iata: departure["iata"],
                scheduled: departure["scheduled"] ? new Date(departure["scheduled"]) : null,
                estimated: departure["estimated"] ? new Date(departure["estimated"]) : null,
                actual: departure["actual"] ? new Date(departure["actual"]) : null,
                runway: departure["actual_runway"] ? new Date(departure["actual_runway"]) : null,
                terminal: departure["terminal"],
                gate: departure["gate"],
                timezone: departure["timezone"],
                delay: Number(departure["delay"]),
            },
            arrival: {
                airport: arrival["airport"],
                icao: arrival["icao"],
                iata: arrival["iata"],
                scheduled: arrival["scheduled"] ? new Date(arrival["scheduled"]): null,
                estimated: arrival["estimated"] ? new Date(arrival["estimated"]): null,
                actual: arrival["actual"] ? new Date(arrival["actual"]): null,
                runway: arrival["actual_runway"] ? new Date(arrival["actual_runway"]): null,
                terminal: arrival["terminal"],
                gate: arrival["gate"],
                timezone: arrival["timezone"],
            },
            status: Number(departure["delay"]) >= 60 ? "delayed" : flight_status,
        };

        if (Number(departure["delay"]) >= 60) {
            notifySlack(flight["iata"], Number(departure["delay"]));
        }

        return filteredData;
    });

    if (!date) return flights;

    return flights.filter((flight) => (date === flight.date?.toISOString().split('T')[0]));
}

export function convertDateToString(dateString: Date | null): string {
    if (!dateString) return '';

    const date = new Date(dateString);

    const formattedDate = date.toLocaleString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).replaceAll(' ', '-').replace(',-', ' | ').toUpperCase()

    return formattedDate;
}