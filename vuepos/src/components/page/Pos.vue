<template>
  <div class="pos">
    <div>
        <el-row>
            <el-col :span='8' id="order-list">
              <el-tabs>
                <el-tab-pane label="点餐">
                  <el-table :data="tableData" border  style="width:100%;">
                    <el-table-column align="center" prop="goodsName" label="商品名称"></el-table-column>
                    <el-table-column align="center" prop="count" label="数量"></el-table-column>
                    <el-table-column align="center" prop="price" label="金额"></el-table-column>
                    <el-table-column align="center" label="操作" fixed="right">
                     <template scope="scope">
                        <el-button type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="divBtn">
                    <el-button type="warning">挂单</el-button>
                    <el-button type="danger">删除</el-button>
                    <el-button type="success">结账</el-button>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="挂单">

                </el-tab-pane>
                <el-tab-pane label="外卖">

                </el-tab-pane>
              </el-tabs>
            </el-col>
            <!--商品展示-->
            <el-col :span="16">
              <div class="often-goods">
                  <div class="title">常用商品</div>
                  <div class="often-goods-list">
                      <ul>
                          <li @click="addorderlist(goods)" v-for="goods in oftenGoods">
                            <span>{{goods.goodsName}}</span>
                            <span class="o-price">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                  </div>
              </div>
              <el-col :span='24'>
                <el-tabs>
                    <el-tab-pane label="汉堡">
                      <ul class='cookList'>
                          <li v-for="goods in type0Goods1">
                              <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="饮料">
                      <ul class='cookList'>
                          <li v-for="goods in type0Goods2">
                              <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="小食">
                      <ul class='cookList'>
                          <li v-for="goods in type0Goods3">
                              <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="套餐">
                      <ul class='cookList'>
                          <li v-for="goods in type0Goods4">
                              <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-col>
        </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios'

export default {
  name: 'Pos',
  data () {
    return {
      tableData: [],
     oftenGoods:[],
     type0Goods1:[],
     type0Goods2:[],
     type0Goods3:[],
     type0Goods4:[]
    }
  },
  created:function(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(response=>{
       this.oftenGoods=response.data;
    })
      .then(response=>{
       this.oftenGoods=response.data;
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(response=>{
      this.type0Goods1=response.data[0];
      this.type0Goods2=response.data[1];
      this.type0Goods3=response.data[2];
      this.type0Goods4=response.data[3];
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })
  },
  mounted (){
    let orderheight=window.innerHeight;
    document.getElementById('order-list').style.height=orderheight+'px';
  },
  methods:{
    addorderlist(goods){
      //商品是否已经存在于订单列表中
      let ishave=false;
      for (let index of this.tableData.keys()) {
        console.log(index);
        if (this.tableData[index].goodsId==goods.goodsId) {
         ishave=true;
        }
      }
      //根据判断写业务逻辑
      if(ishave){
        //改变列表中的商品数量
        let arr=this.tableData.filter(o=> o.goodsId==goods.goodsId);
        // let arr=this.tableData.filter(function(o){
        //   return o.goodsId==goods.goodsId;
        // });
        arr[0].count++;
      }else{
        let newgoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
        this.tableData.push(newgoods);
      }
    }
  }
}
</script>
<style scoped>
.el-row{text-align: center;}
.divBtn{padding-top:20px;}
.title{height:20px;border-bottom:1px solid #d3dce6;background-color:#f9fafc;padding:10px}
.often-goods-list ul li{list-style:none;float:left;border:1px solid #e5e9f2;padding:10px;margin:5px;background-color:#fff}
.o-price{color:#58b7ff}

.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
      margin-top: 20px;
      font-size: 18px;
      width: 60%;
      color:brown;
   }
   .foodPrice{
       font-size: 16px;
       width: 60%;
       padding-top:10px;
   }
</style>