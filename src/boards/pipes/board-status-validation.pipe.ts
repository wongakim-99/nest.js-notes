import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

    transform(value: string) {
        console.log('value', value);
        console.log('typeof value', typeof value);

        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(
                `${value} isn't in the status validation`,
            );
        }
        return value;
    }

    private isStatusValid(status: unknown): boolean {
        if (typeof status !== 'string') return false;

        const index = this.StatusOptions.indexOf(status as BoardStatus);
        return index !== -1;
    }
}

// import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
//
// export class BoardStatusValidationPipe implements PipeTransform {
//     transform(value: any, metadata: ArgumentMetadata): any {
//         console.log('value', value);
//         console.log('metadata', metadata);
//
//         return value;
//     }
// }
