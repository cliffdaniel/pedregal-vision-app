import { Injectable } from '@nestjs/common';
import { GreetingRepository } from '../../domain/repositories/greeting.repository';
import { Greeting } from '../../domain/entities/greeting.entity';

@Injectable()
export class GreetingInMemoryRepository implements GreetingRepository {
  getGreeting(): Greeting {
    return new Greeting('Hola desde Pedregal Vision');
  }
}
