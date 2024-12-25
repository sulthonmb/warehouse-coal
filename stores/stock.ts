// stores/stock.js
import { defineStore } from "pinia";

export interface StockEntry {
  time: string; // Time of entry (e.g., "10:00")
  type: "Masuk" | "Keluar"; // Type of entry
  amount: number; 
}

export interface StockData {
  date: string; // Date in YYYY-MM-DD format
  entries: StockEntry[]; 
  total: number;
}

export const useStockStore = defineStore("stock", {
  state: () => ({
    stockData: [] as StockData[],
    totalStock: 0 as number,
  }),
  actions: {
    addStock(newEntry: { date: string; time: string; type: "Masuk" | "Keluar"; amount: number }) {
      const { date, time, type, amount } = newEntry;

      const existingDateRecord = this.stockData.find((record) => record.date === date);

      if (existingDateRecord) {
        existingDateRecord.entries.push({ time, type, amount });

        existingDateRecord.entries.sort((a, b) => a.time.localeCompare(b.time));

        const total = existingDateRecord.entries.reduce((sum, entry) => {
          return entry.type === "Masuk" ? sum + entry.amount : sum - entry.amount;
        }, 0);
        existingDateRecord.total = total;
      } else {
        this.stockData.push({
          date,
          entries: [{ time, type, amount }],
          total: type === "Masuk" ? amount : -amount,
        });
      }

      this.stockData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      this.totalStock = this.stockData.reduce((total, item) => total + item.total, 0);
    },
  },
});
