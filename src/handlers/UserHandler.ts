import {Handler} from "./IHandler";
import {Injectable} from "@angular/core";
import {
  ICellNumberProperty,
  IEmailProperty,
  IUserReq,
  SaveUserRequest,
  SaveUserResponse,
} from "../Entities/SaveUserRequest";
import {HandlerResponse} from "../Entities/HandlerResponse";

@Injectable({providedIn: 'root'})
export class SaveUserValid extends Handler {
  handle(req: SaveUserRequest, rsp: SaveUserResponse) {
    if (!req.name)
      rsp.errors.push("Name can not be empty");
  }
}

@Injectable({providedIn: 'root'})
export class UpdateUserValid extends SaveUserValid {
}

@Injectable({providedIn: 'root'})
export class CellNumberValid extends Handler {
  handle(req: ICellNumberProperty, rsp: HandlerResponse) {
    if (!req.cellNumber)
      rsp.errors.push("Cell Number can not be empty");
  }
}

@Injectable({providedIn: 'root'})
export class EmailValid extends Handler {
  handle(req: IEmailProperty, rsp: HandlerResponse): any {
    if (!req.email)
      rsp.errors.push("Cell Number can not be empty");
  }
}

@Injectable({providedIn: 'root'})
export class SaveUserWorker extends Handler {
  handle(req: SaveUserRequest, rsp: SaveUserResponse) {
    //Apply business logic and persist to data store
    rsp.successTest = true;
  }
}


