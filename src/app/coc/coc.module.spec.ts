import { CocModule } from './coc.module';

describe('CocModule', () => {
  let cocModule: CocModule;

  beforeEach(() => {
    cocModule = new CocModule();
  });

  it('should create an instance', () => {
    expect(cocModule).toBeTruthy();
  });
});
