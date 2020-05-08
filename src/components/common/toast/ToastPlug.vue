<template>
  <div v-show="isShowToast" class="toast">{{message}}</div>
</template>

<script>
  export default {
    name: "ToastPlug",
    data() {
      return {
        message:'',
        isShowToast: false
      }
    },
    methods: {
      showToast(message, delay=1500) {
        this.isShowToast = true
        this.message = message
        setTimeout(() =>{
          this.isShowToast = false
          this.message = ''
        }, delay)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.75);
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
  }
</style>
