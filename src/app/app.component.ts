import {Component} from '@angular/core';
import {ExecutionPipeline} from "../services/execution-pipeline";
import {SaveUserRequest, SaveUserResponse} from "../Entities/SaveUserRequest";
import {servMap} from "../services/service-map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'PipesAndFilters';

  constructor(private pipeLine: ExecutionPipeline) {
  }


  public Save(): void {

    const req = {
      name: 'test',
      email: 'test@test.com',
      cellNumber: '1234',
    };

    let rsp = new SaveUserResponse();
    rsp.successTest = false;

    this.pipeLine.Execute(req, rsp,
      [
        'CellNumberValid',
        'EmailValid',
        'UpdateUserValid',
        'UpdateUserWorker',
        'UpdatedEmailAddressNotification',
      ]);

    debugger;
    alert(rsp.errors.length);
    alert(rsp.successTest);

  }
}


// this.pipeLine.Execute(req, rsp,
//   [
//     'CellNumberValid',
//     'EmailValid',
//     'SaveUserValid',
//     'SaveUserWorker',
//   ]);
//
