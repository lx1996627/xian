<template>
  <div class="goodsdetails">
    <el-row>
      <el-col :span="12" style="width:470px">
        <div class="grid-content bg-purple gl470" style="border:1px solid #dcdcdc">
          <img :src="bigpic" style="width:100%;" alt="详情页大图" />
        </div>
        <el-row :gutter="18" class="goods-small">
          <div v-for="(item,index) in src" :key="item.url">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img
                  :src="item.url"
                  @click="changeImg(index)"
                  style="width:90%;margin-top:20px"
                  alt="详情页大图"
                />
              </div>
            </el-col>
          </div>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light gr670">
          <!-- <div> <h2 style="font-size:24px">{{goodsdetail.goodsname}}</h2></div>
      <div> <h1 style="font-size:28px">{{goodsdetail.goodsprice}}</h1></div>
      <div> <span >{{goodsdetail.goodsinf}}</span></div>
      <div class="gr670-tag">
        <div>相关标签：</div>
        <div v-for="item in goodsdetail.tag" :key="item"><button>{{item}}</button></div>
          </div>-->
          <el-form ref="goodsdetail" :model="form" label-width="80px">
            <el-form-item>
              <h1
                style="height: 40px;
    overflow: hidden;
    font-size: 24px;
    font-weight: 700;
    color: #333"
              >{{goodsdetail.goodsname}}</h1>
            </el-form-item>
            <el-form-item class="goodsdetail-price">
              <label style="font-size:30px;color:#b84339;font-weight: 700;">
                <span>￥{{goodsdetail.goodsprice2}}</span>
              </label>
              <label style=" text-decoration: line-through;">
                <span>原价：{{goodsdetail.goodsprice1}}</span>
              </label>
              <label style="color:#fff;background:#cd823f">
                <span>{{goodsdetail.goodsdiscount}}</span>
              </label>
              <label>
                <span>已售：{{goodsdetail.goodsHadsold}}</span>
              </label>
              <label>
                <span>评价：{{goodsdetail.goodsPingjia}}</span>
              </label>
              <label>
                <span>人气：{{goodsdetail.goodsPeople}}</span>
              </label>
            </el-form-item>
            <el-form-item>
              <ul>
                <li v-for="item in goodsinf" :key="item">
                  <span>{{item}}</span>
                </li>
              </ul>
            </el-form-item>
            <el-form-item>
              <div class="gr670-tag">
                <div>相关标签：</div>
                <div v-for="item in tag" :key="item">
                  <button>{{item}}</button>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <span>购买数量：</span>
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item class="goodsdetail-btn">
              <el-button class="goodsdetail-btn1" @click="goCartTest">立即抢购</el-button>
              <el-button @click="goCart">加入购物车</el-button>
            </el-form-item>
            <div>
              <img width="100%" src="../assets/img/goods/bx.png" alt />
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <!-- 商品评价 -->
    <el-row class="goodsdetail-pingjia">
      <el-col :span="6" style="height:500px">
        <div class="grid-content bg-purple">
          <div class="wl277">
            <!--



