import { Address } from '@app/pg/models';

import { BaseRepository } from './base.repository';

export class AddressRepository extends BaseRepository<Address> {
  constructor() {
    super(Address);
  }
}

export const addressRepository = new AddressRepository();
