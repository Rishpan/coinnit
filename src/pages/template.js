import React from 'react'
import { Link, Router } from 'components/Router'

export default (props) => (
    <div>
        <header class="rounded-corners">
            <div class="header-top">
                <h1>Coinnit</h1>
                <button>Add a Coin</button>
            </div>
            <div id="search">
                <input type="text" placeholder="Search for a coin" />
            </div>
        </header>
        <nav class = "rounded-corners">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
        </nav>
        {props.children}
    </div>
);