<div class="h25"></div>
<div class="box box-rxxh">
	<div class="box-bar"><p class="box-bar-title">热销鲜花</p></div>
	<div class="box-con">
		<ul>
			
			<li>
				<a class="imgbounce" href="/xianhua/44678.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/29c71_56ec.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>爱你久久·99枝红玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>558.00<label>已售1409</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45017.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/282cb_15cbd.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>想念你的味道·33枝红玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>338.00<label>已售1077</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45059.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/2612b_1752e.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>爱情密码·13枝红玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>178.00<label>已售1445</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45641.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/1b3a4_a316.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>情意绵绵·9枝红玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>138.00<label>已售2084</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45045.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/2744a_12ef5.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>让我守护你·19枝粉玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>198.00<label>已售703</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/44694.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/29b06_e279.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>长相厮守·66枝红玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>448.00<label>已售729</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45020.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/28045_d49f.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>远方的守候·12枝粉康乃馨纯美花束</h5>
						<div class="price b"><span>¥</span>138.00<label>已售441</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/44877.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/298ea_29d4.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>撩动我的心·33枝粉玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>358.00<label>已售849</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45061.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/260fe_14ac4.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>浪漫的故事·13枝香槟玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>178.00<label>已售1053</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45647.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/19c9e_34ec.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>携手未来·11枝香槟玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>138.00<label>已售1709</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45635.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/1b5b3_9123.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>我爱你·3枝红玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>88.00<label>已售1455</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
			<li>
				<a class="imgbounce" href="/xianhua/45049.html" title="商品">
					<div class="img"><img src="//www.xian.com/upload/image/2019-06/14/273cb_eafb.jpg" width="84" height="84" /></div>
					<div class="txt">
						<h5>把心交给我·19枝红玫瑰纯美花束</h5>
						<div class="price b"><span>¥</span>198.00<label>已售1207</label></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
		</ul>
	</div>
