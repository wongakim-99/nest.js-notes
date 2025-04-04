import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [
        BoardStatus.PUBLIC,
        BoardStatus.PRIVATE,
    ]

    transform(value: any) {
        console.log('value', value);
        console.log('typeof value', typeof value);
        console.log('instanceof String', value instanceof String);

        if (typeof value !== 'string') {
            throw new BadRequestException('Status must be a string');
        }

        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} isn't in the status validation`)
        }
        return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}