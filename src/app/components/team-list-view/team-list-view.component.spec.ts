import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListViewComponent } from './team-list-view.component';

describe('TeamListViewComponent', () => {
  let component: TeamListViewComponent;
  let fixture: ComponentFixture<TeamListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

      //     it('should call fill list member cards with information', () => {
    //       // Call API
    //       component.ngOnInit();
    //       component.changeDisplay(2);

    //       // Name field
    //       let name = fixture.debugElement.nativeElement.querySelector('p.members__name-list');
    //       expect(name).toBeTruthy;

    //       // Image field
    //       let image = fixture.debugElement.nativeElement.querySelector('p.members__image-list');
    //       expect(image).toBeTruthy;

    //       // City field
    //       let city = fixture.debugElement.nativeElement.querySelector('p.members__city-list');
    //       expect(city).toBeTruthy;

    //       // Contact field
    //       let contactInfo = fixture.debugElement.nativeElement.querySelector('p.members__contact-info-list');
    //       expect(contactInfo).toBeTruthy;

    //     });
});
