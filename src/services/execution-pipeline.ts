// can be a service also for overriding and testing
import {Injectable, SkipSelf} from "@angular/core";
import {ServiceLocator} from "./service-locator";
import {HandlerResponse} from "../Entities/HandlerResponse";

@Injectable({providedIn: 'root'})
export class ExecutionPipeline {

  constructor(private serviceLocator: ServiceLocator) {
  }

  public Execute(req: any, rsp: HandlerResponse, handlerKeys: any[]) {

    const BreakException = {};

    try {

      //handle validation errors first to   collect all errors
      handlerKeys.forEach((key) => {

        if (key.toString().endsWith("Valid"))
          this.serviceLocator.get(key).setPipeline(this).handle(req, rsp);
      });

      //return all validation errors
      if (rsp.errors.length > 0) throw BreakException;

      //handle all other handlers
      handlerKeys.forEach((key) => {
        if (!key.toString().endsWith("Valid"))
          this.serviceLocator.get(key).setPipeline(this).handle(req, rsp);

        if (rsp.errors.length > 0) throw BreakException;

      });

    } catch (e) {
      if (e == BreakException) {
      } else throw e;
    }
  }

}


