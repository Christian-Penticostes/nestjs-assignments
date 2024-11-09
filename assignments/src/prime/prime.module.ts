import { Module } from '@nestjs/common';
import { PrimeController } from './prime.controller';

@Module({
  controllers: [PrimeController]
})
export class PrimeModule {}
