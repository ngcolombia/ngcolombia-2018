import { ScheduleModule } from './schedule.module';

describe('ScheduleModule', () => {
  let scheduleModule: ScheduleModule;

  beforeEach(() => {
    scheduleModule = new ScheduleModule();
  });

  it('should create an instance', () => {
    expect(scheduleModule).toBeTruthy();
  });
});
