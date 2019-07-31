<template>
  <div id="container">
    <el-table
            ref="multipleTable"
            :data="tableData"
            stripe
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
      <el-table-column
              type="selection"
              width="55"
              v-if="selectSwitch">
      </el-table-column>
      <el-table-column
              label=" "
              type="index"
              width="50">
      </el-table-column>
      <el-table-column
              prop="title"
              label="音乐标题"
              width="300">
        <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
              prop="author"
              label="歌手"
              width="240">
      </el-table-column>
      <el-table-column
              label="播放"
              show-overflow-tooltip
              >
        <template slot-scope="scope">
          <el-button type="success" @click="play(scope.row)">
            <i class="el-icon-headset"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectSwitch: false,
        //tableData: [
        //      {
        //    date: '2016-05-03',
        //    name: '王小虎',
        //    address: '上海市普陀区金沙江路 1518 弄'
        //  }
        //],
        multipleSelection: []
      }
    },
    methods: {
      play(m) {
        console.log(m);
        this.$store.commit('setPlayMp3', m);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    },
    computed: {
      tableData() {
        return this.$store.state.searchResult;
      }
    },
  }
</script>
