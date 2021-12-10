import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateReplyDto } from "./dto/create-reply.dto";
import { Reply } from "./reply.entity";

@EntityRepository(Reply)
export class ReplyRepository extends Repository<Reply>{
    async createReply(createReplyDto: CreateReplyDto, user: User, boardId: number): Promise<Reply>{
    const {title, content} = createReplyDto;
       
       const reply = this.create({
           title,
           content,
           user,
           boardId
       })
        await this.save(reply);
        return reply;
    }
}