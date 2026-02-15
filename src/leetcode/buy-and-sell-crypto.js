class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // The maximum profit found
        let maximumProfit = 0;
        let priceLength = prices.length;

        for (let i = 0; i < priceLength; i++) {
            let currentDayPrice = prices[i];
            for (let j = i+1; j < priceLength; j++) {
                let futureDayPrice = prices[j];
                let profitOrLoss = futureDayPrice - currentDayPrice;
                if (profitOrLoss > maximumProfit) {
                    maximumProfit = profitOrLoss;
                }
            }
        }

        return maximumProfit;
    }
}
