import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const mockAppService = {
      getHello: jest.fn().mockReturnValue('Mocked Hello'),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    appService = moduleRef.get<AppService>(AppService);
  });

  it('should return mocked hello message from AppService', () => {
    expect(appController.getHello()).toBe('Mocked Hello');
    expect(appService.getHello).toHaveBeenCalled();
  });

  it('should return the hardcoded name', () => {
    expect(appController.getName()).toBe('Tuan Thanh');
  });
});
