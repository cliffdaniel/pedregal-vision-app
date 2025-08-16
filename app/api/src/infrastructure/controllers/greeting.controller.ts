import { Controller, Get } from '@nestjs/common';
import { GetGreetingUseCase } from '../../application/use-cases/get-greeting.usecase';
import { Greeting } from '../../domain/entities/greeting.entity';

@Controller('greeting')
export class GreetingController {
  constructor(private readonly getGreetingUseCase: GetGreetingUseCase) {}

  @Get()
  getGreeting(): Greeting {
    return this.getGreetingUseCase.execute();
  }
}
