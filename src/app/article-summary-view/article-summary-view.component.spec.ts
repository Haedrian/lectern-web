import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSummaryViewComponent } from './article-summary-view.component';

describe('ArticleSummaryViewComponent', () => {
  let component: ArticleSummaryViewComponent;
  let fixture: ComponentFixture<ArticleSummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
