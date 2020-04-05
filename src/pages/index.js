import React, { useEffect } from 'react'
import Template from './template';
import Data from './coins-data.json';

export default () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.innerHTML = `
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
          });
        }
      });
    }
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);


  var featuredCoinElements = [];
  for (var x = 0; x < Data.coins.length; x++) {
    // This is JSX! We need babel to translate this to JavaScript
    // usd/us-penny
    var featuredCoin = (
      <div className="featured-coin rounded-corners">
        <img src="" />
        <p>
          <a href={`/coins/usd/${Data.coins[x].id}`}> 
            {Data.coins[x].Title}
          </a>
        </p>
      </div>
    );
    featuredCoinElements.push(featuredCoin);
  }
  return (
    <Template>
      <section>
      <h2>Featured</h2>
      <div class="featured-coins">
        {featuredCoinElements}
      </div>
    </section>
    <section>
      <h2>Featured Coin News</h2>
      <div class="coin-news rounded-corners">
        <h3>News item title</h3>
        <p>Here's the latest blah blah</p>
      </div>
      <div class="coin-news rounded-corners">
        <h3>News item title</h3>
        <p>Here's the latest blah blah</p>
      </div>
      <div class="coin-news rounded-corners">
        <h3>News item title</h3>
        <p>Here's the latest blah blah</p>
      </div>
    </section>
    </Template>
  );
}
