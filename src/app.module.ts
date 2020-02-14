import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoController } from './aluno/aluno.controller';
import { EnderecoController } from './endereco/endereco.controller';

@Module({
  imports: [],
  controllers: [AppController, AlunoController, EnderecoController],
  providers: [AppService],
})
export class AppModule {}
