import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const tmpPort = configService.get<number>('PORT');

    if (tmpPort === undefined) {
        throw new Error('PORT 환경변수가 설정되지 않았습니다.')
    }
    const port: number = tmpPort;

    // 환경변수 확인용 로그
    console.log(`Loaded port from .env : ${port}`);

    // 서버가 실제로 어떤 포트로 실행 중인지 출력
    console.log(`Application is running on : http://localhost:${port}`);

    await app.listen(port);
}

bootstrap();
