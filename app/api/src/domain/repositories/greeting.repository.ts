import { Greeting } from '../entities/greeting.entity';

export abstract class GreetingRepository {
  abstract getGreeting(): Greeting;
}
