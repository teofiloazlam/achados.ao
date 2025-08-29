import { IsNotEmpty, IsString } from "class-validator";

export class CreateDocumentoDto {
   
    //id : number;
  
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  titular: string;
}



