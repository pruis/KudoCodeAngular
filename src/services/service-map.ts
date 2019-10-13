import {
  CellNumberValid, EmailValid,
  SaveUserValid, SaveUserWorker, UpdateUserValid,
} from "../handlers/UserHandler";
import {
  SmsNotification,
  UpdatedEmailAddressNotification,
  UpdateUserWorker
} from "../handlers/updated-email-notification-worker.service";


export const servMap = {
  SaveUserValid: SaveUserValid,
  UpdateUserValid: UpdateUserValid,
  SaveUserWorker: SaveUserWorker,
  CellNumberValid: CellNumberValid,
  EmailValid: EmailValid,
  UpdateUserWorker: UpdateUserWorker,
  UpdatedEmailAddressNotification : UpdatedEmailAddressNotification,
  SmsNotification : SmsNotification
};
