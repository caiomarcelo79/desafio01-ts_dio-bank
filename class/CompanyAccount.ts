import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
  getLoan = (valueLoan: number): void => {
    if (valueLoan > 0 && this.validateStatus() === true) {
      console.log('Valid Loan:', valueLoan)
    } else {
      console.log('Invalid Loan')
    }
  }
}
