import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    constructor(private boardsService: BoardsService){}

     //전체 게시물 목록+댓글 가져오기
     @Get()
     getAllBoard(){
         return this.boardsService.getAllBoard();
     }
 
    //게시물 등록
     @Post()
     createBoard(@Body() createBoardDto: CreateBoardDto,
     @GetUser() user:User): Promise<Board>{
         return this.boardsService.createBoard(createBoardDto, user);
     }
 
     //아이디에 해당하는 게시물 가져오기
     @Get('/:id')
     getBoardById(@Param('id') id:number) : Promise<Board> {
         return this.boardsService.getBoardById(id);
     }
 
     //유저 본인이 등록한 해당 게시물 삭제
     @Delete('/:id')
     deleteBoard(@Param('id', ParseIntPipe) id,
     @GetUser() user:User): Promise<void>{
         return this.boardsService.deleteBoard(id, user);
     }

}
