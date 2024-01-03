import EtherealMailProvider from '@shared/container/providers/EmailProviders/implementations/EtherealMailProvider';
import { container } from 'tsyringe';
import IMailProvider from '@shared/container/providers/EmailProviders/models/IMailProvider';
import mailConfig from '@config/mail';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
