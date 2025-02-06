import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports : [ConfigModule.forRoot()],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
