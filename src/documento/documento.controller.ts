import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';

@Controller('documento')
export class DocumentoController {
  constructor(private readonly documentoService: DocumentoService) {}


  @Post('new')
  create(@Body() createDocumentoDto: CreateDocumentoDto) {
    return this.documentoService.create(createDocumentoDto);
  }

  @Get('list')
  findAll() {
    return this.documentoService.findAll();
  }

  @Get('escolha/:id')
  findOne(@Param('id') id: string) {
    return this.documentoService.findOne(+id);
  }

  @Patch('atualiza/:id')
  update(@Param('id') id: string, @Body() updateDocumentoDto: UpdateDocumentoDto) {
    return this.documentoService.update(+id, updateDocumentoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.documentoService.remove(+id);
  }
}
