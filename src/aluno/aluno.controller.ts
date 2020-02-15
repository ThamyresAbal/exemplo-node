import { Controller, Get, Req, Post, Put, Delete } from '@nestjs/common';
import {Request} from 'express';

@Controller('aluno')
export class AlunoController {
    @Post()
    create(): string{
        return 'NEW ALUNO ENDPOINT';
    }
    @Get()
    findAll(
        @Req()
        request: Request,
    ): string{
        console.log(request);
        return "Find ALL aluno!";
    }
    @Put()
    update(): string{
        return 'DELETE ENDPOINT';
    }

    @Delete()
    delete(): string {
        return 'DELETE ENDPOINT';
    }

    @Get(':id')
    findOne(): string{
        return 'FINDONE ENDPOINT';
    }
}
