import {Injectable, Injector} from "@angular/core";
import {IHandler} from "../handlers/IHandler";
import {servMap} from "./service-map";

@Injectable({providedIn: 'root'})
export class ServiceLocator {
  private service: any;

  constructor(private injector: Injector) {
  }


  get(key: any): IHandler {
    if (servMap.hasOwnProperty(key)) {
      return this.injector.get<IHandler>(servMap[key]);
    } else {
      throw new Error(`not found '${key}'`);
    }
  }

}

