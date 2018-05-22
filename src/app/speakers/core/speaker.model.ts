export class Speaker {
  constructor(
    public name: string = 'Jhon Doe',
    public title: string = 'Google Developer',
    public bio: string = 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    public photo: string = null,
    public twitter: string = null,
    public github: string = null,
    public website: string = null,
  ) {
    if (this.photo === null) {
      this.photo = `https://picsum.photos/600/400?random&image=${Math.round(Math.random() * 100)}`;
    }
  }
}
