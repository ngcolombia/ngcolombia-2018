import { SpeakersModule } from './speakers.module';

describe('SpeakersModule', () => {
  let speakersModule: SpeakersModule;

  beforeEach(() => {
    speakersModule = new SpeakersModule();
  });

  it('should create an instance', () => {
    expect(speakersModule).toBeTruthy();
  });
});
