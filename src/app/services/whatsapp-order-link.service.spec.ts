import { TestBed } from '@angular/core/testing';

import { WhatsappOrderLinkService } from './whatsapp-order-link.service';

describe('WhatsappOrderLinkService', () => {
  let service: WhatsappOrderLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsappOrderLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
