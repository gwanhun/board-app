import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateReplyDto } from './dto/create-reply.dto';
import { Reply } from './reply.entity';
import { ReplyRepository } from './reply.repository';

@Injectable()
export class ReplyService {
    constructor(
        @InjectRepository(ReplyRepository)
        private replyRepository: ReplyRepository
    ){}

     //댓글 등록
     createReply(createReplyDto: CreateReplyDto, user: User, boardId: number): Promise<Reply>{
        return this.replyRepository.createReply(createReplyDto, user, boardId);
    }

    async getAllBoard(){
        
        return this.replyRepository.find({ relations: ["user"] });
    }
}
