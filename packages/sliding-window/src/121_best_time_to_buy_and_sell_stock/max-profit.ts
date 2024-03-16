export function maxProfit(prices: number[]) {
  let profit = 0;
  let buy = 0;
  let sell = buy + 1;

  while (sell < prices.length) {
    const buyPrice = prices[buy];
    const sellPrice = prices[sell];
    if (sellPrice < buyPrice) {
      buy = sell;
    } else {
      profit = Math.max(profit, sellPrice - buyPrice);
    }
    sell++;
  }

  return profit;
}
