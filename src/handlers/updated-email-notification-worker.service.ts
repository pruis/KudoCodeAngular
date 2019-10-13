import {Injectable} from "@angular/core";
import {Handler} from "./IHandler";
import {
  INotificationMessage, IUpdateEmailNotificationRsp, IUpdateUserRsp,
  UserCommunicationPreferences,
  IUserReq,
} from "../Entities/SaveUserRequest";


@Injectable({providedIn: 'root'})
export class UpdateUserWorker extends Handler {
  handle(req: IUserReq, rsp: IUpdateUserRsp) {
    //Apply business logic and persist to data store
    // if email changed
    rsp.emailChange = true;
    rsp.successTest = true;
  }
}

@Injectable({providedIn: 'root'})
export class UpdatedEmailAddressNotification extends Handler {

  handle(req: any, rsp: IUpdateEmailNotificationRsp) {

    if (!rsp.emailChange)
      return;

    rsp.message = "your emails has been updated";

    this.pipeline.Execute(req, rsp,
      [
        "SmsNotification",
        "EmailNotification"
      ]);
  }
}


@Injectable({providedIn: 'root'})
export class SmsNotification extends Handler {

  constructor(private userComPref: UserCommunicationPreferences) {
    super();
  }

  handle(req: any, rsp: INotificationMessage) {
    if (this.userComPref.sms)
      alert(rsp.message);
  }
}

@Injectable({providedIn: 'root'})
export class EmailNotification extends Handler {

  constructor(private userComPref: UserCommunicationPreferences) {
    super();
  }

  handle(req: any, rsp: INotificationMessage) {
    if (this.userComPref.email)
      alert(rsp.message);
  }
}
