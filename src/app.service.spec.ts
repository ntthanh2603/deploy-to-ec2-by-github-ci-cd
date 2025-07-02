import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it('should return welcome message', () => {
    expect(service.getHello()).toBe('Welcome to the NestJS application!');
  });
});
