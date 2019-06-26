import { TestBed } from '@angular/core/testing';

import { MessageProgrammerService } from './message-programmer.service';

describe('MessageProgrammerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageProgrammerService = TestBed.get(MessageProgrammerService);
    expect(service).toBeTruthy();
  });
});
