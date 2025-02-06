import { Injectable } from '@nestjs/common';
import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf";
import {ChatService} from "../chat/chat.service";
import {EmbeddingService} from "./embedding/embedding.service";

@Injectable()
export class FilehandlerService {
  constructor(private chatService: ChatService, private embeddingService : EmbeddingService) {
  }
  async uploadFile(file : Express.Multer.File){
    // const loader = new PDFLoader("C:\\Users\\DELL\\Projects\\RAG-chat\\rag-chat-server\\tmp\\"+fileName)
    const docs = await this.embeddingService.embedd(file)

    const userQuery="when did Romeo Died"
    return {'reply':this.chatService.getOrganicReply("Use This Context To Reply \n #"+docs[0].pageContent+"#"+userQuery)};
  }
}
