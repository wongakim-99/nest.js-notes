import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get('/')
    getAllBoards(): Board[] {
        return this.boardService.getAllBoards();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Board {
        return this.boardService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id : string): Board {
        return this.boardService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id : string): void {
        this.boardService.deleteBoard(id);
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