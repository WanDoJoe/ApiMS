<template>
  <el-header>

          <el-menu class="el-menu-dome" mode="horizontal"
                   router
                   :default-active="$route.path"
                   text-color="#000000"
                   active-text-color="#409EFF">
            <!--<el-menu-item index="1" >-->
              <!--<el-input v-model="input"  placeholder="输入搜索内容"></el-input>-->
            <!--</el-menu-item>-->
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/apimain">接口管理</el-menu-item>
          <!--  <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>-->
<!--            <el-menu-item index="3" disabled>消息中心</el-menu-item>-->

          </el-menu>

  </el-header>
</template>

<script>
    export default {
        /* eslint-disable */
        name: "Header",
        data() {
            return {}
        },
        props: {},
        mounted() {
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>

</style>
