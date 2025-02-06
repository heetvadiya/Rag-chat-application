import { Module } from '@nestjs/common';
import { FilehandlerController } from './filehandler.controller';
import { FilehandlerService } from './filehandler.service';
import {ChatService} from "../chat/chat.service";
import {ChatModule} from "../chat/chat.module";

@Module({
  imports:[ChatModule],
  controllers: [FilehandlerController],
  providers: [FilehandlerService]
})
export class FilehandlerModule {}
