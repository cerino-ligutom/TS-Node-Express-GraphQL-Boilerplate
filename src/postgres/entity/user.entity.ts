import { Column, CreateDateColumn, Entity, UpdateDateColumn, OneToMany } from 'typeorm';
import { Node } from './common/node';
import { Gender } from '@app/core/enums';
import { Address } from './address.entity';

@Entity()
export class User extends Node {
  @Column({
    unique: true,
  })
  public username!: string;

  @Column({
    unique: true,
  })
  public email!: string;

  @Column({
    type: 'text',
  })
  public passwordHash!: string;

  @Column({
    type: 'text',
  })
  public passwordSalt!: string;

  @Column()
  public firstName!: string;

  @Column()
  public middleName!: string;

  @Column()
  public lastName!: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  public description!: string | null | undefined;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  public gender!: Gender;

  @OneToMany((type) => Address, (address) => address.user)
  public addresses!: Address;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  public createdAt!: string;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  public updatedAt!: string;
}
