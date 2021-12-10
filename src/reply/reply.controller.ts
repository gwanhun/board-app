import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateReplyDto } from './dto/create-reply.dto';
import { Reply } from './reply.entity';
import { ReplyService } from './reply.service';

@Controller('reply')
@UseGuards(AuthGuard())
export class ReplyController {
    constructor(private replyService: ReplyService){}

     //댓글 등록
     @Post('/:id')//게시물 아이디 
     createReply(@Body() createReplyDto: CreateReplyDto,
     @GetUser() user:User, 
     @Param('id') boardId:number): Promise<Reply>{
         return this.replyService.createReply(createReplyDto, user, boardId);
     }

    
}
