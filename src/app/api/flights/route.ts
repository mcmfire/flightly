import type { Flight } from "@/types/flights";
import { filterFlightData } from "@/utils/helpers";
import { FLIGHTS_RESULT_LIMIT } from "@/utils/constants";

export const revalidate = 60;

export async function GET(request: Request) {
    const url = new URL(request.url);

    try {
        const API_ACCESS_KEY = process.env.API_ACCESS_KEY;

        if (!API_ACCESS_KEY) throw new Error("API_ACCESS_KEY is missing");

        let query = `&limit=${FLIGHTS_RESULT_LIMIT}`; //Limit the number of results
        const flightDate = url.searchParams.get("flight_date");

        url.searchParams.delete("flight_date"); //Flight date is a paid parameter
        url.searchParams.forEach((value, key) => {
            query += `&${key}=${value}`;
        });

        const response = await fetch(`https://api.aviationstack.com/v1/flights?access_key=${API_ACCESS_KEY}${query}`);
        
        const data = await response.json();

        if (!response.ok) throw new Error(data.error.message);

        const flights: Flight[] = filterFlightData(data.data, flightDate); //Clean up the data

        return Response.json(flights);
    }
    catch (error) {
        console.error(error);
        
        return Response.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
    }
}