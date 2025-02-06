import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { FilehandlerModule } from './filehandler/filehandler.module';

@Module({
  imports: [ChatModule, FilehandlerModule],
})
export class AppModule {}
