<script>
import { projects, users, message } from '../../util/date.util';
import Taro from '@tarojs/taro'

export default {
  components: {},
  props: {},
  data() {
    return {
      name: 'XXX',
      projects: projects,
      users: users,
      messages: message
    };
  },
  watch: {},
  computed: {},
  methods: {
    logout() {
      Taro.redirectTo({
        url: '/pages/login/index',
      })
    }
  },
  created() { },
  mounted() {
    this.messages.forEach(item => {
      item.userName = users.find(e => e.id == item.userId).name;
    });
  }
};
</script>
<template>
  <view>
    <nut-cell>
      <view class="my-name-view">
        {{ name }}
      </view>
    </nut-cell>

    <!-- 日报栏 -->
    <nut-cell>
      <view class="my-title-view">
        <view class="my-title-view">
          <span class="my-title-l">最新日报</span>
          <span class="my-title-r">更多日报></span>
        </view>
        <view>
          <view class="my-list-item" v-for="item in messages">
            <span class="my-title-l">上报人：{{ item.userName }}</span>
            <span class="my-title-l">日期：{{ item.date }}</span>
          </view>
        </view>
      </view>
    </nut-cell>

    <!-- 项目栏 -->
    <nut-cell>
      <view class="my-title-view">
        <view class="my-title-view">
          <span class="my-title-l">参与项目</span>
          <span class="my-title-r">更多项目></span>
        </view>
        <view>
          <view class="my-list-item" v-for="item in projects">
            <span class="my-title-l">{{ item.name }}</span>
            <span class="my-title-r">截止日期：{{ item.endDate }}</span>
          </view>
        </view>
      </view>
    </nut-cell>

    <!-- 按钮栏 -->
    <nut-cell>
      <view class="my-button-view">
        <nut-button type="primary">新建日报</nut-button>
        <nut-button @click="logout" type="warning">退出登录</nut-button>
      </view>
    </nut-cell>


  </view>
</template>

<style>
.my-name-view {
  width: 100%;
  height: 64px;
  font-size: 48px;
  Text-indent: 2em;
  line-height: 64px;
}

.my-title-view {
  width: 100%;
  margin-bottom: 15px;
}

.my-title-l {
  width: 50%;
  display: inline-block;
}

.my-title-r {
  width: 50%;
  display: inline-block;
  text-align: right;
}

.my-list-item {
  margin: 5px;
  padding: 2px;
  background-color: whitesmoke;
  border-radius: 3px;
}

.my-button-view {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>