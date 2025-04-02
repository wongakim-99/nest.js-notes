import {IsString} from 'class-validator';

export class CreateBoardDto {
    @IsString()
    title: string;

    @IsString()
    description: string;
}

// 만약 DTO 를 class 에서 interface 로 바꾸면 어떤 일이 벌어질까?
// export interface CreateBoardDto {
//     title: string;
//     description: string;
// }