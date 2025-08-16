import { Greeting } from "../../domain/entities/Greeting";
import { GreetingRepository } from "../../domain/repositories/GreetingRepository";
import { httpClient } from "../../../shared/http/httpClient";

export class GreetingHttpRepository implements GreetingRepository {
    async getGreeting(): Promise<Greeting> {
        const response = await httpClient.get<Greeting>("/greeting");
        return response.data;
    }
}
