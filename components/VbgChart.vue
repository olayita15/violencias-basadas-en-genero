<script setup lang="ts">
import * as echarts from 'echarts'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const props = defineProps<{ kind: 'regional' | 'territory' | 'vif' | 'vif-aggressor' | 'diversity' | 'femicide' }>()
const element = ref<HTMLElement>()
let chart: echarts.ECharts | undefined
let observer: ResizeObserver | undefined
let counterFrame = 0
let restartTimer = 0
let legendChannel: BroadcastChannel | undefined
let applyingRemoteLegend = false
let tooltipFrame = 0
const counter = ref(0)
const isReady = ref(false)
const counterTarget = computed(() => props.kind === 'femicide' ? 3828 : props.kind === 'diversity' ? 164 : 0)
const palette = { wine: '#5c3526', terra: '#bc4f25', orange: '#e97825', gold: '#f2ae43', soft: '#fff1df', ink: '#30231f' }
const interactiveLegend = computed(() => props.kind === 'vif' || props.kind === 'vif-aggressor')
const legendStorageKey = computed(() => `vbg-chart-legend:${props.kind}`)

function option() {
  const base = { backgroundColor: 'transparent', textStyle: { fontFamily: 'Arial, sans-serif', color: palette.ink }, animationDuration: 1800, animationDurationUpdate: 1200, animationDelay: (index: number) => index * 160, animationEasing: 'cubicOut' }
  if (props.kind === 'regional') return { ...base, title: { text: 'Tasa anual de homicidios intencionales · 2025', subtext: 'Muertes durante el año por cada 100.000 habitantes\nFuente: InSight Crime · datos oficiales nacionales', left: 'center', textStyle: { color: palette.wine, fontSize: 14 }, subtextStyle: { color: palette.terra, fontSize: 9, lineHeight: 13 } }, grid: { left: 80, right: 24, top: 78, bottom: 18 }, xAxis: { type: 'value', name: 'tasa anual', nameTextStyle: { color: palette.wine }, splitLine: { lineStyle: { color: '#e9c8a3' } } }, yAxis: { type: 'category', data: ['Argentina', 'Uruguay', 'Honduras', 'Colombia', 'Ecuador'], axisTick: { show: false }, axisLine: { show: false } }, series: [{ type: 'bar', data: [3.7, 10.3, 23.2, 25.8, 50.9], barWidth: 22, label: { show: true, position: 'right', color: palette.wine, formatter: '{c}' }, itemStyle: { color: (p: any) => p.dataIndex === 3 ? palette.terra : palette.gold, borderRadius: [0, 5, 5, 0] } }] }
  if (props.kind === 'territory') return { ...base, title: { text: 'Tasa anual de homicidios por departamento', subtext: 'Colombia, 2019 · por cada 100.000 habitantes\nFuente: DANE', left: 'center', textStyle: { color: palette.wine, fontSize: 14 }, subtextStyle: { color: palette.terra, fontSize: 9, lineHeight: 13 } }, grid: { left: 48, right: 16, top: 76, bottom: 62 }, xAxis: { type: 'category', data: ['Boyacá', 'Guainía', 'Cauca', 'Caquetá', 'Valle', 'Arauca'], axisLabel: { rotate: 35, color: palette.wine }, axisTick: { show: false } }, yAxis: { type: 'value', name: 'tasa', splitLine: { lineStyle: { color: '#e9c8a3' } } }, series: [{ type: 'bar', data: [7.2, 8.2, 50.6, 53.3, 53.6, 59.3], label: { show: true, position: 'top', color: palette.wine }, itemStyle: { color: (p: any) => p.dataIndex < 2 ? palette.gold : palette.terra, borderRadius: [5, 5, 0, 0] } }] }
  if (props.kind === 'vif') return {
    ...base,
    title: {
      text: 'Valoraciones por violencia intrafamiliar según parentesco',
      subtext: 'Colombia, 2024 · relación con el presunto agresor · 20.185 registros\nFuente: Instituto Nacional de Medicina Legal y Ciencias Forenses · Datos Abiertos',
      left: 'center',
      textStyle: { color: palette.wine, fontSize: 13 },
      subtextStyle: { color: palette.terra, fontSize: 8.5, lineHeight: 12 },
    },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['Víctimas hombres', 'Víctimas mujeres'], bottom: -5, textStyle: { color: palette.wine, fontSize: 9 } },
    grid: { left: 108, right: 18, top: 84, bottom: 44 },
    xAxis: { type: 'value', axisLabel: { color: palette.wine, fontSize: 8 }, splitLine: { lineStyle: { color: '#e9c8a3' } } },
    yAxis: {
      type: 'category',
      inverse: true,
      data: ['Padre / madre', 'Hermano/a', 'Hijo/a', 'Familia política*', 'Tío/a o sobrino/a', 'Padrastro / madrastra', 'Primo/a', 'Abuelo/a o nieto/a', 'Otros familiares'],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { color: palette.wine, fontSize: 9.5, lineHeight: 15, margin: 12 },
    },
    series: [
      { name: 'Víctimas hombres', type: 'bar', barMaxWidth: 10, data: [2267, 1344, 844, 747, 926, 508, 410, 162, 797], itemStyle: { color: palette.terra, borderRadius: [0, 3, 3, 0] } },
      { name: 'Víctimas mujeres', type: 'bar', barMaxWidth: 10, data: [2835, 2279, 1911, 1392, 1035, 580, 462, 273, 748], itemStyle: { color: palette.gold, borderRadius: [0, 3, 3, 0] } },
    ],
  }
  if (props.kind === 'vif-aggressor') return {
    ...base,
    title: {
      text: 'Presuntos agresores por parentesco con la víctima',
      subtext: 'Colombia, 2024 · sexo registrado del presunto agresor · 20.185 registros\nFuente: Instituto Nacional de Medicina Legal y Ciencias Forenses · Datos Abiertos',
      left: 'center',
      textStyle: { color: palette.wine, fontSize: 13 },
      subtextStyle: { color: palette.terra, fontSize: 8.5, lineHeight: 12 },
    },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['Presuntos agresores hombres', 'Presuntas agresoras mujeres'], bottom: -5, textStyle: { color: palette.wine, fontSize: 9 } },
    grid: { left: 108, right: 18, top: 84, bottom: 44 },
    xAxis: { type: 'value', axisLabel: { color: palette.wine, fontSize: 8 }, splitLine: { lineStyle: { color: '#e9c8a3' } } },
    yAxis: {
      type: 'category',
      inverse: true,
      data: ['Padre / madre', 'Hermano/a', 'Hijo/a', 'Familia política*', 'Tío/a o sobrino/a', 'Padrastro / madrastra', 'Primo/a', 'Abuelo/a o nieto/a', 'Otros familiares'],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { color: palette.wine, fontSize: 9.5, lineHeight: 15, margin: 12 },
    },
    series: [
      { name: 'Presuntos agresores hombres', type: 'bar', barMaxWidth: 10, data: [2771, 2646, 2064, 1348, 1405, 914, 581, 264, 1031], itemStyle: { color: palette.terra, borderRadius: [0, 3, 3, 0] } },
      { name: 'Presuntas agresoras mujeres', type: 'bar', barMaxWidth: 10, data: [2327, 973, 689, 791, 555, 174, 289, 170, 491], itemStyle: { color: palette.gold, borderRadius: [0, 3, 3, 0] } },
    ],
  }
  if (props.kind === 'diversity') return { ...base, graphic: [{ type: 'text', left: 'center', top: '47%', style: { text: 'homicidios documentados\nde personas LGBTIQ+ · Colombia, 2024', fill: palette.ink, font: '16px Arial', textAlign: 'center', lineHeight: 23 } }, { type: 'text', left: 'center', top: '74%', style: { text: '1 persona asesinada cada 55 horas', fill: palette.terra, font: '700 16px Arial', textAlign: 'center' } }, { type: 'text', left: 'center', top: '91%', style: { text: 'Fuente: Caribe Afirmativo · registro documentado, no tasa exhaustiva', fill: palette.wine, font: '9px Arial', textAlign: 'center' } }] }
  const dailyMarkers = Array.from({ length: 11 }, (_, index) => ({ type: 'circle', left: `${15 + index * 7}%`, top: '77%', shape: { r: 6 }, style: { fill: palette.terra } }))
  return { ...base, graphic: [{ type: 'text', left: 'center', top: '43%', style: { text: 'femicidios, feminicidios o muertes\nviolentas por razones de género · ALC, 2024', fill: palette.ink, font: '15px Arial', textAlign: 'center', lineHeight: 22 } }, ...dailyMarkers, { type: 'text', left: 'center', top: '85%', style: { text: '11 puntos · al menos 11 muertes cada día', fill: palette.terra, font: '700 13px Arial', textAlign: 'center' } }, { type: 'text', left: 'center', top: '94%', style: { text: 'Fuente: CEPAL · 26 países y territorios con información oficial', fill: palette.wine, font: '9px Arial', textAlign: 'center' } }] }
}

