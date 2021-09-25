import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionTable() {
 useEffect(() => {
  fetch('http://localhost:3000/api/transactions')
  .then(response => response.json())
  .then(data => console.log(data)) 
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