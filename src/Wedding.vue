<template>
  <div class="wedding" >
    <div class="divs"   id="moveDiv"
         @mousedown="down"
         @touchstart="down"
         @mousemove="move"
         @touchmove.prevent="move"
         @mouseup="end"
         @touchend="end"
        >
    <vue-a-player  class="player"  id="musicid"
             ref="aplayer"
             :mini="true"
             repeat="list"
             :music='list[0]'
             :list='list' controls></vue-a-player>
    </div>

    <keep-alive exclude="Spash">
      <router-view class="roter"></router-view>
    </keep-alive>

  </div>
</template>

<script>

  import VueAPlayer from 'vue-aplayer'
  // import {music} from "./assets/music";
  export default {
    props: [],
    name: 'Wedding',
    data() {
      return {
        list: [
          {
            title: 'A Little Love',
            artist: '冯曦妤',
            src: 'https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/audio/sugar.mp3',
            pic:require('../src/assets/seal.png')
          }
        ],
        flags: false,
        position: { x: 0, y: 0 }, //鼠标的横纵坐标
        pageX: "", //页面可视区域的宽
        pagey: "", //页面可视区域的高
        nx: "",
        ny: "",
        dx: "",
        dy: "",
        xPum: "",
        yPum: "",
        frist:true
      }
    },
    mounted() {
      this.pageX = document.body.offsetWidth;
      this.pagey = document.body.offsetHeight;

      this.$bus.$on('changeValue', msg => {

        if (this.frist){
          console.log(msg)
          let self = this
          //调用 <audio> 元素提供的方法 play()
          if ( self.$refs.aplayer.isPlaying) {
            self.$refs.aplayer.pause();

          }else{
            self.$refs.aplayer.play();
          }
          //判斷 WeixinJSBridge 是否存在
          if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
            if ( self.$refs.aplayer.isPlaying) {
              self.$refs.aplayer.pause();

            }else{
              self.$refs.aplayer.play();
            }
          } else {
            //監聽客户端抛出事件"WeixinJSBridgeReady"
            if (document.addEventListener) {
              document.addEventListener("WeixinJSBridgeReady", function(){
                if ( self.$refs.aplayer.isPlaying) {
                  self.$refs.aplayer.pause();

                }else{
                  self.$refs.aplayer.play();
                }

              }, false);
            } else if (document.attachEvent) {
              document.attachEvent("WeixinJSBridgeReady", function(){
                if ( self.$refs.aplayer.isPlaying) {
                  self.$refs.aplayer.pause();

                }else{
                  self.$refs.aplayer.play();
                }
              });
              document.attachEvent("onWeixinJSBridgeReady", function(){
                if ( self.$refs.aplayer.isPlaying) {
                  self.$refs.aplayer.pause();

                }else{
                  self.$refs.aplayer.play();
                }
              });
            }
          }
          this.frist=false
        }
        // music()

      })  // 监听bus的 on-click 事件



      // //voiceStatu用來記録狀態,使 touchstart 事件只能觸發一次有效,避免與 click 事件衝突
      // var voiceStatu = true;
      // //监听 touchstart 事件进而调用 <audio> 元素提供的 play() 方法播放音频
      // document.addEventListener("touchstart",function(e){
      //   if(voiceStatu){
      //     self.$refs.aplayer.play()
      //     voiceStatu = false;
      //   }
      // }, false);



    },
    methods: {




      // 实现移动端拖拽
      down() {
        this.flags = true; //是否开启拖拽
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.position.x = touch.clientX;
        this.position.y = touch.clientY;
        this.dx = moveDiv.offsetLeft;
        this.dy = moveDiv.offsetTop;
      },
      move() {
        if (this.flags) {
          var touch;
          if (event.touches) {
            touch = event.touches[0];
          } else {
            touch = event;
          }
          this.nx = touch.clientX - this.position.x;
          this.ny = touch.clientY - this.position.y;

          this.yPum = this.dy + this.ny;
          if (this.dx + this.nx <= 0) {
            this.xPum = 0;
          } else if(this.dx + this.nx >= this.pageX -100){
            this.xPum = this.pageX - 100;
          } else {
            this.xPum = this.dx + this.nx;
          }
          if (this.dy + this.ny <= 0) {
            this.yPum = 0;
          } else if(this.dy + this.ny >= this.pagey -100){
            this.yPum = this.pagey - 100;
          } else {
            this.yPum = this.dy + this.ny;
          }
          moveDiv.style.left = this.xPum + "px";
          moveDiv.style.top = this.yPum + "px";
          //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
          document.addEventListener(
                  "touchmove",
                  function() {
                    event.preventDefault();
                  },
                  false
          );
        }
      },
      //鼠标释放时候的函数
      end() {
        this.flags = false;
      }
    },
    created() {

    },

    components: {
      VueAPlayer
    }
  }

</script>

<style lang="less">
@import './assets/base.less';
html,
body{
  height: 100%;
}
.wedding{
  position: relative;
  max-width: 568px!important;
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  background: #2B2B48;
  perspective: 500px;
 .roter{
   z-index: 1;
 }
  .divs{

    right: 30px;
    top: 20px;
     position: fixed;
    z-index: 2;
    border-radius: 50%;
    .player{
      border-radius: 50%;
    }
  }
}


</style>
