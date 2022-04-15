<template>
  <div class="container">这是Home页</div>
  <van-button type="success">成功按钮</van-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Abc',
  mounted() {
    // let myFavoriteNumber = '葫芦娃'
    let myFavoriteNumber: string | number | Array<string | number> = '葫芦娃'

    if (myFavoriteNumber === 'hulu') {
      console.log(66666)
    }
    myFavoriteNumber = 'alex'
    console.log('Home is mounted', myFavoriteNumber)
  },
})
</script>
<style lang="scss" scoped>
.container {
  width: 200px;
}
</style>
