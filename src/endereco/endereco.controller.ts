import { Controller } from '@nestjs/common';

@Controller('endereco')
export class EnderecoController {
    findAll(): string{
        return "Find ALL endereço!";
    }
}
