<template>
  <!-- 登录页面的整体盒子 -->
  <div class="reg-container">
    <!-- 登录的盒子 -->
    <div class="reg-box">
      <!-- 标题的盒子 -->
      <div class="title-box"></div>
      <!-- 注册的表单区域 -->
      <el-form :model="loginForm" :rules="loginRul" ref="loginRef">
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" v-model="loginForm.username" ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="default" class="btn-reg" @click="loginHandler">登录</el-button>
          <el-link type="info" @click="$router.push('/register')" >没有账号？去注册</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRul: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z1-9]{1,10}$/,
            message: '用户名必须是1-10的大小写字母数字',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '输入密码不能为空', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['GETNEWTOKEN']),
    loginHandler () {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return this.$message({ type: 'error', message: '请重新登录' })
        const result = await this.$API.reqLogin(this.loginForm)
        console.log(result)
        if (result.code === 0) {
          this.$message({ type: 'success', message: result.message })
          // 保存一份token到本地
          window.localStorage.setItem('token', result.token)
          // 保存一份token到vuex仓库中
          this.GETNEWTOKEN(result.token)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('@/assets/images/login_bg.jpg') center;
  background-size: cover;
  height: 100%;

  .reg-box {
    width: 400px;
    height: 280px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    box-sizing: border-box;

    .title-box {
      height: 60px;
      background: url('@/assets/images/login_title.png') center no-repeat;
    }

    .btn-reg {
      width: 100%;
    }
  }
}
</style>
