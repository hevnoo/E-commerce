<template>
  <el-container class="home-con">
    <!--    头部区域-->
    <el-header>
      <div>
        <img src="../assets/2.png" class="img2" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--    大页面主体-->
    <el-container>
      <!--      左侧边栏-->
      <el-aside :width="islll ? '64px' : '200px'">
        <div class="lll" @click="lllcoll">|||</div>
        <!--        侧边栏菜单区-->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          router
          :default-active="activePath"
          unique-opened
          :collapse="islll"
        >
          <!--          一级菜单-->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <template slot="title">
              <i class="el-icon-help"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!--            二级菜单-->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveState('/' + subItem.path)"
              ><i class="el-icon-menu"></i>
              <span>{{ subItem.authName }}</span></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--      右侧主体内容区-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'iHome',
  data() {
    return {
      islll: false,
      //左侧菜单数据
      menulist: [],
      //  被激活的链接地址
      activePath: '',
    }
  },
  //界面刚一加载时,就获取左侧菜单
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      //清空token
      window.sessionStorage.clear()
      //跳转到登录页,就可以实现退出登陆功能
      this.$router.push('/ilogin')
    },
    //获取所有菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
    },
    //是否收起菜单|||
    lllcoll() {
      this.islll = !this.islll
    },
    //  保存链接的激活状态
    saveState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
  },
}
</script>

<style lang="less" scoped>
.home-con {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: white;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
}
.img2 {
  height: 58px;
  width: 60px;
}
.lll {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: white;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
