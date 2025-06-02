Page({
  data: {
    userInfo: null,
    loading: true,
    isLoggedIn: false,
    genderText: {
      0: '未知',
      1: '男',
      2: '女'
    },
    // 编辑相关字段
    showEditModal: false,
    editForm: {
      gender: 0,
      age: '',
      height: '',
      weight: ''
    },
    genderOptions: [
      { value: 0, label: '未知' },
      { value: 1, label: '男' },
      { value: 2, label: '女' }
    ]
  },

  onLoad: function (options) {
    this.checkLoginAndLoadData();
  },

  onShow: function () {
    this.checkLoginAndLoadData();
  },

  // 检查登录状态并加载数据
  checkLoginAndLoadData: function() {
    const token = wx.getStorageSync('token');
    
    if (!token) {
      this.setData({
        isLoggedIn: false,
        loading: false
      });
      
      wx.showModal({
        title: '提示',
        content: '请先登录查看个人资料',
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            wx.switchTab({
              url: '../mine/mine'
            });
          } else {
            wx.navigateBack();
          }
        }
      });
      return;
    }

    this.setData({
      isLoggedIn: true
    });

    this.getUserInfo();
  },

  // 获取用户完整信息
  getUserInfo: function() {
    const token = wx.getStorageSync('token');
    
    wx.showLoading({
      title: '加载中',
    });

    wx.request({
      url: 'http://localhost:5000/api/users/all/list',
      method: 'GET',
      header: {
        'Authorization': `Bearer ${token}`
      },
      success: (res) => {
        if (res.data.code === 200) {
          const userData = res.data.data.user_info;
          
          this.setData({
            userInfo: userData,
            loading: false
          });
        } else {
          wx.showToast({
            title: res.data.message || '获取用户信息失败',
            icon: 'none'
          });
          
          this.setData({
            loading: false
          });
          
          // 如果是token过期，跳转到登录页
          if (res.data.code === 401) {
            wx.removeStorageSync('token');
            wx.removeStorageSync('userInfo');
            wx.switchTab({
              url: '../mine/mine'
            });
          }
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
        
        this.setData({
          loading: false
        });
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    this.getUserInfo();
    wx.stopPullDownRefresh();
  },

  // 编辑个人信息
  editProfile: function() {
    // 初始化编辑表单数据
    const editForm = {
      gender: this.data.userInfo.gender || 0,
      age: this.data.userInfo.age ? this.data.userInfo.age.toString() : '',
      height: this.data.userInfo.height ? this.data.userInfo.height.toString() : '',
      weight: this.data.userInfo.weight ? this.data.userInfo.weight.toString() : ''
    };
    
    this.setData({
      editForm: editForm,
      showEditModal: true
    });
  },

  // 关闭编辑模态框
  closeEditModal: function() {
    this.setData({
      showEditModal: false
    });
  },

  // 输入框事件处理
  onGenderChange: function(e) {
    const gender = parseInt(e.detail.value);
    this.setData({
      'editForm.gender': gender
    });
  },

  onAgeInput: function(e) {
    this.setData({
      'editForm.age': e.detail.value
    });
  },

  onHeightInput: function(e) {
    this.setData({
      'editForm.height': e.detail.value
    });
  },

  onWeightInput: function(e) {
    this.setData({
      'editForm.weight': e.detail.value
    });
  },

  // 保存编辑
  saveProfile: function() {
    const { editForm } = this.data;
    
    // 数据验证
    if (editForm.age && (isNaN(editForm.age) || editForm.age < 1 || editForm.age > 120)) {
      wx.showToast({
        title: '年龄必须在1-120岁之间',
        icon: 'none'
      });
      return;
    }
    
    if (editForm.height && (isNaN(editForm.height) || editForm.height < 50 || editForm.height > 250)) {
      wx.showToast({
        title: '身高必须在50-250cm之间',
        icon: 'none'
      });
      return;
    }
    
    if (editForm.weight && (isNaN(editForm.weight) || editForm.weight < 10 || editForm.weight > 500)) {
      wx.showToast({
        title: '体重必须在10-500kg之间',
        icon: 'none'
      });
      return;
    }

    // 构建提交数据
    const submitData = {
      gender: editForm.gender,
      age: editForm.age ? parseInt(editForm.age) : null,
      height: editForm.height ? parseFloat(editForm.height) : null,
      weight: editForm.weight ? parseFloat(editForm.weight) : null
    };

    const token = wx.getStorageSync('token');
    
    wx.showLoading({
      title: '保存中',
    });

    wx.request({
      url: 'http://localhost:5000/api/users/update',
      method: 'PUT',
      header: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: submitData,
      success: (res) => {
        if (res.data.code === 200) {
          wx.showToast({
            title: '保存成功',
            icon: 'success'
          });
          
          // 关闭模态框
          this.setData({
            showEditModal: false
          });
          
          // 重新获取用户信息
          this.getUserInfo();
        } else {
          wx.showToast({
            title: res.data.message || '保存失败',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  },

  // 阻止事件冒泡
  stopPropagation: function() {
    return false;
  },

  // 格式化显示文本
  formatValue: function(value, unit = '') {
    if (value === null || value === undefined || value === '') {
      return '未设置';
    }
    return value + unit;
  },

  // 获取性别显示文本
  getGenderText: function(gender) {
    return this.data.genderText[gender] || '未知';
  }
}); 