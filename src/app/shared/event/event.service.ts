import { Activity } from '../definitions/activity.model';
import { Injectable } from '@angular/core';
import { Speaker } from '../definitions/speaker.model';
import {
  ActivityDescription,
  TalkTitle,
  SpeakerName,
  GeneralActivity,
  WorkshopTitle,
  WorkshopDescription,
  GeneralActivityDescription,
  ShortSpeakerBio,
  SpeakerBio,
  Country,
} from './event-data';

@Injectable()
export class EventService {
  event;

  constructor() {}

  getSpeakers(): Speaker[] {
    return [
      {
        name: SpeakerName.Sani,
        shortBio: ShortSpeakerBio.Sani,
        bio: SpeakerBio.Sani,
        talk: TalkTitle.LetsBuildAForm,
        photo: '',
        country: Country.England,
        twitter: '',
        github: '',
        website: '',
      },
    ];
  }

  getThursdayAgenda(): Activity[] {
    return [
      {
        title: GeneralActivity.Registration,
        description: GeneralActivityDescription.Registration,
        time: '7:00 AM',
      },
      {
        title: WorkshopTitle.RxJSFromTrainee,
        description: WorkshopDescription.RxJSFromTrainee,
        time: '8:00 AM',
      },
      {
        title: WorkshopTitle.WritePowerful,
        description: WorkshopDescription.WritePowerful,
        time: '8:00 AM',
      },
      {
        title: GeneralActivity.Lunch,
        description: GeneralActivityDescription.Lunch,
        time: '12:00 PM',
      },
      {
        title: WorkshopTitle.BuildingConversational,
        description: WorkshopDescription.BuildingConversational,
        time: '2:00 PM',
      },
      {
        title: WorkshopTitle.AccessibleAngular,
        description: WorkshopDescription.AccessibleAngular,
        time: '2:00 PM',
      },
      {
        title: GeneralActivity.ConferenceClosure,
        description: GeneralActivityDescription.WorkshopClosure,
        time: '12:00 PM',
      },
    ];
  }

  getFridayAgenda(): Activity[] {
    return [
      {
        title: GeneralActivity.Registration,
        description: ActivityDescription.Registration,
        time: '7:00 AM',
      },
      {
        title: GeneralActivity.Opening,
        description: ActivityDescription.Opening,
        time: '8:15 AM',
        speaker: [SpeakerName.Juan, SpeakerName.Carlos],
      },
      {
        title: TalkTitle.LetsBuildAForm,
        description: ActivityDescription.LetsBuildAForm,
        time: '8:15 AM',
        speaker: [SpeakerName.Sani],
      },
      {
        title: TalkTitle.FirebaseAndNgRx,
        description: ActivityDescription.FirebaseAndNgRx,
        time: '8:55 AM',
        speaker: [SpeakerName.Andres],
      },
      {
        title: TalkTitle.ServiceWorkersAndCows,
        description: ActivityDescription.ServiceWorkersAndCows,
        time: '9:15 AM',
        speaker: [SpeakerName.Alyssa],
      },
      {
        title: GeneralActivity.Break,
        description: ActivityDescription.Break,
        time: '9:45 AM',
      },
      {
        title: TalkTitle.AccessibleAngularApps,
        description: ActivityDescription.AccessibleAngularApps,
        time: '10:10 AM',
        speaker: [SpeakerName.Susie],
      },
      {
        title: TalkTitle.SafelyBreakingCode,
        description: ActivityDescription.SafelyBreakingCode,
        time: '10:45 AM',
        speaker: [SpeakerName.Jeremy],
      },
      {
        title: TalkTitle.DontWorryBeHappy,
        description: ActivityDescription.DontWorryBeHappy,
        time: '11:20 AM',
        speaker: [SpeakerName.Laura],
      },
      {
        title: TalkTitle.SchematicsInAngular,
        description: ActivityDescription.SchematicsInAngular,
        time: '11:40 AM',
        speaker: [SpeakerName.Jorge],
      },
      {
        title: GeneralActivity.Lunch,
        description: ActivityDescription.Lunch,
        time: '12:00 PM',
      },
      {
        title: TalkTitle.TurnYourSmartphone,
        description: ActivityDescription.TurnYourSmartphone,
        time: '1:30 PM',
        speaker: [SpeakerName.Bartosz],
      },
      {
        title: TalkTitle.AngularArt,
        description: ActivityDescription.AngularArt,
        time: '2:05 PM',
        speaker: [SpeakerName.Josue],
      },
      {
        title: TalkTitle.HowToImplement,
        description: ActivityDescription.HowToImplement,
        time: '2:25 PM',
        speaker: [SpeakerName.Vanesa],
      },
      {
        title: TalkTitle.RealTimeInteractions,
        description: ActivityDescription.RealTimeInteractions,
        time: '3:00 PM',
        speaker: [SpeakerName.Katerina],
      },
      {
        title: TalkTitle.AngularTestbed,
        description: ActivityDescription.AngularTestbed,
        time: '3:35 PM',
        speaker: [SpeakerName.Sebastian],
      },
      {
        title: TalkTitle.ThisIsWhatPWA,
        description: ActivityDescription.ThisIsWhatPWA,
        time: '3:55 PM',
        speaker: [SpeakerName.Tatiana],
      },
      {
        title: GeneralActivity.Break,
        description: ActivityDescription.Break,
        time: '4:10 PM',
        speaker: [SpeakerName.Tatiana],
      },
      {
        title: TalkTitle.YouMightNotNeedNgRx,
        description: ActivityDescription.YouMightNotNeedNgRx,
        time: '4:35 PM',
        speaker: [SpeakerName.Tatiana],
      },
      {
        title: TalkTitle.YourBrowserIs,
        description: ActivityDescription.YourBrowserIs,
        time: '5:00 PM',
        speaker: [SpeakerName.Miguel],
      },
      {
        title: TalkTitle.AnIntroductionToHardware,
        description: ActivityDescription.AnIntroductionToHardware,
        time: '5:20 PM',
        speaker: [SpeakerName.Sherry, SpeakerName.Keneth],
      },
      {
        title: GeneralActivity.Panel,
        description: ActivityDescription.Panel,
        time: '5:50 PM',
        speaker: [SpeakerName.All],
      },
      {
        title: GeneralActivity.ConferenceClosure,
        description: ActivityDescription.Closure,
        time: '6:10 PM',
        speaker: [SpeakerName.Juan, SpeakerName.Carlos],
      },
      {
        title: GeneralActivity.Cocktail,
        description: ActivityDescription.Cocktail,
        time: '6:20 PM',
      },
    ];
  }
}
