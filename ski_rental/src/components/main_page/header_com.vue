<template>
  <div class="header">
    <div class="header-image-container">
      <img
        src="@/assets/images/header.png"
        alt="Header Image"
        class="header-image"
      />
      <div class="header-text">SkiHub</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  position: relative;
  height: 223px;
  overflow: hidden;
}

.header-image-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);

  text-align: center;
  text-shadow: 1px 1px 1px #000;
}
</style>
