import { Module } from '@nestjs/common';
import { GreetingController } from './infrastructure/controllers/greeting.controller';
import { GetGreetingUseCase } from './application/use-cases/get-greeting.usecase';
import { GreetingInMemoryRepository } from './infrastructure/repositories/greeting.inmemory.repository';
import { GreetingRepository } from './domain/repositories/greeting.repository';

@Module({
  imports: [],
  controllers: [GreetingController],
  providers: [
    GetGreetingUseCase,
    {
      provide: GreetingRepository,
      useClass: GreetingInMemoryRepository,
    },
  ],
})
export class AppModule {}
