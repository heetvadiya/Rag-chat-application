import { Injectable } from '@nestjs/common';

@Injectable()
export class FilehandlerService {
  uploadFile(fileName : string){
    const loader = new PDFLoader("../../tmp/fileName")
  }
}
