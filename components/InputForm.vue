<template>
  <form @submit.prevent="submitForm">
    <div class="mb-4">
        <label for="type" class="block text-black">Jenis Data</label>
        <select
            id="type"
            v-model="type"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        >
            <option value="" disabled>Select here</option>
            <option value="Masuk">Masuk</option>
            <option value="Keluar">Keluar</option>
        </select>
    </div>

    <div class="flex space-x-4 mb-4">
        <!-- Tanggal -->
        <div class="flex-1">
            <label for="tanggal" class="block text-gray-600 mb-2">Tanggal</label>
            <input
                type="date"
                id="tanggal"
                v-model="date"
                class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
            />
        </div>
        <!-- Jam -->
        <div class="flex-1">
            <label for="jam" class="block text-gray-600 mb-2">Jam</label>
            <input
                type="time"
                id="jam"
                v-model="time"
                step="60"
                class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
            />
        </div>
    </div>

    <div class="mb-4">
        <label for="total" class="block text-gray-600 mb-2">Total</label>
        <div class="flex items-center">
            <input
                type="number"
                id="total"
                v-model="amount"
                class="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Type here"
                required
            />
            <span class="px-4 py-2 bg-gray-100 text-black border border-l-0 rounded-r">Ton</span>
        </div>
    </div>
    
    <div class="flex justify-end space-x-4">
        <button
            type="button"
            @click="$emit('cancel')"
            class="px-4 py-2 border rounded text-gray-600 border-bg-dark-blue-primary hover:bg-gray-100"
        >
            Cancel
        </button>
        <button
            type="submit"
            class="px-4 py-2 bg-dark-blue-primary text-white rounded hover:bg-blue-600"
        >
            Save
        </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStockStore } from "@/stores/stock";

const emit = defineEmits(["cancel", "submit"]);

const time = ref("");
const date = ref("");
const type = ref("");
const amount = ref("");
const stockStore = useStockStore();

function submitForm() {
    const newData = {
        type: type.value,
        date: date.value,
        time: time.value,
        amount: amount.value,
    };

    stockStore.addStock(newData);

    type.value = "";
    date.value = "";
    time.value = "";
    amount.value = "";

    emit("submit");    
}
</script>
