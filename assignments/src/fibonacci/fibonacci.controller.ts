import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/fibonacci')
export class FibonacciController {
    @Get(':number')
    getFibonnaci(@Param('number') number : string) {
        const num = parseInt(number, 10);
        if (isNaN(num) || num < 0) {
            return 'Please provide a non-negative integer.';
        }

        if (num === 1) return [0];

        let sequence = [0, 1];
        for (let i = 2; i < num; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return { sequence };
    }
}
