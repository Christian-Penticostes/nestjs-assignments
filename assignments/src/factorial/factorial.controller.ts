import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/factorial')
export class FactorialController {
    @Get(':number')
    getFactorial(@Param('number') number : string) {
        const num = parseInt(number, 10);

        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }

        return {
            factorial: factorial,
        };
    }
}
