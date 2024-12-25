<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="$emit('close-modal')"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg text-black font-semibold">Input data Batu Bara</h2>
        <button @click="$emit('close-modal')" class="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>

      <!-- Modal Body -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>
