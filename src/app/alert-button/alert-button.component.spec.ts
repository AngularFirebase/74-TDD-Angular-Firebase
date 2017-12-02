import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlertButtonComponent } from './alert-button.component';

import { MessageService } from '../message.service';
import { of } from 'rxjs/observable/of';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../../env'; 


describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  // let serviceStub: any;

  let service: MessageService;
  let spy: jasmine.Spy;


  beforeEach(async(() => {

    // serviceStub = {
    //   getContent: () => of('You have been warned'),
    // };

    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
      ],
      declarations: [ AlertButtonComponent ],
      providers: [ MessageService ]

    })
    .compileComponents();  // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    service = de.injector.get(MessageService);

    spy = spyOn(service, 'getContent').and.returnValue(of('You have been warned'));


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a message with `warn`', () => {
  //   expect(component.content).toContain('warn');
  // });

  it('should have a serverity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('should have an H1 tag of `Alert Button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });


  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });


    // Async
  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));


  it('should have message content defined from an observable', () => {

    component.content.subscribe(content => {
      expect(content).toBeDefined();
      expect(content).toBe('You have been warned');
    });
    
  });


  it('should call getContent one time and update the view', () => {
    

    expect(spy).toHaveBeenCalled();
    expect( spy.calls.all().length ).toEqual(1);

    expect(de.query(By.css('.message-body')).nativeElement.innerText)
      .toContain('warn');

  });


});






























  


































  // it('should have a hideContent state of true', () => {
  //   expect(component.hideContent).toBeTruthy();
  // });

  // it('should have an alertLevel of 2', () => {
  //   expect(component.severity).toBe(423);
  // });

  // it('should have an alertLevel greater than 2', () => {
  //   expect(component.severity).toBeGreaterThan(2);
  // });

  // it('should have an H1 tag of `Alert Button`', () => {
  //   expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  // });

  // // Sync
  // it('should toggle the message boolean', () => {
  //   expect(component.hideContent).toBeTruthy();
  //   component.toggle();
  //   expect(component.hideContent).toBeFalsy();
  // });

  // // Async
  // it('should toggle the message boolean asynchronously', fakeAsync(() => {
  //   expect(component.hideContent).toBeTruthy();
  //   component.toggle();
  //   tick(500);
  //   expect(component.hideContent).toBeFalsy();
  // }));

  // // Async observable data
  // it('should have message content defined from an observable', () => {

  //   component.content.subscribe(content => {
  //     expect(content).toBeDefined();
  //     expect(content).toBe('You have been warned');
  //   });
    
  // });

  // // get content

  // it('should only call getContent once', () => {
    
  //   component.content.subscribe(content => {
  //     expect(spy).toHaveBeenCalled();
  //     expect( spy.calls.all().length ).toEqual(1);
  //   });
        
  // });





































































// import { MessageService } from '../message.service';
// import { of } from 'rxjs/observable/of';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { firebaseConfig } from '../../env'; 



// let service: MessageService;
// let serviceStub: any;
// let spy: jasmine.Spy;


// serviceStub = {
//   getContent: () => of('You have been warned'),
// };


// providers: [ MessageService ]
// // providers: [ { provide: MessageService, useValue: serviceStub } ]

// imports: [
//   AngularFireModule.initializeApp(firebaseConfig),
//   AngularFireDatabaseModule
// ],


        // service = de.injector.get(MessageService);

// service = de.injector.get(MessageService);

//     spy = spyOn(service, 'getContent').and.returnValue(of('You have been warned'));
