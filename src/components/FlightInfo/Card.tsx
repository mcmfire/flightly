"use client";

import type { Flight } from "@/types/flights";
import { IoMdAirplane } from "react-icons/io";
import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import { TbBuildingAirport } from "react-icons/tb";
import { convertDateToString } from "@/utils/helpers";
import { FLIGHT_COLOR_CODES } from "@/utils/constants";

interface CardProps {
    flight: Flight;
}

export default function Card({ flight }: Readonly<CardProps>) {
    return (
        <div className="flex flex-col lg:flex-row w-full h-full rounded-md shadow-sm shadow-black font-mono">
            <DetailsSection flight={flight} />
            <StatusSection flight={flight} />
        </div>
    );
}

function DetailsSection({ flight }: Readonly<CardProps>) {
    return (
        <div className="flex flex-col w-full lg:w-2/3 h-max lg:h-full">
            <div className="flex justify-center lg:justify-start items-center w-full h-max p-2.5 lg:p-5 gap-2.5 bg-gray-300">
                <TbBuildingAirport className="shrink-0 text-2xl" size={24} />
                <h2 className="text-lg lg:text-2xl font-semibold">
                    {flight.airline.name}
                </h2>
            </div>
            <div className="flex flex-col justify-around w-full h-full p-2.5 gap-5 border-0 lg:border-r-4 border-dashed border-gray-400">
                <Departure flight={flight} />
                <Arrival flight={flight} />
            </div>
        </div>
    );
}

function StatusSection({ flight }: Readonly<CardProps>) {
    return (
        <div className="flex flex-col w-full lg:w-1/3 h-full">
            <div className="flex justify-center items-center w-full h-max p-2.5 lg:p-5"
                style={{ backgroundColor: FLIGHT_COLOR_CODES[flight.status] || "#9ca3af" }}>
                <p className="text-2xl font-semibold">{flight.status.toUpperCase() || "N/A"}</p>
            </div>
            <div className="flex flex-col justify-center w-full h-full p-2.5 gap-5">
                <IoMdAirplane className="self-center text-8xl" size={96} />
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl lg:text-3xl font-semibold">{flight.iata || "N/A"}</h2>
                    <p className="text-lg">Flight No.</p>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl lg:text-lg font-semibold">{flight.departure.iata || "N/A"}</h2>
                        <p className="text-lg">From</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl lg:text-lg font-semibold">{flight.arrival.iata || "N/A"}</h2>
                        <p className="text-lg">To</p>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl lg:text-xl font-semibold">{convertDateToString(flight.departure.scheduled) || "N/A"}</h2>
                        <p className="text-lg">Departure Time</p>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-center text-center lg:text-start">
                        <h2 className="text-2xl lg:text-xl font-semibold">{flight.departure.terminal || "N/A"}</h2>
                        <p className="text-lg">Terminal</p>
                    </div>
                    <div className="flex flex-col items-center text-center lg:text-start">
                        <h2 className="text-2xl lg:text-xl font-semibold">{flight.departure.gate || "N/A"}</h2>
                        <p className="text-lg">Gate</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Departure({ flight }: Readonly<CardProps>) {
    return (
        <div className="flex flex-col w-full h-max px-2.5 lg:px-5 pt-2.5 gap-2.5">
            <div className="flex justify-center lg:justify-start items-center gap-2.5">
                <PiAirplaneTakeoffFill className="shrink-0 text-4xl" size={36} />
                <h3 className="text-xl lg:text-2xl">DEPARTURE</h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full h-max gap-5 lg:gap-0">
                <h4 className="text-lg lg:text-2xl text-center lg:text-start font-semibold">
                    {flight.departure.airport || "N/A"}
                </h4>
                <hr className="shrink-0 w-12 bg-gray-400" />
                <div className="shrink-0 flex justify-center lg:justify-start items-center gap-2.5 lg:gap-5 text-lg lg:text-2xl">
                    <p className="text-center lg:text-start">IATA: <span className="font-semibold">{flight.departure.iata || "N/A"}</span></p>
                    <p className="text-gray-400">●</p>
                    <p className="text-center lg:text-start">ICAO: <span className="font-semibold">{flight.departure.icao || "N/A"}</span></p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full h-max text-base lg:text-xl">
                <div className="flex flex-col items-center lg:items-start w-max h-full">
                    <p>
                        Scheduled: <span className="font-semibold">{convertDateToString(flight.departure.scheduled) || "N/A"}</span>
                    </p>
                    <p>
                        Estimated   : <span className="font-semibold">{convertDateToString(flight.departure.estimated) || "N/A"}</span>
                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-start w-max h-full">
                    <p>
                        Actual: <span className="font-semibold">{convertDateToString(flight.departure.actual) || "N/A"}</span>
                    </p>
                    <p>
                        Runway: <span className="font-semibold">{convertDateToString(flight.departure.runway) || "N/A"}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-5 w-full h-max text-base lg:text-xl">
                <p>Terminal: <span className="font-semibold">{flight.departure.terminal || "N/A"}</span></p>
                <p>Gate: <span className="font-semibold">{flight.departure.gate || "N/A"}</span></p>
                <p>Timezone: <span className="font-semibold">{flight.departure.timezone || "N/A"}</span></p>
            </div>
        </div>
    );
}

function Arrival({ flight }: Readonly<CardProps>) {
    return (
        <div className="flex flex-col w-full h-max px-2.5 lg:px-5 pb-2.5 gap-2.5">
            <div className="flex justify-center lg:justify-start items-center gap-2.5">
                <PiAirplaneLandingFill className="text-4xl" size={36} />
                <h3 className="text-xl lg:text-2xl">ARRIVAL</h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full h-max gap-5 lg:gap-0">
                <h4 className="text-lg lg:text-2xl text-center lg:text-start font-semibold">
                    {flight.arrival.airport || "N/A"}
                </h4>
                <hr className="shrink-0 w-12 bg-gray-400" />
                <div className="shrink-0 flex items-center gap-2.5 lg:gap-5 text-lg lg:text-2xl">
                    <p>IATA: <span className="font-semibold">{flight.arrival.iata || "N/A"}</span></p>
                    <p className="text-gray-400">●</p>
                    <p>ICAO: <span className="font-semibold">{flight.arrival.icao || "N/A"}</span></p>
                </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full h-max text-base lg:text-xl">
                <div className="flex flex-col items-center lg:items-start w-max h-full">
                    <p>
                        Scheduled: <span className="font-semibold">{convertDateToString(flight.arrival.scheduled) || "N/A"}</span>
                    </p>
                    <p>
                        Estimated   : <span className="font-semibold">{convertDateToString(flight.arrival.estimated) || "N/A"}</span>
                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-start w-max h-full">
                    <p>
                        Actual: <span className="font-semibold">{convertDateToString(flight.arrival.actual) || "N/A"}</span>
                    </p>
                    <p>
                        Runway: <span className="font-semibold">{convertDateToString(flight.arrival.runway) || "N/A"}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-5 w-full h-max text-base lg:text-xl">
                <p>Terminal: <span className="font-semibold">{flight.arrival.terminal || "N/A"}</span></p>
                <p>Gate: <span className="font-semibold">{flight.arrival.gate || "N/A"}</span></p>
                <p>Timezone: <span className="font-semibold">{flight.arrival.timezone || "N/A"}</span></p>
            </div>
        </div>
    );
}
