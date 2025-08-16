import axios from "axios";

export const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://pedregal-vision-app.onrender.com",
    timeout: 5000
});
