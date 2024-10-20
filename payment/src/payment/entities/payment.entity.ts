import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Check(`LENGTH(creditCard) = 16 AND creditCard ~ '^[0-9]+$'`)
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  creditcard: string;

  @Column({ type: 'int' })
  price: number;
}
