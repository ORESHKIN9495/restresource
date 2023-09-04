<script setup></script>

<template>
  <div>
    <svg>
      <use xlink:href="../assets/images/sprite.svg#logo" />
    </svg>

    <svg>
      <use xlink:href="../assets/images/sprite.svg#letters" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
div {
  cursor: pointer;
  display: grid;
  grid-template: 46px / 46px 150px;
  gap: 20px;
}
</style>
