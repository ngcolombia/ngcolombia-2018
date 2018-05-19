export class Speaker {
  public name: string = 'Jhon Doe';
  public title: string = 'Google Developer';
  public bio: string = 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.';
  public photo: string = null;
  public twitter: string = null;
  public github: string = null;

  constructor(speaker: Speaker = null) {
    if (speaker !== null) {
      ({
        name: this.name,
        title: this.title,
        bio: this.bio,
        photo: this.photo,
        twitter: this.twitter,
        github: this.github,
      } = speaker);
    }

    if (this.photo === null) {
      this.photo = `https://picsum.photos/600/400?random&image=${Math.round(Math.random() * 100)}`;
    }
  }
}
