import { DioAccount } from './DioAccount'

export class StudentAccount extends DioAccount {
  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.setBalance(deposit + this.getBalance() + 10)
    }
  }
}
