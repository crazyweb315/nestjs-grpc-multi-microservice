import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from '../../../../proto/build/micr_prisma';
import { PrismaService } from '../prisma/prisma.service';

@Controller()
export class MicrService {
  constructor(private readonly prisma: PrismaService) {}

  @GrpcMethod()
  save(metadata: any): User {
    const user: User = {
      id: '1',
      name: 'John2',
      surname: 'Prova',
    };
    
    return user;
  }

  @GrpcMethod()
  async findOne(metadata: any): Promise<User> {
    return { id: '1',  name: 'John2', surname: 'Prova' };    
  }
}
