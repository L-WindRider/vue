<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span='8' id="order-list">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width:100%;">
                <el-table-column align="center" prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column align="center" prop="count" label="数量"></el-table-column>
                <el-table-column align="center" prop="price" label="金额"></el-table-column>
                <el-table-column align="center" label="操作" fixed="right">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="delsinglegods(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addorderlist(scope.row)">添加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="totaldiv">
                <span>数量：{{totalcount}}</span>
                <span>金额：{{totalmoney}}元</span>
              </div>
              <div class="divBtn">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delallgoods">删除</el-button>
                <el-button type="success" @click="checkout">结账</el-button>
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
                  <li @click="addorderlist(goods)" v-for="goods in type0Goods1">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class='cookList'>
                  <li @click="addorderlist(goods)" v-for="goods in type0Goods2">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class='cookList'>
                  <li @click="addorderlist(goods)" v-for="goods in type0Goods3">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class='cookList'>
                  <li @click="addorderlist(goods)" v-for="goods in type0Goods4">
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
  data() {
    return {
      tableData: [],//点餐列表
      oftenGoods: [],//常用商品
      type0Goods1: [],//第一分类
      type0Goods2: [],//第二分类
      type0Goods3: [],//第三分类
      type0Goods4: [],//第四分类
      totalmoney: 0,//总金额
      totalcount: 0//数量
    }
  },
  created: function() {
    axios.get('http://heheda.com/DemoApi/oftenGoods.php')
      .then(response => {
        this.oftenGoods = response.data;
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      })
    axios.get('http://heheda.com/DemoApi/typeGoods.php')
      .then(response => {
        this.type0Goods1 = response.data[0];
        this.type0Goods2 = response.data[1];
        this.type0Goods3 = response.data[2];
        this.type0Goods4 = response.data[3];
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      })
  },
  mounted() {
    let orderheight = window.innerHeight;
    document.getElementById('order-list').style.height = orderheight + 'px';
  },
  methods: {
    addorderlist(goods) { //添加单个商品
      //商品是否已经存在于订单列表中
      let ishave = false;
      for (let index of this.tableData.keys()) {
        if (this.tableData[index].goodsId == goods.goodsId) {
          ishave = true;
        }
      }
      //根据判断写业务逻辑
      if (ishave) {
        //改变列表中的商品数量
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        // let arr=this.tableData.filter(function(o){
        //   return o.goodsId==goods.goodsId;
        // });
        arr[0].count++;
      } else {
        let newgoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 };
        this.tableData.push(newgoods);
      }
      this.getallmoney();
    },
    delsinglegods(goods) { //删除单个商品
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getallmoney();
    },
    checkout() { //模拟结账
      if (this.totalcount != 0) {
        this.delallgoods();
        this.$message({
          message: '结账成功，感谢你完成一单',
          type: 'success'
        })
      }else{
        this.$message.error('不能空结账，了解你急切的心情！');
      }
    },
    delallgoods() { //清空，因为getallmoney有循环，不调用，直接赋值
      this.tableData = [];
      this.totalmoney = 0;
      this.totalcount = 0;
    },
    //汇总数量和金额
    getallmoney() {
      this.totalmoney = 0;
      this.totalcount = 0;
      if (this.tableData) {//列表数组有值
        //计算总金额和数量
        this.tableData.forEach((element) => {
          this.totalmoney += this.totalmoney + (element.price * element.count);
          this.totalcount += element.count;
        });
      }
    }
  }
}
</script>
<style scoped>
.el-row {
  text-align: center;
}

.divBtn {
  padding-top: 20px;
}

.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px
}

.often-goods-list ul li {
  cursor: pointer;
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff
}

.o-price {
  color: #58b7ff
}

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}

.cookList li span {

  display: block;
  float: left;
}

.foodImg {
  width: 40%;
}

.foodName {
  margin-top: 20px;
  font-size: 18px;
  width: 60%;
  color: brown;
}

.foodPrice {
  font-size: 16px;
  width: 60%;
  padding-top: 10px;
}

.totaldiv {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #DDD;
}

.totaldiv span::last-of-type {
  margin-left: 20px;
}
</style>