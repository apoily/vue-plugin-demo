<template>
  <div
    class="my-toast"
    :class="{ active: isActive }"
  >
    {{ message }}
  </div>
</template>
<script>
export default {
  name: "MyToast",
  data() {
    return {
      message: '',
      isActive: false
    };
  },
  methods: {
    toastPlugin(message, timeout) {
      this.message = message
      this.isActive = true
      setTimeout(() => {
        this.isActive = false
      }, timeout);
    }
  }
};
</script>
<style>
.my-toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0px;
  min-height: 0px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #fff;
  transition: all 0.5s;
  z-index: -1;
  opacity: 0;
}
.my-toast.active {
  width: 150px;
  min-height: 25px;
  opacity: 1;
  z-index: 11;
}
</style>