</div>
<div class="h25"></div>
            -->

            <div class="ad-red-rose">
              <a href="/xianhua/">
                <img src="//www.xian.com/upload/system/2019-08/09/186ce_6ad8.jpg" width="277" />
              </a>
              <div class="h10"></div>
            </div>

            <div class="evaluate-r">
              <div class="evaluate-r-title">24小时热销榜</div>
              <div class="evaluate-r-con">
                <ul>
                  <li>
                    <a href="/xianhua/44678.html" title="爱你久久·99枝红玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/29c71_56ec.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/29c71_56ec.jpg"
                      />
                      <p>爱你久久·99枝红玫瑰纯美花束</p>
                      <p>
                        <span>￥558.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45017.html" title="想念你的味道·33枝红玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/282cb_15cbd.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/282cb_15cbd.jpg"
                      />
                      <p>想念你的味道·33枝红玫瑰纯美花束</p>
                      <p>
                        <span>￥338.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45059.html" title="爱情密码·13枝红玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/2612b_1752e.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/2612b_1752e.jpg"
                      />
                      <p>爱情密码·13枝红玫瑰纯美花束</p>
                      <p>
                        <span>￥178.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45641.html" title="情意绵绵·9枝红玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/1b3a4_a316.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/1b3a4_a316.jpg"
                      />
                      <p>情意绵绵·9枝红玫瑰纯美花束</p>
                      <p>
                        <span>￥138.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45045.html" title="让我守护你·19枝粉玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/2744a_12ef5.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/2744a_12ef5.jpg"
                      />
                      <p>让我守护你·19枝粉玫瑰纯美花束</p>
                      <p>
                        <span>￥198.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/44694.html" title="长相厮守·66枝红玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/29b06_e279.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/29b06_e279.jpg"
                      />
                      <p>长相厮守·66枝红玫瑰纯美花束</p>
                      <p>
                        <span>￥448.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45020.html" title="远方的守候·12枝粉康乃馨纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/28045_d49f.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/28045_d49f.jpg"
                      />
                      <p>远方的守候·12枝粉康乃馨纯美花束</p>
                      <p>
                        <span>￥138.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/44877.html" title="撩动我的心·33枝粉玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/298ea_29d4.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/298ea_29d4.jpg"
                      />
                      <p>撩动我的心·33枝粉玫瑰纯美花束</p>
                      <p>
                        <span>￥358.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45061.html" title="浪漫的故事·13枝香槟玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/260fe_14ac4.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/260fe_14ac4.jpg"
                      />
                      <p>浪漫的故事·13枝香槟玫瑰纯美花束</p>
                      <p>
                        <span>￥178.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45647.html" title="携手未来·11枝香槟玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/19c9e_34ec.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/19c9e_34ec.jpg"
                      />
                      <p>携手未来·11枝香槟玫瑰纯美花束</p>
                      <p>
                        <span>￥138.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45635.html" title="我爱你·3枝红玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/1b5b3_9123.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/1b5b3_9123.jpg"
                      />
                      <p>我爱你·3枝红玫瑰纯美花束</p>
                      <p>
                        <span>￥88.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="/xianhua/45049.html" title="把心交给我·19枝红玫瑰纯美花束">
                      <img
                        data-lazy="//www.xian.com/upload/image/2019-06/14/273cb_eafb.jpg"
                        alt
                        src="//www.xian.com/upload/image/2019-06/14/273cb_eafb.jpg"
                      />
                      <p>把心交给我·19枝红玫瑰纯美花束</p>
                      <p>
                        <span>￥198.00</span>
                        <span></span>
                      </p>
                    </a>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
            <div class="h25"></div>

            <div class="box box-rxxh">
              <div class="box-bar">
                <p class="box-bar-title">鲜花适合对象</p>
              </div>
              <div class="box-hot-con huayu-hot-label">
                <ul class="clearfix">
                  <li>
                    <a href="/xianhua/lr/" title="送恋人">送恋人</a>
                  </li>
                  <li>
                    <a href="/xianhua/py/" title="送朋友">送朋友</a>
                  </li>
                  <li>
                    <a href="/xianhua/hm/" title="送亲人">送亲人</a>
                  </li>
                  <li>
                    <a href="/xianhua/js/" title="送老师">送老师</a>
                  </li>
                  <li>
                    <a href="/xianhua/zb/" title="送长辈">送长辈</a>
                  </li>
                  <li>
                    <a href="/xianhua/kh/" title="送客户">送客户</a>
                  </li>
                  <li>
                    <a href="/xianhua/br/" title="送病人">送病人</a>
                  </li>
                  <li>
                    <a href="/xianhua/hualan/" title="送花篮">送花篮</a>
                  </li>
                  <li>
                    <a href="/xianhua/zuohua/" title="送桌花">送桌花</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="h25"></div>

            <div
              class="autofixed"
              fixed=".wr893"
              style="width: 277px; top: 0px; background-color: rgb(255, 255, 255); overflow: hidden;"
            >
              <div class="box box-rxxh">
                <div class="box-bar">
                  <p class="box-bar-title">鲜花用途</p>
                </div>
                <div class="box-hot-con huayu-hot-label">
                  <ul class="clearfix">
                    <li>
                      <a href="/xianhua/aq/" title="爱情鲜花">爱情鲜花</a>
                    </li>
                    <li>
                      <a href="/xianhua/sr/" title="生日鲜花">生日鲜花</a>
                    </li>
                    <li>
                      <a href="/xianhua/yq/" title="友情鲜花">友情鲜花</a>
                    </li>
                    <li>
                      <a href="/xianhua/zn/" title="周年纪念">周年纪念</a>
                    </li>
                    <li>
                      <a href="/xianhua/hq/" title="婚庆鲜花">婚庆鲜花</a>
                    </li>
                    <li>
                      <a href="/xianhua/zh/" title="祝贺鲜花">祝贺鲜花</a>
                    </li>
                    <li>
                      <a href="/xianhua/tb/" title="探病慰问">探病慰问</a>
                    </li>
                    <li>
                      <a href="/xianhua/wh/" title="问候长辈">问候长辈</a>
                    </li>
                    <li>
                      <a href="/xianhua/sw/" title="商务鲜花">商务鲜花</a>
                    </li>
                    <li>
                      <a href="/xianhua/dq/" title="道歉鲜花">道歉鲜花</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="h25"></div>

              <div class="box box-rxxh">
                <div class="box-bar">
                  <p class="box-bar-title">鲜花销售价</p>
                </div>
                <div class="box-hot-con huayu-hot-label">
                  <ul class="clearfix">
                    <li>
                      <a href="/xianhua/jg0/" title="-149">150元以内</a>
                    </li>
                    <li>
                      <a href="/xianhua/jg1/" title="150-199">150-199元</a>
                    </li>
                    <li>
                      <a href="/xianhua/jg2/" title="200-249">200-249元</a>
                    </li>
                    <li>
                      <a href="/xianhua/jg3/" title="250-399">250-399元</a>
                    </li>
                    <li>
                      <a href="/xianhua/jg4/" title="400-499">400-499元</a>
                    </li>
                    <li>
                      <a href="/xianhua/jg5/" title="500-599">500-599元</a>
                    </li>
                    <li>
                      <a href="/xianhua/jg6/" title="600-699">600-699元</a>
                    </li>
                    <li>
                      <a href="/xianhua/jg7/" title="700-100000">700元以上</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="h25"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div
          class="grid-content bg-purple-light"
          style="margin-left:30px;border:1px solid lightgray"
        >
          <div :class="fixed == true ? 'fixedBtn' :''" class="fixedtabs">
            <div>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane style="font-size:30px" label="商品详情" name="first"></el-tab-pane>
                <el-tab-pane style="font-size:24px" label="用户评价(781)" name="second"></el-tab-pane>
                <el-tab-pane style="font-size:24px" label="购物保障" name="third"></el-tab-pane>
              </el-tabs>
            </div>

            <div
              class="shop-header-but"
              ref="shop-header-but"
              v-show="isShow"
              :class="showed==true ? 'showedbtn' : '' "
            >
              <lable class="sell-val">
                <span>¥{{goodsdetail.goodsprice2}}</span>
              </lable>
              <a href="javascript:;" onclick="openChat();return false;">咨询客服</a>
              <a class="action" href="javascript:;" @click="goCartTest">
                <i></i>立即购买
              </a>
            </div>
          </div>
          <div class="introduce" ref="gotoxq">
            <p>主要花材：6枝香槟玫瑰，6枝白桔梗，3枝小雏菊，0.3扎绿叶，浅蓝色牛皮纸2张，白色字母缎带蝴蝶结</p>
            <p>
              <span>主花材: 玫瑰花 12枝</span>
              <span>花束辅材:3枝小雏菊，0.3扎绿叶</span>
            </p>
            <p>
              <span>花束包装:浅蓝色牛皮纸2张，白色字母缎带蝴蝶结</span>
              <span>适用对象:病人、长辈、老师</span>
            </p>
            <p>
              <span>适用节日:问候长辈 友情鲜花 周年纪念</span>
              <span>花束颜色:白色 香槟</span>
            </p>
          </div>
          <div>
            <div v-for="item in goodsPic" :key="item.url">
              <img :src="item.url" style="width:100%" alt />
            </div>
          </div>
          <div>
            <div style="height:50px;line-height:50px;background:#fafafa" ref="gotopl">
              <h1 style="font-size:18px;margin-left: 20px;font-weight: 700;">用户评价</h1>
            </div>
            <ArticleComment></ArticleComment>
          </div>
          <div>
            <div style="height:50px;line-height:50px;background:#fafafa" ref="gotobz">
              <h1 style="font-size:18px;margin-left: 20px;font-weight: 700;">购物保障</h1>
            </div>
            <div>
              <el-row :gutter="20">
                <el-col :span="6" v-for="item in shopbaozhang.bz1" :key="item.url">
                  <div style="margin:30px 0">
                    <img :src="item.url" alt />
                  </div>
                </el-col>
              </el-row>
            </div>
            <div>
              <img width="100%" src="../assets/img/goods/shopbaozhang11.png" alt />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <Footer></Footer>
    </el-row>
  </div>
