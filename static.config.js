import path from 'path'
import axios from 'axios'
import coinsData from './src/pages/coins-data.json'

export default {
  getRoutes: async () => {
    let routes = [
      {
        path: '/coins',
        getData: () => ({
          coinsData,
        }),
        children: coinsData.coins.map(coin => ({
          path: `/${coin.currency}/${coin.id}`,
          template: 'src/containers/CoinInfo',
          getData: () => ({
            coin,
          }),
        })),
      },
    ]
    console.log(routes);
    return routes;
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
