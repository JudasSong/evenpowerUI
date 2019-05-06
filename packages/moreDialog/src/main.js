import Vue from "vue";
// import Main from "./main.vue";
import { gethashcode } from "evenpowerui/src/utils/hashCode";

const moreDialogTmpl = `<div class="epDialogWrapper" v-if="show">
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
  </div>`;

const MoreDialog = function(options) {
  var epVue = null;
  var element = document.createElement('div');
  var randomHashcode = gethashcode();
  if (options.parentEl) {
    options.parentEl.appendChild(element);
  } else {
    document.getElementsByTagName('body')[0].appendChild(element);
  }
  element.id = `epMoreDialog${randomHashcode}`;

  epVue = new Vue({
    el: `#${element.id}`,
    template: moreDialogTmpl,
    data() {
      return {
        title: options.title,
        style: options.style,
        modal: true,
        visible: options.visible,
        customClass: options.customClass || 'ep-popdialog',
        showClose: true,
        show: true,
        width: options.width || "400px",
        data: {},
      }
    },
    components: {
      child: options.component
    },
    beforeCreate() {},
    created() {
      this.data = this.cloneData(options.data == null ? {} : options.data);
    },
    beforeMount() {},
    mounted() {},
    methods: {
      beforeClose(done) {
        if (options.close) {
          options.close();
        }
        done();
      },
      close() {
        if (options.close) {
          options.close();
        }
        this.show = false;
      },
      ensure() {
        let currentData = this.$refs.popChild.getCurrentData();
        options.ensure(currentData);
        this.visible = false;
      },
      cancel() {
        this.visible = false;
      },
      callback(result) {

      },
      cloneData(obj) {
        // 判断3个简单类型，并且为空或未定义
        if (null == obj || 'object' !== typeof obj) return obj;

        // 判断Date
        if (obj instanceof Date) {
          var copy = new Date();
          copy.setTime(obj.getTime());
          return copy;
        }

        // 判断Array
        if (obj instanceof Array) {
          var copy = [];
          for (var i = 0, len = obj.length; i < len; ++i) {
            copy[i] = this.cloneData(obj[i]);
          }

          return copy;
        }

        // 判断Object
        if (obj instanceof Object) {
          var copy = {};
          for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = this.cloneData(obj[attr]);
          }

          return copy;
        }

        throw new Error("无法复制对象！不支持其类型。");
      }
    },
    watch: {}
  });
  return epVue;
}

export default MoreDialog;
