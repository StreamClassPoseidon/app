import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastMessagesService } from 'src/app/core/services/toast-messages.service';
import { UpdateUserService } from '../../services/update-user.service';

export interface ConfirmationData {
  title: string;
  optionNo: string;
  optionYes: string;
  property: string;
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent implements OnInit {
  editUser: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationData,
    fb: FormBuilder,
    route: ActivatedRoute,
    private updateUserService: UpdateUserService,
    private toastService: ToastMessagesService
  ) {
    this.editUser = fb.group({
      property: [this.data?.property],
      value: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  saveClick(form: FormGroup) {
    if (form.valid) {
      this.updateUserService.updateUser(form.value).subscribe();
      return;
    }
    this.toastService.showError('Error al guardar');
  }
}