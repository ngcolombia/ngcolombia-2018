import { NgGirlsModule } from './ng-girls.module';

describe('NgGirlsModule', () => {
  let ngGirlsModule: NgGirlsModule;

  beforeEach(() => {
    ngGirlsModule = new NgGirlsModule();
  });

  it('should create an instance', () => {
    expect(ngGirlsModule).toBeTruthy();
  });
});
