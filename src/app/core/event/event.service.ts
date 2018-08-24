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
  ShortSpeakerBio,
  SpeakerBio,
  Country,
} from './event-data';

@Injectable()
export class EventService {
  private basePath: string = 'assets/img/speakers/black-and-white/';
  speakers: Speaker[];
  thursdayAgenda: Activity[];
  fridayAgenda: Activity[];

  constructor() {
    this.speakers = this.shuffleArray(this.getSpeakers());
    this.thursdayAgenda = this.getThursdayAgenda();
    this.fridayAgenda = this.getFridayAgenda();
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private getSpeakers(): Speaker[] {
    return [
      {
        name: SpeakerName.Sani,
        shortBio: ShortSpeakerBio.Sani,
        bio: SpeakerBio.Sani,
        talk: TalkTitle.LetsBuildAForm,
        photo: this.basePath + 'sani.jpg',
        country: Country.England,
        twitter: 'http://twitter.com/saniyusuf',
        github: 'https://github.com/saniyusuf',
        website: 'https://www.saniyusuf.com',
      },
      {
        name: SpeakerName.Andres,
        shortBio: ShortSpeakerBio.Andres,
        bio: SpeakerBio.Andres,
        talk: TalkTitle.FirebaseAndNgRx,
        photo: this.basePath + 'andres.jpg',
        country: Country.Argentina,
        twitter: 'https://twitter.com/villanuevand',
        github: 'https://github.com/villanuevand',
      },
      {
        name: SpeakerName.Susie,
        shortBio: ShortSpeakerBio.Susie,
        bio: SpeakerBio.Susie,
        talk: TalkTitle.AccessibleAngularApps,
        photo: this.basePath + 'susie.jpg',
        country: Country.UnitedStates,
        twitter: 'https://twitter.com/bogusred',
        github: 'https://github.com/bogusred',
        website: 'http://susiesahim.com/',
      },
      {
        name: SpeakerName.Laura,
        shortBio: ShortSpeakerBio.Laura,
        bio: SpeakerBio.Laura,
        talk: TalkTitle.DontWorryBeHappy,
        photo: this.basePath + 'laura.jpg',
        country: Country.Colombia,
        twitter: 'https://twitter.com/ltciro',
        github: 'https://github.com/ltciro',
      },
      {
        name: SpeakerName.Jorge,
        shortBio: ShortSpeakerBio.Jorge,
        bio: SpeakerBio.Jorge,
        talk: TalkTitle.AbcTheNewAlphabet,
        photo: this.basePath + 'jorge.jpg',
        country: Country.Argentina,
        twitter: 'https://twitter.com/jorgeucano',
        github: 'https://github.com/jorgeucano',
      },
      {
        name: SpeakerName.Bartosz,
        shortBio: ShortSpeakerBio.Bartosz,
        bio: SpeakerBio.Bartosz,
        talk: TalkTitle.TurnYourSmartphone,
        photo: this.basePath + 'bartosz.jpg',
        country: Country.Poland,
        twitter: 'https://twitter.com/pietrucha',
        website: 'https://angular-academy.com/',
      },
      {
        name: SpeakerName.Josue,
        shortBio: ShortSpeakerBio.Josue,
        bio: SpeakerBio.Josue,
        talk: TalkTitle.AngularArt,
        photo: this.basePath + 'josue.jpg',
        country: Country.Mexico,
        twitter: 'https://twitter.com/eusoj',
        github: 'https://github.com/josueggh',
      },
      {
        name: SpeakerName.Vanessa,
        shortBio: ShortSpeakerBio.Vanessa,
        bio: SpeakerBio.Vanessa,
        talk: TalkTitle.HowToImplement,
        photo: this.basePath + 'vanessa.jpg',
        country: Country.Colombia,
        twitter: 'https://twitter.com/vanessamarely',
        github: 'https://github.com/vanessamarely',
      },
      {
        name: SpeakerName.Katerina,
        shortBio: ShortSpeakerBio.Katerina,
        bio: SpeakerBio.Katerina,
        talk: TalkTitle.RealTimeInteractions,
        photo: this.basePath + 'katerina.jpg',
        country: Country.Greece,
        twitter: 'https://twitter.com/psybercity',
        github: 'https://github.com/mandarini',
      },
      {
        name: SpeakerName.Sebastian,
        shortBio: ShortSpeakerBio.Sebastian,
        bio: SpeakerBio.Sebastian,
        talk: TalkTitle.AngularTestbed,
        photo: this.basePath + 'sebastian.jpg',
        country: Country.Colombia,
        twitter: 'https://twitter.com/sebasgojs',
        github: 'https://github.com/seagomezar',
        website: 'https://www.sebastian-gomez.com',
      },
      {
        name: SpeakerName.Tatiana,
        shortBio: ShortSpeakerBio.Tatiana,
        bio: SpeakerBio.Tatiana,
        talk: TalkTitle.ThisIsWhatPWA,
        photo: this.basePath + 'tatiana.jpg',
        country: Country.Chile,
        twitter: 'https://twitter.com/tatymolys',
        github: 'https://github.com/tatymoly',
        website: 'https://tatymoly.me',
      },
      {
        name: SpeakerName.Mike,
        shortBio: ShortSpeakerBio.Mike,
        bio: SpeakerBio.Mike,
        talk: TalkTitle.YouMightNotNeedNgRx,
        photo: this.basePath + 'mike.jpg',
        country: Country.UnitedStates,
        twitter: 'https://twitter.com/mikeryandev',
        github: 'https://github.com/mikeryandev',
      },
      {
        name: SpeakerName.Miguel,
        shortBio: ShortSpeakerBio.Miguel,
        bio: SpeakerBio.Miguel,
        talk: TalkTitle.YourBrowserIs,
        photo: this.basePath + 'miguel.jpg',
        country: Country.Venezuela,
        twitter: 'https://twitter.com/skatox',
        github: 'https://github.com/skatox',
        website: 'http://skatox.com/blog/',
      },
      {
        name: SpeakerName.Sherry,
        shortBio: ShortSpeakerBio.Sherry,
        bio: SpeakerBio.Sherry,
        talk: TalkTitle.AnIntroductionToHardware,
        photo: this.basePath + 'sherry.jpg',
        country: Country.Denmark,
        twitter: 'https://twitter.com/sherrrylst',
        github: 'https://github.com/sazimi',
      },
      {
        name: SpeakerName.Kenneth,
        shortBio: ShortSpeakerBio.Kenneth,
        bio: SpeakerBio.Kenneth,
        talk: TalkTitle.AnIntroductionToHardware,
        photo: this.basePath + 'kenneth.jpg',
        country: Country.Denmark,
        twitter: 'https://twitter.com/kennethrohde',
        github: 'https://github.com/kenchris',
        website: 'https://www.linkedin.com/in/kenneth-rohde-christiansen/',
      },
    ];
  }

  private getThursdayAgenda(): Activity[] {
    return [
      {
        title: GeneralActivity.Registration,
        time: '7:00',
      },
      {
        title: WorkshopTitle.RxJSFromTrainee,
        description: WorkshopDescription.RxJSFromTrainee,
        time: '8:00',
        speaker: SpeakerName.Jorge,
      },
      {
        title: WorkshopTitle.WritePowerful,
        description: WorkshopDescription.WritePowerful,
        time: '8:00',
        speaker: SpeakerName.Sebastian,
      },
      {
        title: GeneralActivity.Lunch,
        time: '12:00',
      },
      {
        title: WorkshopTitle.Firebase,
        description: WorkshopDescription.Firebase,
        time: '14:00',
        speaker: SpeakerName.Katerina,
      },
      {
        title: WorkshopTitle.AccessibleAngular,
        description: WorkshopDescription.AccessibleAngular,
        time: '14:00',
        speaker: SpeakerName.Susie,
      },
    ];
  }

  private getFridayAgenda(): Activity[] {
    return [
      {
        title: GeneralActivity.Registration,
        time: '7:00',
      },
      {
        title: GeneralActivity.Opening,
        description: ActivityDescription.Opening,
        time: '8:00',
        speaker: SpeakerName.CarlosAndJuan,
      },
      {
        title: TalkTitle.LetsBuildAForm,
        description: ActivityDescription.LetsBuildAForm,
        time: '8:15',
        speaker: SpeakerName.Sani,
      },
      {
        title: TalkTitle.FirebaseAndNgRx,
        description: ActivityDescription.FirebaseAndNgRx,
        time: '8:50',
        speaker: SpeakerName.Andres,
      },
      {
        title: TalkTitle.ThisIsWhatPWA,
        description: ActivityDescription.ThisIsWhatPWA,
        time: '9:10',
        speaker: SpeakerName.Tatiana,
      },
      {
        title: GeneralActivity.Break,
        time: '9:30',
      },
      {
        title: TalkTitle.AccessibleAngularApps,
        description: ActivityDescription.AccessibleAngularApps,
        time: '10:00',
        speaker: SpeakerName.Susie,
      },
      {
        title: TalkTitle.DontWorryBeHappy,
        description: ActivityDescription.DontWorryBeHappy,
        time: '10:35',
        speaker: SpeakerName.Laura,
      },
      {
        title: TalkTitle.YourBrowserIs,
        description: ActivityDescription.YourBrowserIs,
        time: '10:55',
        speaker: SpeakerName.Miguel,
      },
      {
        title: TalkTitle.AbcTheNewAlphabet,
        description: ActivityDescription.AbcTheNewAlphabet,
        time: '11:15',
        speaker: SpeakerName.Jorge,
      },
      {
        title: GeneralActivity.Lunch,
        time: '12:00',
      },
      {
        title: TalkTitle.TurnYourSmartphone,
        description: ActivityDescription.TurnYourSmartphone,
        time: '13:35',
        speaker: SpeakerName.Bartosz,
      },
      {
        title: TalkTitle.AngularArt,
        description: ActivityDescription.AngularArt,
        time: '14:10',
        speaker: SpeakerName.Josue,
      },
      {
        title: TalkTitle.HowToImplement,
        description: ActivityDescription.HowToImplement,
        time: '14:30',
        speaker: SpeakerName.Vanessa,
      },
      {
        title: GeneralActivity.Break,
        time: '15:05',
      },
      {
        title: TalkTitle.RealTimeInteractions,
        description: ActivityDescription.RealTimeInteractions,
        time: '15:35',
        speaker: SpeakerName.Katerina,
      },
      {
        title: TalkTitle.AngularTestbed,
        description: ActivityDescription.AngularTestbed,
        time: '16:10',
        speaker: SpeakerName.Sebastian,
      },
      {
        title: TalkTitle.YouMightNotNeedNgRx,
        description: ActivityDescription.YouMightNotNeedNgRx,
        time: '16:30',
        speaker: SpeakerName.Mike,
      },
      {
        title: GeneralActivity.Break,
        time: '17:00',
      },
      {
        title: TalkTitle.AnIntroductionToHardware,
        description: ActivityDescription.AnIntroductionToHardware,
        time: '17:20',
        speaker: SpeakerName.SherryAndKenneth,
      },
      {
        title: GeneralActivity.Panel,
        // description: ActivityDescription.Panel,
        time: '17:55',
        speaker: SpeakerName.All,
      },
      {
        title: GeneralActivity.ConferenceClosure,
        time: '18:15',
        speaker: SpeakerName.CarlosAndJuan,
      },
      {
        title: GeneralActivity.Cocktail,
        time: '18:20',
      },
    ];
  }
}
