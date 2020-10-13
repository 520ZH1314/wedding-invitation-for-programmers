<template>
    <div class="aa">
        <canvas id="canv">

        </canvas>
    </div>
</template>

<script>
    import { aa } from '../assets/c1.js'
    export default{
        name:'Spash',


        mounted () {
            aa(),
            setTimeout(()=>{
               this.$router.push('/edit')

            },4000)

        }

    }
</script>

<style scoped lang="less">
 .aa{
     position: relative;
     max-width: 568px!important;
     height: 100%;
     min-height: 100%;
     margin: 0 auto;
     background: #2B2B48;
     perspective: 500px;
     #canv{
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         overflow-x: hidden;
         overflow-y: auto;
         z-index: 1;
         transform-origin: 0 0;
         -webkit-transform-origin: 0 0;
         transition: all 1.6s cubic-bezier(0.4, 0, 1, 1);
         -webkit-transition: all 1.6s cubic-bezier(0.4, 0, 1, 1);
     }
 }
</style>
