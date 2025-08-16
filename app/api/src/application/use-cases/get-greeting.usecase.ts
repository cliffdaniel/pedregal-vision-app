import { Injectable } from '@nestjs/common';
import { GreetingRepository } from '../../domain/repositories/greeting.repository';
import { Greeting } from '../../domain/entities/greeting.entity';

@Injectable()
export class GetGreetingUseCase {
  constructor(private readonly greetingRepo: GreetingRepository) {}

  execute(): Greeting {
    return this.greetingRepo.getGreeting();
  }
}
