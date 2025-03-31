import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}
}


// @Controller('boards')
// export class BoardsController {
//     boardsService: BoardsService;
//
//     constructor(boardsService: BoardsService) {
//         this.boardsService = boardsService;
//     }
//
//     // @Get()
//     // getAllTask(): Board[] {
//     //     return this.boardsService.getAllBoards();
//     // }
// }