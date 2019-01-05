import * as categoryApi from './service';
 
export default {
  namespace: 'category',
  state: {
    screenHeight: 0,
    tagList: [
      { id: 1, text: '女装' },
      { id: 2, text: '男装' },
      { id: 3, text: '母婴' },
      { id: 4, text: '鞋子' },
      { id: 5, text: '箱包' },
      { id: 6, text: '居家百货' },
      { id: 7, text: '家电数码' },
      { id: 8, text: '内衣装饰' },
      { id: 9, text: '美妆' },
      { id: 10, text: '运动户外' },
      { id: 11, text: '美食' },
      { id: 12, text: '车品文娱' },
      { id: 13, text: '通讯旅游' }
    ],
    tagCheckId: 1,
    tagCheckView: 'check1',
    allCategoryList: [
      [],
      [
        { id: 1, text: '羽绒棉服', img: 'http://s2.juancdn.com/bao/181106/0/c/5be15aa1b6f8ea4d832742f3_200x200.png' },
        { id: 2, text: '毛衫', img: 'http://s2.juancdn.com/bao/181106/5/3/5be15d89b6f8ea616168e374_200x200.png' },
        { id: 3, text: '秋季风衣', img: 'http://s2.juancdn.com/bao/170824/5/2/599ea1398150a11ea3793d3b_200x200.png' },
        { id: 4, text: '女士外套', img: 'http://s2.juancdn.com/bao/170824/1/0/599ea1b1a9fcf8812316c5e0_200x200.png' },
        { id: 5, text: '卫衣', img: 'http://s2.juancdn.com/bao/170824/3/b/599ea2db8150a12a9254bab8_200x200.png' },
        { id: 6, text: '女士裙装', img: 'http://s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png' },
        { id: 7, text: '懒人套装', img: 'http://s2.juancdn.com/bao/181106/3/8/5be161b8b6f8ea251b5cb6bc_200x200.png' },
        { id: 8, text: '中老年女装', img: 'http://s2.juancdn.com/bao/180517/4/1/5afd28a4b6f8ea0ef666b06f_200x200.png' },
        { id: 9, text: '牛仔裤', img: 'http://s2.juancdn.com/bao/180517/b/0/5afd2b2133b08909906c57af_200x200.png' },
        { id: 10, text: '职业套装', img: 'http://s2.juancdn.com/bao/181106/4/a/5be163f1b6f8ea61f7712835_200x200.png' },
        { id: 11, text: '西装外套', img: 'http://s2.juancdn.com/bao/170824/5/5/599ea25fa9fcf8809c07e048_200x200.png' },
        { id: 12, text: '休闲裤', img: 'http://s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png' },
        { id: 13, text: '连体/背带裤', img: 'http://s2.juancdn.com/bao/170824/b/0/599ea3ef8150a12acd62ad87_200x200.png' },
        { id: 14, text: '衬衫', img: 'http://s2.juancdn.com/bao/180905/4/8/5b8f347a33b0897f4215af30_200x200.png' }
      ],
      [
        { id: 1, text: "羽绒棉服", img: "http://s2.juancdn.com/bao/171011/e/c/59ddcb53a9fcf8768422f9cb_200x200.png" },
        { id: 2, text: "秋上新", img: "http://s2.juancdn.com/bao/170828/a/3/59a3d022a9fcf829a36cf67d_200x200.png" },
        { id: 3, text: "夹克", img: "http://s2.juancdn.com/bao/170815/a/9/5992e3d18150a12e9903fc68_200x200.png" },
        { id: 4, text: "卫衣", img: "http://s2.juancdn.com/bao/171011/7/c/59ddcb028150a1342d541a29_200x200.png" },
        { id: 5, text: "T恤", img: "http://s2.juancdn.com/bao/170828/8/d/59a3d0868150a167580ef351_200x200.png" },
        { id: 6, text: "背心/马甲", img: "http://s2.juancdn.com/bao/170918/2/4/59bfc077a9fcf869cc021996_200x200.png" },
        { id: 7, text: "套装", img: "http://s2.juancdn.com/bao/180118/d/c/5a6069928150a13ce7789245_200x200.png" },
        { id: 8, text: "牛仔裤", img: "http://s2.juancdn.com/bao/170828/2/a/59a3d51a8150a108c4711bc3_200x200.png" },
        { id: 9, text: "休闲裤", img: "http://s2.juancdn.com/bao/170828/6/a/59a3d4faa9fcf831ca0a6202_200x200.png" },
        { id: 10, text: "西裤", img: "http://s2.juancdn.com/bao/170828/4/6/59a3d531a9fcf8337b0f195e_200x200.png" },
        { id: 11, text: "内衣", img: "http://s2.juancdn.com/bao/170526/2/3/5927c3c9ad0a496da18b45cd_200x200.png" },
        { id: 12, text: "袜子", img: "http://s2.juancdn.com/bao/170526/f/6/5927c3d8a43d1f4ca80c9b57_200x200.png" }
      ],
      [
        { id: 1, text: "男童套装", img: "http://s2.juancdn.com/bao/180228/f/0/5a9669b5a9fcf89c253b904b_200x200.png" },
        { id: 2, text: "女童套装", img: "http://s2.juancdn.com/bao/180228/5/e/5a9677fea9fcf81fab76f155_200x200.png" },
        { id: 3, text: "儿童裙装", img: "http://s2.juancdn.com/bao/180228/c/e/5a96783da9fcf8211b3f1944_200x200.png" },
        { id: 4, text: "儿童上衣", img: "http://s2.juancdn.com/bao/180228/3/9/5a96726c8150a1463439c066_200x200.png" },
        { id: 5, text: "儿童裤子", img: "http://s2.juancdn.com/bao/180228/0/4/5a96728da9fcf89c3959bf88_200x200.png" },
        { id: 6, text: "内衣配饰", img: "http://s2.juancdn.com/bao/180228/3/f/5a9680e3a9fcf820232d051c_200x200.png" },
        { id: 7, text: "儿童帆布鞋", img: "http://s2.juancdn.com/bao/180228/4/9/5a9678cf8150a14543171d6a_200x200.png" },
        { id: 8, text: "儿童运动鞋", img: "http://s2.juancdn.com/bao/180228/9/7/5a96791b8150a145e53384a7_200x200.png" },
        { id: 9, text: "儿童皮鞋", img: "http://s2.juancdn.com/bao/180228/8/a/5a9673118150a146a518b4c4_200x200.png" },
        { id: 10, text: "婴幼服饰", img: "http://s2.juancdn.com/bao/180228/1/c/5a96734a8150a145ff079406_200x200.png" },
        { id: 11, text: "纸尿裤纸品", img: "http://s2.juancdn.com/bao/180228/1/a/5a9673748150a14689138d26_200x200.png" },
        { id: 12, text: "喂养用品", img: "http://s2.juancdn.com/bao/180228/9/6/5a9674eba9fcf89ca813961f_200x200.png" },
        { id: 13, text: "孕妈服饰", img: "http://s2.juancdn.com/bao/180228/d/7/5a967956a9fcf8213265ccd6_200x200.png" },
        { id: 14, text: "洗护用品", img: "http://s2.juancdn.com/bao/180228/0/5/5a96756ba9fcf89c3e6b4d8e_200x200.png" },
        { id: 15, text: "益智早教", img: "http://s2.juancdn.com/bao/180228/3/d/5a9675948150a145ea2cc4c5_200x200.png" },
        { id: 16, text: "玩具乐器", img: "http://s2.juancdn.com/bao/180312/1/6/5aa5e22da9fcf803096f24f9_200x200.png" },
        { id: 17, text: "图书文具", img: "http://s2.juancdn.com/bao/180228/e/8/5a9676358150a1453e1d3db8_200x200.png" },
        { id: 18, text: "婴儿出行", img: "http://s2.juancdn.com/bao/180228/b/0/5a9676b78150a1468e47547d_200x200.png" },
        { id: 19, text: "寝居用品", img: "http://s2.juancdn.com/bao/180228/7/5/5a967745a9fcf8212f7cb015_200x200.png" },
        { id: 20, text: "孕妈用品", img: "http://s2.juancdn.com/bao/180228/a/e/5a9679768150a145265604ec_200x200.png" }
      ],
      [
        { id: 1, text: "女休闲鞋", img: "http://s2.juancdn.com/bao/181009/3/4/5bbc0a07b6f8ea3a264b2077_200x200.png" },
        { id: 2, text: "中/高跟单鞋", img: "http://s2.juancdn.com/bao/181009/d/f/5bbc0eae33b08916b93bc754_200x200.png" },
        { id: 3, text: "平跟单鞋", img: "http://s2.juancdn.com/bao/181009/9/6/5bbc0ec033b089152b0652f4_200x200.png" },
        { id: 4, text: "男休闲鞋", img: "http://s2.juancdn.com/bao/181009/5/a/5bbc0a80b6f8ea7e81191c30_200x200.png" },
        { id: 5, text: "商务皮鞋", img: "http://s2.juancdn.com/bao/181009/e/c/5bbc0a6f33b0891efa7703eb_200x200.png" },
        { id: 6, text: "坡跟厚底", img: "http://s2.juancdn.com/bao/181009/6/d/5bbc0a5a33b08902bc378795_200x200.png" },
        { id: 7, text: "冬靴上新", img: "http://s2.juancdn.com/bao/181009/8/9/5bbc0a9fb6f8ea01c06bf3cd_200x200.png" },
        { id: 8, text: "男士棉靴", img: "http://s2.juancdn.com/bao/181009/8/6/5bbc0e9cb6f8ea1d44488f82_200x200.png" },
        { id: 9, text: "高跟凉鞋", img: "http://s2.juancdn.com/bao/181009/2/0/5bbc0adfb6f8ea7bdf1c524e_200x200.png" },
        { id: 10, text: "平底凉鞋", img: "http://s2.juancdn.com/bao/181009/9/f/5bbc0af3b6f8ea02ae35dcff_200x200.png" },
        { id: 11, text: "坡跟凉鞋", img: "http://s2.juancdn.com/bao/181009/9/8/5bbc0b09b6f8ea1fad33ebc7_200x200.png" },
        { id: 12, text: "外穿拖鞋", img: "http://s2.juancdn.com/bao/181009/9/c/5bbc0b2bb6f8ea017e06e730_200x200.png" },
        { id: 13, text: "男式凉鞋", img: "http://s2.juancdn.com/bao/181009/8/9/5bbc0bad33b08922272f2296_200x200.png" },
        { id: 14, text: "居家拖鞋", img: "http://s2.juancdn.com/bao/181009/0/b/5bbc0bce33b089721c3bba04_200x200.png" },
        { id: 15, text: "洞洞鞋", img: "http://s2.juancdn.com/bao/181009/e/7/5bbc0be4b6f8ea230a3f736c_200x200.png" },
        { id: 16, text: "功能鞋", img: "http://s2.juancdn.com/bao/181009/c/8/5bbc0e8933b08919b10eb179_200x200.png" }
      ],
      [
        { id: 1, text: "提挎包", img: "http://s2.juancdn.com/bao/170925/6/3/59c86a82a9fcf8675e021186_200x200.png" },
        { id: 2, text: "双肩包", img: "http://s2.juancdn.com/bao/170727/4/e/5979debca9fcf84de4585b35_200x200.png" },
        { id: 3, text: "手提包", img: "http://s2.juancdn.com/bao/170727/c/8/5979df388150a14a7507105c_200x200.png" },
        { id: 4, text: "拉杆箱", img: "http://s2.juancdn.com/bao/170727/c/4/5979e08ca9fcf8574d4ac70a_200x200.png" },
        { id: 5, text: "斜挎包", img: "http://s2.juancdn.com/bao/170925/f/b/59c86b6e8150a141ba202498_200x200.png" },
        { id: 6, text: "单肩包", img: "http://s2.juancdn.com/bao/170727/7/4/5979df528150a14aaa53e879_200x200.png" },
        { id: 7, text: "斜挎男包", img: "http://s2.juancdn.com/bao/170727/d/f/5979e05fa9fcf893dd3778d6_200x200.png" },
        { id: 8, text: "公文包", img: "http://s2.juancdn.com/bao/170727/8/d/5979e076a9fcf8a881738ce4_200x200.png" },
        { id: 9, text: "胸/腰包", img: "http://s2.juancdn.com/bao/170727/4/b/5979dfcf8150a1493805bf2c_200x200.png" },
        { id: 10, text: "钱包", img: "http://s2.juancdn.com/bao/170727/0/d/5979df74a9fcf86c47329f65_200x200.png" },
        { id: 11, text: "收纳包", img: "http://s2.juancdn.com/bao/170727/b/d/5979df8a8150a11e8c057d4f_200x200.png" },
        { id: 12, text: "儿童书包", img: "http://s2.juancdn.com/bao/170925/b/2/59c86c0ea9fcf86a8d27fba2_200x200.png" },
        { id: 13, text: "便当包", img: "http://s2.juancdn.com/bao/170727/5/1/5979e12c8150a14ade70b6fa_200x200.png" },
        { id: 14, text: "休闲包", img: "http://s2.juancdn.com/bao/170727/d/6/5979e0c1a9fcf893181803ba_200x200.png" },
        { id: 15, text: "登山旅行包", img: "http://s2.juancdn.com/bao/170727/e/a/5979e0cfa9fcf86cdb7747ce_200x200.png" },
        { id: 16, text: "零钱包", img: "http://s2.juancdn.com/bao/170925/e/9/59c86b0ba9fcf8758c276128_200x200.png" },
        { id: 17, text: "证件包", img: "http://s2.juancdn.com/bao/170727/e/b/5979e1188150a14ab829aa51_200x200.png" },
        { id: 18, text: "户外包", img: "http://s2.juancdn.com/bao/170925/a/3/59c86cc1a9fcf87591441053_200x200.png" }
      ],
      [
        { id: 1, text: "床品套件", img: "http://s2.juancdn.com/bao/160901/2/5/57c7fcba151ad1ae6b8b45d9_200x200.png" },
        { id: 2, text: "卫生巾/纸", img: "http://s2.juancdn.com/bao/160901/5/6/57c7fcd3151ad1c8728b458f_200x200.png" },
        { id: 3, text: "百货日杂", img: "http://s2.juancdn.com/bao/160901/a/9/57c7fcaf151ad1d86c8b459b_200x200.png" },
        { id: 4, text: "清洁工具", img: "http://s2.juancdn.com/bao/160706/b/d/577c7f07151ad175048b45da_200x200.png" },
        { id: 5, text: "个护洗护", img: "http://s2.juancdn.com/bao/160901/5/c/57c7fcc4151ad12d6d8b45a8_200x200.png" },
        { id: 6, text: "口腔护理", img: "http://s2.juancdn.com/bao/160706/e/e/577c7f60151ad1f1038b45d5_200x200.png" },
        { id: 7, text: "生活用品", img: "http://s2.juancdn.com/bao/160706/d/f/577c7f6b151ad19b038b45c2_200x200.png" },
        { id: 8, text: "浴室摆件", img: "http://s2.juancdn.com/bao/160706/f/8/577c7f7f151ad1f7158b4581_200x200.png" },
        { id: 9, text: "雨伞雨具", img: "http://s2.juancdn.com/bao/160706/3/2/577c7f8e151ad14f028b45cf_200x200.png" },
        { id: 10, text: "整理收纳", img: "http://s2.juancdn.com/bao/160706/9/a/577c7f9f151ad157038b45d2_200x200.png" },
        { id: 11, text: "DIY工具", img: "http://s2.juancdn.com/bao/160706/6/8/577c7fab151ad172038b45c6_200x200.png" },
        { id: 12, text: "窗纺布艺", img: "http://s2.juancdn.com/bao/160706/2/d/577c7fc6151ad171038b45cf_200x200.png" },
        { id: 13, text: "抱枕靠垫", img: "http://s2.juancdn.com/bao/160706/9/b/577c7fe1151ad127178b458f_200x200.png" },
        { id: 14, text: "毛毯坐垫", img: "http://s2.juancdn.com/bao/160706/2/d/577c7fed151ad126068b45c5_200x200.png" },
        { id: 15, text: "水杯茶具", img: "http://s2.juancdn.com/bao/160706/5/2/577c7ffa151ad17c048b45c0_200x200.png" },
        { id: 16, text: "餐具器皿", img: "http://s2.juancdn.com/bao/160706/d/b/577c8007151ad1f6018b45cc_200x200.png" },
        { id: 17, text: "厨房烹饪", img: "http://s2.juancdn.com/bao/160706/a/3/577c8014151ad1a2028b45d4_200x200.png" },
        { id: 18, text: "家具", img: "http://s2.juancdn.com/bao/160706/f/f/577c801f151ad13e058b45de_200x200.png" },
        { id: 19, text: "家居饰品", img: "http://s2.juancdn.com/bao/160706/c/f/577c802e151ad1f1038b45dc_200x200.png" },
        { id: 20, text: "家装建材", img: "http://s2.juancdn.com/bao/160901/1/4/57c7fd2e151ad1b75e8b460b_200x200.png" },
        { id: 21, text: "办公文娱", img: "http://s2.juancdn.com/bao/171130/b/7/5a1fd0d9a9fcf853d4798bab_200x200.png" }
      ],
      [
        { id: 1, text: "智能手机", img: "http://s2.juancdn.com/bao/171218/6/9/5a375c6ba9fcf85fa238173d_200x200.png" },
        { id: 2, text: "老人手机", img: "http://s2.juancdn.com/bao/171218/d/c/5a376373a9fcf896916c7124_200x200.png" },
        { id: 3, text: "手机配件", img: "http://s2.juancdn.com/bao/171218/e/1/5a375d48a9fcf860eb39ad40_200x200.png" },
        { id: 4, text: "洗衣机", img: "http://s2.juancdn.com/bao/171218/0/4/5a3779188150a15a1110ee2d_200x200.png" },
        { id: 5, text: "冰箱", img: "http://s2.juancdn.com/bao/171218/3/f/5a37789ba9fcf80a8c7b51a1_200x200.png" },
        { id: 6, text: "大家电", img: "http://s2.juancdn.com/bao/170831/5/f/59a7b5588150a13ed92ce699_200x200.png" },
        { id: 7, text: "电饭煲", img: "http://s2.juancdn.com/bao/171218/c/9/5a3773568150a1447b5b0204_200x200.png" },
        { id: 8, text: "电热水壶", img: "http://s2.juancdn.com/bao/171218/5/1/5a375dbea9fcf87238068522_200x200.png" },
        { id: 9, text: "电吹风", img: "http://s2.juancdn.com/bao/171218/5/6/5a377ef08150a15aec027cdf_200x200.png" },
        { id: 10, text: "美容瘦身", img: "http://s2.juancdn.com/bao/171218/f/c/5a375e50a9fcf8611a4d1784_200x200.png" },
        { id: 11, text: "剃须刀", img: "http://s2.juancdn.com/bao/171218/4/7/5a375e048150a1377c0aee40_200x200.png" },
        { id: 12, text: "智能数码", img: "http://s2.juancdn.com/bao/160706/9/0/577c81a8151ad1b5058b45e0_200x200.png" },
        { id: 13, text: "电磁炉", img: "http://s2.juancdn.com/bao/171218/f/9/5a377b788150a15a4d456ddb_200x200.png" },
        { id: 14, text: "挂烫机/熨斗", img: "http://s2.juancdn.com/bao/171218/d/8/5a375de7a9fcf860711bf150_200x200.png" },
        { id: 15, text: "移动电源", img: "http://s2.juancdn.com/bao/171218/c/b/5a3768728150a15b2d5e4757_200x200.png" },
        { id: 16, text: "厨房电器", img: "http://s2.juancdn.com/bao/171218/b/5/5a375d7ca9fcf8610c369b2a_200x200.png" },
        { id: 17, text: "生活电器", img: "http://s2.juancdn.com/bao/160706/4/4/577c8092151ad1a7038b45db_200x200.png" },
        { id: 18, text: "护理电器", img: "http://s2.juancdn.com/bao/160706/d/9/577c809e151ad1f7158b458e_200x200.png" },
        { id: 19, text: "时尚影音", img: "http://s2.juancdn.com/bao/160706/f/e/577c80d8151ad10d138b45a2_200x200.png" },
        { id: 20, text: "电脑/配件", img: "http://s2.juancdn.com/bao/170831/f/e/59a7b5428150a1332c3da05d_200x200.png" },
        { id: 21, text: "摄影摄像/配件", img: "http://s2.juancdn.com/bao/160706/e/c/577c80ca151ad1ae028b4604_200x200.png" },
        { id: 22, text: "足浴盆", img: "http://s2.juancdn.com/bao/171218/8/9/5a377aeda9fcf80a323b53c2_200x200.png" },
        { id: 23, text: "电火锅", img: "http://s2.juancdn.com/bao/171218/2/7/5a377645a9fcf80c405bfd17_200x200.png" },
        { id: 24, text: "取暖器", img: "http://s2.juancdn.com/bao/171218/1/4/5a377f46a9fcf80790024f31_200x200.png" }
      ],
      [
        { id: 1, text: "女士家居服", img: "http://s2.juancdn.com/bao/181106/9/5/5be166a933b0894dc0039175_200x200.png" },
        { id: 2, text: "文胸", img: "http://s2.juancdn.com/bao/180615/3/6/5b232d3033b089655057e554_200x200.png" },
        { id: 3, text: "文胸套装", img: "http://s2.juancdn.com/bao/180116/3/6/5a5dd4b6a9fcf83f9a6fe5e3_200x200.png" },
        { id: 4, text: "保暖内衣", img: "http://s2.juancdn.com/bao/171024/7/5/59ef2bfb8150a14fd56c099d_200x200.png" },
        { id: 5, text: "女士内裤", img: "http://s2.juancdn.com/bao/180117/b/3/5a5ecfc18150a15a3d5b20b3_200x200.png" },
        { id: 6, text: "女士安全裤", img: "http://s2.juancdn.com/bao/180116/b/6/5a5dd0dea9fcf865877b3633_200x200.png" },
        { id: 7, text: "男士内裤", img: "http://s2.juancdn.com/bao/180117/0/4/5a5ecfb2a9fcf870d37a5392_200x200.png" },
        { id: 8, text: "美体塑形", img: "http://s2.juancdn.com/bao/180116/6/9/5a5dcf018150a11f0f73eefa_200x200.png" },
        { id: 9, text: "打底丝袜", img: "http://s2.juancdn.com/bao/180614/c/4/5b2211d933b0892243106f2d_200x200.png" },
        { id: 10, text: "男士睡衣", img: "http://s2.juancdn.com/bao/181106/e/0/5be16993b6f8ea37cd765e57_200x200.png" },
        { id: 11, text: "女士袜子", img: "http://s2.juancdn.com/bao/180116/c/1/5a5dd247a9fcf83c910658d2_200x200.png" },
        { id: 12, text: "男士袜子", img: "http://s2.juancdn.com/bao/180116/d/8/5a5dd2088150a11d77545ffc_200x200.png" },
        { id: 13, text: "男士背心", img: "http://s2.juancdn.com/bao/180614/c/3/5b221085b6f8ea51366e2f4c_200x200.png" },
        { id: 14, text: "吊带胸贴", img: "http://s2.juancdn.com/bao/180614/d/3/5b2211a0b6f8ea4b0675a692_200x200.png" },
        { id: 15, text: "手表", img: "http://s2.juancdn.com/bao/180307/8/5/5a9f943ea9fcf8270e524763_200x200.jpg" },
        { id: 16, text: "项链耳环", img: "http://s2.juancdn.com/bao/180228/e/7/5a968d268150a146501c1520_200x200.png" },
        { id: 17, text: "发饰摆件", img: "http://s2.juancdn.com/bao/180228/e/0/5a968d6a8150a146a85c2e63_200x200.png" },
        { id: 18, text: "皮带腰带", img: "http://s2.juancdn.com/bao/160901/8/3/57c7f2a5151ad1754d8b45cf_200x200.png" },
        { id: 19, text: "戒指手链", img: "http://s2.juancdn.com/bao/171208/7/c/5a2a42938150a1446262945f_200x200.png" },
        { id: 20, text: "眼镜", img: "http://s2.juancdn.com/bao/180207/f/4/5a7a70468150a1352b549a1f_200x200.png" },
        { id: 21, text: "丝巾围巾", img: "http://s2.juancdn.com/bao/180228/a/e/5a968d888150a1458b7af3eb_200x200.png" },
        { id: 22, text: "帽子手套", img: "http://s2.juancdn.com/bao/180228/7/f/5a968da28150a1457e79e362_200x200.png" },
        { id: 23, text: "珠宝玉石", img: "http://s2.juancdn.com/bao/171208/a/0/5a2a49a88150a107b44c8b72_200x200.png" },
        { id: 24, text: "个性配饰", img: "http://s2.juancdn.com/bao/171208/0/4/5a2a43aba9fcf8b6185afaee_200x200.png" }
      ],
      [
        { id: 1, text: "护肤品", img: "http://s2.juancdn.com/bao/160706/c/a/577c85d5151ad15d248b4597_200x200.png" },
        { id: 2, text: "彩妆香氛", img: "http://s2.juancdn.com/bao/160706/5/9/577c85e9151ad1fe148b45c4_200x200.png" },
        { id: 3, text: "美容工具", img: "http://s2.juancdn.com/bao/160706/7/a/577c85f6151ad168248b4588_200x200.png" },
        { id: 4, text: "身体护理", img: "http://s2.juancdn.com/bao/160706/f/9/577c8601151ad1ca158b45db_200x200.png" },
        { id: 5, text: "头发护理", img: "http://s2.juancdn.com/bao/160706/6/e/577c860e151ad1c6148b45e4_200x200.png" },
        { id: 6, text: "男士护理", img: "http://s2.juancdn.com/bao/160706/3/3/577c861a151ad1e9188b45be_200x200.png" },
        { id: 7, text: "护肤洁面", img: "http://s2.juancdn.com/bao/160706/5/9/577ca594151ad110798b45a7_200x200.png" },
        { id: 8, text: "口碑面膜", img: "http://s2.juancdn.com/bao/160706/0/6/577ca5a4151ad13b038b4584_200x200.png" },
        { id: 9, text: "BB防晒", img: "http://s2.juancdn.com/bao/160706/3/e/577cac21151ad1100f8b4598_200x200.png" },
        { id: 10, text: "补水保湿", img: "http://s2.juancdn.com/bao/160706/b/9/577ca607151ad1d1048b457a_200x200.png" },
        { id: 11, text: "唇膏口红", img: "http://s2.juancdn.com/bao/160706/7/1/577ca613151ad1f0708b45c9_200x200.png" },
        { id: 12, text: "眼部护理", img: "http://s2.juancdn.com/bao/160901/5/b/57c7fc43151ad1aa6e8b45af_200x200.png" },
        { id: 13, text: "进口美妆", img: "http://s2.juancdn.com/bao/170623/0/7/594cc034957b52361d1bf716_200x200.png" }
      ],
      [
        { id: 1, text: "运动男鞋", img: "http://s2.juancdn.com/bao/180308/0/a/5aa09cdb8150a1718206e940_200x200.png" },
        { id: 2, text: "运动男装", img: "http://s2.juancdn.com/bao/171218/c/2/5a3738488150a13a4f00331a_200x200.png" },
        { id: 3, text: "健身器材", img: "http://s2.juancdn.com/bao/180308/c/a/5aa0a65da9fcf8a83441f608_200x200.png" },
        { id: 4, text: "运动女鞋", img: "http://s2.juancdn.com/bao/180907/7/8/5b921b0cb6f8ea7d8b5f5a37_200x200.png" },
        { id: 5, text: "运动女装", img: "http://s2.juancdn.com/bao/180907/e/8/5b921a4b33b089156b69f46b_200x200.png" },
        { id: 6, text: "舞蹈瑜伽", img: "http://s2.juancdn.com/bao/171218/8/e/5a373907a9fcf80d1961c9a6_200x200.png" },
        { id: 7, text: "儿童运动鞋服", img: "http://s2.juancdn.com/bao/180907/9/4/5b922675b6f8ea77c050a75f_200x200.png" },
        { id: 8, text: "体育用品", img: "http://s2.juancdn.com/bao/171218/a/7/5a373923a9fcf80cca192e68_200x200.png" },
        { id: 9, text: "户外男装", img: "http://s2.juancdn.com/bao/180308/f/c/5aa0a2afa9fcf8aa097690e3_200x200.png" },
        { id: 10, text: "户外女装", img: "http://s2.juancdn.com/bao/180308/3/1/5aa0a5f28150a170fb705768_200x200.png" },
        { id: 11, text: "户外装备", img: "http://s2.juancdn.com/bao/160706/0/d/577ca6c5151ad175738b45c9_200x200.png" },
        { id: 12, text: "户外炊具", img: "http://s2.juancdn.com/bao/180907/4/c/5b921c8d33b089479302087f_200x200.png" },
        { id: 13, text: "骑行垂钓", img: "http://s2.juancdn.com/bao/180308/3/3/5aa0a6348150a16e4776c377_200x200.png" }
      ],
      [
        { id: 1, text: "坚果炒货", img: "http://s2.juancdn.com/bao/160901/1/c/57c7fcdc151ad1ea708b45a2_200x200.png" },
        { id: 2, text: "饼干糕点", img: "http://s2.juancdn.com/bao/160901/3/d/57c7f38a151ad16e518b45cb_200x200.png" },
        { id: 3, text: "肉类熟食", img: "http://s2.juancdn.com/bao/160901/7/9/57c7f3ab151ad10a508b45bf_200x200.png" },
        { id: 4, text: "蜜饯果脯", img: "http://s2.juancdn.com/bao/160901/6/4/57c7f40b151ad10b488b4642_200x200.png" },
        { id: 5, text: "糖果巧克力", img: "http://s2.juancdn.com/bao/160901/a/5/57c7f3ed151ad170558b45a8_200x200.png" },
        { id: 6, text: "进口美食", img: "http://s2.juancdn.com/bao/160901/d/f/57c7fc7d151ad1b95e8b4602_200x200.png" },
        { id: 7, text: "精品茗茶", img: "http://s2.juancdn.com/bao/160901/1/c/57c7fcf1151ad115758b4579_200x200.png" },
        { id: 8, text: "生鲜蔬果", img: "http://s2.juancdn.com/bao/170623/f/0/594d0b58957b523757214115_200x200.png" },
        { id: 9, text: "南北干货", img: "http://s2.juancdn.com/bao/160901/8/3/57c7fd05151ad1af6c8b45b4_200x200.png" },
        { id: 10, text: "方便食品", img: "http://s2.juancdn.com/bao/160901/b/4/57c7fc96151ad1d2648b45fa_200x200.png" },
        { id: 11, text: "粮油米面", img: "http://s2.juancdn.com/bao/160901/0/b/57c7fd0f151ad1fc688b45cb_200x200.png" },
        { id: 12, text: "禽类蛋品", img: "http://s2.juancdn.com/bao/160706/c/4/577ca7cb151ad112718b45d7_200x200.png" },
        { id: 13, text: "厨房酱料", img: "http://s2.juancdn.com/bao/160901/c/d/57c7fd18151ad16f718b4599_200x200.png" },
        { id: 14, text: "礼品礼盒", img: "http://s2.juancdn.com/bao/160901/5/b/57c7fd21151ad1b25e8b4605_200x200.png" }
      ],
      [
        { id: 1, text: "学习办公", img: "http://s2.juancdn.com/bao/160706/b/c/577ca87a151ad1e0058b458f_200x200.jpg" },
        { id: 2, text: "文娱用品", img: "http://s2.juancdn.com/bao/160706/1/8/577ca86f151ad1d00e8b4567_200x200.jpg" },
        { id: 3, text: "座套脚垫", img: "http://s2.juancdn.com/bao/160706/9/5/577ca81b151ad12a738b4603_200x200.jpg" },
        { id: 4, text: "汽车装饰", img: "http://s2.juancdn.com/bao/160706/5/a/577ca7f8151ad10d748b45e8_200x200.jpg" },
        { id: 5, text: "汽车美容", img: "http://s2.juancdn.com/bao/160706/f/a/577ca804151ad18f018b45ac_200x200.jpg" },
        { id: 6, text: "头枕腰靠", img: "http://s2.juancdn.com/bao/160706/e/3/577ca83f151ad1017a8b45f8_200x200.jpg" },
        { id: 7, text: "功能小件", img: "http://s2.juancdn.com/bao/160706/8/a/577ca826151ad1af068b4594_200x200.jpg" },
        { id: 8, text: "维修保养", img: "http://s2.juancdn.com/bao/160706/0/e/577ca857151ad10e728b45e4_200x200.jpg" },
        { id: 9, text: "电子导航", img: "http://s2.juancdn.com/bao/160706/3/3/577ca831151ad15b038b45b2_200x200.jpg" },
        { id: 10, text: "车载电器", img: "http://s2.juancdn.com/bao/160706/f/1/577ca810151ad13e018b45ba_200x200.jpg" },
        { id: 11, text: "安全自驾", img: "http://s2.juancdn.com/bao/160706/1/f/577ca84c151ad127718b4610_200x200.jpg" }
      ],
      [
        { id: 1, text: "图书音像", img: "http://s2.juancdn.com/bao/171130/4/7/5a1fcb508150a1681a000a98_200x200.png" }
      ]
    ]
  },
 
  effects: {
    * initData(_, { call, put, select }) {
      /**
       *    正常的逻辑是分类页都是从服务端请求的数据
       *    此Demo是写的json数据
       */
      // const { status, data } = yield call(categoryApi.demo, {});
      const category = yield select(state => state.category)
      console.log('category=====', category)
      const status = 'ok';
      if (status === 'ok') {
        yield put({ 
          type: 'save',
          payload: {
            categoryList: category.allCategoryList[category.tagCheckId]
          } 
        });
      }
    },
    *changeTab({ payload }, { call, put, select }) {
      const category = yield select(state => state.category)
      const { id } = payload;
      const checkId = id-2 > 0 ? id-2 : 0;
      yield put({
        type: 'save',
        payload: {
          tagCheckId: id,
          categoryList: category.allCategoryList[id],
          tagCheckView: `check${checkId}`
        }
      }) 
    }
  },
 
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
 
};
