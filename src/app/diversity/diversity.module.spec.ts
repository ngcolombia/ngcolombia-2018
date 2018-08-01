import { DiversityModule } from './diversity.module';

describe('DiversityModule', () => {
  let diversityModule: DiversityModule;

  beforeEach(() => {
    diversityModule = new DiversityModule();
  });

  it('should create an instance', () => {
    expect(diversityModule).toBeTruthy();
  });
});
