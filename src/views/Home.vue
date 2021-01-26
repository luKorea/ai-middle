<template>
  <div class="container">
    <div class="wrap" v-if="showState">
      <div class="content">
        <el-button @click="goMobile">点击进入移动端</el-button>
        <el-image
          class="img"
          style="width: 140px; height: 100px; margin-top: 10px"
          :src="src"
        />
      </div>
    </div>
    <div v-if="showTitle">
      请输入有效地址
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      showState: false,
      showTitle: false,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      vid: '',
      code: '',
      type: '',
      system: {
        win: false,
        mac: false,
        xll: false
      },
      p: navigator.platform
    }
  },
  created () {
    this.system.win = this.p.indexOf('Win') === 0
    this.system.mac = this.p.indexOf('Mac') === 0
    this.system.x11 = (this.p === 'X11') || (this.p.indexOf('Linux') === 0)
    const { vid, code, type } = this.$route.query
    if (!vid && !code && !type) {
      this.showTitle = true
    } else {
      this.vid = vid
      this.code = code
      this.type = type
      if (this.system.win || this.system.mac || this.system.xll) {
        debugger
        window.location.href = `http://live.zhongjiaotech.com/#/login?vid=${this.vid}&code=${this.code}&type=${this.type}`
      } else {
        window.location.href = `http://h5.zhongjiaotech.com/#/login?vid=${vid}&code=${code}&type=${type}`
        // this.showState = true
      }
    }
  },
  methods: {
    goMobile () {
      window.location.href = `http://h5.zhongjiaotech.com/#/login?vid=${this.vid}&code=${this.code}`
    }
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    //background: #f8f9fb;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .img {
        vertical-align: top;
        pointer-events: all;
        -webkit-touch-callout: default;
        -webkit-user-select: none;
      }
    }
  }
}
</style>
