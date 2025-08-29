import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports:[],
  providers: [PrismaService],
  controllers:[],
  exports:[PrismaService]

})
export class DatabaseModule {}
