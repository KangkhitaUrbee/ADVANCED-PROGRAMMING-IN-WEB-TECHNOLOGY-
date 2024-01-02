import { Body, Controller, ForbiddenException, HttpStatus, Post, Query, Session, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AppService } from './app.service';
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";

@Controller()
export class AppController {
    getHello(): any {
      throw new Error('Method not implemented.');
    }
    constructor(private readonly appService: AppService) { }

    // Registration
    @Post('/registration')
    @UsePipes(new ValidationPipe)
    @UseInterceptors(FileInterceptor('profilePicture',
        {
            fileFilter(req, file, callback) {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
                    callback(null, true);
                } else {
                    callback(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false)
                }
            },
            limits: { fileSize: 1000000 },
            storage: diskStorage({
                destination: './pictures/profile_pictures',
                filename(req, file, callback) {
                    callback(null, Date.now() + file.originalname)
                },
            })

        })
    )
    k_urbee(){
        return {Message: "This is a reg page"}
    }
    }