</template>

<script>
import ArticleComment from "../components/ArticleComment/ArticleComment";
import Footer from "../components/Footer/footer";
export default {
  name: "goodsdetail",
  data() {
    return {
      tag: ["玫瑰", "鲜花", "浓情", "粉色"],
      goodsinf: [
        "主花材   玫瑰花 桔梗 22枝",
        "绿植工艺  鲜花(鲜切花)",
        "花束辅材  小雏菊，栀子叶，水晶草",
        "花束包装  白色雪梨纸5张，黑白竖条纹蝴蝶结"
      ],
      shopbaozhang: {
        bz1: [
          { url: require("../assets/img/goods/shopbaozhang1.png") },
          { url: require("../assets/img/goods/shopbaozhang2.png") },
          { url: require("../assets/img/goods/shopbaozhang3.png") },
          { url: require("../assets/img/goods/shopbaozhang4.png") }
        ],
        bz2: [
          "../assets/img/goods/shopbaozhang11.png",
          "../assets/img/goods/shopbaozhang22.png",
          "../assets/img/goods/shopbaozhang33.png",
          "../assets/img/goods/shopbaozhang44.png"
        ]
      },
      src: [
        { url: require("../assets/img/goods/goods-test1.1.jpg") },
        { url: require("../assets/img/goods/goods-test1.2.jpg") },
        { url: require("../assets/img/goods/goods-test1.3.jpg") },
        { url: require("../assets/img/goods/goods-test1.4.jpg") }
      ],
      goodsdetail: {
        // goodsname: "永远守护你·19枝苏醒玫瑰韩式花束",
        // goodsprice: "268.00",
        // discount: "8.0折",
        // hadsold: "928",
        // pingjia: "781",
        // count: "3518"
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      num: 1,
      curId: 0,
      fixed: false,
      isShow: false,
      showed: false,
      activeName: "first",
      goodsPic: [
        { id: 1, url: require("../assets/img/goods/goodsdetail001.jpg") },
        { id: 2, url: require("../assets/img/goods/goodsdetail002.jpg") },
        { id: 3, url: require("../assets/img/goods/goodsdetail003.jpg") },
        { id: 4, url: require("../assets/img/goods/goodsdetail004.jpg") },
        { id: 5, url: require("../assets/img/goods/goodsdetail005.jpg") },
        { id: 6, url: require("../assets/img/goods/goodsdetail006.jpg") },
        { id: 7, url: require("../assets/img/goods/goodsdetail007.jpg") },
        { id: 8, url: require("../assets/img/goods/goodsdetail008.jpg") },
        { id: 9, url: require("../assets/img/goods/goodsdetail009.jpg") },
        { id: 10, url: require("../assets/img/goods/goodsdetail0010.jpg") },
        { id: 11, url: require("../assets/img/goods/goodsdetail0011.jpg") },
        { id: 12, url: require("../assets/img/goods/goodsdetail0012.jpg") },
        { id: 13, url: require("../assets/img/goods/goodsdetail0013.jpg") },
        { id: 14, url: require("../assets/img/goods/goodsdetail0014.jpg") },
        { id: 15, url: require("../assets/img/goods/goodsdetail0015.jpg") },
        { id: 16, url: require("../assets/img/goods/goodsdetail0016.jpg") }
      ]
    };
  },
  components: {
    ArticleComment,
    Footer
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 329) {
        this.whether = true;
      } else {
        this.whether = false;
      }
    },
    handleClick(tab, event) {
      if (tab.name == "second") {
        // 触发‘配置管理’事件
        this.second();
      } else if (tab.name == "first") {
        // 触发‘用户管理’事件
        this.first();
      } else {
        this.third();
      }
    },
    changeImg(index) {
      
      this.bigpic=this.src[index].url ;
      console.log(this.bigpic)
    },
    goCart() {
      this.$router.push({
        path: "/car",
        name: "car",
        params: {
          id: this.goodsdetail.goodsID,
          imgPath: this.goodsdetail.src1,
          Price: this.goodsdetail.goodsprice2,
          GoodsName: this.goodsdetail.GoodsName
        }
      });
    },
    goCartTest() {
      this.$router.push({
        path: "/CartTest",
        name: "CartTest",
        component: CartTest,
        params: {
          goods: [
            this.goodsdetail.goodsID,
            this.goodsdetail.src1,
            this.goodsdetail.goodsprice2
          ]
        }
      });
    },
    second() {
      this.$refs["gotopl"].scrollIntoView(true);
    },
    first() {
      this.$refs["gotoxq"].scrollIntoView(true);
    },
    third() {
      this.$refs["gotobz"].scrollIntoView(true);
    },
    fixedActiveBtn() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop >= 640 ? (this.fixed = true) : (this.fixed = false);
    },
    showedActiveBtn() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop >= 640 ? (this.showed = true) : (this.shoewd = false);
      if (scrollTop >= 640) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  created() {
    // this.bigpic=this.src[1].url;
    //  var goodsID=this.$route.params.goodsID;
    var goodsID = 2;
    this.$axios({
      url: "detail",
      params: {
        goodsID
      }
    })
      .then(res => {
        this.goodsdetail = res.data.data[0];
        this.loading = false;
      })
      .catch(err => {
        return err;
      });
  },
  computed: {
    // goodsdetail(){
    //   return[
    //     {goodsname:'永远守护你·19枝苏醒玫瑰韩式花束',
    //     goodsprice:249,
    //     goodsinf:'主花材玫瑰花 桔梗 22枝绿植工艺鲜花(鲜切花)花束辅材0.3扎小雏菊，0.2扎栀子叶，0.2扎水晶草花束包装白色雪梨纸5张，黑白竖条纹蝴蝶结'
    //     },
    //     {tag:['玫瑰','鲜花','浓情','粉色']}
    //   ]
    // }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.fixedActiveBtn);
    window.addEventListener("scroll", this.showedActiveBtn);
  }
};
</script>

