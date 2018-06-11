import { Country, SpeakerBio, SpeakerName } from '../event/event-data';
import { ShortSpeakerBio, TalkTitle, WorkshopTitle } from './../event/event-data';

export interface Speaker {
  name: SpeakerName;
  shortBio: ShortSpeakerBio;
  bio: SpeakerBio;
  talk: TalkTitle;
  workshop?: WorkshopTitle;
  photo: string;
  country: Country;
  twitter: string;
  github?: string;
  website?: string;
}
