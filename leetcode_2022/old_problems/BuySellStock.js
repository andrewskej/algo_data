//only one transaction set of buy-sell
//buy first, then sell
//to make maximum profit


function buySell(prices){
    let profit = 0;
    let buy = prices[0];

    for(let i = 1; i<prices.length; i++){
        let candidate = prices[i];
        //keep finding the minimum price to buy.  candidate is used as buy price candidate.
        buy = Math.min(buy, candidate);  
        //find maximum value of profit, by comparing current profit and next sell-buy.
        //candidate is used as sell price candidate here.
        profit = Math.max(profit, candidate-buy); 
    }

    return profit;
}