import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGridViewComponent } from './team-grid-view.component';

describe('TeamGridViewComponent', () => {
  let component: TeamGridViewComponent;
  let fixture: ComponentFixture<TeamGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //     it('should call fill grid member cards with information', () => {
    //       // Call API
    //       component.ngOnInit();
    
    //       // Name field
    //       let name = fixture.debugElement.nativeElement.querySelector('p.members__name-grid');
    //       expect(name).toBeTruthy;
    
    //       // Image field
    //       let image = fixture.debugElement.nativeElement.querySelector('p.members__image-grid');
    //       expect(image).toBeTruthy;
    
    //       // City field
    //       let city = fixture.debugElement.nativeElement.querySelector('p.members__city-grid');
    //       expect(city).toBeTruthy;
    
    //       // Contact field
    //       let contactInfo = fixture.debugElement.nativeElement.querySelector('p.members__contact-info-grid');
    //       expect(contactInfo).toBeTruthy;
    
    //     });
});
