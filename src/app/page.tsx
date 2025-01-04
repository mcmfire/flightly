import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import FlightInfo from "@/components/FlightInfo";
import Overlay from "@/components/Overlay";

export default function Home() {

    return (
        <section className="flex flex-col items-center w-full min-h-screen p-5 lg:p-10 gap-10">
            <header className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full h-max gap-5 lg:gap-0">
                <h1 className="text-2xl lg:text-4xl font-serif">Flightly.</h1>
                <Suspense>
                    <SearchBar />
                </Suspense>
            </header>
            <FlightInfo />
            <Overlay />
        </section>
    );
}
