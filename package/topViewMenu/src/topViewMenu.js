export default {
  name: 'EpTopviewMenu',
  props: {
    menuList: {
      type: Array,
      default: () => {
        return new Array();
      }
    }
  },
  data() {
    return {
      menuLists: [],
      rssLinksPc: true, // 横排菜单ul class
      rssLinksMobile: false, // 横排菜单ul class
      activeViewMore: false,
      activeViewDown: false,
      visibleMenuLinks: true, // 是否显示横排菜单项
      visibleMoreMenuLinks: true, // 是否显示更多菜单项
      visibleViewMore: false, // 是否显示更多按钮
      visibleDropDown: false, // 是否显示菜单按钮
      viewMoreLinksLi: [], // 更多下拉菜单项
      overflow: "",
      rssMenuResizeEvent: null,
      viewMoreMaxWidth: 320,
      vieMoreBtnWidth: 68
    }
  },
  created() {
    this.menuLists = this.deepCopy(this.menuList);
    this.menuLists.forEach((item, index) => {
      item.visible = true;
    });
  },
  mounted() {
    var _this = this;
    this.init();
    this.disableMoreMobile();
  },
  methods: {
    // 初始化
    init() {
      var _this = this;
      this.checkMenuAndWindow();

      this.addEventEle(window, 'resize', (e) => {
        _this.throttleResize();
      });
    },
    // 浏览器窗口缩放事件
    throttleResize() {
      var _this = this;
      _this.overflow = "hidden";
      clearTimeout(_this.rssMenuResizeEvent);
      _this.rssMenuResizeEvent = setTimeout(() => {
        _this.checkMenuAndWindow();
      }, 1000);
    },
    // 检查菜单项变化
    checkMenuAndWindow() {
      var _this = this;
      var rssViewMenu = document.querySelector('.ep-viewMenu');
      var rssDropDown = document.querySelector('.ep-dropDown');
      var rssLinksLi = document.querySelectorAll('.ep-menu-item');
      var viewMenuMaxWidth = rssViewMenu.clientWidth;

      function getContentWidth() {
        var menuContentWidth = 0;
        _this.rssLinksPc = true;
        _this.visibleMenuLinks = true;
        rssLinksLi.forEach((el, index) => {
          el.style.display = "block";
          menuContentWidth += el.clientWidth;
        });
        return menuContentWidth;
      }

      function switchMenu(type) {
        if (type == 'viewmore') {
          var viewMoreMenuWidth = _this.vieMoreBtnWidth;

          _this.rssLinksPc = true;
          _this.visibleMenuLinks = true;
          _this.viewMoreLinksLi = new Array();

          _this.menuLists.forEach((el, index) => {
            rssLinksLi[index].style.display = "block";
            if ((viewMoreMenuWidth + rssLinksLi[index].clientWidth) < viewMenuMaxWidth) {
              viewMoreMenuWidth += rssLinksLi[index].clientWidth;
            } else {
              el.visible = false;
              rssLinksLi[index].style.display = "none";
              var _moreElement = _this.deepCopy(el);
              _moreElement.visible = true;
              _this.viewMoreLinksLi.push(_moreElement);
            }
          });

          _this.visibleMoreMenuLinks = false;
          _this.visibleDropDown = false;
          _this.visibleViewMore = true;
        } else if (type == 'dropdown') {
          _this.menuLists.forEach((item, index) => {
            item.visible = true;
          });
          _this.visibleMenuLinks = false;
          _this.rssLinksMobile = true;
          _this.visibleViewMore = false;
          _this.visibleMoreMenuLinks = false;
          _this.visibleDropDown = true;
          _this.viewMoreLinksLi = new Array();
        } else {
          _this.menuLists.forEach((item, index) => {
            item.visible = true;
          });

          _this.visibleMenuLinks = true;
          _this.rssLinksMobile = false;
          _this.visibleViewMore = false;
          _this.visibleMoreMenuLinks = false;
          _this.visibleDropDown = false;
          _this.viewMoreLinksLi = new Array();
        }
        _this.activeViewMore = false;
        _this.activeViewDown = false;
      }

      if (getContentWidth() > viewMenuMaxWidth) {
        if ((viewMenuMaxWidth > this.viewMoreMaxWidth)) {
          switchMenu('viewmore');
        } else {
          switchMenu('dropdown');
        }
      } else {
        switchMenu('normal');
      }
      this.overflow = "";
    },
    // 启用查看更多下拉列表
    enableViewMoreDropDown() {
      if (this.activeViewMore) {
        this.disableViewMoreDropDown();
        return false;
      }
      this.activeViewMore = true;
      this.visibleMoreMenuLinks = true;
    },
    // 禁用查看更多下拉列表
    disableViewMoreDropDown() {
      if (this.activeViewMore) {
        this.activeViewMore = false;
        this.visibleMoreMenuLinks = false;
      }
    },
    // 启用移动下拉列表
    enableMobileDropDown() {
      if (this.activeViewDown) {
        this.disableMobileDropDown();
        return false;
      }

      this.activeViewDown = true;
      this.visibleMenuLinks = true;
    },
    // 禁用移动下拉列表
    disableMobileDropDown() {
      if (this.activeViewDown) {
        this.activeViewDown = false;
        this.visibleMenuLinks = false;
      }
    },
    // 菜单项点击事件
    openCurrentPage(path) {
      this.$router.push(path);
    },
    disableMoreMobile() {
      this.addEventEle(document, 'click', (e) => {
        e = window.event || e;
        var _className = e.target.className;

        if (_className === "dropDownBtn") {
          this.enableMobileDropDown();
        } else if (_className === "viewMoreBtn") {
          this.enableViewMoreDropDown();
        } else {
          this.disableMobileDropDown();
          this.disableViewMoreDropDown();
        }
      });
    },
    // 深拷贝
    deepCopy(source) {
      if (!source) {
        return source;
      }

      let sourceCopy = source instanceof Array ? [] : {};
      for (let item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? this.deepCopy(source[item]) : source[item];
      }

      return sourceCopy;
    },
    // 添加监听事件
    addEventEle(obj, ev, fn) {
      if (obj.attachEvent) {
        //针对IE浏览器
        obj.attachEvent('on' + ev, fn)
      } else {
        //针对FF与chrome
        obj.addEventListener(ev, fn, false)
      }
    }
  },
  watch: {}
}
