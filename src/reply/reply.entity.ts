import { User } from "src/auth/user.entity";
import { Board } from "src/boards/board.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reply extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column('int')
    boardId: number;

    @Column('varchar')
    title: string;

    @Column('varchar')
    content: string;

    @ManyToOne(type => User, user => user.replys, { eager: false })
    user: User;

    @ManyToOne(type => Board, user => user.replys)
    board: Board;

    
}