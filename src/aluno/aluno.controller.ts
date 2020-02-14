import { Controller } from '@nestjs/common';

@Controller('aluno')
export class AlunoController {
    findAll(): string{
        return "Find ALL alunos!";
    }
}
