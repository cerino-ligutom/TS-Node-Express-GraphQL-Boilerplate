import { AddressRepository } from '@app/pg/repositories';

export class AddressService {
  private addressRepository: AddressRepository = new AddressRepository();
}
