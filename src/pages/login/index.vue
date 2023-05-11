<script>
import Taro from '@tarojs/taro'
export default {
  components: {},
  props: {},
  data() {
    return {
      basicData: {
        username: '',
        password: '',
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    submit() {
      this.$refs.ruleForm.validate().then(r => {
        if (r.valid == true) {
          Taro.setStorage({
            key: 'loginId',
            data: this.basicData.username,
            success: r => {Taro.redirectTo({ url: '/pages/index/index' })}
          })
        }
      })

    }
  },
  created() { },
  mounted() { }
};
</script>
<template>
  <view>
    <nut-form :model-value="basicData" ref="ruleForm">
      <nut-form-item prop="username" label="登录名" :rules="[{ required: true, message: '请填写登录名' }]">
        <nut-input v-model="basicData.username" placeholder="请输入登录名" type="text" />
      </nut-form-item>
      <nut-form-item prop="password" label="密码" :rules="[{ required: true, message: '请填写密码' }]">
        <nut-input v-model="basicData.password" placeholder="请输入密码" type="password" />
      </nut-form-item>
      <nut-form-item>
        <nut-button block type="primary" @click="submit">提交</nut-button>
      </nut-form-item>
    </nut-form>


  </view>
</template>

<style></style>