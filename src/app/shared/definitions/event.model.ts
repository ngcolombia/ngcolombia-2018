import { Activity } from './activity.model';
import { Speaker } from './speaker.model';

export interface Event {
  speakers: Speaker[];
  activiies: { [key: string]: Activity };
}
