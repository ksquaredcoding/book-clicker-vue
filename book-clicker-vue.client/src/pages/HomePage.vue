<template>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-8 book-image ">
      <div class="justify-content-center align-items-center d-flex">
        <img src="../assets/img/Click-Book.png" alt="Click Book" class="book-image-float">
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-between">
    <div class="col-md-2 m-2 p-2">
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#shopModal">SHOP</button>
    </div>
    <div class="col-md-2 m-2 p-2">
      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#statsModal">STATS</button>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>