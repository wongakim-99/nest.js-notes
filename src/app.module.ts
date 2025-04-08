import { Module } from '@nestjs/common';

import { BoardsModule } from './boards/boards.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        UsersModule,
        BoardsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
