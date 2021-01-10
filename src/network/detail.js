import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class goods{
  constructor(detailInfo){
    this.topImages = detailInfo.itemInfo.topImages
    this.title = detailInfo.itemInfo.title
    this.desc = detailInfo.itemInfo.desc
    this.price = detailInfo.itemInfo.price
    this.oldPrice = detailInfo.itemInfo.oldPrice
    this.discount = detailInfo.itemInfo.discountDesc
    this.columns = detailInfo.columns
    this.readPrice = detailInfo.itemInfo.lowNowPrice

    //店铺数据
    this.shopLogo = detailInfo.shopInfo.shopLogo
    this.shopName = detailInfo.shopInfo.name
    this.cSells = detailInfo.shopInfo.cSells
    this.cGoods = detailInfo.shopInfo.cGoods
    this.scores = detailInfo.shopInfo.score

    //商品图片
    this.goodsImages = detailInfo.detailInfo.detailImage[0].list
    //商品参数
    this.itemParamsInfo = detailInfo.itemParams.info
    this.itemParamsRule = detailInfo.itemParams.rule
    //评价
    this.rate = detailInfo.rate.list[0]

  }
}
