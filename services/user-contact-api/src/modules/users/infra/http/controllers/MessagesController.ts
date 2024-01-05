import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateMessageService from "@modules/users/services/CreateMessageService";
import SearchMessagesService from "@modules/users/services/SearchMessagesService";

export default class MessagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, content, userId} = request.body;

    const createMessage = container.resolve(CreateMessageService);

    const message = await createMessage.execute({
      name,
      email,
      phone,
      content,
      userId
    });

    return response.json(classToClass(message));
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const {email} = request.body;

    const createMessage = container.resolve(SearchMessagesService);

    const messages = await createMessage.execute({
      email,
    });

    return response.json(classToClass(messages));
  }
}
