<template>
  <el-dialog 
    custom-class="ep-dialog-wrapper" 
    @close="closeDialog('cancel')" 
    :visible.sync="isVisibleDialog" 
    v-if="isVisibleDialog==true" 
    :title="title" 
    :lock-scroll="false" 
    width="960px">
    <el-form 
      :model="formData" 
      :inline="true" 
      size="medium" 
      ref="formData" 
      class="clear" 
      label-width="120px" 
      style="width:100%;margin:0 auto">
      <div class="panel panel-default">
        <div class="panel-heading">基本信息</div>
        <div class="panel-body">
          <el-row :gutter="15">
            <el-col :span="8">
              <el-form-item label="公司名称" prop="name" class="ep-form-item">
                <el-input placeholder="请输入公司名称" v-model="formData.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="认证状态" prop="approved" class="ep-form-item">
                <el-select v-model="formData.approved" size="medium" placeholder="请选择">
                  <el-option label="未认证" value="0"></el-option>
                  <el-option label="已认证" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="冻结状态" prop="freezed" class="ep-form-item">
                <el-select v-model="formData.freezed" size="medium" placeholder="请选择">
                  <el-option label="正常" value="0"></el-option>
                  <el-option label="冻结" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
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
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
import Vue from "Vue";
import popDialog from "./popTable.vue";
import { Message } from "element-ui";
import { MoreDialog } from "evenpowerui";
export default {
  props: {
    isShowDialog: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "信息"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    curd: {
      type: String,
      default: "add"
    },
    rowData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      isVisibleDialog: false,
      formData: {
        name: "",
        approved: "",
        freezed: ""
      },
      tableData: [{
        date: '2016-05-02',
        name: '刘备',
        province: '蜀国',
        city: '成都',
        address: '成都市普陀区金沙江路',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '关羽',
        province: '蜀国',
        city: '荆州',
        address: '荆州市xx路',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '张飞',
        province: '蜀国',
        city: '成都',
        address: '成都市xxx路',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '曹操',
        province: '魏国',
        city: '许昌',
        address: '许昌市那路',
        zip: 200333
      }]
    }
  },
  created() {
    this.isVisibleDialog = this.isShowDialog;
  },
  methods: {
    handleClick(row) {
      let options = {
        title: "选择企业",
        visible: true,
        width: "640px",
        component: popDialog,
        ensure: this.popDialogEnsure,
        data: row
      };
      MoreDialog(options);
    },
    popDialogEnsure(data) {
      Vue.set(this.formData, "name", data.name);
      Vue.set(this.formData, "approved", data.approved);
      Vue.set(this.formData, "freezed", data.freezed);
    },
    closeDialog(type) {
      this.$emit("dialogCancel", type);
    },
  },
  watch: {
    isShowDialog(newVal, oldVal) {
      this.isVisibleDialog = newVal;
      if (newVal) {

      }
    }
  }
}

</script>
<style lang="less">
.ep-footer-dialog {
  text-align: right;
}

.ep-dialog-wrapper .el-dialog__body {
  height: calc(100% - 171px);
  overflow-y: auto;
}

.ep-dialog-wrapper {
  height: 700px;
}

// 嵌套弹窗样式
.ep-popdialog {
  height: 400px;
}

.ep-popdialog .el-dialog__body {
  height: calc(100% - 171px);
  overflow-y: auto;
}

.panel {
  border-radius: 2px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.panel-default {
  border-color: #dee5e7;
}

.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-default>.panel-heading {
  color: #333;
  background-color: #f6f8f8;
  border-color: #edf1f2;
  border-radius: 2px 2px 0 0;
}

.panel-body {
  padding: 15px;
}

</style>





