import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Caio', 1)
peopleAccount.deposit(100)
peopleAccount.withdraw(30)
peopleAccount.deposit(10)
peopleAccount.deposit(5)
peopleAccount.withdraw(100) // não é possivel realizar tal transação
console.log('saldo:', peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('Empresa', 2)
companyAccount.getLoan(10)

const studentAccount: StudentAccount = new StudentAccount('Duda', 1)
console.log(studentAccount.getBalance())
studentAccount.deposit(50)
console.log(studentAccount.getBalance())
studentAccount.deposit(70)
console.log(studentAccount.getBalance())
