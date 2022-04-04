<template>
  <div class="ilogin-con">
    <!--    登陆盒子-->
    <div class="ilogin-box">
      <h3 class="hhh">登陆界面</h3>
      <!--    以下表单区-->
      <el-form
        ref="ilogins"
        :model="iloginform"
        :rules="rules"
        label-width="0px"
        class="ilogin-form"
      >
        <!--        用户名-->
        <el-form-item prop="username">
          <el-input
            v-model="iloginform.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
          >
          </el-input>
        </el-form-item>
        <!--        密码-->
        <el-form-item prop="password">
          <el-input
            v-model="iloginform.password"
            placeholder="请输密码"
            prefix-icon="el-icon-paperclip"
            type="password"
          >
          </el-input>
        </el-form-item>
        <!--        按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iLogin',
  data() {
    return {
      // 这是登陆表单的数据绑定对象
      iloginform: {
        username: '',
        password: '',
      },
      // 这是表单的验证规则对象
      rules: {
        username: [
          { required: true, message: '请输入合理的用户名', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入正确的密码', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    reset() {
      this.$refs.ilogins.resetFields()
    },
    // 表单预验证
    login() {
      this.$refs.ilogins.validate(async (valid) => {
        console.log(valid)
        //验证失败
        if (!valid) return
        // 验证成功，发起登陆请求
        const { data: res } = await this.$http.post('login', this.iloginform)
        //this.$message.error是vue原型的方法可以直接调用
        //跟据返回值判断登陆结果
        if (res.meta.status !== 200) return this.$message.error('登陆失败')
        this.$message.success('登陆成功')
        //1.将登录成功后的token，保存到客户端的sessionStorage中
        // 1.1项目中除了登录之外的其他API接口必须在登录之后才能访问
        // 1.2token只在当前网站打开期间生效，所以将token保存在sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)
        //通过编程式导航跳转到后台主页,路由地址是/ihome
        this.$router.push('/ihome')
      })
    },
  },
}
</script>

<style lang="less" scoped>
.ilogin-con {
  height: 100%;
  background-color: #2b4b6b;
}
.hhh {
  text-align: center;
}
.ilogin-box {
  width: 450px;
  height: 270px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.ilogin-form {
  margin: auto 40px;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>
