const API = async ()=> {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=sparkline=false');
        const result = await res.json();
        
        result.map((coin)=> {
            const id = coin.id;
            const symbol = coin.symbol;
            const name = coin.name;
            const curr_pr = coin.current_price;
            const mkt_cap = coin.market_cap;
            const trd_vol = coin.total_volume;
            const h_24 = coin.high_24h;
            const l_24 = coin.low_24h;
            const imgsrc = coin.image;


            // Create row
            const row = document.createElement('div');
            row.classList.add('row');

            // Create tokenName
            const tokenName = document.createElement('p');
            tokenName.classList.add('name');
            tokenName.append(name);


            // Create SymbolTag 
            const symbolTag = document.createElement('p');
            symbolTag.classList.add('symbol');
            symbolTag.append(symbol);


            // Create IdTag
            const idTag = document.createElement('span');
            idTag.classList.add('id');
            idTag.append(id);


            // Create priceTag
            const priceTag = document.createElement('span');
            priceTag.classList.add('curr_pr');
            priceTag.append(curr_pr);


            // Create MarketcapTag
            const market_cap = document.createElement('span');
            market_cap.classList.add('mkt_cap');
            market_cap.append(mkt_cap)


            // Create TradingVolume
            const trading_volume = document.createElement('span');
            trading_volume.classList.add('trd_vol');
            trading_volume.append(trd_vol);


            // Create 24Hour high
            const h_24h = document.createElement('span');
            h_24h.classList.add('h_24');
            h_24h.append(h_24);


            // Create 24Hour Low
            const l_24h = document.createElement('span');
            l_24h.classList.add('l_24');
            l_24h.append(l_24);


            // Create imgTag
            const imgTag = document.createElement('span');
            //imgTag.classList.add('imgsrc')
            //imgTag.append(imgsrc);
            


            // Append all elements inside Row
            row.append(tokenName);
            row.append(symbolTag);
            row.append(idTag);
            row.append(priceTag);
            row.append(market_cap);
            row.append(trading_volume);
            row.append(h_24h);
            row.append(l_24h);
            row.append(imgTag);

            const dashboard = document.getElementById('dashboard');
            dashboard.appendChild(row);
            
        })
}

API();




