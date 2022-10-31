
const stocksList1 = [7,1,5,3,6,4]
const stocksList2 = [7,6,4,3,1]
const stocksList3 = []
const stocksList4 = [1,2]
const stocksList5 = [2,4,1]
//make max profit 
//buy first, then sell
//find lowest buy price and highest sell price
//if possible profit is lower than 1, all goes to 0 

function stocks(prices){
    let minimumBuyPrice = prices[0]
    let maxProfit = 0

    for(let i = 1; i<prices.length; i++){
        let currentPrice = prices[i]
        if(currentPrice < minimumBuyPrice){
            minimumBuyPrice = currentPrice
        }else{
            let currentProfit = currentPrice - minimumBuyPrice
            if(maxProfit < currentProfit){
                maxProfit = currentProfit
            }
        }
    }
    return maxProfit
}

console.log(stocks(stocksList1))