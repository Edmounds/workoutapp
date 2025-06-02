<template>
  <v-card :color="color" dark>
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <div>
          <p class="text-overline mb-1">{{ title }}</p>
          <p class="text-h4 mb-0">{{ value }}</p>
        </div>
        <v-avatar size="48" :color="iconBgColor">
          <v-icon>{{ icon }}</v-icon>
        </v-avatar>
      </div>
      <v-divider class="my-3"></v-divider>
      <div class="d-flex align-center">
        <v-icon size="small" :color="trendColor">
          {{ trendIcon }}
        </v-icon>
        <span class="ml-1">
          {{ change }}% {{ trendLabel }}
        </span>
        <span class="text-caption ml-2">较上周</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'StatCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      default: 'mdi-chart-line'
    },
    color: {
      type: String,
      default: 'primary'
    },
    change: {
      type: Number,
      default: 0
    },
    trend: {
      type: String,
      default: 'up',
      validator: value => ['up', 'down', 'neutral'].includes(value)
    }
  },
  computed: {
    iconBgColor() {
      return this.color + ' darken-2'
    },
    trendIcon() {
      if (this.trend === 'up') return 'mdi-arrow-up'
      if (this.trend === 'down') return 'mdi-arrow-down'
      return 'mdi-minus'
    },
    trendColor() {
      if (this.trend === 'up') return 'success'
      if (this.trend === 'down') return 'error'
      return 'grey'
    },
    trendLabel() {
      if (this.trend === 'up') return '增长'
      if (this.trend === 'down') return '下降'
      return '持平'
    }
  }
}
</script>