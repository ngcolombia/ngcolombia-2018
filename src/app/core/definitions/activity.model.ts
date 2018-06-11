import { SpeakerName } from './../event/event-data';
import {
  ActivityDescription,
  GeneralActivity,
  TalkTitle,
  WorkshopTitle,
  GeneralActivityDescription,
  WorkshopDescription,
} from '../event/event-data';
export interface Activity {
  title: TalkTitle | GeneralActivity | WorkshopTitle;
  description: ActivityDescription | GeneralActivityDescription | WorkshopDescription;
  time: string;
  speaker?: SpeakerName[];
  url?: string;
}
