import { CommunityModule } from './community.module';

describe('CommunityModule', () => {
  let communityModule: CommunityModule;

  beforeEach(() => {
    communityModule = new CommunityModule();
  });

  it('should create an instance', () => {
    expect(communityModule).toBeTruthy();
  });
});
