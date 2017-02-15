import { Directive, Output, EventEmitter, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fgEditableInput]'
})
export class EditableInputDirective {

  @Output() editableInputSave: EventEmitter<Event> = new EventEmitter();
  @Output() editableInputCancel: EventEmitter<Event> = new EventEmitter();

  constructor(private element : ElementRef, private renderer : Renderer) {
  }

  @HostListener('blur')
  onSave() {
    this.editableInputSave.emit(this.element.nativeElement.value);
  }

  @HostListener('keyup.enter',  ['$event'])
  onEnter(event : KeyboardEvent) {
    event.stopPropagation();
    this.element.nativeElement.blur();
  }

  @HostListener('keyup.esc',  ['$event'])
  onEsc(event : KeyboardEvent) {
    this.editableInputCancel.emit();
  }

}