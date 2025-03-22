import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Entry } from './Entry';

@Entity('votes')
export class Vote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.votes)
  user: User;

  @ManyToOne(() => Entry, entry => entry.votes)
  entry: Entry;

  @CreateDateColumn()
  createdAt: Date;
} 