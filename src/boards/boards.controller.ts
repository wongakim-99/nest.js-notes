import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get('/')
    getAllBoards(): Board[] {
        return this.boardService.getAllBoards();
    }
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