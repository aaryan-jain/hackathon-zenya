import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSkeletonComponent } from './table-skeleton.component';

describe('TableSkeletonComponent', () => {
  let component: TableSkeletonComponent;
  let fixture: ComponentFixture<TableSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableSkeletonComponent]
    });
    fixture = TestBed.createComponent(TableSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
