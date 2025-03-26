export interface TournamentState {
  id: string;
  tournamentId: string; // Unique ID for the tournament
  name: string; // Name of the tournament
  ownerId: string; // User ID of the tournament creator/owner
  currentPhase: 'submission' | 'voting' | 'completed';
  submissionPhaseStart: Date;
  submissionPhaseEnd: Date;
  votingPhaseStart: Date;
  votingPhaseEnd: Date;
  createdAt: Date;
  updatedAt: Date;
  // New settings
  maxEntriesPerUser: number | null; // null means unlimited
  maxVotesPerUser: number | null; // null means unlimited
  votingQuestion: string; // Question to display above the voting scale
} 