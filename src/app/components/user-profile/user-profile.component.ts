import { Component, OnInit } from '@angular/core';
import { UserAPIService } from 'src/app/services/user-api.service';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedComponent } from '../shared/shared.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfiles: any;
  selectedCustomers: any = []
  constructor(public userAPIService: UserAPIService, private confirmationService: ConfirmationService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.userAPIService.getUserProfiles().subscribe((res) => {
      this.userProfiles = res;
    })
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }

  show(actionType: string) {
    const ref = this.dialogService.open(SharedComponent, {
      data: {
        buttonName: actionType === 'add' ? 'SAVE USER' : 'UPDATE USER'
      },
      header: 'Add User Profile Here',
      width: '40%'
    });
  }
}
