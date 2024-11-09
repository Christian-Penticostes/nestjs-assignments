import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeModule } from './prime/prime.module';

@Module({
  imports: [PrimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
