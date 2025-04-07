import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Vote } from './Vote';
import { Tournament } from './Tournament';

@Entity('entries')
export class Entry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  imageUrl: string;

  @Column({ default: 0 })
  voteCount: number;

  @ManyToOne(() => User, user => user.entries)
  user: User;

  @ManyToOne(() => Tournament, tournament => tournament.entries)
  tournament: Tournament;

  @OneToMany(() => Vote, vote => vote.entry)
  votes: Vote[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 