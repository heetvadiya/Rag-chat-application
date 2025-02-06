import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { FilehandlerModule } from './filehandler/filehandler.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ChatModule, FilehandlerModule, PrismaModule],
})
export class AppModule {}
