import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatBotComponent } from './ai-chat-bot.component';

describe('AiChatBotComponent', () => {
  let component: AiChatBotComponent;
  let fixture: ComponentFixture<AiChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiChatBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
