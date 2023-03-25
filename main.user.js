
// ==UserScript==
// @name           ChatGPT助手【豪华版】
// @namespace      http://tampermonkey.net/
// @version        2023.03.25
// @author         luckyblank
// @description    ChatGPT助手，无须繁琐的注册流程，无须key，直接与AI对话！
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @match          http*://**/**
// @run-at         document-end
// @require        https://code.jquery.com/jquery-3.6.0.min.js
// @require        https://cdn.jsdelivr.net/npm/sweetalert@2.1.2/dist/sweetalert.min.js
// @require        https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.js
// @require        https://cdn.staticfile.org/vue/2.7.0/vue.min.js
// @require        https://unpkg.com/element-ui/lib/index.js
// @require        https://cdn.jsdelivr.net/npm/typeit@2.0.2/dist/typeit.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require        https://unpkg.com/axios/dist/axios.min.js
// @require        https://cdn.jsdelivr.net/npm/marked@4.2.3/marked.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.1/markdown-it.min.js
// @require        https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js
// @connect        chatforai.cc
// @grant          GM_log
// @grant          GM_notification
// @grant          unsafeWindow
// @grant          GM_addStyle
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_setClipboard
// @grant          GM_xmlhttpRequest
// @grant          GM_addElement
// @grant          GM_openInTab
// @grant          GM_getResourceText
// @license        MIT
// ==/UserScript==
(function () {
  'use strict';

  //添加样式
  //引入css文件
  $("head").append($('<link rel="stylesheet" href="https://www.luckyblank.cn/outer/layer-v3.5.1/layer/theme/default/layer.css">'));
  $("head").append($('<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">'));
  $("head").append($('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css">'));
  $("head").append($('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">'));
  // height: 400px;
  // background-color: #efe9e9;
  // padding: 10px;
  // position: fixed;
  // width: 539px;
  //打字机效果
  GM_addStyle(`
    @-webkit-keyframes blink {
      0% {
          opacity: 1
      }

      50% {
          opacity: 0
      }

      100% {
          opacity: 1
      }
    }

    @keyframes blink {
      0% {
          opacity: 1
      }

      50% {
          opacity: 0
      }

      100% {
          opacity: 1
      }
    }

    .ti-container {
      display: block;
      font-size: inherit
    }

    .ti-text-container {
      position: relative;
      display: inline;
      font-size: inherit
    }

    .ti-text-container:before {
      content: '';
      display: inline-block;
      width: 1px;
      height: 1em;
      position: relative
    }

    .ti-text-container.active-container.ti-cursor:after {
      display: inline
    }

    .ti-cursor:after {
      display: none;
      content: '|';
      bottom: .05em;
      right: -.25em;
      position: absolute;
      line-height: normal;
      font-size: inherit;
      -webkit-animation: blink 1s infinite;
      animation: blink 1s infinite
    }
`);

  //在线客服效果
  GM_addStyle(`@keyframes scaleToggleOne { 0% { transform:scale(1); -webkit-transform:scale(1) } 50% { transform:scale(2); -webkit-transform:scale(2) } 100% { transform:scale(1); -webkit-transform:scale(1) } } @keyframes scaleToggleTwo { 0% { transform:scale(1); -webkit-transform:scale(1) } 20% { transform:scale(1); -webkit-transform:scale(1) } 60% { transform:scale(2); -webkit-transform:scale(2) } 100% { transform:scale(1); -webkit-transform:scale(1) } } @keyframes scaleToggleThree { 0% { transform:scale(1); -webkit-transform:scale(1) } 33% { transform:scale(1); -webkit-transform:scale(1) } 66% { transform:scale(2); -webkit-transform:scale(2) } 100% { transform:scale(1); -webkit-transform:scale(1) } }
.animated { -webkit-animation-duration: .5s; animation-duration: .5s; -webkit-animation-fill-mode: both; animation-fill-mode: both }
.livechat-girl { width: 60px; height: 60px; border-radius: 50%; position: fixed; bottom: 0; right: 40px; opacity: 0; -webkit-box-shadow: 0 5px 10px 0 rgba(35,50,56,.3); box-shadow: 0 5px 10px 0 rgba(35,50,56,.3); z-index: 700; transform: translateY(0); -webkit-transform: translateY(0); -ms-transform: translateY(0); cursor: pointer; -webkit-transition: all 1s cubic-bezier(.86, 0, .07, 1); transition: all 1s cubic-bezier(.86, 0, .07, 1) }
.livechat-girl:focus { outline: 0 }
.livechat-girl.animated { opacity: 1; transform: translateY(-40px); -webkit-transform: translateY(-40px); -ms-transform: translateY(-40px) }
.livechat-girl:after { content: ''; width: 12px; height: 12px; border-radius: 50%; background-image: linear-gradient(to bottom, #26c7fc, #26c7fc); position: absolute; right: 1px; top: 1px; z-index: 50 }
.livechat-girl .girl { position: absolute; top: 0; left: 0; width: 100%; height: auto; z-index: 50 }
.livechat-girl .animated-circles .circle { background: rgba(38,199,252,.25); width: 60px; height: 60px; border-radius: 50%; position: absolute; z-index: 49; transform: scale(1); -webkit-transform: scale(1) }
.livechat-girl .animated-circles.animated .c-1 { animation: 2s scaleToggleOne cubic-bezier(.25, .46, .45, .94) forwards }
.livechat-girl .animated-circles.animated .c-2 { animation: 2.5s scaleToggleTwo cubic-bezier(.25, .46, .45, .94) forwards }
.livechat-girl .animated-circles.animated .c-3 { animation: 3s scaleToggleThree cubic-bezier(.25, .46, .45, .94) forwards }
.livechat-girl.animation-stopped .circle { opacity: 0!important }
.livechat-girl.animation-stopped .circle { opacity: 0!important }
.livechat-girl .livechat-hint { position: absolute; right: 40px; top: 50%; margin-top: -20px; opacity: 0; z-index: 0; -webkit-transition: all .3s cubic-bezier(.86, 0, .07, 1); transition: all .3s cubic-bezier(.86, 0, .07, 1) }
.livechat-girl .livechat-hint.show_hint { -webkit-transform: translateX(-40px); transform: translateX(-40px); opacity: 1 }
.livechat-girl .livechat-hint.hide_hint { opacity: 0; -webkit-transform: translateX(0); transform: translateX(0) }
.livechat-girl .livechat-hint.rd-notice-tooltip { max-width: 1296px!important }
.livechat-girl .livechat-hint.rd-notice-tooltip .rd-notice-content { width: auto; overflow: hidden; text-overflow: ellipsis }
@media only screen and (max-width:1599px) {
.livechat-girl .livechat-hint.rd-notice-tooltip { max-width: 1060px!important }
}
@media only screen and (max-width:1309px) {
.livechat-girl .livechat-hint.rd-notice-tooltip { max-width: 984px!important }
}
@media only screen and (max-width:1124px) {
.livechat-girl .livechat-hint.rd-notice-tooltip { max-width: 600px!important }
}
.rd-notice-tooltip { -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.2); box-shadow: 0 2px 2px rgba(0,0,0,.2); font-size: 14px; border-radius: 3px; line-height: 1.25; position: absolute; z-index: 65; max-width: 350px; opacity: 1 }
.rd-notice-tooltip:after { position: absolute; display: block; content: ''; height: 20px; width: 20px; -webkit-box-shadow: none; box-shadow: none; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg); -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; z-index: 50 }
.rd-notice-tooltip .rd-notice-content { background: 0; border-radius: 3px; width: 100%; color: #fff; position: relative; z-index: 60; padding: 20px; font-weight: 400; line-height: 1.45 }
.rd-notice-type-success { background-color: #26c7fc; -webkit-box-shadow: 0 5px 10px 0 rgba(38,199,252,.2); box-shadow: 0 5px 10px 0 rgba(38,199,252,.2) }
.rd-notice-type-success .rd-notice-content { background-color: #26c7fc }
.rd-notice-type-success:after { background-color: #26c7fc; -webkit-box-shadow: 0 5px 10px 0 rgba(38,199,252,.2); box-shadow: 0 5px 10px 0 rgba(38,199,252,.2) }
.rd-notice-position-left { margin-left: -20px }
.rd-notice-position-left:after { right: -6px; top: 50%; margin-top: -10px }
.rd-notice-tooltip.single-line .rd-notice-content { height: 40px; padding: 0 20px; line-height: 40px; white-space: nowrap }
.girl{border-radius: 50%;-webkit-animation:run 6s cubic-bezier(0.82, 0.11, 0.46, 0.98) 0s infinite;  }
.girl:hover{ -webkit-animation-play-state:paused; } @-webkit-keyframes run{  from{    -webkit-transform:rotate(0deg); } to{ -webkit-transform:rotate(360deg);  } }
`);

  //公共效果
  GM_addStyle(`
      #app{
        min-width:539px;
        right: 20px;
        top: 100px;
        z-index: 9999;
      }
      .history-questions::-webkit-scrollbar {
        display:none
      }
      .history-questions{
        background-color: #ddddda;
        min-height: 291px;
        max-height: 291px;
        padding: 10px;
        overflow-y: scroll;
      }
    .d-none{
      display:none !important;
    }
    .layui-layer-content .d-none{
      display:block !important;
    }
`);

  //逻辑代码
  //添加元素
  let chatAi = `<div class="livechat-girl animated"> 
        <img class="girl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=">
        <div class="livechat-hint rd-notice-tooltip rd-notice-type-success rd-notice-position-left single-line hide_hint">
          <div class="rd-notice-content">嘿，ChatGPT来帮您！</div>
        </div>
        <div class="animated-circles">
          <div class="circle c-1"></div>
          <div class="circle c-2"></div>
          <div class="circle c-3"></div>
        </div>
      </div>`;
  $("body").append(chatAi);
  const mainEl = `<div id="app" class="d-none">
                  <el-card class="box-card">
                    <div class="demo-input-suffix">
                          <div class="demo-input-suffix">
                              <article id="chat-answer" class="markdown-body">
                                <el-empty v-show="emptyRecord" description="暂无记录">
                                </el-empty>
                                <div v-show="!emptyRecord" class="history-questions" >
                                </div>
                              </article>
                            <el-input
                              placeholder="请输入内容"
                              v-model="your_qus"
                              class="typeit-box"
                              id="chat-input"
                              clearable>
                              <el-button slot="append" id="chat-search" @click="your_qus !== '' ? doIt() : ''" type="primary" icon="el-icon-s-promotion">chat一下</el-button>
                            </el-input>
                      </div>
                  </el-card>
                </div>
                `;
  $("body").append(mainEl);

  //加密代码
  //enc-start
  async function digestMessage(r) {
    const hash = CryptoJS.SHA256(r);
    return hash.toString(CryptoJS.enc.Hex);
  }
  const generateSignature = async r => {
    const {
      t: e,
      m: t
    } = r;
    const n = {}.PUBLIC_SECRET_KEY;
    const a = `${e}:${t}:${n}`;
    return await digestMessage(a);
  };
  //enc-end

  //焦点函数
  function isBlur() {
    var myInput = document.getElementById('chat-input');
    if (myInput == document.activeElement) {
      return 1;
    } else {
      return 0;
    }
  }

  //Enter键触发搜索
  function keyEvent() {
    document.onkeydown = function (e) {
      var keyNum = window.event ? e.keyCode : e.which;
      if (13 == keyNum) {
        if (isBlur()) {
          document.getElementById('chat-search').click();
        } else {
          console.log("失焦不执行");
        }
      }
    };
  }

  //md转换
  function mdConverter(rawData) {
    var converter = new showdown.Converter(); //增加拓展table
    converter.setOption('tables', true); //启用表格选项。从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用
    var view = converter.makeHtml(rawData);
    return view;
  }
  $(function () {
    //开启定时特效
    setInterval(function () {
      if ($(".animated-circles").hasClass("animated")) {
        $(".animated-circles").removeClass("animated");
      } else {
        $(".animated-circles").addClass('animated');
      }
    }, 3000);
    var wait = setInterval(function () {
      $(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
      clearInterval(wait);
    }, 4500);
    $(".livechat-girl").hover(function () {
      //console.log("hover.......");
      clearInterval(wait);
      $(".livechat-hint").removeClass("hide_hint").addClass("show_hint");
    }, function () {
      //console.log("unhover.......");
      $(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
    }).click(function () {
      //console.log("click.......");
      layer.open({
        title: "正在和ChatGPT沟通中...",
        type: 1,
        maxmin: true,
        shade: 0,
        shadeClose: false,
        anim: 1,
        offset: 'rb',
        area: ['539px', '445px'],
        content: $('#app')
      });
    });
    keyEvent();
  });

  //vue相关的实例
  new Vue({
    el: '#app',
    data: {
      message: 'Hello ChatGPT !',
      emptyRecord: true,
      your_qus: "",
      chatURL: "https://chatforai.cc/api/generate",
      waitWord: "正在搜索中...为了防止您打瞌睡，下面请您欣赏一段优美的句子：",
      tiandaoWords: ["这就是圆融世故，不显山不露水，各得其所。可品行这个东西今天缺个角，明天裂个缝，也就离坍陷不远了。——————《天道》", "要想做点事，别把自己太当人，别把别人不当人。——————《天道》", "女人是形式逻辑的典范，是辩证逻辑的障碍，我无意摧残女人，也不想被女人摧残。——————《天道》", "这就是圆融世故，不显山不露水，各得其所。可品行这个东西今天缺个角，明天裂个缝，也就离坍陷不远了。——————《天道》", "着相了，佛教得一个术语，意思是执迷于表象而偏离本质。——————《天道》", "佛说，看山是山，看水是水。我只是依佛法如实观照，看摩登女郎是摩登女郎，看红颜知己是红颜知己。——————《天道》", "当有人笑话耶稣是傻子的时候，其实谁都不傻，仅仅是两种价值观不兼容。——————《天道》", "灵魂归宿感， 这是人性本能的需要，是人性你帮他找块干净的地方归宿灵魂。——————《天道》", "如果我孝顺的口碑是以我父亲的痛苦和尊严为条件的话，那这样的口碑我情愿不要。——————《天道》", "从心理学的角度分析，越是头脑简单的人越是需要点缀和填充，而头脑复杂的人则对简洁有着特殊的心理需求。——————《天道》", "强势文化就是遵循事物规律的文化，弱势文化就是依赖强者的道德期望破格获取的文化，也是期望救主的文化。——————《天道》", "不因上天堂与下地狱的因果关系而具有的极高人生境界，就是窄门。——————《天道》", "传统文化毕竟是以皇恩浩荡为先决条件的文化，讲的都是皆空、无为、中庸的理，以抑制个性而求生求解。——————《天道》", "天下之道论到极至，百姓的柴米油盐；人生冷暖论到极至，男人和女人的一个情字。——————《天道》"]
    },
    methods: {
      userWait() {
        $(".history-questions").html('');
        let radomIndex = Math.floor(Math.random() * this.tiandaoWords.length);
        $(".history-questions").typeIt({
          whatToType: this.waitWord + this.tiandaoWords[radomIndex],
          typeSpeed: 200
        });
      },
      doIt() {
        this.emptyRecord = false;
        //加载中等待效果
        this.userWait();
        const now = Date.now();
        generateSignature({
          t: now,
          m: this.your_qus || ""
        }).then(sign => {
          console.log(sign);
          GM_xmlhttpRequest({
            method: "POST",
            url: this.chatURL,
            headers: {
              "Content-Type": "application/json"
            },
            data: JSON.stringify({
              messages: [{
                role: "user",
                content: this.your_qus
              }],
              time: now,
              pass: null,
              sign: sign,
              key: "",
              usage: 0
            }),
            onload: function (res) {
              if (res.status === 200) {
                let rest = res.response;
                $(".history-questions").html('');
                let convertValue = `${mdConverter(rest.replaceAll(/\\n+/g, "\n"))}`;
                $(".history-questions").html(convertValue);
                hljs.highlightAll();
              } else {
                $(".history-questions").html('');
                $(".history-questions").typeIt({
                  whatToType: ["访问失败了"],
                  typeSpeed: 10
                });
              }
            },
            responseType: "application/json;charset=UTF-8",
            onprogress: function (msg) {},
            onerror: function (err) {
              $(".history-questions").html('');
              $(".history-questions").typeIt({
                whatToType: [`${err.messages}`],
                typeSpeed: 10
              });
            },
            ontimeout: function (err) {
              $(".history-questions").typeIt({
                whatToType: [`${err.messages}`],
                typeSpeed: 10
              });
            }
          });
        });
      }
    }
  });

})();
