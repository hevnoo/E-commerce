<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="活动">
      <el-input
        v-model="formInline.name"
        placeholder="请输入名称查询"
      ></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input
        v-model="formInline.age"
        placeholder="请输入名称查询"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" icon="el-icon-refresh-left">重置</el-button>
      <el-button
        type="primary"
        icon="el-icon-s-platform
"
        >高级查询</el-button
      >
    </el-form-item>
    <!--    展开区-->
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="zk">
          展开
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>1</el-dropdown-item>
        <el-dropdown-item>2</el-dropdown-item>
        <el-dropdown-item>3</el-dropdown-item>
        <el-dropdown-item disabled>4</el-dropdown-item>
        <el-dropdown-item divided>5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <br />
    <el-row>
      <el-button type="primary" icon="el-icon-plus">新增</el-button>
      <el-button type="primary" icon="el-icon-plus">创建单据</el-button>
      <el-button type="primary" icon="el-icon-plus">一对多</el-button>
      <el-button type="primary" icon="el-icon-download">导出</el-button>
      <el-button type="primary" icon="el-icon-upload2">导入</el-button>
    </el-row>
    <div class="hed">
      <div class="hed1">
        <el-button type="text">已选择0项</el-button>
        <el-button type="text">清空</el-button>
      </div>
      <div class="hed2">
        <el-button type="text">刷新</el-button>
        <el-button type="text">自定义列</el-button>
      </div>
    </div>
    <br />
    <!--  表格区  -->
    <!--      @row-click="bTable"-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" type="selection" width="55">
      </el-table-column>
      <el-table-column label="#" width="55px" type="index"> </el-table-column>
      <el-table-column prop="xm" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="gjc" label="关键词" width="120"> </el-table-column>
      <el-table-column prop="dksj" label="打卡时间" width="250">
      </el-table-column>
      <el-table-column prop="xb" label="性别" width="130"> </el-table-column>
      <el-table-column prop="nl" label="年龄" width="120"> </el-table-column>
      <el-table-column prop="sr" label="生日" width="120"> </el-table-column>
      <el-table-column prop="yx" label="邮箱" width="250"> </el-table-column>
      <el-table-column prop="grjj" label="个人简介" width="auto">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="dialogFormVisible = true" size="small"
            >编辑</el-button
          >

          <el-dialog
            title="编辑"
            :visible.sync="dialogFormVisible"
            :modal-append-to-body="false"
          >
            <el-form ref="tableData" :model="tableData">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input
                  v-model="tableData[1].xm"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="关键词" :label-width="formLabelWidth">
                <el-input v-model="tableData[2]" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="打卡时间" :label-width="formLabelWidth">
                <el-select
                  v-model="tableData.dksj"
                  placeholder="请选择活动区域"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-input v-model="tableData.xb" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="tableData.nl" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="生日" :label-width="formLabelWidth">
                <el-input v-model="tableData.sr" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="tableData.yx" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="个人简介" :label-width="formLabelWidth">
                <el-input
                  v-model="tableData.grjj"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <!--          <el-button type="text" size="small" @click="open">编辑</el-button>-->
          <!--          <router-link to="/iForm/iEdit">编辑</router-link>-->
          <!--      路由占位符-->
          <!--          <router-view></router-view>-->
          <el-dropdown>
            <span
              class="el-dropdownlink"
              @click="handleClick(scope.row)"
              type="text"
              size="small"
            >
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>1</el-dropdown-item>
              <el-dropdown-item>2</el-dropdown-item>
              <el-dropdown-item>3</el-dropdown-item>
              <el-dropdown-item disabled>4</el-dropdown-item>
              <el-dropdown-item divided>5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script>
export default {
  name: 'iForm',
  data() {
    return {
      formInline: { name: '', age: '' },
      tableData: [
        {
          xm: '',
          gjc: '',
          dksj: '',
          xb: '',
          nl: '',
          sr: '',
          yx: '',
          grjj: '',
        },
        {
          xm: '',
          gjc: '',
          dksj: '',
          xb: '',
          nl: '',
          sr: '',
          yx: '',
          grjj: '',
        },
        {
          xm: '',
          gjc: '',
          dksj: '',
          xb: '',
          nl: '',
          sr: '',
          yx: '',
          grjj: '',
        },
        {
          xm: '',
          gjc: '',
          dksj: '',
          xb: '',
          nl: '',
          sr: '',
          yx: '',
          grjj: '',
        },
        {
          xm: '小红',
          gjc: '红',
          dksj: '2022',
          xb: '女',
          nl: '18',
          sr: '0101',
          yx: '123456.com',
          grjj: '一二三四',
        },
        {
          xm: '小明',
          gjc: '明',
          dksj: '2022',
          xb: '男',
          nl: '18',
          sr: '0101',
          yx: '123456.com',
          grjj: '一二三四',
        },
      ],
      dialogFormVisible: false,
      // form: {
      //   names: "",
      //   regs: "",
      //   date1: "",
      //   date2: "",
      //   delivery: false,
      //   type: [],
      //   resource: "",
      //   desc: "",
      // },
      formLabelWidth: '120px',
    }
  },
  methods: {
    // open() {
    //   this.$prompt("姓名", "编辑", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //   })
    //     .then(({ value }) => {
    //       this.$message({
    //         type: "success",
    //         message: "你是: " + value,
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "取消编辑",
    //       });
    //     });
    // },
    onSubmit() {
      console.log('submit!')
    },
    // bTable() {
    //   alert(this.$refs.iTable());
    // },
  },
}
</script>

<style scoped>
.demo-form-inline {
  margin-top: 20px;
  margin-left: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.zk {
  margin-top: 10px;
}
.hed {
  margin-top: 20px;
  height: 30px;
  border: 1px solid deepskyblue;
  border-radius: 3px;
  /*background-color: deepskyblue;*/
}
.hed1 {
  float: left;
  margin-left: 20px;
}
.hed2 {
  float: right;
  margin-right: 15px;
}
.el-dropdownlink {
  font-size: 10px;
  color: #409eff;
  margin-left: 10px;
}
</style>
