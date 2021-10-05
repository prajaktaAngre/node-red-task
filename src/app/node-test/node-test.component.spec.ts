import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTestComponent } from './node-test.component';

describe('NodeTestComponent', () => {
  let component: NodeTestComponent;
  let fixture: ComponentFixture<NodeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
