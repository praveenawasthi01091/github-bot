import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRepoComponent } from './fav-repo.component';

describe('FavRepoComponent', () => {
  let component: FavRepoComponent;
  let fixture: ComponentFixture<FavRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
