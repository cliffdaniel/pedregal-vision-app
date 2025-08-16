import { Greeting } from "../../domain/entities/Greeting";
import { GreetingRepository } from "../../domain/repositories/GreetingRepository";

export class GetGreetingUseCase {
    constructor(private readonly repo: GreetingRepository) {}

    async execute(): Promise<Greeting> {
        return this.repo.getGreeting();
    }
}
