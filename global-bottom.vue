<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentSlideNo, total } = useNav()
const isOddSlide = computed(() => currentSlideNo.value % 2 !== 0)
</script>

<template>
  <footer v-if="currentSlideNo > 1" class="presentation-footer" :class="{ 'is-even': !isOddSlide }" aria-label="Paginación de la presentación">
    <img src="/assets/logo-la-fogata.jpeg" alt="Colectiva La Fogata" class="presentation-footer__logo">
    <span class="presentation-footer__page">{{ currentSlideNo }}</span>
  </footer>
</template>

<style scoped>
.presentation-footer {
  position: fixed;
  right: 1.65rem;
  bottom: 1.2rem;
  left: 1.65rem;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}
.presentation-footer.is-even { flex-direction: row-reverse; }
.presentation-footer__logo {
  width: 2.35rem;
  height: 2.35rem;
  border: 2px solid #f2ae43;
  border-radius: 50%;
  object-fit: cover;
  background: #fffaf2;
  box-shadow: 0 5px 14px #5c352633;
}
.presentation-footer__page {
  color: #5c3526;
  font: 700 .92rem/1 Arial, sans-serif;
  letter-spacing: .11em;
  text-align: center;
}
</style>
