import { Greeting } from "../entities/Greeting";

export interface GreetingRepository {
    getGreeting(): Promise<Greeting>;
}
