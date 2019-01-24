import { repositories } from '@app/pg/repositories';

const { addressRepository } = repositories;

export class AddressService {}

export const addressService = new AddressService();
