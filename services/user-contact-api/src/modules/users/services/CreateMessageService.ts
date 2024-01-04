import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import User from '../infra/typeorm/entities/User';
import IMessagesRepository from "@modules/users/repositories/IMessagesRepository";
import Message from "@modules/users/infra/typeorm/entities/Message";

interface IRequest {
  content: string;
  email: string;
  name: string;
  phone: string;
  userId?: string;
}

@injectable()
class CreateMessageService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

  ) {}

  public async execute({ name, email, phone, content }: IRequest): Promise<Message> {
    const userExists = await this.usersRepository.findByEmail(email);
    let userId: string | undefined;
    if (userExists) {
      userId = userExists.id;
    }

    return this.messagesRepository.create({name, email, phone, content, userId})
  }
}

export default CreateMessageService;
