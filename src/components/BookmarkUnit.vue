<script setup lang="ts">

</script>

<template>
  <div class="tab">
    <div class="bookmark-container">
      <img src="https://arc.net/favicon.png" alt="favicon" width="20px">
      <p class="page-title">Arc Browser</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.bookmark-container{
  padding: 5px 15px;
  display: flex;
  background-color: var(--color-background);
  &:hover{
    cursor: pointer;
    filter: var(--hover);
  }
  .page-title{
    margin-left: 5px;
  }
}

</style>
