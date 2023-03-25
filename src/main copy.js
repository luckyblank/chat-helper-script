
//添加样式
//引入css文件
$("head").append($('<link rel="stylesheet" href="https://www.luckyblank.cn/outer/layer-v3.5.1/layer/theme/default/layer.css">'));
$("head").append($('<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">'));
$("head").append($('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css">'));
$("head").append($('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">'));
// height: 400px;
// background-color: #efe9e9;
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
// padding: 10px;
// position: fixed;
// width: 539px;
GM_addStyle(`
      #app{
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
      .s_btn_chat {
        width: 100px;
        height: 34px;
        color: #fff;
        letter-spacing: 1px;
        border-bottom: 1px solid #2d78f4;
        outline: medium;
        -webkit-appearance: none;
        background: #4460d4;
        border-radius: 3px;
        font-size: 14px;
        padding: 0;
        border: 0;
        cursor: pointer;
        position:fixed;
        right:10px;
        top:100px;
    }
    .d-none{
      display:none !important;
    }
    .layui-layer-content .d-none{
      display:block !important;
    }
`);

//逻辑代码
const startBtn = `<button  id="button_GPT" class="create-chat-windows s_btn_chat">chat一下</button>`;
$("body").append(startBtn);

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

                    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
                      <el-table :data="gridData">
                        <el-table-column property="date" label="日期" width="150"></el-table-column>
                        <el-table-column property="name" label="姓名" width="200"></el-table-column>
                        <el-table-column property="address" label="地址"></el-table-column>
                      </el-table>
                    </el-dialog>

                    <!-- Form -->
                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                      <el-form :model="form">
                        <el-form-item label="活动名称" :label-width="formLabelWidth">
                          <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域" :label-width="formLabelWidth">
                          <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      </div>
                    </el-dialog>


                    <el-row style="text-align: center;margin-top: 10px;">
                      <el-button type="success" @click="visible = true">打开对话框</el-button>
                      <el-button type="info" @click="open">打开消息</el-button>
                      <el-button type="warning" @click="dialogTableVisible = true">打开对话框2</el-button>
                      <el-button type="primary" @click="dialogFormVisible = true">打开对话框3</el-button>
    
                    </el-row>


                    <el-dialog :visible.sync="visible" title="Hello world">
                      <p>Try Element</p>
                    </el-dialog>
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
    return 1
  } else {
    return 0
  }
}

//Enter键触发搜索
function keyEvent() {
  document.onkeydown = function(e) {
    var keyNum = window.event ? e.keyCode : e.which;
    if (13 == keyNum) {
      if (isBlur()) {
        document.getElementById('chat-search').click()
      } else {
        console.log("失焦不执行")
      }

    }
  }

}

//md转换
function mdConverter(rawData) {
  var converter = new showdown.Converter(); //增加拓展table
  converter.setOption('tables',
    true); //启用表格选项。从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用
  var view = converter.makeHtml(rawData);
  return view;
}

$(function(){
  keyEvent();
  $("body").on("click",".create-chat-windows",function() {
    layer.open({
    title: "正在和ChatGPT沟通中...",
    type: 1, 
    maxmin: true,
    shade: 0,
    shadeClose: false,
    anim: 1,
    offset: 'rb',
    area: ['auto', '500px'],
    content: $('#app') //这里content是一个普通的String
});
  })
});




