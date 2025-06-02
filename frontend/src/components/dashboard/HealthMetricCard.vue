<template>
  <v-card class="health-metric-card" :class="{ 'warning': isWarning, 'danger': isDanger }">
    <v-card-title class="d-flex align-center">
      <v-icon :color="iconColor" class="mr-2">{{ icon }}</v-icon>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div class="text-center">
        <div class="text-h3 font-weight-bold">{{ value }}</div>
        <div class="text-caption">{{ unit }}</div>
      </div>
      
      <div class="d-flex align-center mt-4">
        <span class="text-caption mr-2">参考范围:</span>
        <v-chip size="small" :color="rangeColor" text-color="white">
          {{ normalRange }}
        </v-chip>
      </div>
      
      <div v-if="trendData && trendData.length > 0" class="trend-chart mt-4">
        <div class="d-flex align-center mb-1">
          <span class="text-caption">近期趋势</span>
          <v-spacer></v-spacer>
          <v-chip
            v-if="trend !== 'neutral'"
            size="x-small"
            :color="trendColor"
            text-color="white"
          >
            {{ trendLabel }}
            <v-icon size="x-small" class="ml-1">{{ trendIcon }}</v-icon>
          </v-chip>
        </div>
        <div class="trend-chart-container" style="height: 50px;">
          <v-sparkline
            :value="trendData"
            :gradient="gradient"
            :smooth="10"
            padding="5"
            line-width="2"
            stroke-linecap="round"
            gradient-direction="top"
            auto-draw
            auto-draw-duration="1000"
          ></v-sparkline>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'HealthMetricCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    unit: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'mdi-heart-pulse'
    },
    normalRange: {
      type: String,
      default: '正常'
    },
    status: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'warning', 'danger'].includes(value)
    },
    trend: {
      type: String,
      default: 'neutral',
      validator: value => ['up', 'down', 'neutral'].includes(value)
    },
    trendData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isWarning() {
      return this.status === 'warning'
    },
    isDanger() {
      return this.status === 'danger'
    },
    iconColor() {
      if (this.status === 'danger') return 'error'
      if (this.status === 'warning') return 'warning'
      return 'success'
    },
    rangeColor() {
      if (this.status === 'danger') return 'error'
      if (this.status === 'warning') return 'warning'
      return 'success'
    },
    trendColor() {
      if (this.trend === 'up') {
        return this.status !== 'normal' ? 'error' : 'success'
      }
      if (this.trend === 'down') {
        return this.status !== 'normal' ? 'success' : 'error'
      }
      return 'grey'
    },
    trendIcon() {
      if (this.trend === 'up') return 'mdi-arrow-up'
      if (this.trend === 'down') return 'mdi-arrow-down'
      return 'mdi-minus'
    },
    trendLabel() {
      if (this.trend === 'up') return '上升'
      if (this.trend === 'down') return '下降'
      return '稳定'
    },
    gradient() {
      if (this.status === 'danger') {
        return ['#F44336', '#FF9800']
      } else if (this.status === 'warning') {
        return ['#FF9800', '#FFC107']
      } else {
        return ['#4CAF50', '#8BC34A']
      }
    }
  }
}
</script>

<style scoped>
.health-metric-card {
  border-left: 4px solid #4CAF50;
  transition: all 0.3s ease;
}

.health-metric-card.warning {
  border-left: 4px solid #FF9800;
}

.health-metric-card.danger {
  border-left: 4px solid #F44336;
}
</style>