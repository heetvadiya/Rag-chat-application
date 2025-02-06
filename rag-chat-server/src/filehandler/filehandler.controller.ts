import {Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {FilehandlerService} from "./filehandler.service";

@Controller('filehandler')
export class FilehandlerController {

  constructor(private readonly fileHandlerService : FilehandlerService) {
  }
  @Post()
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      destination: "tmp",
    }),
  }),)
  uploadFile(@UploadedFile() file : Express.Multer.File){
    return this.fileHandlerService.uploadFile(file)
  }

}
