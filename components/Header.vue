<template>
  <div class="flex justify-between items-center p-6 bg-white">
    <div>
      <h1 class="text-black text-2xl font-semibold">Gudang Batu Bara</h1>
      <p class="text-black">PT. Aneka Tidak Tambang</p>
    </div>
    <button 
        class="px-4 py-2 text-white rounded bg-dark-blue-primary hover:bg-blue-600"
        @click="$emit('open-modal')"
    >
      Input Data +
    </button>
  </div>
</template>
