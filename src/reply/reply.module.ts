import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { BoardsModule } from 'src/boards/boards.module';
import { ReplyController } from './reply.controller';
import { ReplyRepository } from './reply.repository';
import { ReplyService } from './reply.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReplyRepository]),
    AuthModule
  ],
  controllers: [ReplyController],
  providers: [ReplyService]
})
export class ReplyModule {}
