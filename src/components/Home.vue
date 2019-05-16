<template>
  <div>
    <Header></Header>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
    import Header from "./widget/Header";
    export default {
        /* eslint-disable */
        name: "Home",
        data() {
            return {}
        },
        props: {},
        mounted() {
        },
        methods: {},
        components: {Header}
    }
</script>

<style scoped>

</style>
