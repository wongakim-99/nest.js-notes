import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { NotFoundException } from '@nestjs/common';

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

    // ID 값을 통해 게시물 조회 -> 예외 처리(오직 Board 만 반환하고 싶은 경우)
    getBoardById(id: string): Board {
        const found = this.boards.find((board) => board.id === id);
        if (!found) {
            throw new NotFoundException(`해당 게시물 ID(${id})를 찾을 수 없습니다.`);
        }
        return found;
        // return this.boards.find((board) => board.id === id);
    }

    // ID 값을 통해 게시물 조회 -> 반환 타입을 바꿔서 undefined 허용 (대안)
    // getBoardById(id : string): Board | undefined {
    //     return this.boards.find((board) => board.id === id);
    // }

    // ID 값을 통해 게시물 조회 -> 오류 나던 코드 업데이트
    // getBoardById(id: string): Board {
    //     return this.boards.find((board) => board.id === id);
    // }
}
