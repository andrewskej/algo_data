

var maxProfit = function(prices) {
    var buy = 0;
    var sell = 0;
    var profit = 0;
    var today = 0;
    var week = prices.length-1;

    //buy first, then sell
    //buy when cheap, sell then exp.

    while(today < week){
        //while price drops (tomorrow's price is less than today's), wait and pass the day
        while(prices[today] > prices[today+1]){
            today++;
        }
        //when drop stops, meaning tomorrow will be no longer dropping, meaning this is the lowest point so far, to buy.
        buy = prices[today];
        console.log(buy)

        //while prices goes up (tomorrow's price is higher than today's), wait and pass the day
        while(prices[today] <= prices[today+1]){
            today++;
        }
        //when raise stops, meaning that it will begin drops, meaning now is the point to sell
        sell = prices[today];
        console.log(sell)

        //total profit is an accumulated sum amount of  (sell - buy)
        profit += sell - buy;
        console.log(profit)
    }
    
    return profit;    
};

let prices = [7,1,5,3,6,4]
prices = [1,2,3,4,5]
prices = [7,6,4,3,1]
console.log(maxProfit(prices))