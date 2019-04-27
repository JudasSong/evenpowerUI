<template>
  <div class="ep-popDialog" style="">
    <el-form :model="formData">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="认证状态" prop="approved" class="ep-form-item">
            <el-select v-model="formData.approved" size="medium" placeholder="请选择">
              <el-option label="未认证" value="0"></el-option>
              <el-option label="已认证" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="冻结状态" prop="freezed" class="ep-form-item">
            <el-select v-model="formData.freezed" size="medium" placeholder="请选择">
              <el-option label="正常" value="0"></el-option>
              <el-option label="冻结" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="resultData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    initData: {
      type: Object,
      default: new Object()
    }
  },
  data() {
    return {
      data: {},
      formData: {
        approved: "0",
        freezed: "0"
      }
    };
  },
  created() {
    // console.log("=====", this.initData);
  },
  computed: {
    resultData() {
      this.data = this.initData;
      return [this.data];
    }
  },
  methods: {
    getCurrentData() {
      const { approved, freezed } = this.formData
      return { approved, freezed, name: "多层弹框返回数据！" };
    }
  },
  watch: {}
};

</script>
<style lang="less" scoped>
</style>
