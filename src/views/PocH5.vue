<template>
  <div class="nav">
    <el-icon><ArrowLeftBold /></el-icon>
    <h4>整存整取</h4>
  </div>
  <div class="content">
    <el-form :model="form" label-width="auto" style="max-width: 750px">
      <el-form-item label="活期账户">
        <el-select
          v-model="form.accountNo"
          placeholder="请选择活期账户"
          size="default"
          style="width: 100%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="可用余额">
        <el-input v-model="form.showUsemoney" disabled>
          <template #suffix> 元 </template>
        </el-input>
      </el-form-item>
      <el-form-item label="转存方式">
        <el-select
          v-model="form.Payway"
          placeholder="请选择转存方式"
          size="default"
          style="width: 100%"
        >
          <el-option
            v-for="item in Archivedway"
            :key="item.value"
            :label="item.title"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="存款期限">
        <el-select
          v-model="form.deadline"
          placeholder="请选择存款期限"
          size="default"
          style="width: 100%"
        >
          <el-option
            v-for="item in deadlineList"
            :key="item.value"
            :label="item.title"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="存款利率">
        <el-input v-model="form.rates" placeholder="请输入存款利率" />
      </el-form-item>
      <el-form-item label="存入金额">
        <el-input type="number" v-model="form.tradeAmount" placeholder="起存金额1万元" />
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="desc">
    <span class="desc-title">温馨提示：</span>
    <div class="tip">
      • 单位定期自动转存在稠州企业银行上可选本息转存或本金转存方式，起存金额1万元，多存不限。
    </div>
    <div class="tip">
      • 整存整取可全部或部分提前支取，但只能提前支取一次，提前支取后留存金额需不小于最低起存金额。
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { ArrowLeftBold } from '@element-plus/icons';

const options = [
  {
    value: 'Option1',
    label: '账号A',
  },
  {
    value: 'Option2',
    label: '账户B',
  },
];

const form = reactive({
  accountNo: '',
  showUsemoney: '0',
  Payway: '',
  deadline: '',
  rates: '',
  tradeAmount: null,
});

// 转存方式
const Archivedway = reactive([
  {
    value: '1',
    dispValue: '本息转存',
    title: '本息转存',
    deptId: '1',
    bankAcType: '1',
  },
  {
    value: '2',
    dispValue: '本金转存',
    title: '本金转存',
    deptId: '1',
    bankAcType: '1',
  },
]);

// 存款期限
const deadlineList = reactive([
  {
    title: '3个月',
    value: '3',
    dispValue: '3个月',
  },
  {
    title: '6个月',
    value: '6',
    dispValue: '6个月',
  },
  {
    title: '一年',
    value: '12',
    dispValue: '一年',
  },
  {
    title: '两年',
    value: '24',
    dispValue: '两年',
  },
  {
    title: '三年',
    value: '36',
    dispValue: '三年',
  },
  {
    title: '五年',
    value: '60',
    dispValue: '五年',
  },
]);

onMounted(() => {
  // request({
  //   url: 'yqt/wealth/wealthManage.czcbQueryAcctBalance',
  //   method: 'POST'
  // })
});

const onSubmit = () => {
  console.log(form);
};
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
  .btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: 700;
  }
}
.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 38px;
  padding-left: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #666;
  h4 {
    margin-left: 4px;
  }
}
.desc {
  padding: 10px;
  box-sizing: border-box;
  color: #8f8c82;
  font-size: 14px;
  .desc-title {
    color: #f5780c;
    display: inline-block;
    margin-bottom: 5px;
  }
}
</style>
