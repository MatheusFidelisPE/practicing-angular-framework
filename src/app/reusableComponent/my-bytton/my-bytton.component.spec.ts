import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyByttonComponent } from './my-bytton.component';

describe('MyByttonComponent', () => {
  let component: MyByttonComponent;
  let fixture: ComponentFixture<MyByttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyByttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyByttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
