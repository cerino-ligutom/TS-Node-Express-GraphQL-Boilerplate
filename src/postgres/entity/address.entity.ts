import { Entity, ManyToOne, Column } from 'typeorm';
import { Node } from './common/node';
import { User } from './user.entity';

@Entity()
export class Address extends Node {
  @ManyToOne((type) => User, (user) => user.addresses, { onDelete: 'CASCADE' })
  public user!: User;

  @Column({
    nullable: true,
  })
  public addressLine1!: string;

  @Column({
    nullable: true,
  })
  public addressLine2!: string;

  @Column({
    nullable: true,
  })
  public city!: string;

  @Column({
    nullable: true,
  })
  public province!: string;

  @Column({
    nullable: true,
  })
  public country!: string;

  @Column({
    nullable: true,
  })
  public zipCode!: string;
}
