import { Test, TestingModule } from '@nestjs/testing';
import { PrimeController } from './prime.controller';

describe('PrimeController', () => {
  let controller: PrimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimeController],
    }).compile();

    controller = module.get<PrimeController>(PrimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
