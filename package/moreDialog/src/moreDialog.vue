<template id="epMoreDialogWrapper">
  <div class="epDialogWrapper" v-if="show">
    <el-dialog 
	    :visible.sync="visible" 
	    :style="style" 
	    :title="title"  
	    :custom-class="customClass"
	    :show-close="showClose" 
	    :before-close="beforeClose" 
	    :width="width" 
	    @close="close()">
      <child v-on:callback="callback" :initData="data" ref="popChild"></child>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="medium" @click="ensure('formData')">确 定</el-button>
        <el-button size="medium" @click="cancel()">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<!-- <script type="x-template" id="epDialogWrapper">
</script> -->
<script>
// import Vue from "vue";
// import moreDialog from "./moreDialog.js";
// export default moreDialog;
export default {
  name: 'EpMoreDialog'
}

</script>

