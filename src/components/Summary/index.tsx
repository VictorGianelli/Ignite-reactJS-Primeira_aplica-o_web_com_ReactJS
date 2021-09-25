import total from '../../assets/total.svg';
import outcome from '../../assets/outcome.svg';
import income from '../../assets/income.svg';
import { Container } from './styles';
import { TransactionContext } from '../../TransactionsContext';
import { useContext } from 'react';

export function Summary() {
 const { transactions } = useContext(TransactionContext)

 const sumary = transactions.reduce((acc, transaction) => {
  if (transaction.type === 'deposit') {
   acc.deposits += transaction.amount;
   acc.total += transaction.amount;
  } else {
   acc.withdraws += transaction.amount;
   acc.total -= transaction.amount;
  }

  return acc;
 }, {
  deposits: 0,
  withdraws: 0,
  total: 0,
 })

 return (
  <Container>
   <div>
    <header>
     <p>Entrada</p>
     <img src={income} alt="Entradas" />
    </header>
    <strong>
     {new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
     }).format(sumary.deposits)}
    </strong>
   </div>
   <div>
    <header>
     <p>Saidas</p>
     <img src={outcome} alt="Saidas" />
    </header>
    <strong>
     -
     {new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
     }).format(sumary.withdraws)}
    </strong>
   </div>
   <div className="highlight-background">
    <header>
     <p>Total</p>
     <img src={total} alt="total" />
    </header>
    <strong>
     {new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
     }).format(sumary.total)}
    </strong>
   </div>
  </Container>
 )
}