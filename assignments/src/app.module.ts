import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactorialModule } from './factorial/factorial.module';

@Module({
  imports: [FactorialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
