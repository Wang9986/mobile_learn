 function tap( dom, callback ){
            var startTime = 0;
            var endTime = 0;
            dom.addEventListener("touchstart",function(){
                // 记录按下屏幕的时间
                startTime = Date.now();
            });
            dom.addEventListener("touchend",function(){
                // 记录松开屏幕的时间
                endTime = Date.now();
                // 计算他们的时间差  毫秒为单位
                var ms =  endTime - startTime;
                // 判断两个时间差
                if( ms < 150 ){// 是轻触事件
                    /* if( callback ){
                        callback();
                    } */

                    callback && callback();
                }
            });
        }