"use client";

import { useContext, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { FlightContext } from "@/context/FlightContext";

export default function SearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const flightNumberRef = useRef<HTMLInputElement>(null);
    const flightDateRef = useRef<HTMLInputElement>(null);
    const { setFlights } = useContext(FlightContext);

    async function getFlightInfo(flightNumber: string, flightDate: string) {
        try {
            const response = await fetch(`api/flights?flight_iata=${flightNumber}&flight_date=${flightDate}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (!response.ok) throw new Error("Failed to fetch flight data. Please try again later.");

            setFlights(data);

            localStorage.setItem("flightNumber", flightNumber);
            localStorage.setItem("flightDate", flightDate);
        }
        catch (error) {
            alert(error);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const flightNumber = formData.get("flight-number") as string | null;
        const flightDate = formData.get("flight-date") as string | null;

        if (!flightNumber) {
            alert("Flight Number is required.");
            return;
        }
        if (!flightDate) {
            alert("Flight Scheduled Date is required.");
            return;
        }

        const storedFlightNumber = localStorage.getItem("flightNumber");
        const storedFlightDate = localStorage.getItem("flightDate");

        if (flightNumber === storedFlightNumber && flightDate === storedFlightDate) return; //Prevent unnecessary API calls

        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set("flight_number", flightNumber);
        urlSearchParams.set("flight_date", flightDate);

        router.push(`?${urlSearchParams.toString()}`);
    }

    

    useEffect(() => {
        if (searchParams) {
            const flightNumber = searchParams.get("flight_number") as string | null;
            const flightDate = searchParams.get("flight_date") as string | null;

            if (flightNumber && flightDate && flightNumberRef.current && flightDateRef.current) {
                flightNumberRef.current.value = String(flightNumber);
                flightDateRef.current.value = String(flightDate);
                getFlightInfo(flightNumber, flightDate);
            }
            return;
        }

        const flightNumber = localStorage.getItem("flightNumber");
        const flightDate = localStorage.getItem("flightDate");

        if (flightNumber && flightDate && flightNumberRef.current && flightDateRef.current) {
            flightNumberRef.current.value = flightNumber;
            flightDateRef.current.value = flightDate;
            getFlightInfo(flightNumber, flightDate);
        }
    }, [searchParams]);

    return (
        <form className="flex flex-col lg:flex-row w-full lg:w-max h-max lg:h-12 shadow-sm shadow-black lg:rounded-sm"
            onSubmit={handleSubmit}>
            <input className="w-full lg:w-max h-12 lg:h-full px-5 py-2.5 border-b lg:border-r text-lg"
                ref={flightNumberRef} name="flight-number" type="text" placeholder="Flight No. (e.g. UA902)" />
            <input className="w-full lg:w-max h-12 lg:h-full px-5 py-2.5 lg:border-l text-lg placeholder:hidden"
                ref={flightDateRef} name="flight-date" type="date" />
            <button type="submit" className="flex justify-center items-center w-full lg:w-max h-12 lg:h-full px-5 py-2.5 bg-black lg:rounded-r-sm">
                <FaSearch className="text-xl text-white" size={20} />
            </button>
        </form>
    );
}