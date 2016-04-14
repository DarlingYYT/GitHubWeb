function chkname(){
	var name = document.getElementById("name").value;
	var obj = document.getElementById("error1");
	var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
	if (name!=""){
		if(reg.test(name)){
			obj.innerText = '';
		}else{
			obj.innerText = '';
			obj.innerHTML = "<span style='font-size:10px;color:#f63;background:peachpuff;'>名字必须为汉字！</span>";
		}	
	}else{
		obj.innerText = '';
		obj.innerHTML = "<span style='font-size:10px;color:#f63;background:peachpuff;'>名字不能为空！</span>";
	}
}

function selyear(){
	var date = new Date();
	var year = date.getFullYear();
	var y = document.getElementById("year");
	var str = "";
	var month = date.getMonth();
	for(var i = 1900 ; i <= year ; i++){
		str += "<option>"+i+"</option>";
	}
	y.innerHTML = str;
}

function selmonth(){
	var date = new Date();
	var month = date.getMonth();
	var m = document.getElementById("month");
	var str = "";
	for(var i = 1 ; i <= 12 ; i++){
		str += "<option>"+i+"</option>";
	}
	m.innerHTML = str;
}

function selday(){
	var date = new Date();
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	
	var d = document.getElementById("day");
	var str = "";
	var leap = 0;
	var plus = 0;
	if(((year%4==0)&&(year%100!=0))||(year%400==0)){
		leap = 1;	
	}else{
		leap = 0;
	}
	switch(month){
		case 1:case 3:case 5:case 7:case 8:case 10:case 12:plus = 3;break;
		case 4:case 6:case 9:case 11:plus = 2;break;
		case 2:plus = leap;break;
	}
	
	
	for(var i = 1 ; (i <= 28+plus) ; i++){
		str += "<option>"+i+"</option>";
	}
	d.innerHTML = str;
}

function mstyle(){
	var f = document.getElementById("female");
	f.style.background = "#fff";
	f.style.color = "#3d9ccc";	
	var m = document.getElementById("male");
	m.style.background = "#3d9ccc";
	m.style.color = "#fff";
}

function fstyle(){
	var m = document.getElementById("male");
	m.style.background = "#fff";
	m.style.color = "#3d9ccc";
	var f = document.getElementById("female");
	f.style.background = "#3d9ccc";
	f.style.color = "#fff";
}

function chknum(){
	var n = document.getElementById("num").value;
	var obj = document.getElementById("error2");
	if (n!=""){
		if( /^1\d{10}$/.test(n)){
			obj.innerText = '';
		}else{
			obj.innerText = '';
			obj.innerHTML = "<span style='font-size:10px;color:#f63;background:peachpuff;'>电话号码格式错误！</span>";
		}
	}else{
		obj.innerText = '';
		obj.innerHTML = "<span style='font-size:10px;color:#f63;background:peachpuff;'>电话号码不能为空！</span>";
	}	
}

function chkemail(){
	var e = document.getElementById("email").value;
	var obj = document.getElementById("error3");
	if (e!=""){
		if( /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(e)){
			obj.innerText = '';
		}else{
			obj.innerText = '';
			obj.innerHTML = "<span style='font-size:10px;color:#f63;background:peachpuff;'>邮箱格式错误！</span>";
		}
	}else{
		obj.innerText = '';
		obj.innerHTML = "<span style='font-size:10px;color:#f63;background:peachpuff;'>邮箱不能为空！</span>";
	}
}

function addcity(){
	var c = document.getElementById("city");
	var str = "";
	for(var i = 1 ; i <= 12 ; i++){
		str += "<option></option>";
	}
	c.innerHTML = str;
}

function addedu(){
	var e = document.getElementById("edu");
	var str = "";
		str += "<option>博士后</option>";
		str += "<option>博士</option>";
		str += "<option>MBA/EMBA</option>";
		str += "<option>硕士</option>";
		str += "<option>本科</option>";
		str += "<option>大专</option>";	
	e.innerHTML = str;
}














