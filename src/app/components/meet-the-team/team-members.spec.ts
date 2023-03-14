import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMembersComponent } from './team-members.component';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/users.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';
import { SearchPipe } from 'src/app/pipes/search/search.pipe';

describe('TeamMembersComponent', () => {
  let component: TeamMembersComponent;
  let fixture: ComponentFixture<TeamMembersComponent>;

  let exampleUser1: User = {
    gender:"male",
    name: {
      title:"Mr",
      first:"Adonai",
      last:"Nunes"
    },
    location: {
      street: {
        number:1227,
        name:"Rua Rio de Janeiro "
      },
      city:"Guarapuava",
      state:"Ceará",
      country:"Brazil",
      postcode:54807,
      coordinates: {
        latitude:"-68.9671",
        longitude:"-41.7292"
      },
      timezone: {
        offset:"-12:00",
        description:"Eniwetok, Kwajalein"
      }
    },
    email:"adonai.nunes@example.com",
    login:{
      uuid:"0b019537-63b4-41fb-b544-f1079c238d93",
      username:"brownfrog945",
      password:"flicks",
      salt:"ylSqg0TU",
      md5:"ef173397cf6d547481253ee7864d79b4",
      sha1:"056910b0c58c3c53c533e4d6bf67c9dbb8774439",sha256:"81cbe71ddff7ab54780850c97d70b7fd4f72db6087c5610fd20c68c1452f9e3e"
    },
    dob: {
      date:"1950-02-01T08:19:56.232Z",
      age:72
    },
    registered: {
      date:"2002-12-08T16:27:27.973Z",
      age:20
    },
    phone:"(57) 1258-6250",
    cell:"(90) 2124-1893",
    id: {
      name:"",
      value:"id"
    },
    picture: {
      large:"https://randomuser.me/api/portraits/men/46.jpg",
      medium:"https://randomuser.me/api/portraits/med/men/46.jpg",
      thumbnail:"https://randomuser.me/api/portraits/thumb/men/46.jpg"
    },
    nat:"BR"
  }

  let exampleUser2: User = {
    gender:"male",
    name: {
      title:"Mr",
      first:"Mustafa",
      last:"Taşlı"
    },
    location: {
      street: {
        number:4880,
        name:"Necatibey Cd"
      },
      city:"Aydın",
      state:"Aksaray",
      country:"Turkey",
      postcode:34905,
      coordinates: {
        latitude:"9.9563",
        longitude:"-168.2362"
      },
      timezone: {
        offset:"-3:30",
        description:"Newfoundland"
      }
    },
    email:"mustafa.tasli@example.com",
    login: {
      uuid:"f142371d-f4e1-4ac5-b81d-4aa5c2869d8c",
      username:"lazypeacock222",
      password:"smokey1",
      salt:"OQwUiHxJ",
      md5:"2af4a704f5b88485e0b76a64c19fdd25",
      sha1:"01c59320b242de8ab88d301d389727becd871b72",
      sha256:"eb286345075ebb37470e41c9a01b48e9a6e6954fb5ca76f146d8ca405715975e"
    },
    dob: {
      date:"1983-02-15T12:57:59.983Z",
      age:39
    },
    registered: {
      date:"2008-04-01T02:23:46.740Z",
      age:14
    },
    phone:"(275)-723-2586",
    cell:"(201)-101-6213",
    id: {
      name:"",
      value:"null"
    },
    picture: {
      large:"https://randomuser.me/api/portraits/men/39.jpg",
      medium:"https://randomuser.me/api/portraits/med/men/39.jpg",
      thumbnail:"https://randomuser.me/api/portraits/thumb/men/39.jpg"
    },
    nat:"TR"
  }

  let exampleResults: User[] = [exampleUser1, exampleUser2];
  let exampleDescResults: User[] = [exampleUser1, exampleUser2];
  let exampleAscResults: User[] = [exampleUser2, exampleUser1];
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UsersService', ['getUsers']);
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TeamMembersComponent, SearchPipe ],
      providers: [ { provide: UsersService, useValue: spy } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersComponent);
    component = fixture.componentInstance;
    usersServiceSpy = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    usersServiceSpy.getUsers.and.returnValue(of(exampleResults));
    fixture.detectChanges();
  });

  describe('TeamMembersComponent', () => {
    it('should create and call service', () => {
      expect(component).toBeTruthy();
      expect(usersServiceSpy.getUsers).toHaveBeenCalled();
      expect(component.users).toBe(exampleResults);
    });
  });

  describe('changeDisplay', () => {
    it('should change display number on call', () => {
      expect(component.changeDisplay).toBeDefined();

      // Check if default value for list display is false, change list display to true
      expect(component.isList).toEqual(false);
      component.changeDisplay();
      expect(component.isList).toEqual(true);

      // Change list display back to false
      component.changeDisplay();
      expect(component.isList).toEqual(false);
    });
  });

  describe('sort', () => {
    it('should change boolean value on call', () => {
      expect(component.sort).toBeDefined();

      // Check if default value for isAscending is false, change isAscending from false to true
      expect(component.isAscending).toEqual(false);
      component.sort();
      expect(component.isAscending).toEqual(true);

      // Change display back to false
      component.sort();
      expect(component.isAscending).toEqual(false);
    });
  });

  describe('ascendingSort', () => {
    it('should sort by ascending last name', () => {
      expect(component.ascendingSort).toBeDefined();

      component.ascendingSort()

      // Expect results to equal example ascending results
      expect(component.users).toEqual(exampleAscResults);
    });
  });

  describe('descendingSort', () => {
    it('should sort by descending last name', () => {
      expect(component.descendingSort).toBeDefined();

      component.descendingSort()

      // Expect results to equal example descending results
      expect(component.users).toEqual(exampleDescResults);
    });
  });
});
