<template>
  <div class="p-4 border rounded bg-stock-card-primary hover:bg-[#ebf5ff] transition-colors" style="border: solid 1px #cbd4e2;">
    <h2 class="text-xl text-black font-bold mb-2 py-2" style="border-bottom: solid 1px #d2dae3;">{{ 
        new Date(date).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
    }}</h2>
    <ul>
      <li v-for="(entry, index) in entries" :key="index" class="flex justify-between mb-2 py-2" style="border-bottom: solid 1px #d2dae3;">
        <div class="text-black">
            <span class="mr-4">{{ entry.time }}</span> 
            <span>{{ entry.type }}</span>
        </div>
        <span class="text-black">
          {{ entry.amount.toLocaleString('id-ID') }} ton
        </span>
      </li>
    </ul>
    <div class="mt-4 text-right text-black">
        <span class="font-semibold mr-5">Total: </span>
        <span>{{ total.toLocaleString('id-ID') }} ton</span>
    </div>
  </div>
</template>

<script setup>
defineProps(['date', 'entries', 'total']);
</script>
