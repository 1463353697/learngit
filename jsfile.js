window.onload = function(){


	// 红店铺和新开张之间的点击切换
	//取得hotshop头部
	var hotshop_head = document.getElementById('hotshop_head');
	//取得newshop的头部
	var newshop_head = document.getElementById('newshop_head');
	//取得hotshop的内容
	var hotshop_block = document.getElementById('shop_showblock');
	//取得newshop的内容
	var newshop_block = document.getElementById('shop_hideblock');
	hotshop_head.onclick = function(){
		hotshop_head.className = "show_hotshop_head";
		newshop_head.className = "hide_hotshop_head";
		hotshop_block.className = "shop_showblock";
		newshop_block.className = "shop_hideblock";
	}
	newshop_head.onclick = function(){
		hotshop_head.className = "hide_hotshop_head";
		newshop_head.className = "show_hotshop_head";
		hotshop_block.className = "shop_hideblock";
		newshop_block.className = "shop_showblock";
	}

	//subway和map之间的点击切换

	//取得subway的头部
	var subwayhead = document.getElementById("subwayhead");
	//取得map的头部
	var maphead = document.getElementById("maphead");
	//取得subway的图片
	var sub_img = document.getElementById("sub_map_showimg");
	//取得map的图片
	var map_img = document.getElementById("sub_map_hideimg");
	subwayhead.onclick = function(){
		subwayhead.className = "show_subormap";
		maphead.className = "hide_subormap";
		sub_img.className = "sub_map_showimg";
		map_img.className = "sub_map_hideimg";
	}
	maphead.onclick = function(){
		maphead.className = "show_subormap";
		subwayhead.className = "hide_subormap";
		map_img.className = "sub_map_showimg";
		sub_img.className = "sub_map_hideimg";
	}

  //日历部分隐藏图片的显示,有很大的问题

	var calendarimg = document.getElementById('calendarlist').getElementsByTagName('img');
	var calendar_hide1 = document.getElementsByClassName('calendar_hide1');
	var calendar_hide2 = document.getElementsByClassName('calendar_hide2');
	var calendar_hide3 = document.getElementsByClassName('calendar_hide3');
	var calendar_hide4 = document.getElementsByClassName('calendar_hide4');
	calendarimg[1].onmouseover = function(){
		calendar_hide1.className = 'calendar_show1';
	}
	calendarimg[2].onmouseover = function(){
		calendar_hide2.className = 'calendar_show2';
	}
	calendarimg[3].onmouseover = function(){
		calendar_hide3.className = 'calendar_show3';
	}
	calendarimg[4].onmouseover = function(){
		calendar_hide4.className= 'calendar_show4';
	}



    //COUPONS部分的动态效果
	var shop_information_head = document.getElementById('shop_information_head');
		var shop_head_block = shop_information_head.getElementsByTagName('a');
		var showshopblock = document.getElementById('showshopblock');
		var shopblock = showshopblock.getElementsByTagName('li');
		for (var i = 0; i < shop_head_block.length; i++) {
			shop_head_block[i].index = i;
			shop_head_block[i].onmouseover = function(){
				for (var j = 0; j < shop_head_block.length; j++) {
					shop_head_block[j].className = "hide_shopif_head";
					shopblock[j].className = "hideshop_information_block";

				}
				this.className = "show_shopif_head";
				shopblock[this.index].className = "showshop_information_block";

			}

		}

        //LIFESTYLE ADVICE部分的动态效果
		var kownp_head = document.getElementById('kownp_head');
		var show_hide_kownp = kownp_head.getElementsByTagName('a');
		var show_kownp_block = document.getElementById('show_kownp_block');
		var show_hidek_list = show_kownp_block.getElementsByTagName('li');
		for (var i = 0; i < show_hide_kownp.length; i++) {
			show_hide_kownp[i].index=i;
			show_hide_kownp[i].onmouseover = function(){
				for (var j = 0; j < show_hide_kownp.length; j++) {
					show_hide_kownp[j].className = "hide_kownp_head";
					show_hidek_list[j].className = "hide_kownp_list";
					this.className = "show_kownp_head";
					show_hidek_list[this.index].className = "show_kownp_list";

				}
			}

		}


       // RECOMMDNE部分图片自动播放，存在bug：点击小图片之后，还是会从第一张开始播放
		var showimgblock = document.getElementById('big_img_list');
		var big_img  =  showimgblock.getElementsByTagName('a');
		var small_img = document.getElementById('imglist').getElementsByTagName('img');

		//点击时切换图片
		for (var i = 0; i < small_img.length; i++) {
			small_img[i].index = i;
			small_img[i].onclick = function(){
				for (var j = 0; j < small_img.length; j++) {
					small_img[j].className = "hide_small_img";
					big_img[j].className = "hide_img";

				}
				this.className = "show_small_img";
				big_img[this.index].className = "show_img";

			}

		}
		//自动播放图片
		// var img = document.getElementsByTagName('img');
		// var index = img.getAttribute('index');
		var index = 1;
		var timer;
            //定义一个函数,自动轮播图片
            function play() {
               timer = setInterval(function showimg(){
			
			index+= 1;
			if (index>3) {
				index = 1;
			}
			for (var j = 0; j < small_img.length; j++) {
					small_img[j].className = "hide_small_img";
					big_img[j].className = "hide_img";

				}
				small_img[index-1].className = "show_small_img";
				big_img[index-1].className = "show_img";


		}, 1000)
            }
            //调用此函数
            play();
         function stop() {
                clearInterval(timer);
            }

            //鼠标移出和移入图片时分别调用不同的函数
        showimgblock.onmouseover = stop;
        showimgblock.onmouseout = play; 
        small_img[0].onmouseover = stop;
        small_img[0].onmouseout = play;
        small_img[1].onmouseover = stop;
        small_img[1].onmouseout = play;
        small_img[2].onmouseover = stop;
        small_img[2].onmouseout = play;



        // var h3input = document.getElementById('h3input');
        // h3input.setAttribute("value",""); 
        //切换导航，表单里出现不同的新闻推荐
        var h3input = document.getElementById("header3nav_content").getElementsByTagName('input');

        var h3navlist = document.getElementById("header3nav").getElementsByTagName('li');
        for (var i = 0; i < h3navlist.length; i++) {
        	h3navlist[i].index = i;
          	h3navlist[i].onclick = function(){
          		for (var j = 0; j < h3navlist.length; j++) {

          			h3navlist[j].className = "hide_h3nav";
          			h3input[j].className = "hide_h3input";
          		}
          		this.className = "show_h3nav";
          		h3input[this.index].className = "";

          		// h3input[this.index].setAttribute("value","acfg");
          	}
          }
          //这里还需要设置当表单获得焦点时，清空表单的内容
          // h3input[0].onfocus = function(){
          // 	this.innerHTML = "";
          // }


         //bbs部分的动态效果
          var bbsli = document.getElementById("bbsblock").getElementsByTagName('li');
          
          for (var i = 0; i < bbsli.length; i++) {
          	bbsli[i].index = i;
       
          	bbsli[i].onmouseover = function(){
          		// bbsli[i].index = i;
          	    var bbsli_div = bbsli[this.index].getElementsByTagName('div');
          		bbsli_div[1].className = "";
          		bbsli_div[0].className = "bbshidelist";
          	}
          	bbsli[i].onmouseout = function(){
          		// bbsli[i].index = i;
          	    var bbsli_div = bbsli[this.index].getElementsByTagName('div');
          		bbsli_div[0].className = "";
          		bbsli_div[1].className = "bbshidelist";
          	}
          }


        var xmlhttp = null;
		if(window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
		}
		else{
			xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
		}
//连接服务器
     	xmlhttp.open("GET","http://rapapi.org/mockjsdata/35188/org/index.do",true); 

//发送数据或请求
	 	xmlhttp.send("");
//监听响应状态
		xmlhttp.onreadystatechange=function(){	
			if(xmlhttp.readyState==4){ //连接服务器成功
			//判断服务器响应状态
				if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
	 	    	var alldatas = JSON.parse(xmlhttp.responseText) 
	 	    	var lilist = document.getElementById('hotperson_imgs').getElementsByTagName('li');
	 	    	lilist[0].innerHTML = "<img src='"+alldatas.imgs[0]+"'>"

	 			lilist[1].innerHTML = "<img src='"+alldatas.imgs[1]+"'>"
	 			+"<div><span><p>"+alldatas.list1[0]+"</p>"
	 			+"<p>"+alldatas.list2[0]+"</p></span></div>"

	 			lilist[2].innerHTML = "<img src='"+alldatas.imgs[2]+"'>"
	 			+"<div id='bigimg'><span><p>"+alldatas.list1[1]+"</p>"
	 			+"<p>"+alldatas.list2[1]+"</p>"+"<p>"+alldatas.list3+"</p></span></div>"

	 			lilist[3].innerHTML = "<img src='"+alldatas.imgs[3]+"'>"
	 			+"<div><span><p>"+alldatas.list1[2]+"</p>"
	 			+"<p>"+alldatas.list2[2]+"</p></span></div>"

	 			lilist[4].innerHTML = "<img src='"+alldatas.imgs[4]+"'>"
	 			+"<div><span><p>"+alldatas.list1[3]+"</p>"
	 			+"<p>"+alldatas.list2[3]+"</p></span></div>"

	 			lilist[5].innerHTML = "<img src='"+alldatas.imgs[5]+"'>"
	 			+"<div><span><p>"+alldatas.list1[4]+"</p>"
	 			+"<p>"+alldatas.list2[4]+"</p></span></div>"

	 			lilist[6].innerHTML = "<img src='"+alldatas.imgs[6]+"'>"
	 			+"<div><span><p>"+alldatas.list1[5]+"</p>"
	 			+"<p>"+alldatas.list2[5]+"</p></span></div>"

	 			lilist[7].innerHTML = "<img src='"+alldatas.imgs[7]+"'>"
	 			+"<div><span><p>"+alldatas.list1[6]+"</p>"
	 			+"<p>"+alldatas.list2[6]+"</p></span></div>"

	 			lilist[8].innerHTML = "<img src='"+alldatas.imgs[8]+"'>"
	 			+"<div><span><p>"+alldatas.list1[7]+"</p>"
	 			+"<p>"+alldatas.list2[7]+"</p></span></div>"

	 			lilist[9].innerHTML = "<img src='"+alldatas.imgs[9]+"'>"
	 			+"<div><span><p>"+alldatas.list1[8]+"</p>"
	 			+"<p>"+alldatas.list2[8]+"</p></span></div>"

	 			lilist[10].innerHTML = "<img src='"+alldatas.imgs[10]+"'>"
	 			+"<div><span><p>"+alldatas.list1[9]+"</p>"
	 			+"<p>"+alldatas.list2[9]+"</p></span></div>"





				}
				else{
					alert("请求失败!");
				}
			}
		}

		var nav = document.getElementById('navlogos');
  		var navspan = nav.getElementsByTagName('span');
  		var navli = nav.getElementsByTagName('li');
  		for (var i = 0; i < navspan.length; i++) {
  			navspan[i].index = i;
  		 	navspan[i].onmouseover = function(){
  		 		for (var j = 0; j < navspan.length; j++) {
  		 			navspan[j].className = "";
  		 			navli[j].className = "hidelogo";
  		 		}
  		 		this.className = "hidelogo";
  		 		navli[this.index].className = "";

  		 	}
  		 } 
  		

       

		








	
}