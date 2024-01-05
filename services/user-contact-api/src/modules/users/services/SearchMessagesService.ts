import { inject, injectable } from 'tsyringe';
import IMessagesRepository from "@modules/users/repositories/IMessagesRepository";
import Message from "@modules/users/infra/typeorm/entities/Message";

interface IRequest {
  email: string;
}

@injectable()
class SearchMessagesService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,

  ) {}

  public async execute({ email }: IRequest): Promise<Message[]> {
    const messages = await this.messagesRepository.findByEmail(email)
    return messages || [];
  }
}

export default SearchMessagesService;
