import { BeforeInsert, PrimaryColumn } from 'typeorm';
import shortid from 'shortid';

export abstract class Node {
  @PrimaryColumn()
  public id!: string;

  @BeforeInsert()
  private beforeInsert() {
    this.id = shortid.generate();
  }
}
