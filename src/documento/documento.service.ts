import { Injectable } from '@nestjs/common';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class DocumentoService {
  constructor(private readonly prismaDB:PrismaService){

  }
  create(createDocumentoDto: CreateDocumentoDto) {
    return this.prismaDB.documento.create({
       data: createDocumentoDto,


    });
  }

  findAll() {
    return this.prismaDB.documento.findMany();
  }

  findOne(id: number) {
   return this.prismaDB.documento.findUnique({ where: { id } });
  }

  update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
    return this.prismaDB.documento.update({
      where: { id },
      data:updateDocumentoDto,
    });
  }

  remove(id: number) {
   return this.prismaDB.documento.delete({ where: { id } });
  }
}
