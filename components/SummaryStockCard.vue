
<script setup>
import { storeToRefs } from 'pinia'
import { useStockStore } from "@/stores/stock";
const stockStore = useStockStore();
const { totalStock } = storeToRefs(stockStore);
</script>

<template>
    <div class="w-60 p-4 border rounded bg-stock-card-primary hover:bg-[#ebf5ff] transition-colors" style="border: solid 1px #cbd4e2;">
        <h2 class="text-black mb-4">Stok Terkini</h2>
        <h2 class="text-4xl text-black text-center font-bold">{{ totalStock || 0 }}</h2>
    </div>
</template>
