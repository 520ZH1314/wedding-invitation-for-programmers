<template>
  <div class="cont ">
    <div data-target='1' class="slide slide--1">
      <div class="slide__text slide__text--1">quis risus</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">

        <img src="../assets/home.png" height="64px" width="84px">

      </a>
    </div>

    <div data-target='2' class="slide slide--2">
      <div class="slide__text">Lorem ipsum</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>

    <div data-target='3' class="slide slide--3">
      <div class="slide__text">Sed tincidunt</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>

    <div data-target='4' class="slide slide--4">
      <div class="slide__text">Vivamus dui</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>

    <div data-target='5' class="slide slide--5">
      <div class="slide__text">Viva</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>

    <div data-target='6' class="slide slide--6">
      <div class="slide__text">1</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>
    <div data-target='7' class="slide slide--7">
      <div class="slide__text">2</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>
    <div data-target='8' class="slide slide--8">
      <div class="slide__text">3</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>
    <div data-target='9' class="slide slide--9">
      <div class="slide__text">4</div>
      <div class="slide__bg"></div>
      <div class="slide__img">
        <div class="slide__close"></div>
        <div class="slide__img-wrapper">

        </div>
      </div>
      <div class="slide__bg-dark"></div>
      <a @click="back" target="_blank" class="icon-link icon-link--twitter">
        <img src="../assets/home.png" height="64px" width="84px">
      </a>
    </div>


  </div>

</template>

<script>
  import { dd } from '../assets/less/c3.js'
  export default {
    name: 'MyImage1',
    mounted(){
      dd()
    },
    methods: {
      back() {
        this.$router.back();
      }
    },
  }
</script>

<style scoped lang="scss">

  $grayBg: #161616;

  $numSlides: 9;
  $imgDist: -150 * 1px;

  $bgSpd: 950 * 1ms;
  $imgSpd: 2000 * 1ms;

  $bgPics: (
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv1.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv2.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv3.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv4.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv5.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv6.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv7.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv8.jpg') center center no-repeat,
          url('https://midsuerman-1253112591.cos.ap-guangzhou.myqcloud.com/image/iv9.jpg') center center no-repeat,
  );

  @mixin mediaMaxW($width) {
    @media screen and (max-width: $width) {
      @content;
    }
  }

  .cont {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform;
    overflow: hidden;
    cursor: pointer;
    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: left center ;
      width: 100%;
      height: 100%;
      background-color: $grayBg;
      z-index: 1;
      transition: $bgSpd;
      will-change: transform;
    }

    &__img {
      position: relative;
      height: 100%;

      &-wrapper {
        position: absolute;
        top: -10%;
        left: -10%;
        width: 125%;
        height: 120%;
        transform: translate3d(0, 0, 0);
        transition: $bgSpd;
        will-change: transform;
      }
    }
    &__close {
      position: absolute;
      top: 5%;
      left: 5%;
      width: 100px;
      height: 100px;
      z-index: 0;
      opacity: 0;
      cursor: pointer;
      transition: opacity 200ms, z-index 0ms 200ms;
      &:after, &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 115px;
        height: 20px;
        border-radius: 20px;
        background-color: #fff;
        transition: 500ms 500ms;
        @include mediaMaxW(960px) {
          width: 75px;
          height: 15px;
        }
      }
      &:after {
        transform-origin:  left center;
        transform: rotate(45deg) scale(0, 0);
      }
      &:before {
        left: -33px;
        transform-origin:  right center;
        transform: rotate(-45deg) scale(0, 0);
        transition: 500ms 650ms;
        @include mediaMaxW(960px) {
          left: -21px;
        }
      }
    }
    &__bg-dark {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      opacity: 0;
      transition: 350ms;
      z-index: 2;
    }
    &__text {
      position: absolute;
      top: 50%;
      left: 5%;
      width: 23%;
      text-transform: uppercase;
      word-wrap: break-word;
      color: #fff;
      font: {
        size: 45px;
        weight: 800;
      }
      transform: translate3d(0, -50%, 0) rotate(0.01deg);
      will-change: transform, opacity;
      transition: 750ms;
      opacity: 0;
      z-index: 1;
      @include mediaMaxW(960px) {
        font: {
          size: 30px;
        }
      }
      &--1 {
        left: 8%;
      }
    }
  }

  .slide {
    left: 100%;
  }

  @each $item in $bgPics {
    $i: index($bgPics, $item);
    .slide--#{$i} {
      z-index: $i - 1;
      .slide__img-wrapper {
        background: $item;
        background-size: cover;
      }
    }
  }

  .icon-link--twitter {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 50px;
    opacity: 0;
    z-index: -1;

    img {
      width: 100%;
    }
  }

  .icon-show {
    opacity: 1;
    z-index: 5;
  }

  .active {
    .slide--1 {
      .slide__bg {
        transform: scale(0, 1);
        transition: $bgSpd;
      }
      .slide__img-wrapper {
        transform: translate3d($imgDist, 0, 0);
        transition: $imgSpd;
      }
    }
    @for $i from 1 through $numSlides {
      .slide--#{$i} {
        transform: translate3d((-100% / $numSlides) * ($numSlides - ($i - 1)), 0, 0);
        transition: transform $bgSpd $bgSpd * (($i - 1) * 1.3);
        .slide__bg {
          transform: scale(0, 1);
          transition: $bgSpd * 2 $bgSpd * (($i - 1) * 1.3) ;
        }
        .slide__img-wrapper {
          transform: translate3d($imgDist, 0, 0);
          transition: $imgSpd $bgSpd * (($i - 1) * 1.3);
        }
      }
    }
  }

  .show-close {
    z-index: 4;
    opacity: 1;
    &:after {
      transform: rotate(45deg) scale(1, 1);
    }
    &:before {
      transform: rotate(-45deg) scale(1, 1);
    }
  }

  html {
    box-sizing: border-box;
    font-family: 'Open-Sans', sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }




</style>
