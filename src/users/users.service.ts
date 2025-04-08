import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

import { UserCreateRequestDto } from './dto/request/user-create-request.dto';
import { UserUpdateRequestDto } from './dto/request/user-update-request.dto';

@Injectable()
export class UsersService {
    async createUser(name: string, email: string, password: string) {
        // 1. 이미 유저가 존재하는지 확인
        await this.checkUserExists(email);

        // 2. uuid 를 통해 토큰 발급
        const signupVerifyToken = uuid();

        // 3. DB 에 회원가입 정보 저장
        await this.saveUser(name, email, password, signupVerifyToken);

        // 4. 회원가입 이메일 전송
        await this.sendMemberJoinEmail(email, signupVerifyToken);
    }

    private async checkUserExists(email: string) {
        return;  // DB 연동 후 구현
    }

    private async saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
        return;  // DB 연동 후 구현
    }

    private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
        return;
    }
}
