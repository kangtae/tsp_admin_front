<template>
  <div class="loading">
    <svg class="loading-circle">
      <circle cx="50%" cy="50%" r="25"></circle>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.3);
}
.before-load .container {
  display: none;
}
.before-load .loading {
  opacity: 1;
}
@keyframes loading-spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle-ani {
  0% {
    stroke-dashoffset: 157;
  }
  75% {
    stroke-dashoffset: -147;
  }
  100% {
    stroke-dashoffset: -157;
  }
}
.loading-circle {
  width: 54px;
  height: 54px;
  animation: loading-spin 3s infinite;
}
.loading-circle circle {
  stroke: black;
  stroke-width: 4;
  /* getTotalLength()로 stroke의 길이를 얻어올 수 있음 */
  stroke-dasharray: 157, 157;
  stroke-dashoffset: 0;
  fill: transparent;
  animation: loading-circle-ani 1s infinite;
  /* transition: 1s; */
}
</style>
