async function fetchStock() {
    var elem = document.querySelector("#stockSymbol");
    var stockName = elem.value;
    var stockSymbol = document.getElementById("stockSymbol").value;
    
    var response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=full&apikey=${stockName}`);
    var data = await response.json();

    console.log(data["Meta Data"])
    console.log(data["Time Series (Daily)"])

    var main = document.querySelector("div")
    
    main.innerHTML =
        `    
        <h1>Stock: ${data["Meta Data"]["2. Symbol"]}</h1>
        <h1> Date: ${data["Meta Data"]["3. Last Refreshed"]}</h1>
        <h1> Open: ${data["Time Series (Daily)"][data["Meta Data"]["3. Last Refreshed"]]["1. open"]}</h1>
        <h1> High: ${data["Time Series (Daily)"][data["Meta Data"]["3. Last Refreshed"]]["2. high"]}</h1>
        <h1> Low: ${data["Time Series (Daily)"][data["Meta Data"]["3. Last Refreshed"]]["3. low"]}</h1>
        <h1> Close: ${data["Time Series (Daily)"][data["Meta Data"]["3. Last Refreshed"]]["4. close"]}</h1>
        <h1> Volume: ${data["Time Series (Daily)"][data["Meta Data"]["3. Last Refreshed"]]["5. volume"]}</h1>
        `

    }
