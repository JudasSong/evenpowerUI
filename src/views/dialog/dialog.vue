<template>
  <div>
    <el-button @click="openDialog()">默认按钮</el-button>
    <table-dialog 
    :isShowDialog="isShowDialog" 
    v-on:dialogCancel="dialogCancel" 
    :rowData="rowData" 
    :title="title" 
    :disabled="disabled" 
    :curd="curd">
    </table-dialog>
  </div>
</template>
<script>
import tableDialog from "./dialogTable";
export default {
  data() {
    return {
      isShowDialog: false,
      title: "表格",
      rowData: {},
      disabled: false,
      curd: "see",
    };
  },
  components: {
    tableDialog
  },
  created() {
    console.log();
  },
  methods: {
    openDialog(){
      this.isShowDialog = true;
    },
    dialogCancel(type) {
      this.isShowDialog = false;
      this.disabled = false;
      this.title = "";
      (type !== 'cancel') ? this.getListData(): null;
    },
  }
}

</script>
