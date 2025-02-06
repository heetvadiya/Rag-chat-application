import { Module } from '@nestjs/common';
import { FilehandlerController } from './filehandler.controller';
import { FilehandlerService } from './filehandler.service';
import {ChatService} from "../chat/chat.service";
import {ChatModule} from "../chat/chat.module";
import { EmbeddingService } from './embedding/embedding.service';
import {PrismaService} from "../prisma/prisma.service";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports:[ChatModule, ConfigModule],
  controllers: [FilehandlerController],
  providers: [FilehandlerService, EmbeddingService, PrismaService]
})
export class FilehandlerModule {}
