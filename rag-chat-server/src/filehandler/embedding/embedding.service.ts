import { Injectable } from '@nestjs/common';
import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf";
import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters";
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class EmbeddingService {

  constructor(private readonly prismaService : PrismaService) {
  }

  async embedd(file : Express.Multer.File){
    const loader = new PDFLoader(file.path);
    const docs = await loader.load();

    const textSplitter = new RecursiveCharacterTextSplitter()

    const texts = await textSplitter.splitDocuments(docs);
    const embeddings = await Promise.all(
      texts.map((doc) => {
        return this.prismaService.documentEmbedding.create({
          data: {
            content: doc.pageContent,
            documentName: file.originalname,
          },
        });
      }),
    );


    console.log(embeddings);
    return docs;
  }
}
