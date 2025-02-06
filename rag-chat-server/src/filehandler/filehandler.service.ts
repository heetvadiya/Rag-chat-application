import { Injectable } from '@nestjs/common';
import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf";
import {ChatService} from "../chat/chat.service";

@Injectable()
export class FilehandlerService {
  constructor(private chatService: ChatService) {
  }
  async uploadFile(fileName : string){
    const loader = new PDFLoader("C:\\Users\\DELL\\Projects\\RAG-chat\\rag-chat-server\\tmp\\"+fileName)
    const docs = await loader.load()
    const userQuery="when did Romeo Died"
    return {'reply':this.chatService.getOrganicReply("Use This Context To Reply \n #"+docs[0].pageContent+"#"+userQuery)};
    // return docs[0]
  }
}
