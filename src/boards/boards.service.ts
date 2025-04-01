import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {

    //다른 컴포넌트에서 boards 라는 배열 수정 가능성 차단하기 위해 private 선언
    private boards: Board[] = [];  // 게시판에 대한 데이터 담는 배열

    getAllBoards(): Board[] {
        return this.boards;
    }
}
