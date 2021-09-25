import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionTable() {
 useEffect(() => {
  api.get('transactions')
  .then(response => console.log(response.data)) 
 },[]);
 

 return (
  <Container>
   <table>

    <tr>
     <th>Titulo</th>
     <th>Valor</th>
     <th>Catogoria</th>
     <th>Data</th>
    </tr>

    <tbody>
     <tr>
      <td>Desenvolvimento de site</td>
      <td className="deposit">R$12.000</td>
      <td>Desenvolvimento</td>
      <td>20/03/1021</td>
     </tr>

     <tr>
      <td>Aluguel</td>
      <td className="withdraw">- R$1.100</td>
      <td>Desenvolvimento</td>
      <td>20/03/1021</td>
     </tr>

    </tbody>

   </table>
  </Container>
 )
}