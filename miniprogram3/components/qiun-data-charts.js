/**
 * qiun-data-charts 秋云高性能跨全端图表组件
 * Copyright (c) 2021 QIUN® https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 复制、引用或修改本代码须保留 QIUN® 版权声明
 * */
Component({
  properties: {
    type: {
      type: String,
      value: null
    },
    canvasId: {
      type: String,
      value: 'qiun-canvas',
    },
    canvas2d: {
      type: Boolean,
      value: false,
    },
    background: {
      type: String,
      value: 'rgba(0,0,0,0)',
    },
    animation: {
      type: Boolean,
      value: true,
    },
    chartData: {
      type: Object,
      value: {
        categories: [],
        series: []
      },
      observer: function(newVal, oldVal) {
        this.checkData(newVal);
      }
    },
    opts: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal) {
        this.checkOpts(newVal);
      }
    },
    eopts: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal) {
        this.checkOpts(newVal);
      }
    },
    ontouch: {
      type: Boolean,
      value: true,
    },
    onmouse: {
      type: Boolean,
      value: true,
    },
    onmovetip: {
      type: Boolean,
      value: false,
    },
    reshow: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal) {
        if (newVal === true && this.initchart === true) {
          setTimeout(() => {
            this.resizeHandler();
          }, 200)
        }
      }
    },
    reload: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal) {
        if (newVal === true) {
          this.reloading()
        }
      }
    },
    disableScroll: {
      type: Boolean,
      value: false
    },
    tapLegend: {
      type: Boolean,
      value: true
    },
    echartsH5: {
      type: Boolean,
      value: false
    },
    echartsApp: {
      type: Boolean,
      value: false
    },
    echartsMp: {
      type: Boolean,
      value: false
    },
    echarts: {
      type: Boolean,
      value: false
    },
    inScrollView: {
      type: Boolean,
      value: false
    },
    pageScrollTop: {
      type: Number,
      value: 0
    },
    errorShow: {
      type: Boolean,
      value: true,
    },
    errorMessage: {
      type: String,
      value: null,
    },
  },
  data: {
    cid: null,
    mixinDatacomLoading: false,
    mixinDatacomErrorMessage: null,
    initchart: false,
    mixinChartData: {
      categories: [],
      series: []
    },
    drawData: {},
    chartInstance: null,
    wxucharts: null,
    Echarts: null,
    echartsver: null,
    echartsInstance: null,
    echartsIsInit: false,
    lastDrawTime: null
  },
  lifetimes: {
    attached: function() {
      const cid = this.getComponentId();
      this.setData({
        cid
      })
      if (this.data.echarts === true) {
        this.initEcharts()
      } else {
        this.init()
      }
    },
    ready: function() {
    },
    detached: function() {
      if(this.data.echarts === true){
        if(this.data.echartsInstance){
          this.echartsInstance.dispose()
        }
      }else{
        if(this.data.chartInstance){
          this.data.chartInstance.stopAnimation()
        }
      }
    },
  },
  methods: {
    getComponentId() {
      let S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return (S4() + S4() + "-" + S4());
    },
    init() {
      this.initchart = false;
      this.mixinDatacomLoading = false;
      this.mixinDatacomErrorMessage = null;
      let getAPI = this.getAPI(this.data.type)
      if (getAPI.action == 'render') {
        this.mixinDatacomLoading = false;
        this.mixinDatacomErrorMessage = null;
        this.checkData(this.data.chartData);
      }
    },
    initEcharts() {
      if(this.data.canvasId == 'qiun-canvas'){
        console.log(`[uCharts] 温馨提示：ECharts模式组件需指定唯一的canvasId`);
      }
      let getv = this.getVer();
      if(getv.type == 'echarts' && getv.chkv == true){
        this.setData({
          echartsver: getv.ver,
          Echarts:this.Echarts
        })
        if (this.data.mixinDatacomErrorMessage) {
          this.showError()
        } else {
          let opts = this.checkEchartsOpts(this.data.eopts)
          this.echartsInstance.setOption(opts)
        }
      }
    },
    checkData(newVal) {
      this.mixinDatacomLoading = false
      let getAPI = this.getAPI(this.data.type)
      if (getAPI.action !== 'render') {
        return;
      }
      if (newVal) {
        this.mixinChartData = JSON.parse(JSON.stringify(newVal));
        if (this.mixinChartData.series && this.mixinChartData.series.length > 0) {
          this.mixinDatacomErrorMessage = null;
          if(this.initchart === true){
            this.changeData(this.data.type, this.mixinChartData)
          }else{
            if (this.data.echarts === true) {
              this.initEcharts()
            } else {
              this.draw()
            }
          }
        } else {
          this.mixinDatacomErrorMessage = "数据格式错误";
          if (this.initchart === true) {
            this.showError()
          }
        }
      } else {
        this.mixinDatacomErrorMessage = "chartData数据为空";
        if (this.initchart === true) {
          this.showError()
        }
      }
    },
    checkOpts(newVal) {
      if (this.initchart === true) {
        if (this.data.echarts === true) {
          let opts = this.checkEchartsOpts(newVal)
          this.echartsInstance.setOption(opts, {
            notMerge: true
          })
        } else {
          this.chartInstance.updateData({
            opts: newVal
          });
        }
      }
    },
    checkEchartsOpts(newVal){
      let opts = JSON.parse(JSON.stringify(newVal))
      if(opts.series && opts.series.length > 0){
        this.mixinDatacomErrorMessage = null;
      }else{
        opts.series = []
        this.mixinDatacomErrorMessage = "数据格式错误";
      }
      return opts
    },
    draw() {
      this.lastDrawTime = new Date().getTime();
      let chartdom = {};
      this.findDom(this,this.data.canvasId).then((res) => {
        if (!res.node) {
          this.mixinDatacomErrorMessage = '未获取到dom节点， canvas-id:' + this.data.canvasId;
          this.showError();
          return;
        }
        chartdom = res;
        this.mixinDatacomErrorMessage = null;
        this.drawChart(this.data.type, this.mixinChartData, this.data.opts, chartdom)
      })
    },
    reloading() {
      if (this.mixinDatacomLoading === true) {
        return;
      }
      this.mixinDatacomLoading = false
      this.mixinDatacomErrorMessage = null
      let getAPI = this.getAPI(this.data.type)
      if (getAPI.action == 'render') {
        this.draw()
      }
    },
    changeData(type, data) {
      if (this.data.echarts === true) {
        let opts = this.checkEchartsOpts(data)
        this.echartsInstance.setOption(opts, {notMerge: true});
      } else {
        this.chartInstance.updateData({
          series: data.series,
          categories: data.categories
        });
      }
    },
    drawChart(type, data, opts, chartdom) {
      var _this = this;
      var lastTime = this.lastDrawTime;
      var config = JSON.parse(JSON.stringify(opts));
      config.type = type;
      config.canvasId = chartdom.id;
      config.canvas2d = chartdom.canvas2d;
      config.context = chartdom.context;
      config.width = chartdom.width;
      config.height = chartdom.height;
      config.pixelRatio = chartdom.pixelRatio;
      config.animation = this.data.animation;
      config.rotateLock = this.data.rotateLock;
      config.echarts = this.data.echarts;
      this.chartInstance = new this.wxucharts(config);
      this.chartInstance.opts.chartData = data;
      this.chartInstance.addEventListener('renderComplete', function(e) {
        let nowTime = new Date().getTime();
        let differTime = nowTime - lastTime;
        _this.triggerEvent("complete", {
          id: e.id,
          opts: _this.chartInstance.opts,
          type: "complete",
          canvasId: _this.data.canvasId,
          // #ifndef MP-ALIPAY || MP-BAIDU
          spendTime: differTime,
          // #endif
          // #ifdef MP-ALIPAY || MP-BAIDU
          spend: differTime,
          // #endif
        })
      });
      this.chartInstance.addEventListener('scrollTouch', function(e) {
        _this.triggerEvent("scroll", {
          id: e.id,
          opts: e.opts,
          type: "scroll",
          canvasId: _this.data.canvasId,
          result: e.result
        })
      });
      this.chartInstance.addEventListener('touchLegend', function(e) {
        _this.triggerEvent("clickLegend", {
          id: e.id,
          opts: e.opts,
          type: "clickLegend",
          canvasId: _this.data.canvasId,
          result: e.result
        })
      });
      this.chartInstance.addEventListener('finishMove', function(e) {
        _this.triggerEvent("getTouch", {
          id: e.id,
          opts: _this.chartInstance.opts,
          type: "getTouch",
          canvasId: _this.data.canvasId,
          result: e.result
        })
      });
      this.chartInstance.addEventListener('getIndex', function(e) {
        _this.triggerEvent("getIndex", {
          id: e.id,
          opts: _this.chartInstance.opts,
          type: "getIndex",
          canvasId: _this.data.canvasId,
          result: e.result
        })
      });
      this.initchart = true;
      this.chartInstance.updateData(data)
    },
    showError() {
      this.setData({
        mixinDatacomErrorMessage: this.data.errorMessage || this.mixinDatacomErrorMessage
      })
    },
    getAPI(type) {
      if (type) {
        let action = 'render'
        return {
          action: action
        };
      } else {
        return {
          action: 'wait'
        };
      }
    },
    resizeHandler() {
      this.lastDrawTime = new Date().getTime();
      let chartdom = {};
      this.findDom(this,this.data.canvasId).then((res) => {
        if (!res.node) {
          this.mixinDatacomErrorMessage = '未获取到dom节点， canvas-id:' + this.data.canvasId;
          this.showError();
          return;
        }
        chartdom = res;
        this.mixinDatacomErrorMessage = null;
        if (this.data.echarts !== true) {
          this.chartInstance.resize(chartdom.width, chartdom.height)
          this.chartInstance.scrollEnd()
          this.chartInstance.updateData()
        }else{
          this.echartsInstance.resize()
        }
      })
    },
    // #ifdef MP-WEIXIN
    getVer() {
      var res = wx.getSystemInfoSync();
      var version = res.SDKVersion;
      var echarts = this.data.echarts;
      var echartsH5 = this.data.echartsH5;
      var echartsApp = this.data.echartsApp;
      var echartsMp = this.data.echartsMp;
      version = version.split('.').map(function(item) {
        return parseInt(item);
      });
      var result = {
        master: false,
        SDK: version,
        echarts:false,
        chkv: false,
        type: 'ucharts'
      }
      if (echarts === true || echartsH5 === true || echartsApp === true || echartsMp === true) {
        if (version[0] * 100 + version[1] * 10 + version[2] >= 2110) {
          if (echarts === true && !this.Echarts) {
            console.log(`[uCharts] 温馨提示：您已开启echarts模式，但未引入ECharts！`);
            result.echarts = false
          }else{
            result.echarts = true
            result.chkv = true
            result.type = 'echarts'
          }
        } else {
          result.echarts = false
          console.log(`[uCharts] 温馨提示：当前微信基础库版本过低，不支持ECharts！`);
        }
      }
      return result
    },
    // #endif
    // #ifndef MP-WEIXIN
    getVer() {
      var echarts = this.data.echarts;
      var result = {
        master: false,
        SDK: null,
        echarts:false,
        chkv: false,
        type: 'ucharts'
      }
      if(echarts === true){
        result.echarts = true
        result.chkv = true
        result.type = 'echarts'
      }
      return result
    },
    // #endif
    findDom(obj, id) {
      return new Promise((resolve, reject) => {
        if (this.data.canvas2d) {
          const query = obj.createSelectorQuery()
          query.select('#' + id).fields({
            node: true,
            size: true
          }).exec(res => {
            if (res[0]) {
              const canvas = res[0].node
              const ctx = canvas.getContext('2d')
              canvas.width = res[0].width * this.pixelRatio
              canvas.height = res[0].height * this.pixelRatio
              resolve({
                id: id,
                context: ctx,
                pixelRatio: this.pixelRatio,
                width: res[0].width,
                height: res[0].height,
                node: canvas,
                canvas2d: true
              })
            } else {
              this.mixinDatacomErrorMessage = "未获取到dom节点，canvas-id:" + id
              this.showError()
              resolve({
                id: id,
                context: null,
                pixelRatio: this.pixelRatio,
                width: 0,
                height: 0,
                node: null,
                canvas2d: true
              })
            }
          })
        } else {
          const query = obj.createSelectorQuery();
          query.select('#' + id).boundingClientRect(res => {
            if (res) {
              const ctx = wx.createCanvasContext(id, obj);
              resolve({
                id: id,
                context: ctx,
                pixelRatio: this.pixelRatio,
                width: res.width,
                height: res.height,
                node: null,
                canvas2d: false
              })
            } else {
              this.mixinDatacomErrorMessage = "未获取到dom节点，canvas-id:" + id
              this.showError()
              resolve({
                id: id,
                context: null,
                pixelRatio: this.pixelRatio,
                width: 0,
                height: 0,
                node: null,
                canvas2d: false
              })
            }
          }).exec()
        }
      });
    },
    // #ifdef MP
    touchStart(e) {
      if (this.data.ontouch === true) {
        this.chartInstance.touchStart(e);
      }
    },
    touchMove(e) {
      if (this.data.ontouch === true) {
        this.chartInstance.touchMove(e);
      }
    },
    touchEnd(e) {
      if (this.data.ontouch === true) {
        this.chartInstance.touchEnd(e);
      }
    },
    // #endif
  }
})
