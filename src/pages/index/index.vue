<script>
import { projects, users, message } from '../../util/date.util';

export default {
  components: {},
  props: {},
  data() {
    return {
      projects: projects,
      users: users,
      message: message,
      visible2:false,
      cascader: {
        options: [],
        value: '',
        text: '',
        visible: false,
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    cascaderChange(v, p) {//显示项目名称
      const tmp = projects.find(e => e.id == v[0]);
      this.cascader.text = tmp.name;
    },
    onDlete(){
      this.visible2=true;
    }
  },
  created() { },
  mounted() {
    projects.forEach(item => {
      let tmp = { text: item.name, value: item.id };
      this.cascader.options.push(tmp);
    });
    this.message.forEach(item => {
      item.userName = users.find(e => e.id == item.userId).name;
    });
  }
};
</script>

<template>
  <!-- 项目选择栏目 -->
  <view>
    <nut-cell title="选择项目" :desc="cascader.text || '请选择项目'" @click="cascader.visible = true"> </nut-cell>
    <nut-cascader title="项目选择" @change="cascaderChange" v-model:visible="cascader.visible" v-model="cascader.value"
      :options="cascader.options"></nut-cascader>
  </view>


  <nut-cell>
    <view class="index-title-view">
      <view>
        <span class="index-title-l">周期进度</span>
        <span class="index-title-r">截至日期：{{ projects[0].endDate }}</span>
      </view>
      <view style="margin-top: 5px;">
        <nut-progress percentage="30" />
      </view>
    </view>
  </nut-cell>

  <!-- 日报栏 -->
  <nut-cell>
    <view class="index-title-view">
      <view class="index-title-view">
        <span class="index-title-l">最新日报</span>
        <span class="index-title-r">更多日报></span>
      </view>
      <view>
        <view class="index-list-item" v-for="item in message">
          <span class="index-title-l">上报人：{{ item.userName }}</span>
          <span class="index-title-l">日期：{{ item.date }}</span>
        </view>
      </view>
    </view>
  </nut-cell>

  <!-- 人员栏 -->
  <nut-cell>
    <view class="index-title-view">
      <view class="index-title-view">
        <span class="index-title-l">项目人员</span>
        <span class="index-title-r">更多人员></span>
      </view>
      <view>
        <view class="index-list-item" v-for="item in users">
          <span class="index-title-l">姓名：{{ item.name }}</span>
        </view>
      </view>
    </view>
  </nut-cell>

  <!-- 按钮栏 -->
  <nut-cell>
    <view class="index-button-view">
      <nut-button type="primary">新建项目</nut-button>
      <nut-button @click="onDlete" type="warning">删除项目</nut-button>
    </view>
  </nut-cell>


  <nut-dialog content="确定要删除项目吗？？？？" v-model:visible="visible2" @cancel="onCancel" @ok="onOk" />
</template>

<style>
.index-title-view {
  width: 100%;
}

.index-title-l {
  width: 50%;
  display: inline-block;
}

.index-title-r {
  width: 50%;
  display: inline-block;
  text-align: right;
}
.index-list-item {
  margin: 5px;
  padding: 2px;
  background-color: whitesmoke;
  border-radius: 3px;
}
.index-button-view{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>