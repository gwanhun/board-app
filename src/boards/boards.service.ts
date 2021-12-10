import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { getRepository } from 'typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository
    ){}

    //전체 게시물 목록 가져오기
    async getAllBoard(){
        const board = await getRepository(Board)
        .createQueryBuilder('board')
        .leftJoinAndSelect('replys','reply','board.Id = reply.boadId')
        .getMany();

        return board;
    }
    //.where('board.userId = :id', {id:user})
    
    //게시물 등록
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>{
        return this.boardRepository.createBoard(createBoardDto, user);
    }

     //아이디에 해당하는 게시물 가져오기
     async getBoardById(id: number): Promise <Board>{
        const found = await this.boardRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Can't find Board wirh id ${id}`)
        }
        return found;
    }

     //유저 본인이 등록한 해당 게시물 삭제
     async deleteBoard(id: number, user: User): Promise<void>{
        const result = await this.boardRepository.delete({id, user});

        if(result.affected === 0){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
    }
}
