// 변수의 타입만을 정하기 위해서 interface 사용
export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}
