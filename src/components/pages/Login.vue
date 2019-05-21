<template>
  <div class="mybody">
    <div class="fromBodyOut" >
      <el-form label-position="left"
               label-width="80px"
               :model="fromDate"
               :rules="loginRules"
               class="elformbody">
        <el-form-item label="用户名：" prop="username">
          <el-input  placeholder="请输入用户名" v-model="fromDate.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密  码：" prop="password">
          <el-input placeholder="请输入密码" v-model="fromDate.password" show-password clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="submitForm('ruleForm')">登  录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import httpapi from "../../httpapi/httpapi";

    export default {
        /* eslint-disable */
        name: "Login",
        data() {
            return {
              fromDate:{
                username:'',
                password:''
              },
              loginRules: {
                username: [
                  {
                    required: true,
                    message: "请输入用户名",
                    trigger: "blur"
                  }
                ],
                password: [
                  {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                  }
                ]
              }
            }
        },
        props: {},
        mounted() {
        },
        methods: {
          submitForm: async function(params){
            if(this.fromDate.username!=""&&this.fromDate.password!=""){
              var response = await httpapi.get('/v1/user/login',this.fromDate.username+"/"+this.fromDate.password);
              console.log(response.data);
              if(response.result==0) {
                // if(this.fromDate.username=="admin"&&this.fromDate.password=="admin"){
                //   console.log("登录denglu")
                var user = {"username": response.data.username, "oid": response.data.oid, "role": response.data.role}
                // console.log(user)
                this.$emit("listenToLoginEvent", JSON.stringify(user));
                this.$router.replace('/')
                // }
              }else if(response.result==1){
                  alert(response.message);
              }
            }else{
              alert("用户名密码不能为空！");
            }
          },
          resetForm(params){
            this.fromDate.username=""
            this.fromDate.password=""
          }
        },
        components: {}
    }
</script>

<style scoped>
  .mybody{
    height: 100%;
    width: 100%;
    text-align: center;

  }
  .fromBodyOut{
    background-color: #c5c5c585;
    width: 500px;
    height: 300px;
    border-radius:15px ;

    /*元素居中*/
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

  }
  .elformbody {

    width: 400px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .elformbody.el-form-item{
    height: 2000px;
  }
</style>
