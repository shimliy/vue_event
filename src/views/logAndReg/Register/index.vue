<template>
  <!-- 注册页面的整体盒子 -->
  <div class="reg-container">
    <!-- 注册的盒子 -->
    <div class="reg-box">
      <!-- 标题的盒子 -->
      <div class="title-box"></div>
      <!-- 注册的表单区域 -->
      <el-form :model="regForm" :rules="regRules" ref="regRef">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="regForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="regForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input type="password" placeholder="请确认输入密码" v-model="regForm.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="default" class="btn-reg" @click="toRegister">注册</el-button>
          <el-link type="info" @click="$router.push('/login')">去登陆</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    const samePwd = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      // 表单数据的对象
      regForm: {
        username: '',
        password: '',
        repassword: ''
      },
      // 表单验证规则
      regRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9]{1,10}$/,
            message: '用户名必须是1-10的大小写字母数字',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur'
          }
        ],
        repassword: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur'
          },
          {
            validator: samePwd, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    toRegister () {
      this.$refs.regRef.validate(async valid => {
        if (!valid) return false
        // 使用仓库传值的方法太麻烦，不考虑
        // this.$store.dispatch('reqRegister', this.regForm)
        const res = await this.$API.reqRegister(this.regForm)
        console.log(res)
        if (res.code === 0) {
          this.$message({
            type: 'success',
            message: res.message,
            center: true
          })
          this.$router.push('/login')
        } else return this.$message({ type: 'error', message: res.message })
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('@/assets/images/login_bg.jpg') center;
  background-color: black;
  background-size: cover;
  height: 100%;

  .reg-box {
    width: 400px;
    height: 335px;
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
