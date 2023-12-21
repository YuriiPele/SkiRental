<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="location-info">
        <div><strong>City:</strong> Your City</div>
        <div><strong>Street:</strong> Your Street</div>
        <div><strong>Postal Code:</strong> Your Postal Code</div>
        <div><strong>Email:</strong> your.email@example.com</div>
        <div><strong>Phone:</strong> +380958319973 / +380978090117</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2f70e172;
  color: rgb(0, 0, 0);
  padding: 10px;
  text-align: left;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.location-info {
  margin-left: 5%;
  flex: 2;
  text-align: left;
}
</style>
