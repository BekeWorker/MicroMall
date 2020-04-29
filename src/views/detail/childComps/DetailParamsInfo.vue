<template>
  <div class="params-info" v-if="Object.keys(goodsParamsInfo).length !== 0">
    <div class="params-desc">{{goodsParamsInfo.disclaimer}}</div>
    <div class="params-key">{{goodsParamsInfo.key}}</div>
    <table class="info-size">
      <tr v-for="(tr, indexr) in goodsParamsInfo.tables[0]" :key="indexr">
        <td v-for="(td, indexd) in tr" :key="indexd">{{td}}</td>
      </tr>
    </table>
    <table class="info-size">
      <tr v-for="(tr, indexr) in goodsParamsInfo.tables[1]" :key="indexr">
        <td v-for="(td, indexd) in tr" :key="indexd">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(tr, indexr) in goodsParamsInfo.set" :key="indexr">
        <td>{{tr.key}}</td>
        <td class="td-value">{{tr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      goodsParamsInfo: {
        type:Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info {
    padding: 15px 10px;
    color: #666;
    font-size: 14px;
  }
  .params-desc {
    padding: 10px 0;
  }
  .params-key {
    padding: 5px 0;
    color: #333;
  }
  .params-info table{
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #eaeaea;
    border-collapse: collapse;
  }
  .params-info td {
    padding: 15px 0;
    border-bottom: 1px solid #eaeaea;
  }

  .info-param .td-value{
    padding-left: 50px;
    color: var(--color-high-text);
  }

</style>
