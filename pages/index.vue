<template>
  <div class="min-h-screen bg-white">
    <Header @open-modal="openModal" />
    <div class="mx-auto py-2 px-4">
      <SummaryStockCard />
    </div>
    
    <div class="mx-auto py-2 px-4 grid grid-cols-4 gap-6 bg-white">
      <Modal :show="isModalOpen" @close-modal="closeModal">
        <InputForm @cancel="closeModal" @submit="closeModal"/>
      </Modal>

      <StockCard
        v-for="(day, index) in stockData"
        :key="index"
        :date="day.date"
        :entries="day.entries"
        :total="day.total"
      />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import SummaryStockCard from '@/components/SummaryStockCard.vue';
import StockCard from '@/components/StockCard.vue';
import Modal from "@/components/Modal.vue";
import InputForm from "@/components/InputForm.vue";
import { useStockStore } from "@/stores/stock";

const stockStore = useStockStore();

const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

const stockData = stockStore.stockData;
</script>
