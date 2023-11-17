import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData, DialogMode } from "../../models/dashboard.model";
import { EventData } from "../../models/events.model";
import { formatDate } from "../../utils/utils";

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {
  submitted = false;
  eventForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    createdBy: new FormControl(''),
    color: new FormControl('')
  });
  mode: DialogMode;
  dialogModeEnum = DialogMode;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.mode = data.mode;
  }

  ngOnInit() {
    this.eventForm = this.formBuilder.group(
      {
        name: [this.data.mode === DialogMode.New ? '' : this.data.event?.name, Validators.required],
        createdBy: [this.data.mode === DialogMode.New ? '' : this.data.event?.createdBy, Validators.required],
        color: [this.data.mode === DialogMode.New ? '#1E88E5' : this.data.event?.color, Validators.required],
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.eventForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (this.eventForm.invalid) {
      return;
    }
    const result: EventData = <EventData>{
      id: this.data.event?.id,
      name: this.eventForm.value.name,
      createDate: this.data.event?.createDate ? this.data.event?.createDate : formatDate(new Date()),
      lastUpdate: formatDate(new Date()),
      createdBy: this.eventForm.value.createdBy,
      color: this.eventForm.value.color
    }
    this.dialogRef.close({ result, mode: this.mode })
  }

  onReset(): void {
    this.submitted = false;
    this.eventForm.reset();
  }

  protected readonly close = close;

  closeDialog() {
    this.onReset();
    this.dialogRef.close();
  }
}
