import { IsNotEmpty } from "class-validator";

export class CreateReplyDto{
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    content: string;


}