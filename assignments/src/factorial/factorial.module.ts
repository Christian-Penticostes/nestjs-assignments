import { Module } from '@nestjs/common';
import { FactorialController } from './factorial.controller';

@Module({
  controllers: [FactorialController]
})
export class FactorialModule {}
