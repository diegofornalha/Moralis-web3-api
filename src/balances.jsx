import { useEffect, useState } from 'react';
import axios from 'axios';
import './balances.css';

export default function Balances() {
  const [balances, setBalances] = useState({});

  useEffect(() => {
    // Fazendo a requisição para obter os saldos da API backend
    axios('http://localhost:4000/balances')
      .then(({ data }) => {
        setBalances(data);
      })
      .catch(error => {
        console.error('Erro ao buscar saldos:', error);
      });
  }, []);

  // Função para processar tokenBalances no formato correto
  const renderTokenBalances = () => {
    if (balances.tokenBalances && balances.tokenBalances.length > 0) {
      return balances.tokenBalances.map((token, index) => {
        const [amount, symbol] = token.split(' '); // Dividir a string para pegar quantidade e símbolo
        return (
          <tr key={index}>
            <td>{symbol}</td>
            <td>{amount}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="2">Nenhum token encontrado</td>
        </tr>
      );
    }
  };

  return (
    <div className="balance-container">
      <h2 className="balance-header">Detalhes do Saldo da Carteira</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Endereço da Carteira</th>
            <th>Saldo Nativo (FLOW)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{balances.address}</td>
            <td>{balances.nativeBalance}</td>
          </tr>
        </tbody>
      </table>

      <h3>Token Balances</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {renderTokenBalances()} {/* Chama a função para renderizar os tokens */}
        </tbody>
      </table>

      <div className="json-display">
        <h4>JSON Completo:</h4>
        <pre>{JSON.stringify(balances, null, 2)}</pre>
      </div>
    </div>
  );
}
