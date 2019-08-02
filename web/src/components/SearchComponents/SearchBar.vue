<template>
  <div id="container">
    <el-autocomplete
      class="search-bar"
      v-model="searchvalue"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect">
    </el-autocomplete>
    <el-button
      class="btn"
      type="danger"
      slot="append"
      :loading="btnIsLoading"
      icon="el-icon-search"
      @click="doSearch">
      搜索
    </el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        restaurants: [],
        searchvalue: '',
        timeout:  null,
        btnIsLoading: false
      }
    },
    methods: {
      loadAll() {
        return [
          //{ "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      doSearch() {
        let v = this.searchvalue;
        if (v !== '') {
          this.btnIsLoading = true;
          let req = {
            params: {
              keywords: v
            }
          };
          this.axios.get('/search', req).then(result => {
            //eslint-disable-next-line no-empty
            if (result.status === 200) {
              //eslint-disable-next-line no-console
              console.log(result.data.result.songs);
              this.$store.commit('setSearchResult',result.data.result.songs);
              this.btnIsLoading = false;
            } else {
              this.$message({
                title: '请求错误请重试',
                type: 'warning'
              });
              this.btnIsLoading = false;
            }
          })
        } else return false;
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
      
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 100 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        //eslint-disable-next-line no-console
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style  lang="scss">
  #container{
    width: 100%;
    .search-bar{
      width: 80%;
      .el-input__inner{
        border-top-right-radius: unset;
        border-bottom-right-radius: unset;
        border-right: none;
      }
    }
    .btn{
      width: 20%;
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
    }
  }
</style>
