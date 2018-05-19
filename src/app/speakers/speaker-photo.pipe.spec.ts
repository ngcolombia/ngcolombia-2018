import { SpeakerPhotoUrlPipe } from './speaker-photo.pipe';

fdescribe('SpeakerPhotoPipe', () => {
  it('create an instance', () => {
    const pipe = new SpeakerPhotoUrlPipe();
    expect(pipe).toBeTruthy();

    const url = 'https://picsum.photos/600/400?random';
    expect(pipe.transform(url)).toBe('url(https://picsum.photos/600/400?random)');
  });
});