function resize() { chart?.resize() }
function applyLegendSelection(selected: Record<string, boolean>) {
  if (!chart) return
  applyingRemoteLegend = true
  Object.entries(selected).forEach(([name, shown]) => {
    chart?.dispatchAction({ type: shown ? 'legendSelect' : 'legendUnSelect', name })
  })
  applyingRemoteLegend = false
}
function restoreLegendSelection() {
  if (!interactiveLegend.value) return
  try {
    const saved = window.localStorage.getItem(legendStorageKey.value)
    if (saved) applyLegendSelection(JSON.parse(saved))
  }
  catch { /* Si el almacenamiento no está disponible, la gráfica sigue funcionando localmente. */ }
}
function bindLegendSync() {
  if (!chart || !interactiveLegend.value) return
  restoreLegendSelection()
  chart.on('legendselectchanged', (event: any) => {
    if (applyingRemoteLegend) return
    const selected = event.selected as Record<string, boolean>
    try { window.localStorage.setItem(legendStorageKey.value, JSON.stringify(selected)) }
    catch { /* No impedir la interacción local si falla el almacenamiento. */ }
    legendChannel?.postMessage({ kind: props.kind, selected })
  })
}
function bindTooltipSync() {
  if (!chart || !interactiveLegend.value) return
  const renderer = chart.getZr()
  renderer.on('mousemove', (event: any) => {
    const x = event.offsetX / chart!.getWidth()
    const y = event.offsetY / chart!.getHeight()
    cancelAnimationFrame(tooltipFrame)
    tooltipFrame = requestAnimationFrame(() => {
      legendChannel?.postMessage({ kind: props.kind, type: 'tooltip', x, y })
    })
  })
  renderer.on('globalout', () => {
    legendChannel?.postMessage({ kind: props.kind, type: 'hide-tooltip' })
  })
}
function animateCounter() {
  if (!counterTarget.value) return
  cancelAnimationFrame(counterFrame)
  counter.value = 0
  const startedAt = performance.now()
  const duration = 1750
  const tick = (now: number) => {
    const progress = Math.min((now - startedAt) / duration, 1)
    counter.value = Math.round(counterTarget.value * (1 - (1 - progress) ** 3))
    if (progress < 1) counterFrame = requestAnimationFrame(tick)
  }
  counterFrame = requestAnimationFrame(tick)
}
async function restart() {
  if (!element.value) return
  isReady.value = false
  chart?.dispose()
  chart = undefined
  element.value.replaceChildren()
  await nextTick()
  await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
  if (!element.value) return
  chart = echarts.init(element.value)
  chart.clear()
  isReady.value = true
  await nextTick()
  await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
  if (!chart) return
  chart.setOption(option(), true)
  bindLegendSync()
  bindTooltipSync()
  animateCounter()
  requestAnimationFrame(resize)
}
function scheduleRestart() {
  window.clearTimeout(restartTimer)
  restartTimer = window.setTimeout(restart, 450)
}
function clearChart() {
  window.clearTimeout(restartTimer)
  cancelAnimationFrame(counterFrame)
  cancelAnimationFrame(tooltipFrame)
  counter.value = 0
  isReady.value = false
  chart?.dispose()
  chart = undefined
  element.value?.replaceChildren()
}
onMounted(async () => {
  if (!element.value) return
  await nextTick()
  if (interactiveLegend.value && 'BroadcastChannel' in window) {
    legendChannel = new BroadcastChannel('vbg-chart-legend-sync')
    legendChannel.onmessage = (event: MessageEvent<{ kind?: string, type?: string, selected?: Record<string, boolean>, x?: number, y?: number }>) => {
      if (event.data.kind !== props.kind || !chart) return
      if (event.data.selected) applyLegendSelection(event.data.selected)
      if (event.data.type === 'tooltip' && event.data.x != null && event.data.y != null) {
        chart.dispatchAction({ type: 'showTip', x: event.data.x * chart.getWidth(), y: event.data.y * chart.getHeight() })
      }
      if (event.data.type === 'hide-tooltip') chart.dispatchAction({ type: 'hideTip' })
    }
  }
  observer = new ResizeObserver(resize)
  observer.observe(element.value)
  window.addEventListener('resize', resize)
})
onSlideEnter(scheduleRestart)
onSlideLeave(clearChart)
onBeforeUnmount(() => { clearChart(); legendChannel?.close(); observer?.disconnect(); window.removeEventListener('resize', resize) })
</script>
<template><div class="vbg-chart-shell" :class="{ ready: isReady, 'is-vif': props.kind === 'vif' || props.kind === 'vif-aggressor' }"><div ref="element" class="vbg-chart" /><div v-if="counterTarget" class="vbg-counter">{{ counter.toLocaleString('es-CO') }}</div></div></template>
<style scoped>.vbg-chart-shell { position: relative; height: 220px; width: 100%; opacity: 0; }.vbg-chart-shell.ready { opacity: 1; }.vbg-chart { height: 220px; min-height: 0; width: 100%; overflow: hidden; }.vbg-chart-shell.is-vif, .vbg-chart-shell.is-vif .vbg-chart { height: 310px; }.vbg-counter { position: absolute; top: 12%; left: 0; width: 100%; color: #5c3526; font: 700 52px Arial, sans-serif; text-align: center; pointer-events: none; }</style>
