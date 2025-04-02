import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {

    //다른 컴포넌트에서 boards 라는 배열 수정 가능성 차단하기 위해 private 선언
    private boards: Board[] = [];  // 게시판에 대한 데이터 담는 배열

    // 전체 게시글 조회 메서드
    getAllBoards(): Board[] {
        return this.boards;
    }

    // 게시물 생성 메서드
    createBoard(createBoardDto: CreateBoardDto): Board {
        const {title, description} = createBoardDto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        }

        this.boards.push(board);
        return board;
    }
}
