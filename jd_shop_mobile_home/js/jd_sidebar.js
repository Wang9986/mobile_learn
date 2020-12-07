window.onload = function(){
    
    var list = [
        "热门推荐",
        "手机数码",
        "电脑办公",
        "家用电器",
        "计生情趣",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母婴童鞋",
        "图书音像",
        "运动户外",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家居家装",
        "家具厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活",
        "礼品鲜花",
        "农资绿植",
        "生活旅行",
        "奢饰品",
        "京东国际",
        "艺术邮币",
        "二手商品",
        "特产馆",
        "京东金融",
        "国际名牌",
        "拍卖",
        "房产",
        "工业品"
    ];
    
    function query(selector) {
        //selector: css选择器
        return document.querySelector(selector);
    };
    
    var hd_Height = query(".header").offsetHeight;
    var ft_Height = query(".footer").offsetHeight;
    var td_Height = query(".sidebar").offsetHeight;
    
    var l_ul = query(".sidebar .sidebar_left ul");
    list.forEach(function (v, i) {
        var lis = document.createElement("li");
        var liText = document.createTextNode(v);
        lis.appendChild(liText);
        l_ul.appendChild(lis);
    });
    
    
    var r_ul = query(".sidebar .sidebar_right ul");
    list.forEach(function (v, i) {
        var lis = document.createElement("li");
        var liText = document.createTextNode(v);
        lis.appendChild(liText);
        r_ul.appendChild(lis);
    });
    
    var l_lis = document.querySelectorAll(".sidebar .sidebar_left ul li");
    var r_lis = document.querySelectorAll(".sidebar .sidebar_right ul li");
    l_lis[0].className = "hover";
    r_lis[0].style.display = "block";
    
    for (var i = 0; i < l_lis.length; i++) {
        l_lis[i].setAttribute("data-i", i);
    }
    
    // 左侧栏目滑动
    var tb_l = query(".sidebar .sidebar_left");
    
    // 记录开始位置
    var startY = 0;
    // 记录当前位置
    var nowY = 0;
    var eve = {};
    
    tb_l.ontouchstart = function (e) {
        // 赋值当前与顶部的距离
        var target = e.target;
        eve = {
            click:function () {
                for (var j = 0; j < r_lis.length; j++) {
                    l_lis[j].className = "";
                    r_lis[j].style.display = "none";
                }
                target.className = "hover";
                var index = target.getAttribute("data-i");
                r_lis[index].style.display = "block";
            }
        }
        nowY = this.offsetTop;
        startY = e.targetTouches[0].pageY;
    };
    tap(tb_l, function () {
        eve.click();
    });
    
    tb_l.ontouchmove = function (e) {
    
        // 阻止浏览器默认行为
        e.preventDefault();
    
        var moveY = e.targetTouches[0].pageY;
    
        var boxY = moveY - startY + nowY;
    
        var maxY = -(l_ul.offsetHeight + ft_Height - td_Height);
        if (boxY > hd_Height) {
            boxY = hd_Height;
        } else if (boxY < maxY) {
            boxY = maxY;
        }
    
        this.style.marginTop = boxY + "px";
    };
}