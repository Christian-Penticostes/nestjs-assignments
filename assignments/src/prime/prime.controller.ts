import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/prime')
export class PrimeController {
    @Get(':number')
    getPrime(@Param('number') number: string) {
        const num = parseInt(number, 10);
        if (isNaN(num)) return { message: 'Invalid number' };
    
        if (num < 2) return { isPrime: false };
        
        for (let i = 2; i * i <= num; i++) {
          if (num % i === 0) return { isPrime: false };
        }
    
        return { isPrime: true };
    }
}
