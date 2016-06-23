
//加载HOME中三个图片轮播
function loadSlide(){
  var curIndex = 0; 
  var timeInterval = 2500; 
  var arr = new Array(); 
  arr[0] = "images/slide_1.jpg"; 
  arr[1] = "images/slide_2.jpg"; 
  arr[2] = "images/slide_3.jpg"; 
  setInterval(changeImg,timeInterval); 
  function changeImg() { 
   var obj = document.getElementById("slide-image"); 
   if (curIndex == arr.length-1) { 
    curIndex = 0; 
   } else { 
    curIndex += 1; 
     } 
   obj.src = arr[curIndex]; 
  } 
}

//加载ABOUT中左侧高度随右侧自适应变化
function loadHeight(){
document.getElementById("about-left").style.height=document.getElementById("about-right").offsetHeight+"px"; 
}

//轮播
function loadturn(){
	var container = document.getElementById('sayings');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index=1;
    var len=4;
    var animated=false;
    var interval=3000;
    var timer;

    function animate (offset) {
        animated = true;     //切换进行中
        var time = 300;     //位移总时间
        var inteval = 10;   //位移间隔时间
        var speed = offset/(time/inteval);   //每次位移量
        var left = parseInt(list.style.left) + offset; //目标值   
        var go = function (){
            //这两种情况表示还在切换中
         if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval); //继续执行切换go()函数
            }
            else {
                list.style.left = left + 'px';
                if(left>1000){
                    list.style.left = -1300 * len + 'px';
                }
                if(left<(-1200 * len)) {
                    list.style.left = '-1300px';
                }
                animated = false; //切换完成
            }
        }
        go();
    }
   //用于为按钮添加样式
    function showButton() {
        //先找出原来有.on类的按钮，并移除其类
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        //为当前按钮添加类
        buttons[index - 1].className = 'on';
    }
     //自动播放
    function play() {
        timer = setTimeout(function () {
            play();
        }, interval);
    }
     //清除定时器
    function stop() {
        clearTimeout(timer);
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {         //如果切换还在进行，则直接结束，直到切换完成
                return;
            }
            if(this.className == 'on') {     //如果点击的按钮是当前的按钮，不切换，结束
                return;
            }
            //获取按钮的自定义属性index，用于得到索引值
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1300 * (myIndex - index);   //计算总的位移量

            animate(offset);
            index = myIndex;   //将新的索引值赋值index
            showButton();
        }
    }

    sayings.onmouseover = stop;//父容器的移入移出事件
    sayings.onmouseout = play;

    play();  //调用自动播放函数

}






function load(){
	loadSlide();
	setInterval(loadHeight,20);
	loadturn();

}

document.body.onload = load();
