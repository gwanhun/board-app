import { User } from "src/auth/user.entity";
import { Reply } from "src/reply/reply.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar')
    title: string;

    @Column('varchar')
    content: string;

    @CreateDateColumn({
        name:"created_at"
      })
      createdAt:Date;
    
    @UpdateDateColumn({
        name:"updated_at"
      })
      updatedAt:Date;

    @ManyToOne(type => User, user => user.boards, { eager: false })
    user: User;

    @OneToMany(type => Board, board => board.replys)
    replys: Reply[]
    
    

}