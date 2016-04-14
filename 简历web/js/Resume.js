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
	for(var i = 1980 ; i <= year ; i++){
		str += "<option>"+i+"</option>";
	}
	y.innerHTML = str;
}

function selyear1(){
	var date = new Date();
	var year = date.getFullYear();
	var y = document.getElementById("year1");
	var str = "";
	var month = date.getMonth();
	for(var i = 2016 ; i <= 2020 ; i++){
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




// function selskill(){
	// var a = document.getElementsByName("skill");
	// for(var i = 0; i < a.length; i++)
	// {
		// var id = a[i].getAttribute("id");
		// var str = "";
		// str += "<option>"+id+"</option>"
		// str += "<option>一般</option>";
		// str += "<option>了解</option>";
		// str += "<option>熟悉</option>";
		// str += "<option>精通</option>";
		// a[i].innerHTML = str;
	// }
// }



function chkintern()
{
	var i = parseInt(document.getElementById("intern").value);
		if (i){
			var n = document.getElementsByName('intdetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='block';
				}	
		}else{
			var n = document.getElementsByName('intdetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='none';
				}
		}
}

function chkpro()
{
	var i = parseInt(document.getElementById("project").value);
		if (i){
			var n = document.getElementsByName('prodetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='block';
				}	
		}else{
			var n = document.getElementsByName('prodetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='none';
				}
		}
}

function chkcor()
{
	var i = parseInt(document.getElementById("corporation").value);
		if (i){
			var n = document.getElementsByName('cordetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='block';
				}	
		}else{
			var n = document.getElementsByName('cordetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='none';
				}
		}
}

function chkgame()
{
	var i = parseInt(document.getElementById("game").value);
		if (i){
			var n = document.getElementsByName('gamedetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='block';
				}	
		}else{
			var n = document.getElementsByName('gamedetail');
				for(j=0;j<n.length;j++){
					n[j].style.display='none';
				}
		}
}





