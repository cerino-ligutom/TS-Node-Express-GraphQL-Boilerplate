import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @Generated('uuid')
  public uuid!: string;

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
  public description!: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  public createdAt!: string;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  public updatedAt!: string;
}