<style>
@import "../assets/css/normalize.css";

.goodsdetails {
  width: 1200px;
  margin: 0 100px;
  vertical-align: middle;
}

.gr670 {
  width: 670px;
  border: 1px solid lightgray;
  margin-bottom: 30px;
}
.gr670-tag > div {
  width: 71px;
  float: left;
}
.gr670-tag button {
  padding: 5px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  padding: 0 8px;
  border: 1px solid #d2d2d2;
  background-color: #fff;
  border-radius: 3px;
  color: #777;
}

.goods-small .el-col img {
  border: lightgray 1px solid;
}
.goodsdetail-btn .el-button {
  width: 195px;
  height: 43px;
  /* background:red; */
  color: black;
  margin-bottom: 30px;
}
.goodsdetail-btn .el-button:hover {
  opacity: 0.7;
}
.goodsdetail-btn1 {
  color: #fff;
  background: red;
}
.el-form > h1 {
  height: 30px;
  overflow: hidden;
  font-size: 24px;
  font-weight: 700;
  color: #333;
}
ul {
  overflow: hidden;
}
ul li {
  width: 50%;
  float: left;
}
.el-form label {
  margin-right: 20px;
  height: 80px;
  line-height: 80px;
}

.goodsInf {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid lightgray;
}
.el-tabs .el-tab-pane {
  color: red;
  background: red;
}
.introduce {
  margin: 20px 10px;
  font-size: 20px;
}
.introduce p {
  height: 25px;
  line-height: 25px;
}
.introduce p span {
  display: inline-block;
  width: 45%;
}

.fixedBtn {
  position: fixed;
  background: #fafafa;
  top: 0px;
  left: 431px;
  z-index: 200;
  width: 868px;
}
.shop-header-but {
  overflow: hidden;
  margin-left: 287px;
  /* display: none; */
}
.shop-header-but .sell-val {
  padding: 0 10px;
  line-height: 50px;
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #e70000;
  float: left;
}
.shop-header-but a {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  display: inline-block;
  background-color: #ff8125;
  color: #fff;
  text-align: center;
  float: left;
}
.fixedtabs {
  overflow: hidden;
}
.fixedtabs > div {
  float: left;
}
.wl277 {
  width: 277px;
  /* float: left; */
}
.wl277 .evaluate-r {
  width: 275px;
  float: none;
  background-color: #f9f9f9;
}
.evaluate-r .evaluate-r-con ul {
  display: flex;
  flex-direction: column;
}
</style>
