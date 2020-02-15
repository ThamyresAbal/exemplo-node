import { Controller, Get, Req, Put, Delete, Post } from '@nestjs/common';
import {Request} from 'express'
@Controller('endereco')
export class EnderecoController {
    
    @Post()
    create(

    ): string{
        return 'CREATE ENDPOINT';
    }

    @Get()
    findAll(
        @Req()
        request: Request,
    ): string{
        console.log(request);
        return "Find ALL endereço!";
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
