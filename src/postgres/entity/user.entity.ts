import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Node } from './common/node';
import { Gender } from '@app/core/enums';

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

  @CreateDateColumn({
    type: 'timestamptz',
  })
  public createdAt!: string;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  public updatedAt!: string;
}
