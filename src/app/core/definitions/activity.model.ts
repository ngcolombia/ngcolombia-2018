import {
  ActivityDescription,
  GeneralActivity,
  TalkTitle,
  WorkshopTitle,
  SpeakerName,
  GeneralActivityDescription,
  WorkshopDescription,
} from '../event/event-data';
export interface Activity {
  title: TalkTitle | GeneralActivity | WorkshopTitle;
  description?: ActivityDescription | GeneralActivityDescription | WorkshopDescription;
  time: string;
  shortTitle?: string;
  fontSize?: string;
  adjustSphere?: boolean;
  speaker?: SpeakerName;
}
