import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToOne, 
  OneToMany
} from 'typeorm';
import { User } from './User';
import { Entry } from './Entry';

@Entity('tournaments')
export class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, user => user.createdTournaments)
  owner: User;

  @Column({ 
    type: 'enum', 
    enum: ['submission', 'voting', 'completed'], 
    default: 'submission' 
  })
  currentPhase: 'submission' | 'voting' | 'completed';

  @Column()
  submissionPhaseStart: Date;

  @Column()
  submissionPhaseEnd: Date;

  @Column()
  votingPhaseStart: Date;

  @Column()
  votingPhaseEnd: Date;

  @Column({ nullable: true })
  maxEntriesPerUser: number;

  @Column({ nullable: true })
  maxVotesPerUser: number;

  @Column({ default: 'How would you rate this design?' })
  votingQuestion: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ default: false })
  isPasswordProtected: boolean;

  @OneToMany(() => Entry, entry => entry.tournament)
  entries: Entry[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}