import { analytics } from '../config/firebase';
import { logEvent } from 'firebase/analytics';

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

// Predefined events
export const AnalyticsEvents = {
  // Auth events
  USER_SIGNED_UP: 'user_signed_up',
  USER_SIGNED_IN: 'user_signed_in',
  USER_SIGNED_OUT: 'user_signed_out',
  
  // Entry events
  ENTRY_CREATED: 'entry_created',
  ENTRY_UPDATED: 'entry_updated',
  ENTRY_DELETED: 'entry_deleted',
  ENTRY_VIEWED: 'entry_viewed',
  
  // Vote events
  VOTE_CAST: 'vote_cast',
  VOTE_REMOVED: 'vote_removed',
  
  // Page views
  PAGE_VIEW: 'page_view',
  
  // Error events
  ERROR_OCCURRED: 'error_occurred'
} as const; 