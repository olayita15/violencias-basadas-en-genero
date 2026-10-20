import type { App } from 'vue'
import VbgChart from '../components/VbgChart.vue'
import AnimatedNumber from '../components/AnimatedNumber.vue'

export default function setup(app: App) {
  app.component('VbgChart', VbgChart)
  app.component('AnimatedNumber', AnimatedNumber)
}
