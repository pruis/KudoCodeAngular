import {HandlerResponse} from "./HandlerResponse";
import {Injectable} from "@angular/core";

export interface IEmailProperty {
  email: string;
}

export interface ICellNumberProperty {
  cellNumber: string;
}


export interface IUserReq {
  id: string;
  name: string;
  email: string;
  cellNumber: string;

}

export class SaveUserRequest {
  id: string;
  name: string;
  email: string;
  cellNumber: string;
}

export class UpdateUserRequest {
  id: string;
  name: string;
  email: string;
  cellNumber: string;
}


export class SaveUserResponse extends HandlerResponse {

  id: string;
  public successTest: boolean = false;
}

export interface IUpdateUserRsp extends HandlerResponse {

  id: string;
  successTest: boolean;
  emailChange: boolean;
}

export interface INotificationMessage {
  message: string;
}

export interface IUpdateEmailNotificationRsp extends INotificationMessage, IUpdateUserRsp {

}

@Injectable({providedIn: 'root'})
export class UserCommunicationPreferences {

  sms: boolean = true;
  email: boolean = true;
}
