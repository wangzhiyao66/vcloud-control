import { LoginService } from '../service/login.service';
<template>
  <div class="login-box">
    <div class="form">
      <p class="title-text">欢迎来到Control系统！</p>
      <el-form
        :label-position="labelPosition"
        status-icon
        :rules="rules"
        ref="formLabelAlign"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="formLabelAlign.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="formLabelAlign.password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" class="login-btn" @click="submitForm('formLabelAlign')">登录</el-button>
          <el-button type="primary" class="login-btn" @click="resetForm('formLabelAlign')">立即重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="less" scoped>
.login-box {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.title-text {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
  text-align: left;
  padding-left: 80px;
  margin: 0 0 30px 0;
}
.form {
  width: 350px;
  background: #fff;
  text-align: center;
}
.login-btn {
  width: 125px;
  letter-spacing: 3px;
  text-align: center;
}
</style>
<script>
/* eslint-disable */
import Service from "@/service";
import Api from "@/api";
export default {
  name: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  methods: {
    /**
     * 提交表单数据 和 校验状态判断
     */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // 登录成功
        if (valid) {
          console.log(this.formLabelAlign);

          // 网络请求
          Api.request({
            url: "/control/login",
            method: "post",
            data: this.formLabelAlign
          }).then(res => {
            console.log("res", res);
            // 验证成功
            if (res.data) {
              const h = this.$createElement;
              this.$message({
                showClose: true,
                message: "恭喜你，登录成功",
                type: "success"
              });
              this.$router.push("/home");
              Service.setUserData(this.formLabelAlign);
            } else {
              const h = this.$createElement;
              this.$message({
                showClose: true,
                message: "用户名/密码 输入错误",
                type: "error"
              });
            }
          });
        } else {
          // 登录失败
          this.$message({
            showClose: true,
            message: "error submit!!",
            type: "error"
          });
          return false;
        }
      });
    },

    /**
     * 重置表单数据和校验状态
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    /**
     * 是否已经登录过
     */
    islogin() {}
  },
  created() {
    const user = Service.getUserData();
    console.log("用户信息", user.name);
    if (user.name) this.$router.push("/home");
  }
};
</script>
