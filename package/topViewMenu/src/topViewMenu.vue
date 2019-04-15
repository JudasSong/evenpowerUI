<template>
  <div class="ep-viewMenu" :style="{ overflow: overflow}">
    <div class="ep-dropDown" :style="{ 'display': (visibleDropDown==true)?'block':'none'}">
      <a class="dropDownBtn" href="javascript:void(0);" :class="{'active':activeViewDown}">菜单</a>
    </div>
    <ul id="headNavMenu" class="clearfix" :style="{ 'display': (visibleMenuLinks==true)?'inline-block':'none'}" :class="{ 'ep-links-pc': rssLinksPc, 'ep-links-mobile': rssLinksMobile}">
      <li class="ep-menu-item" v-for="item in menuLists" :index="item.path" :key="item.path" :style="{ 'display': (item.visible==true)?'block':'none'}">
        <a href="javascript:void(0);" class="ep-menu-node" @click="openCurrentPage(item.path)">
            <i class="menu-icon"></i>
            <span class="menu-text">{{item.name}}</span>
        </a>
      </li>
    </ul>
    <div class="ep-viewMore" :style="{ 'display': (visibleViewMore==true)?'inline-block':'none'}">
      <a class="viewMoreBtn" href="javascript:void(0);"
        :class="{'active':activeViewMore}">更多<span class="icon"></span></a>
      <ul :style="{ 'display': (visibleMoreMenuLinks==true)?'block':'none'}">
        <li class="ep-menu-item" v-for="item in viewMoreLinksLi" :index="item.path" :key="item.path" v-show="item.visible">
          <a href="javascript:void(0);" class="ep-menu-node" @click="openCurrentPage(item.path)">
              <i class="menu-icon"></i>
              <span class="menu-text">{{item.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import topViewMenu from './topViewMenu.js';

export default topViewMenu;

</script>
