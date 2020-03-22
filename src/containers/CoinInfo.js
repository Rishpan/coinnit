import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import Template from '../pages/template';

export default function CoinInfo() {
  const { coin } = useRouteData()
  console.log(coin);
  return (
    <Template>
      <div>
        <h1>{coin.Title}</h1>
        <div class="information"></div>
        <table>
          <tr>
            <td>Value</td>
            <td>{coin.Value}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{coin.Country}</td>
          </tr>
          <tr>
            <td>History</td>
            <td>{coin.History}</td>
          </tr>
          <tr>
            <td>Composition</td>
            <td>{coin.Composition}</td>
          </tr>
        </table>
      </div>
    </Template>
  )
}
