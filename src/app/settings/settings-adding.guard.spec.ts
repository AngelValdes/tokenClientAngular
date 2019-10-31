import { TestBed, async, inject } from '@angular/core/testing';

import { SettingsAddingGuard } from './settings-adding.guard';

describe('SettingsAddingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsAddingGuard]
    });
  });

  it('should ...', inject([SettingsAddingGuard], (guard: SettingsAddingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
