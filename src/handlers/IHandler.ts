import {ExecutionPipeline} from "../services/execution-pipeline";

export interface IHandler {

  handle(req: any, rsp: any);

  setPipeline(ex: ExecutionPipeline): Handler

  pipeline: ExecutionPipeline;

}

export abstract class Handler implements IHandler {
  pipeline: ExecutionPipeline;

  constructor() {
  }

  public setPipeline(ex: ExecutionPipeline): Handler {
    this.pipeline = ex;
    return this;

  }

  abstract handle(req: any, rsp: any);
}


