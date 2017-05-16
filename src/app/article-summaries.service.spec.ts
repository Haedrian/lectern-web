import { TestBed, inject } from '@angular/core/testing';

import { ArticleSummariesService } from './article-summaries.service';

describe('ArticleSummariesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleSummariesService]
    });
  });

  it('should ...', inject([ArticleSummariesService], (service: ArticleSummariesService) => {
    expect(service).toBeTruthy();
  }));
});
