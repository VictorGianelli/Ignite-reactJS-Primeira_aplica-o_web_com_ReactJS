import total from '../../assets/total.svg';
import outcome from '../../assets/outcome.svg';
import income from '../../assets/income.svg';
import { Container} from './styles';
import { TransactionContext } from '../../TransactionsContext';
import { useContext } from 'react';

export function Summary() {
 const {transactions} = useContext(TransactionContext)

 console.log(transactions)
 
 return (
  <Container>
   <div>
    <header>
     <p>Entrada</p>
     <img src={income} alt="Entradas" />
    </header>
    <strong>R$1000,00</strong>
   </div>
   <div>
    <header>
     <p>Saidas</p>
     <img src={outcome} alt="Saidas" />
    </header>
    <strong>- R$500,00</strong>
   </div>
   <div className="highlight-background">
    <header>
     <p>Total</p>
     <img src={total} alt="total" />
    </header>
    <strong>R$500,00</strong>
   </div>
  </Container>
 )
}