//vue相关的实例
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    emptyRecord:true,
    your_qus:"",
    visible: false,
    input1: '',
    input2: '',
    input3: '',
    textarea: '',
    gridData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }],
    dialogTableVisible: false,
    dialogFormVisible: false,
    form: {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    formLabelWidth: '120px'
  },
  methods:{
    open() {

      layer.alert('酷毙了', {icon: 1});

      // this.$alert('这是一段内容', '标题名称', {
      //   confirmButtonText: '确定',
      //   callback: action => {
      //     this.$message({
      //       type: 'info',
      //       message: `action: ${ action }`
      //     });
      //   }
      // });


    },
    userWait(){
      
      $(".history-questions").html('');
      let tiandaoWords = [
        "这就是圆融世故，不显山不露水，各得其所。可品行这个东西今天缺个角，明天裂个缝，也就离坍陷不远了。——————《天道》",
        "要想做点事，别把自己太当人，别把别人不当人。——————《天道》",
        "女人是形式逻辑的典范，是辩证逻辑的障碍，我无意摧残女人，也不想被女人摧残。——————《天道》",
        "这就是圆融世故，不显山不露水，各得其所。可品行这个东西今天缺个角，明天裂个缝，也就离坍陷不远了。——————《天道》",
        "着相了，佛教得一个术语，意思是执迷于表象而偏离本质。——————《天道》",
        "佛说，看山是山，看水是水。我只是依佛法如实观照，看摩登女郎是摩登女郎，看红颜知己是红颜知己。——————《天道》",
        "当有人笑话耶稣是傻子的时候，其实谁都不傻，仅仅是两种价值观不兼容。——————《天道》",
        "灵魂归宿感， 这是人性本能的需要，是人性你帮他找块干净的地方归宿灵魂。——————《天道》",
        "如果我孝顺的口碑是以我父亲的痛苦和尊严为条件的话，那这样的口碑我情愿不要。——————《天道》",
        "从心理学的角度分析，越是头脑简单的人越是需要点缀和填充，而头脑复杂的人则对简洁有着特殊的心理需求。——————《天道》",
        "强势文化就是遵循事物规律的文化，弱势文化就是依赖强者的道德期望破格获取的文化，也是期望救主的文化。——————《天道》",
        "不因上天堂与下地狱的因果关系而具有的极高人生境界，就是窄门。——————《天道》",
        "传统文化毕竟是以皇恩浩荡为先决条件的文化，讲的都是皆空、无为、中庸的理，以抑制个性而求生求解。——————《天道》",
        "天下之道论到极至，百姓的柴米油盐；人生冷暖论到极至，男人和女人的一个情字。——————《天道》"
      ]
      let radomIndex = Math.floor(Math.random() * tiandaoWords.length);
      $(".history-questions").typeIt({
        // whatToType: "正在搜索中...下面请您欣赏一段优美的句子：\n"+tiandaoWords[radomIndex],
        whatToType: "正在搜索中...为了防止您打瞌睡，下面请您欣赏一段优美的句子："+tiandaoWords[radomIndex],
        typeSpeed: 100
      })
      
    },
    doIt(){
      this.emptyRecord = false;

      //加载中等待效果
      this.userWait();

        const now = Date.now();
        console.log(now);
        generateSignature({
          t: now,
          m: this.your_qus || ""
        }).then(sign => {
          console.log(sign)
          GM_xmlhttpRequest({
            method: "POST",
            //url: "https://chat.openai.com/backend-api/conversation",
            url: "https://chatforai.cc/api/generate",
            headers: {
              "Content-Type": "application/json"
              //  Authorization: `Bearer `,
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
            //	data: JSON.stringify({
            //	prompt: "Human:"+your_qus+"\nAI:",
            //		tokensLength: your_qus.length
            //	}),

            onload: function(res) {
              if (res.status === 200) {
                console.log('成功....')
                console.log(res.response)
                let rest = res.response
                $(".history-questions").html('');
                //console.log(rest.choices[0].text.replaceAll("\n","</br>"))

                let convertValue = `${mdConverter(rest.replaceAll(/\\n+/g,"\n"))}`;
                $(".history-questions").html(convertValue)

                // $(".history-questions").typeIt({
                //   whatToType: rest,
                //   typeSpeed: 10
                // })
                

               hljs.highlightAll();
              
              } else {
                console.log('失败')
                console.log(res)
                $(".history-questions").html('');
                $(".history-questions").typeIt({
                  whatToType: ["访问失败了"],
                  typeSpeed: 10
                })
              }
            },

          responseType: "application/json;charset=UTF-8",

            onprogress: function(msg) {
              //console.log(msg) //Todo
            },
            onerror: function(err) {
              $(".history-questions").html('');
              $(".history-questions").typeIt({
                whatToType: [`${err.messages}`],
                typeSpeed: 10
              })
            },
            ontimeout: function(err) {
              $(".history-questions").typeIt({
                whatToType: [`${err.messages}`],
                typeSpeed: 10
              })
            }
          });
        });


    }
  }
})
