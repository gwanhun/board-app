import { Board } from "src/boards/board.entity";
import { Reply } from "src/reply/reply.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['username'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    username: string;

    @Column('varchar')
    password: string;

    @OneToMany(type => Reply, reply => reply.user, { eager: true })
    replys: Reply[];

    @OneToMany(type => Board, board => board.user, { eager: true })
    boards: Board[];

    
}