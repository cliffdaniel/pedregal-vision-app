import { GreetingHttpRepository } from "../../infrastructure/http/GreetingHttpRepository";
import { GetGreetingUseCase } from "../../application/use-cases/getGreetingUseCase";
import { GreetingCard } from "../components/GreetingCard";

export default async function GreetingPage() {
    const repo = new GreetingHttpRepository();
    const useCase = new GetGreetingUseCase(repo);

    const greeting = await useCase.execute();

    return <GreetingCard greeting={greeting} />;
}
