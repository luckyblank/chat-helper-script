
// ==UserScript==
// @name           ChatGPT助手【豪华版】 Dev
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZXYudXNlci5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy/mt7vliqDmoLflvI9cbi8v5byV5YWlY3Nz5paH5Lu2XG4kKFwiaGVhZFwiKS5hcHBlbmQoJCgnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3d3dy5sdWNreWJsYW5rLmNuL291dGVyL2xheWVyLXYzLjUuMS9sYXllci90aGVtZS9kZWZhdWx0L2xheWVyLmNzc1wiPicpKTtcbiQoXCJoZWFkXCIpLmFwcGVuZCgkKCc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL2VsZW1lbnQtdWkvbGliL3RoZW1lLWNoYWxrL2luZGV4LmNzc1wiPicpKTtcbiQoXCJoZWFkXCIpLmFwcGVuZCgkKCc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2dpdGh1Yi1tYXJrZG93bi1jc3MvNS4xLjAvZ2l0aHViLW1hcmtkb3duLmNzc1wiPicpKTtcbiQoXCJoZWFkXCIpLmFwcGVuZCgkKCc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2hpZ2hsaWdodC5qcy8xMS43LjAvc3R5bGVzL2RlZmF1bHQubWluLmNzc1wiPicpKTtcbi8vIGhlaWdodDogNDAwcHg7XG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlOWU5O1xuLy8gcGFkZGluZzogMTBweDtcbi8vIHBvc2l0aW9uOiBmaXhlZDtcbi8vIHdpZHRoOiA1MzlweDtcbi8v5omT5a2X5py65pWI5p6cXG5HTV9hZGRTdHlsZShgXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9XG5cbiAgICAgIDUwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfVxuXG4gICAgICAxMDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuXG4gICAgICA1MCUge1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH1cblxuICAgICAgMTAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IGluaGVyaXRcbiAgICB9XG5cbiAgICAudGktdGV4dC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0XG4gICAgfVxuXG4gICAgLnRpLXRleHQtY29udGFpbmVyOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIH1cblxuICAgIC50aS10ZXh0LWNvbnRhaW5lci5hY3RpdmUtY29udGFpbmVyLnRpLWN1cnNvcjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICB9XG5cbiAgICAudGktY3Vyc29yOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBjb250ZW50OiAnfCc7XG4gICAgICBib3R0b206IC4wNWVtO1xuICAgICAgcmlnaHQ6IC0uMjVlbTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlXG4gICAgfVxuYCk7XG5cbi8v5Zyo57q/5a6i5pyN5pWI5p6cXG5HTV9hZGRTdHlsZShgQGtleWZyYW1lcyBzY2FsZVRvZ2dsZU9uZSB7IDAlIHsgdHJhbnNmb3JtOnNjYWxlKDEpOyAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB9IDUwJSB7IHRyYW5zZm9ybTpzY2FsZSgyKTsgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMikgfSAxMDAlIHsgdHJhbnNmb3JtOnNjYWxlKDEpOyAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB9IH0gQGtleWZyYW1lcyBzY2FsZVRvZ2dsZVR3byB7IDAlIHsgdHJhbnNmb3JtOnNjYWxlKDEpOyAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB9IDIwJSB7IHRyYW5zZm9ybTpzY2FsZSgxKTsgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgfSA2MCUgeyB0cmFuc2Zvcm06c2NhbGUoMik7IC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDIpIH0gMTAwJSB7IHRyYW5zZm9ybTpzY2FsZSgxKTsgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgfSB9IEBrZXlmcmFtZXMgc2NhbGVUb2dnbGVUaHJlZSB7IDAlIHsgdHJhbnNmb3JtOnNjYWxlKDEpOyAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB9IDMzJSB7IHRyYW5zZm9ybTpzY2FsZSgxKTsgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgfSA2NiUgeyB0cmFuc2Zvcm06c2NhbGUoMik7IC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDIpIH0gMTAwJSB7IHRyYW5zZm9ybTpzY2FsZSgxKTsgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgfSB9XG4uYW5pbWF0ZWQgeyAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjVzOyBhbmltYXRpb24tZHVyYXRpb246IC41czsgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoIH1cbi5saXZlY2hhdC1naXJsIHsgd2lkdGg6IDYwcHg7IGhlaWdodDogNjBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMDsgcmlnaHQ6IDQwcHg7IG9wYWNpdHk6IDA7IC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMzUsNTAsNTYsLjMpOyBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgzNSw1MCw1NiwuMyk7IHotaW5kZXg6IDcwMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgY3Vyc29yOiBwb2ludGVyOyAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoLjg2LCAwLCAuMDcsIDEpOyB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKC44NiwgMCwgLjA3LCAxKSB9XG4ubGl2ZWNoYXQtZ2lybDpmb2N1cyB7IG91dGxpbmU6IDAgfVxuLmxpdmVjaGF0LWdpcmwuYW5pbWF0ZWQgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpIH1cbi5saXZlY2hhdC1naXJsOmFmdGVyIHsgY29udGVudDogJyc7IHdpZHRoOiAxMnB4OyBoZWlnaHQ6IDEycHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI2YzdmYywgIzI2YzdmYyk7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDFweDsgdG9wOiAxcHg7IHotaW5kZXg6IDUwIH1cbi5saXZlY2hhdC1naXJsIC5naXJsIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IHotaW5kZXg6IDUwIH1cbi5saXZlY2hhdC1naXJsIC5hbmltYXRlZC1jaXJjbGVzIC5jaXJjbGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDM4LDE5OSwyNTIsLjI1KTsgd2lkdGg6IDYwcHg7IGhlaWdodDogNjBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDQ5OyB0cmFuc2Zvcm06IHNjYWxlKDEpOyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgfVxuLmxpdmVjaGF0LWdpcmwgLmFuaW1hdGVkLWNpcmNsZXMuYW5pbWF0ZWQgLmMtMSB7IGFuaW1hdGlvbjogMnMgc2NhbGVUb2dnbGVPbmUgY3ViaWMtYmV6aWVyKC4yNSwgLjQ2LCAuNDUsIC45NCkgZm9yd2FyZHMgfVxuLmxpdmVjaGF0LWdpcmwgLmFuaW1hdGVkLWNpcmNsZXMuYW5pbWF0ZWQgLmMtMiB7IGFuaW1hdGlvbjogMi41cyBzY2FsZVRvZ2dsZVR3byBjdWJpYy1iZXppZXIoLjI1LCAuNDYsIC40NSwgLjk0KSBmb3J3YXJkcyB9XG4ubGl2ZWNoYXQtZ2lybCAuYW5pbWF0ZWQtY2lyY2xlcy5hbmltYXRlZCAuYy0zIHsgYW5pbWF0aW9uOiAzcyBzY2FsZVRvZ2dsZVRocmVlIGN1YmljLWJlemllciguMjUsIC40NiwgLjQ1LCAuOTQpIGZvcndhcmRzIH1cbi5saXZlY2hhdC1naXJsLmFuaW1hdGlvbi1zdG9wcGVkIC5jaXJjbGUgeyBvcGFjaXR5OiAwIWltcG9ydGFudCB9XG4ubGl2ZWNoYXQtZ2lybC5hbmltYXRpb24tc3RvcHBlZCAuY2lyY2xlIHsgb3BhY2l0eTogMCFpbXBvcnRhbnQgfVxuLmxpdmVjaGF0LWdpcmwgLmxpdmVjaGF0LWhpbnQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiA0MHB4OyB0b3A6IDUwJTsgbWFyZ2luLXRvcDogLTIwcHg7IG9wYWNpdHk6IDA7IHotaW5kZXg6IDA7IC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjg2LCAwLCAuMDcsIDEpOyB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguODYsIDAsIC4wNywgMSkgfVxuLmxpdmVjaGF0LWdpcmwgLmxpdmVjaGF0LWhpbnQuc2hvd19oaW50IHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpOyBvcGFjaXR5OiAxIH1cbi5saXZlY2hhdC1naXJsIC5saXZlY2hhdC1oaW50LmhpZGVfaGludCB7IG9wYWNpdHk6IDA7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgfVxuLmxpdmVjaGF0LWdpcmwgLmxpdmVjaGF0LWhpbnQucmQtbm90aWNlLXRvb2x0aXAgeyBtYXgtd2lkdGg6IDEyOTZweCFpbXBvcnRhbnQgfVxuLmxpdmVjaGF0LWdpcmwgLmxpdmVjaGF0LWhpbnQucmQtbm90aWNlLXRvb2x0aXAgLnJkLW5vdGljZS1jb250ZW50IHsgd2lkdGg6IGF1dG87IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIH1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNTk5cHgpIHtcbi5saXZlY2hhdC1naXJsIC5saXZlY2hhdC1oaW50LnJkLW5vdGljZS10b29sdGlwIHsgbWF4LXdpZHRoOiAxMDYwcHghaW1wb3J0YW50IH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMzA5cHgpIHtcbi5saXZlY2hhdC1naXJsIC5saXZlY2hhdC1oaW50LnJkLW5vdGljZS10b29sdGlwIHsgbWF4LXdpZHRoOiA5ODRweCFpbXBvcnRhbnQgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjRweCkge1xuLmxpdmVjaGF0LWdpcmwgLmxpdmVjaGF0LWhpbnQucmQtbm90aWNlLXRvb2x0aXAgeyBtYXgtd2lkdGg6IDYwMHB4IWltcG9ydGFudCB9XG59XG4ucmQtbm90aWNlLXRvb2x0aXAgeyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4yKTsgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjIpOyBmb250LXNpemU6IDE0cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgbGluZS1oZWlnaHQ6IDEuMjU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNjU7IG1heC13aWR0aDogMzUwcHg7IG9wYWNpdHk6IDEgfVxuLnJkLW5vdGljZS10b29sdGlwOmFmdGVyIHsgcG9zaXRpb246IGFic29sdXRlOyBkaXNwbGF5OiBibG9jazsgY29udGVudDogJyc7IGhlaWdodDogMjBweDsgd2lkdGg6IDIwcHg7IC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgYm94LXNoYWRvdzogbm9uZTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDsgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7IGJvcmRlci1yYWRpdXM6IDNweDsgei1pbmRleDogNTAgfVxuLnJkLW5vdGljZS10b29sdGlwIC5yZC1ub3RpY2UtY29udGVudCB7IGJhY2tncm91bmQ6IDA7IGJvcmRlci1yYWRpdXM6IDNweDsgd2lkdGg6IDEwMCU7IGNvbG9yOiAjZmZmOyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDYwOyBwYWRkaW5nOiAyMHB4OyBmb250LXdlaWdodDogNDAwOyBsaW5lLWhlaWdodDogMS40NSB9XG4ucmQtbm90aWNlLXR5cGUtc3VjY2VzcyB7IGJhY2tncm91bmQtY29sb3I6ICMyNmM3ZmM7IC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMzgsMTk5LDI1MiwuMik7IGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDM4LDE5OSwyNTIsLjIpIH1cbi5yZC1ub3RpY2UtdHlwZS1zdWNjZXNzIC5yZC1ub3RpY2UtY29udGVudCB7IGJhY2tncm91bmQtY29sb3I6ICMyNmM3ZmMgfVxuLnJkLW5vdGljZS10eXBlLXN1Y2Nlc3M6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZjN2ZjOyAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDM4LDE5OSwyNTIsLjIpOyBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgzOCwxOTksMjUyLC4yKSB9XG4ucmQtbm90aWNlLXBvc2l0aW9uLWxlZnQgeyBtYXJnaW4tbGVmdDogLTIwcHggfVxuLnJkLW5vdGljZS1wb3NpdGlvbi1sZWZ0OmFmdGVyIHsgcmlnaHQ6IC02cHg7IHRvcDogNTAlOyBtYXJnaW4tdG9wOiAtMTBweCB9XG4ucmQtbm90aWNlLXRvb2x0aXAuc2luZ2xlLWxpbmUgLnJkLW5vdGljZS1jb250ZW50IHsgaGVpZ2h0OiA0MHB4OyBwYWRkaW5nOiAwIDIwcHg7IGxpbmUtaGVpZ2h0OiA0MHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwIH1cbi5naXJse2JvcmRlci1yYWRpdXM6IDUwJTstd2Via2l0LWFuaW1hdGlvbjpydW4gNnMgY3ViaWMtYmV6aWVyKDAuODIsIDAuMTEsIDAuNDYsIDAuOTgpIDBzIGluZmluaXRlOyAgfVxuLmdpcmw6aG92ZXJ7IC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkOyB9IEAtd2Via2l0LWtleWZyYW1lcyBydW57ICBmcm9teyAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7IH0gdG97IC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOyAgfSB9XG5gKTtcblxuLy/lhazlhbHmlYjmnpxcbkdNX2FkZFN0eWxlKGBcbiAgICAgICNhcHB7XG4gICAgICAgIG1pbi13aWR0aDo1MzlweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICB9XG4gICAgICAuaGlzdG9yeS1xdWVzdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTpub25lXG4gICAgICB9XG4gICAgICAuaGlzdG9yeS1xdWVzdGlvbnN7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGE7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI5MXB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyOTFweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuICAgIC5kLW5vbmV7XG4gICAgICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxheXVpLWxheWVyLWNvbnRlbnQgLmQtbm9uZXtcbiAgICAgIGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG5gKTtcblxuLy/pgLvovpHku6PnoIFcbi8v5re75Yqg5YWD57SgXG5sZXQgY2hhdEFpID0gYDxkaXYgY2xhc3M9XCJsaXZlY2hhdC1naXJsIGFuaW1hdGVkXCI+IFxuICAgICAgICA8aW1nIGNsYXNzPVwiZ2lybFwiIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBTUFBQUJFcElyR0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQUgxVUV4VVJVeHBjWGVxbjNXcW5IV29uSFNwbkhXb25IV3BuRzIya25XcG5IV3BuSFNtbTNhcG0zU3BuSFdvbkhXcG5IU29uSFdwbkhXcG0zYXBuWFdwbkhXcG0zV3BuUC8vLzhmYzE5Zm00M21ybjY3TnhmNy8vL3I4KzZIRnZOUGs0SlM4c3NYYjFYaXJuc0RZMHNQYTFQajcrcWJIdjVpL3RYZXFudno5L1g2dW9vNjVyb3EycStUdTdQMysvcXJLd3FERXU5Ym00dlAzOXFmSXdQdjkvTlhsNGV6ejhYcXNuK254NzNtc241L0R1c25kMk43cTU5enA1cEM2cjRDd3BLTEZ2SU94cHN6ZjJvU3lwc1RhMWZuNysvUDQ5dC9yNkpyQXQ4TFoxTC9YMGQzcTUzYXFuY3pmMjg3aDNJZTBxYzdnM1ByOC9MVFF5YkRPeHB2QnVPYnY3Yy9oM1BYNStPcnk4T0RyNk9QdDY1RzdzTG5UellXenAvbjcrb2kxcXY3Ky90VGs0SjdDdWN2ZTJaM0N1YjdYMEgrdm84TFowNTNDdUtuSndmZjYrdG5uNC8zKy9mRDI5WHl0b1lXenFKZSt0SmErdEhhcG5IZXFuYUhFdTh2ZjJvR3hwYXpMdzN1dG9NcmUyWlc5czdYUnl1LzE5SDJ1b3UvMTg2WEh2NmpKd05EaTNzamQyT0x0NnUzMDh1Znc3dGZtNHJqVHpLM014T2p3N3R2cDVkSGkzc2pkMTVtL3R2TDM5cS9OeHZiNStPUHU2NHkzcklPeXB0bm41TGJTeStEczZlSHM2dGJsNGNIWjAvdjgvSDZ2bzRHd3BaN0R1cy9oM2ZiNitaSzdzZlQ0OS9mNithTEZ2YXZMdzZ6THhNM2cyOGJjMXBRTGYyUUFBQUFWZEZKT1V3QXR2NWJ6MVBRSC9kVXVqNVdRL0N5WXdKSHlrcUtFR1A4QUFBQUpjRWhaY3dBQUFIWUFBQUIyQVU1N0pnZ0FBQUljU1VSQlZEakxoZE5sZTlzd0VBQmdGZEswS3c3dUhNZnA2aVRlQWtzYVRocG9VbVp1VjF4NXpNeGJ4OHdNN1hqN25aTmp4L0wyck5sOWtYUjZINTFzbndtaHNXRlRXUW44RlNXR3lnS2loTEdtRlA0WnBVWEc3UDVHV0RjS1pWRURlYUtDMW1mbkh4VXZvU1YxOVlRT1ZGV1RMZHBpVWZKMlBPeC9qT0V6QXk0dFdVN0tjdFBHOTVGcE9qVDBJQTJQVDgwYVNIRU9wS1E1bVNVeElBN2JEMk96STV2ZFROVHQxUVhCRHZBeE1ULzdxa0UraDhQZHlvWUMrRFgwWWdZeVg0VytGd0J1bnFZT2hwcDBZQWwvMWVOMjJPcjVEUEQ4SmQ2c0JUaU9aZ1lhOFNmVXlzQU1IK3dXVy9BSzNuZGJVV1JBREtVVk1HSWV4MVlyUkdjczN1dll4Y0N6S1ZDQUpUYjY2RlpzRkdEWFRnSFBNakQyV2dXY0ZlQ2tIZC91b09zaGowTUQxNlFvTE9JMitRNDA2aWZwUFhoNGdpc2FPSVhENEppWlhVb3F3QVJ4L0FiODB6QjdUSk16bUsxN25yNEJLMmVDT25vY0pHTU1CQkg5dE82RnFZaHZlVUpTd1pzeEJycFJERGx0bDZHM0c3LzgrSzZBdExPWkFSdTY1aFl3Y0xmTDhzNGwzMEVHQ1R6R3dINk1BM1Rldzl1MFRwMUhCbVlPVCt1K3haNjJubDRBQjkxdUdSUStaV0FaNTNIUXFnTXdnbjNuNkJDOTArYmwwbkxKQjUxcUgrUWFwaFVEM0VXdUhWTnV1aGlRd2xyUGFTM242emhFVysyRzNJM1RrU0UzQTVYYWxHODYwby9qL3NTa2NHQWY2MnRTOE1kdkZmZTNPeWYydHVneWhCUkIzcUMvWHVGL0FERldWT1VIaEZTWEc0clhBNzhCWWJpTEpEVVhxc01BQUFCWGVsUllkRkpoZHlCd2NtOW1hV3hsSUhSNWNHVWdhWEIwWXdBQWVKemo4Z3dJY1ZZb0tNcFB5OHhKNVZJQUF5TUxMbU1MRXlNVFM1TVVBeE1nUklBMHcyUURJN05VSU12WTFNakV6TVFjeEFmTGdFaWdTaTRBNmhjUmRQSkNOWlVBQUFBQVNVVk9SSzVDWUlJPVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZWNoYXQtaGludCByZC1ub3RpY2UtdG9vbHRpcCByZC1ub3RpY2UtdHlwZS1zdWNjZXNzIHJkLW5vdGljZS1wb3NpdGlvbi1sZWZ0IHNpbmdsZS1saW5lIGhpZGVfaGludFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZC1ub3RpY2UtY29udGVudFwiPuWYv++8jENoYXRHUFTmnaXluK7mgqjvvIE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbmltYXRlZC1jaXJjbGVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZSBjLTFcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlIGMtMlwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUgYy0zXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcblxuJChcImJvZHlcIikuYXBwZW5kKGNoYXRBaSk7XHRcblxuY29uc3QgbWFpbkVsID0gYDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgPGVsLWNhcmQgY2xhc3M9XCJib3gtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1pbnB1dC1zdWZmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbW8taW5wdXQtc3VmZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBpZD1cImNoYXQtYW5zd2VyXCIgY2xhc3M9XCJtYXJrZG93bi1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbC1lbXB0eSB2LXNob3c9XCJlbXB0eVJlY29yZFwiIGRlc2NyaXB0aW9uPVwi5pqC5peg6K6w5b2VXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWwtZW1wdHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiIWVtcHR5UmVjb3JkXCIgY2xhc3M9XCJoaXN0b3J5LXF1ZXN0aW9uc1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWGheWuuVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwieW91cl9xdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0eXBlaXQtYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2hhdC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWwtYnV0dG9uIHNsb3Q9XCJhcHBlbmRcIiBpZD1cImNoYXQtc2VhcmNoXCIgQGNsaWNrPVwieW91cl9xdXMgIT09ICcnID8gZG9JdCgpIDogJydcIiB0eXBlPVwicHJpbWFyeVwiIGljb249XCJlbC1pY29uLXMtcHJvbW90aW9uXCI+Y2hhdOS4gOS4izwvZWwtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWwtaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2VsLWNhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcblxuJChcImJvZHlcIikuYXBwZW5kKG1haW5FbCk7XG5cbi8v5Yqg5a+G5Luj56CBXG4vL2VuYy1zdGFydFxuYXN5bmMgZnVuY3Rpb24gZGlnZXN0TWVzc2FnZShyKSB7XG4gIGNvbnN0IGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYocik7XG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5IZXgpO1xufVxuXG5jb25zdCBnZW5lcmF0ZVNpZ25hdHVyZSA9IGFzeW5jIHIgPT4ge1xuICBjb25zdCB7XG4gICAgdDogZSxcbiAgICBtOiB0XG4gIH0gPSByO1xuICBjb25zdCBuID0ge30uUFVCTElDX1NFQ1JFVF9LRVk7XG4gIGNvbnN0IGEgPSBgJHtlfToke3R9OiR7bn1gO1xuICByZXR1cm4gYXdhaXQgZGlnZXN0TWVzc2FnZShhKTtcbn07XG4vL2VuYy1lbmRcblxuLy/nhKbngrnlh73mlbBcbmZ1bmN0aW9uIGlzQmx1cigpIHtcbiAgdmFyIG15SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1pbnB1dCcpO1xuICBpZiAobXlJbnB1dCA9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgcmV0dXJuIDFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59XG5cbi8vRW50ZXLplK7op6blj5HmkJzntKJcbmZ1bmN0aW9uIGtleUV2ZW50KCkge1xuICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBrZXlOdW0gPSB3aW5kb3cuZXZlbnQgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuICAgIGlmICgxMyA9PSBrZXlOdW0pIHtcbiAgICAgIGlmIChpc0JsdXIoKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1zZWFyY2gnKS5jbGljaygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWkseeEpuS4jeaJp+ihjFwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL21k6L2s5o2iXG5mdW5jdGlvbiBtZENvbnZlcnRlcihyYXdEYXRhKSB7XG4gIHZhciBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7IC8v5aKe5Yqg5ouT5bGVdGFibGVcbiAgY29udmVydGVyLnNldE9wdGlvbigndGFibGVzJyxcbiAgICB0cnVlKTsgLy/lkK/nlKjooajmoLzpgInpobnjgILku45zaG93ZG93biAxLjIuMOeJiOW8gOWni++8jOihqOaUr+aMgeW3suS9nOS4uuWPr+mAieWKn+iDveenu+WFpeaguOW/g+aLk+Wxle+8jHNob3dkb3duLnRhYmxlLm1pbi5qc+aJqeWxleW3suiiq+W8g+eUqFxuICB2YXIgdmlldyA9IGNvbnZlcnRlci5tYWtlSHRtbChyYXdEYXRhKTtcbiAgcmV0dXJuIHZpZXc7XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuXG4gIC8v5byA5ZCv5a6a5pe254m55pWIXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0aWYoJChcIi5hbmltYXRlZC1jaXJjbGVzXCIpLmhhc0NsYXNzKFwiYW5pbWF0ZWRcIikpe1xuXHRcdFx0JChcIi5hbmltYXRlZC1jaXJjbGVzXCIpLnJlbW92ZUNsYXNzKFwiYW5pbWF0ZWRcIik7XG5cdFx0fWVsc2V7XG5cdFx0XHQkKFwiLmFuaW1hdGVkLWNpcmNsZXNcIikuYWRkQ2xhc3MoJ2FuaW1hdGVkJyk7XG5cdFx0fVxuXHR9LDMwMDApO1xuXHR2YXIgd2FpdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG5cdFx0JChcIi5saXZlY2hhdC1oaW50XCIpLnJlbW92ZUNsYXNzKFwic2hvd19oaW50XCIpLmFkZENsYXNzKFwiaGlkZV9oaW50XCIpO1xuXHRcdGNsZWFySW50ZXJ2YWwod2FpdCk7XG5cdH0sNDUwMCk7XG5cdCQoXCIubGl2ZWNoYXQtZ2lybFwiKS5ob3ZlcihmdW5jdGlvbigpe1xuXHRcdC8vY29uc29sZS5sb2coXCJob3Zlci4uLi4uLi5cIik7XG5cdFx0Y2xlYXJJbnRlcnZhbCh3YWl0KTtcblx0XHQkKFwiLmxpdmVjaGF0LWhpbnRcIikucmVtb3ZlQ2xhc3MoXCJoaWRlX2hpbnRcIikuYWRkQ2xhc3MoXCJzaG93X2hpbnRcIik7XG5cdH0sZnVuY3Rpb24oKXtcblx0XHQvL2NvbnNvbGUubG9nKFwidW5ob3Zlci4uLi4uLi5cIik7XG5cdFx0JChcIi5saXZlY2hhdC1oaW50XCIpLnJlbW92ZUNsYXNzKFwic2hvd19oaW50XCIpLmFkZENsYXNzKFwiaGlkZV9oaW50XCIpO1xuXHR9KS5jbGljayhmdW5jdGlvbigpe1xuXHRcdC8vY29uc29sZS5sb2coXCJjbGljay4uLi4uLi5cIik7XG4gICAgbGF5ZXIub3Blbih7XG4gICAgICB0aXRsZTogXCLmraPlnKjlkoxDaGF0R1BU5rKf6YCa5LitLi4uXCIsXG4gICAgICB0eXBlOiAxLFxuICAgICAgbWF4bWluOiB0cnVlLFxuICAgICAgc2hhZGU6IDAsXG4gICAgICBzaGFkZUNsb3NlOiBmYWxzZSxcbiAgICAgIGFuaW06IDEsXG4gICAgICBvZmZzZXQ6ICdyYicsXG4gICAgICBhcmVhOiBbJzUzOXB4JywgJzQ0NXB4J10sXG4gICAgICBjb250ZW50OiAkKCcjYXBwJylcbiAgICB9KTtcblx0fSk7XG5cbiAga2V5RXZlbnQoKTtcbn0pO1xuXG4vL3Z1ZeebuOWFs+eahOWunuS+i1xubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIGRhdGE6IHtcbiAgICBtZXNzYWdlOiAnSGVsbG8gQ2hhdEdQVCAhJyxcbiAgICBlbXB0eVJlY29yZDogdHJ1ZSxcbiAgICB5b3VyX3F1czogXCJcIixcbiAgICBjaGF0VVJMOlwiaHR0cHM6Ly9jaGF0Zm9yYWkuY2MvYXBpL2dlbmVyYXRlXCIsXG4gICAgd2FpdFdvcmQ6XCLmraPlnKjmkJzntKLkuK0uLi7kuLrkuobpmLLmraLmgqjmiZPnnoznnaHvvIzkuIvpnaLor7fmgqjmrKPotY/kuIDmrrXkvJjnvo7nmoTlj6XlrZDvvJpcIixcbiAgICB0aWFuZGFvV29yZHM6W1xuICAgICAgXCLov5nlsLHmmK/lnIbono3kuJbmlYXvvIzkuI3mmL7lsbHkuI3pnLLmsLTvvIzlkITlvpflhbbmiYDjgILlj6/lk4HooYzov5nkuKrkuJzopb/ku4rlpKnnvLrkuKrop5LvvIzmmI7lpKnoo4LkuKrnvJ3vvIzkuZ/lsLHnprvlnY3pmbfkuI3ov5zkuobjgILigJTigJTigJTigJTigJTigJTjgIrlpKnpgZPjgItcIixcbiAgICAgIFwi6KaB5oOz5YGa54K55LqL77yM5Yir5oqK6Ieq5bex5aSq5b2T5Lq677yM5Yir5oqK5Yir5Lq65LiN5b2T5Lq644CC4oCU4oCU4oCU4oCU4oCU4oCU44CK5aSp6YGT44CLXCIsXG4gICAgICBcIuWls+S6uuaYr+W9ouW8j+mAu+i+keeahOWFuOiMg++8jOaYr+i+qeivgemAu+i+keeahOmanOeije+8jOaIkeaXoOaEj+aRp+aui+Wls+S6uu+8jOS5n+S4jeaDs+iiq+Wls+S6uuaRp+aui+OAguKAlOKAlOKAlOKAlOKAlOKAlOOAiuWkqemBk+OAi1wiLFxuICAgICAgXCLov5nlsLHmmK/lnIbono3kuJbmlYXvvIzkuI3mmL7lsbHkuI3pnLLmsLTvvIzlkITlvpflhbbmiYDjgILlj6/lk4HooYzov5nkuKrkuJzopb/ku4rlpKnnvLrkuKrop5LvvIzmmI7lpKnoo4LkuKrnvJ3vvIzkuZ/lsLHnprvlnY3pmbfkuI3ov5zkuobjgILigJTigJTigJTigJTigJTigJTjgIrlpKnpgZPjgItcIixcbiAgICAgIFwi552A55u45LqG77yM5L2b5pWZ5b6X5LiA5Liq5pyv6K+t77yM5oSP5oCd5piv5omn6L+35LqO6KGo6LGh6ICM5YGP56a75pys6LSo44CC4oCU4oCU4oCU4oCU4oCU4oCU44CK5aSp6YGT44CLXCIsXG4gICAgICBcIuS9m+ivtO+8jOeci+WxseaYr+Wxse+8jOeci+awtOaYr+awtOOAguaIkeWPquaYr+S+neS9m+azleWmguWunuingueFp++8jOeci+aRqeeZu+Wls+mDjuaYr+aRqeeZu+Wls+mDju+8jOeci+e6ouminOefpeW3seaYr+e6ouminOefpeW3seOAguKAlOKAlOKAlOKAlOKAlOKAlOOAiuWkqemBk+OAi1wiLFxuICAgICAgXCLlvZPmnInkurrnrJHor53ogLbnqKPmmK/lgrvlrZDnmoTml7blgJnvvIzlhbblrp7osIHpg73kuI3lgrvvvIzku4Xku4XmmK/kuKTnp43ku7flgLzop4LkuI3lhbzlrrnjgILigJTigJTigJTigJTigJTigJTjgIrlpKnpgZPjgItcIixcbiAgICAgIFwi54G16a2C5b2S5a6/5oSf77yMIOi/meaYr+S6uuaAp+acrOiDveeahOmcgOimge+8jOaYr+S6uuaAp+S9oOW4ruS7luaJvuWdl+W5suWHgOeahOWcsOaWueW9kuWuv+eBtemtguOAguKAlOKAlOKAlOKAlOKAlOKAlOOAiuWkqemBk+OAi1wiLFxuICAgICAgXCLlpoLmnpzmiJHlrZ3pobrnmoTlj6PnopHmmK/ku6XmiJHniLbkurLnmoTnl5voi6blkozlsIrkuKXkuLrmnaHku7bnmoTor53vvIzpgqPov5nmoLfnmoTlj6PnopHmiJHmg4XmhL/kuI3opoHjgILigJTigJTigJTigJTigJTigJTjgIrlpKnpgZPjgItcIixcbiAgICAgIFwi5LuO5b+D55CG5a2m55qE6KeS5bqm5YiG5p6Q77yM6LaK5piv5aS06ISR566A5Y2V55qE5Lq66LaK5piv6ZyA6KaB54K557yA5ZKM5aGr5YWF77yM6ICM5aS06ISR5aSN5p2C55qE5Lq65YiZ5a+5566A5rSB5pyJ552A54m55q6K55qE5b+D55CG6ZyA5rGC44CC4oCU4oCU4oCU4oCU4oCU4oCU44CK5aSp6YGT44CLXCIsXG4gICAgICBcIuW8uuWKv+aWh+WMluWwseaYr+mBteW+quS6i+eJqeinhOW+i+eahOaWh+WMlu+8jOW8seWKv+aWh+WMluWwseaYr+S+nei1luW8uuiAheeahOmBk+W+t+acn+acm+egtOagvOiOt+WPlueahOaWh+WMlu+8jOS5n+aYr+acn+acm+aVkeS4u+eahOaWh+WMluOAguKAlOKAlOKAlOKAlOKAlOKAlOOAiuWkqemBk+OAi1wiLFxuICAgICAgXCLkuI3lm6DkuIrlpKnloILkuI7kuIvlnLDni7HnmoTlm6DmnpzlhbPns7vogIzlhbfmnInnmoTmnoHpq5jkurrnlJ/looPnlYzvvIzlsLHmmK/nqoTpl6jjgILigJTigJTigJTigJTigJTigJTjgIrlpKnpgZPjgItcIixcbiAgICAgIFwi5Lyg57uf5paH5YyW5q+V56uf5piv5Lul55qH5oGp5rWp6I2h5Li65YWI5Yaz5p2h5Lu255qE5paH5YyW77yM6K6y55qE6YO95piv55qG56m644CB5peg5Li644CB5Lit5bq455qE55CG77yM5Lul5oqR5Yi25Liq5oCn6ICM5rGC55Sf5rGC6Kej44CC4oCU4oCU4oCU4oCU4oCU4oCU44CK5aSp6YGT44CLXCIsXG4gICAgICBcIuWkqeS4i+S5i+mBk+iuuuWIsOaegeiHs++8jOeZvuWnk+eahOaftOexs+ayueebkO+8m+S6uueUn+WGt+aaluiuuuWIsOaegeiHs++8jOeUt+S6uuWSjOWls+S6uueahOS4gOS4quaDheWtl+OAguKAlOKAlOKAlOKAlOKAlOKAlOOAiuWkqemBk+OAi1wiXG4gICAgXVxuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1c2VyV2FpdCgpIHtcbiAgICAgICQoXCIuaGlzdG9yeS1xdWVzdGlvbnNcIikuaHRtbCgnJyk7XG4gICAgICBsZXQgcmFkb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGlhbmRhb1dvcmRzLmxlbmd0aCk7XG4gICAgICAkKFwiLmhpc3RvcnktcXVlc3Rpb25zXCIpLnR5cGVJdCh7XG4gICAgICAgIHdoYXRUb1R5cGU6IHRoaXMud2FpdFdvcmQgKyB0aGlzLnRpYW5kYW9Xb3Jkc1tyYWRvbUluZGV4XSxcbiAgICAgICAgdHlwZVNwZWVkOiAyMDBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkb0l0KCkge1xuICAgICAgdGhpcy5lbXB0eVJlY29yZCA9IGZhbHNlO1xuICAgICAgLy/liqDovb3kuK3nrYnlvoXmlYjmnpxcbiAgICAgIHRoaXMudXNlcldhaXQoKTtcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICBnZW5lcmF0ZVNpZ25hdHVyZSh7XG4gICAgICAgIHQ6IG5vdyxcbiAgICAgICAgbTogdGhpcy55b3VyX3F1cyB8fCBcIlwiXG4gICAgICB9KS50aGVuKHNpZ24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzaWduKVxuICAgICAgICBHTV94bWxodHRwUmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICB1cmw6IHRoaXMuY2hhdFVSTCxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFt7XG4gICAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnlvdXJfcXVzXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHRpbWU6IG5vdyxcbiAgICAgICAgICAgIHBhc3M6IG51bGwsXG4gICAgICAgICAgICBzaWduOiBzaWduLFxuICAgICAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICAgICAgdXNhZ2U6IDBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbmxvYWQ6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgbGV0IHJlc3QgPSByZXMucmVzcG9uc2VcbiAgICAgICAgICAgICAgJChcIi5oaXN0b3J5LXF1ZXN0aW9uc1wiKS5odG1sKCcnKTtcbiAgICAgICAgICAgICAgbGV0IGNvbnZlcnRWYWx1ZSA9IGAke21kQ29udmVydGVyKHJlc3QucmVwbGFjZUFsbCgvXFxcXG4rL2csXCJcXG5cIikpfWA7XG4gICAgICAgICAgICAgICQoXCIuaGlzdG9yeS1xdWVzdGlvbnNcIikuaHRtbChjb252ZXJ0VmFsdWUpXG4gICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKFwiLmhpc3RvcnktcXVlc3Rpb25zXCIpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAkKFwiLmhpc3RvcnktcXVlc3Rpb25zXCIpLnR5cGVJdCh7XG4gICAgICAgICAgICAgICAgd2hhdFRvVHlwZTogW1wi6K6/6Zeu5aSx6LSl5LqGXCJdLFxuICAgICAgICAgICAgICAgIHR5cGVTcGVlZDogMTBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIixcbiAgICAgICAgICBvbnByb2dyZXNzOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAkKFwiLmhpc3RvcnktcXVlc3Rpb25zXCIpLmh0bWwoJycpO1xuICAgICAgICAgICAgJChcIi5oaXN0b3J5LXF1ZXN0aW9uc1wiKS50eXBlSXQoe1xuICAgICAgICAgICAgICB3aGF0VG9UeXBlOiBbYCR7ZXJyLm1lc3NhZ2VzfWBdLFxuICAgICAgICAgICAgICB0eXBlU3BlZWQ6IDEwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb250aW1lb3V0OiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAkKFwiLmhpc3RvcnktcXVlc3Rpb25zXCIpLnR5cGVJdCh7XG4gICAgICAgICAgICAgIHdoYXRUb1R5cGU6IFtgJHtlcnIubWVzc2FnZXN9YF0sXG4gICAgICAgICAgICAgIHR5cGVTcGVlZDogMTBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSkiXSwibmFtZXMiOlsiJCIsImFwcGVuZCIsIkdNX2FkZFN0eWxlIiwiY2hhdEFpIiwibWFpbkVsIiwiZGlnZXN0TWVzc2FnZSIsInIiLCJoYXNoIiwiQ3J5cHRvSlMiLCJTSEEyNTYiLCJ0b1N0cmluZyIsImVuYyIsIkhleCIsImdlbmVyYXRlU2lnbmF0dXJlIiwidCIsImUiLCJtIiwibiIsIlBVQkxJQ19TRUNSRVRfS0VZIiwiYSIsImlzQmx1ciIsIm15SW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlRWxlbWVudCIsImtleUV2ZW50Iiwib25rZXlkb3duIiwia2V5TnVtIiwid2luZG93IiwiZXZlbnQiLCJrZXlDb2RlIiwid2hpY2giLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJtZENvbnZlcnRlciIsInJhd0RhdGEiLCJjb252ZXJ0ZXIiLCJzaG93ZG93biIsIkNvbnZlcnRlciIsInNldE9wdGlvbiIsInZpZXciLCJtYWtlSHRtbCIsInNldEludGVydmFsIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwid2FpdCIsImNsZWFySW50ZXJ2YWwiLCJob3ZlciIsImxheWVyIiwib3BlbiIsInRpdGxlIiwidHlwZSIsIm1heG1pbiIsInNoYWRlIiwic2hhZGVDbG9zZSIsImFuaW0iLCJvZmZzZXQiLCJhcmVhIiwiY29udGVudCIsIlZ1ZSIsImVsIiwiZGF0YSIsIm1lc3NhZ2UiLCJlbXB0eVJlY29yZCIsInlvdXJfcXVzIiwiY2hhdFVSTCIsIndhaXRXb3JkIiwidGlhbmRhb1dvcmRzIiwibWV0aG9kcyIsInVzZXJXYWl0IiwiaHRtbCIsInJhZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ0eXBlSXQiLCJ3aGF0VG9UeXBlIiwidHlwZVNwZWVkIiwiZG9JdCIsIm5vdyIsIkRhdGUiLCJ0aGVuIiwic2lnbiIsIkdNX3htbGh0dHBSZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlcyIsInJvbGUiLCJ0aW1lIiwicGFzcyIsImtleSIsInVzYWdlIiwib25sb2FkIiwicmVzIiwic3RhdHVzIiwicmVzdCIsInJlc3BvbnNlIiwiY29udmVydFZhbHVlIiwicmVwbGFjZUFsbCIsImhsanMiLCJoaWdobGlnaHRBbGwiLCJyZXNwb25zZVR5cGUiLCJvbnByb2dyZXNzIiwibXNnIiwib25lcnJvciIsImVyciIsIm9udGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7RUFDQTtFQUNBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDLDJHQUEyRyxDQUFDLENBQUMsQ0FBQTtFQUNoSUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNELENBQUMsQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDLENBQUE7RUFDNUdBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxDQUFDLENBQUMscUhBQXFILENBQUMsQ0FBQyxDQUFBO0VBQzFJQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDLGtIQUFrSCxDQUFDLENBQUMsQ0FBQTtFQUN2STtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQUUsV0FBVyxDQUFFLENBQUE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLENBQUE7O0VBRUY7RUFDQUEsV0FBVyxDQUFFLENBQUE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxDQUFBOztFQUVGO0VBQ0FBLFdBQVcsQ0FBRSxDQUFBO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsQ0FBQTs7RUFFRjtFQUNBO0VBQ0EsSUFBSUMsTUFBTSxHQUFJLENBQUE7QUFDZDtBQUNBO0FBQ0E7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
