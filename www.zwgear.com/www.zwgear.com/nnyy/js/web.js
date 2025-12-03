
//瀵艰埅鎸夐挳

$(".header .nav_handle").click(function(){
	$(".inmuen").slideToggle();
	$(this).toggleClass("on");
});

$(window).scroll(function(){
	if($(window).scrollTop()>=100){
		$(".header").addClass("header_on");
	}else{
		$(".header").removeClass("header_on")
	}
});


//杩斿洖椤堕儴
$(window).scroll(function () {
	if ($(window).scrollTop()>=300) {
		$(".rcallb").fadeIn();
	}else{
		$(".rcallb").fadeOut();
	}
});


$(window).scroll(function(){
	if($(window).scrollTop()>=100){
		$(".nnyo").addClass("nyon");
		$(".kloy").addClass("buf");
	}else{
		$(".nnyo").removeClass("nyon");
		$(".kloy").removeClass("buf");
	}
});


$(".nav_handle").click(function(){
	$(".nnyom").slideToggle();
	$(this).toggleClass("on");
});



$(".rcallb").click(function(){
                $('body,html').animate({scrollTop:0},500);
				$(".header").removeClass("hshow");
                return false;
});

$(".lsn3").click(function(){
				$(".langa").addClass("rssy");
				$(".langsrch").addClass("assc");
                return false;
});

$(".langsrchc").click(function(){
				$(".langa").removeClass("rssy");
				$(".langsrch").removeClass("assc");
                return false;
});

$(".mover").mouseover(function(){
	 if ($(this).hasClass("hover")) {
    } else {
		  $(".mover").removeClass("hover");
        $(this).addClass("hover");
    }
	});

$(".rtgf1").mouseover(function(){
	 if ($(this).hasClass("rtgon")) {
    } else {
		  $(".rtgf").removeClass("rtgon");
        $(this).addClass("rtgon"); 
        $(".roman").removeClass("romon");
        $(".rom1").addClass("romon"); 		
    }
	});

$(".rtgf2").mouseover(function(){
	 if ($(this).hasClass("rtgon")) {
    } else {
		  $(".rtgf").removeClass("rtgon");
        $(this).addClass("rtgon"); 
        $(".roman").removeClass("romon");
        $(".rom2").addClass("romon"); 		
    }
	});
$(".rtgf3").mouseover(function(){
	 if ($(this).hasClass("rtgon")) {
    } else {
		  $(".rtgf").removeClass("rtgon");
        $(this).addClass("rtgon"); 
        $(".roman").removeClass("romon");
        $(".rom3").addClass("romon"); 		
    }
	});








$(".crok1").mouseover(function(){
	var cara = document.getElementById("fjtbbn");
	 if ($(this).hasClass("ccon")) {
    } else {
		  $(".crok").removeClass("ccon");
        $(this).addClass("ccon"); 
        $(".kgang").removeClass("ugo");
        $(".gang1").addClass("ugo"); 		
    }
	});
$(".crok2").mouseover(function(){
	var cara = document.getElementById("fjtbbn");
	 if ($(this).hasClass("ccon")) {
    } else {
		  $(".crok").removeClass("ccon");
        $(this).addClass("ccon"); 
        $(".kgang").removeClass("ugo");
        $(".gang2").addClass("ugo"); 		
    }
	});
$(".crok3").mouseover(function(){
	var cara = document.getElementById("fjtbbn");
	 if ($(this).hasClass("ccon")) {
    } else {
		  $(".crok").removeClass("ccon");
        $(this).addClass("ccon"); 
         $(".kgang").removeClass("ugo");
        $(".gang3").addClass("ugo"); 		
    }
	});
$(".crok4").mouseover(function(){
	var cara = document.getElementById("fjtbbn");
	 if ($(this).hasClass("ccon")) {
    } else {
		  $(".crok").removeClass("ccon");
        $(this).addClass("ccon"); 
         $(".kgang").removeClass("ugo");
        $(".gang4").addClass("ugo"); 		
    }
	});
$(".crok5").mouseover(function(){
	var cara = document.getElementById("fjtbbn");
	 if ($(this).hasClass("ccon")) {
    } else {
		  $(".crok").removeClass("ccon");
        $(this).addClass("ccon"); 
         $(".kgang").removeClass("ugo");
        $(".gang5").addClass("ugo"); 		
    }
	});

$(".ysuobar").mouseover(function(){
	 if ($(this).hasClass("hebi")) {
        $(this).removeClass("hebi");
		$(".ysuobal").addClass("hebi");
    } else {		
    }
	});
$(".ysuobal").mouseover(function(){
	 if ($(this).hasClass("hebi")) {
        $(this).removeClass("hebi");
		$(".ysuobar").addClass("hebi");
    } else {		
    }
	});

$(".rcalla2").mouseout(function(){
		$(".rcalla3").removeClass("dsba");
	});
$(".rcalla4").mouseout(function(){
		$(".rcalla3").removeClass("dsba");
	});



$(".rcalla2").mouseover(function(){
		$(".rcalla3").addClass("dsba");
	});
$(".rcalla4").mouseover(function(){
		$(".rcalla3").addClass("dsba");
	});







$('.plaf').click(function() {
       $('.lcspp').addClass("clon");
		$('.lcsp').addClass("clon");
       $('.lcspc').addClass("clon");
       tv.play();
	   av.pause();
 });

$('.lcspp').click(function() {
       $('.lcspp').removeClass("clon");
		$('.lcsp').removeClass("clon");
        $('.lcspc').removeClass("clon"); 
	    tv.pause();
		av.play();
 });
 
 $('.lcspc').click(function() {
        $('.lcspp').removeClass("clon");
		$('.lcsp').removeClass("clon");
        $('.lcspc').removeClass("clon");
        tv.pause();
	    av.play();
 });



$(".dyj1").click(function(){
	 if ($(this).hasClass("cdat")) {
		  $(this).removeClass("cdat");
		  $(".locok1").hide("");
		  $(".hexiua").removeClass("cdata");
		  $(".vlpp").slideUp("fast");
    } else {
		$(".hexiu").removeClass("cdat");
		$(this).addClass("cdat");
		$(".vlp").slideUp("fast");
		$(".locok1").slideDown("fast");		
    }
	});
$(".dyj2").click(function(){
	 if ($(this).hasClass("cdat")) {
		  $(this).removeClass("cdat");
		  $(".locok2").hide("");
		  $(".hexiua").removeClass("cdata");
		  $(".vlpp").slideUp("fast");
    } else {
		$(".hexiu").removeClass("cdat");
		$(this).addClass("cdat");
		$(".vlp").slideUp("fast");
		$(".locok2").slideDown("fast");		
    }
	});
$(".dyj3").click(function(){
	 if ($(this).hasClass("cdat")) {
		  $(this).removeClass("cdat");
		  $(".locok3").hide("");
		  $(".hexiua").removeClass("cdata");
		  $(".vlpp").slideUp("fast");
    } else {
		$(".hexiu").removeClass("cdat");
		$(this).addClass("cdat");
		$(".vlp").slideUp("fast");
		$(".locok3").slideDown("fast");		
    }
	});
$(".dyj4").click(function(){
	 if ($(this).hasClass("cdat")) {
		  $(this).removeClass("cdat");
		  $(".locok4").hide("");
		  $(".hexiua").removeClass("cdata");
		  $(".vlpp").slideUp("fast");
    } else {
		$(".hexiu").removeClass("cdat");
		$(this).addClass("cdat");
		$(".vlp").slideUp("fast");
		$(".locok4").slideDown("fast");		
    }
	});
$(".dyj5").click(function(){
	 if ($(this).hasClass("cdat")) {
		  $(this).removeClass("cdat");
		  $(".locok5").hide("");
		  $(".hexiua").removeClass("cdata");
		  $(".vlpp").slideUp("fast");
    } else {
		$(".hexiu").removeClass("cdat");
		$(this).addClass("cdat");
		$(".vlp").slideUp("fast");
		$(".locok5").slideDown("fast");		
    }
	});
$(".dyj6").click(function(){
	 if ($(this).hasClass("cdat")) {
		  $(this).removeClass("cdat");
		  $(".locok6").hide("");
		  $(".hexiua").removeClass("cdata");
		  $(".vlpp").slideUp("fast");
    } else {
		$(".hexiu").removeClass("cdat");
		$(this).addClass("cdat");
		$(".vlp").slideUp("fast");
		$(".locok6").slideDown("fast");		
    }
	});
	
$(".dyj11").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokk1").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokk1").slideDown("fast");		
    }
	});

$(".dyj12").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokk2").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokk2").slideDown("fast");		
    }
	});

$(".dyj13").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokk3").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokk3").slideDown("fast");		
    }
	});

$(".dyj21").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl1").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl1").slideDown("fast");		
    }
	});
$(".dyj22").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl2").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl2").slideDown("fast");		
    }
	});
$(".dyj23").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl3").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl3").slideDown("fast");		
    }
	});
$(".dyj24").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl4").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl4").slideDown("fast");		
    }
	});
$(".dyj25").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl5").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl5").slideDown("fast");		
    }
	});
$(".dyj26").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl6").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl6").slideDown("fast");		
    }
	});
$(".dyj27").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl7").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl7").slideDown("fast");		
    }
	});
$(".dyj28").click(function(){
	 if ($(this).hasClass("cdata")) {
		  $(this).removeClass("cdata");
		  $(".locokl8").hide("");
    } else {
		$(".hexiua").removeClass("cdata");
		$(this).addClass("cdata");
		$(".vlpp").slideUp("fast");
		$(".locokl8").slideDown("fast");		
    }
	});
	

$(".kza").click(function(){
	 if ($(this).hasClass("kaka")) {
    } else {
		$(".kezhia").removeClass("kaka");
		$(this).addClass("kaka");
		$(".zqie").removeClass("unsd");
		$(".cdana").addClass("unsd");	
    }
	});
$(".kzb").click(function(){
	 if ($(this).hasClass("kaka")) {
    } else {
		$(".kezhia").removeClass("kaka");
		$(this).addClass("kaka");
		$(".zqie").removeClass("unsd");
		$(".cdanb").addClass("unsd");	
    }
	});
	
//

$(".rrua").click(function() {
    if ($(this).hasClass("rcan")) {
    } else {
        $(".rroxs").removeClass("rcan");
        $(this).addClass("rcan");
        $('html, body').animate({scrollTop: 2500},300);return false;
    }
});
$(".rua").click(function() {
    if ($(this).hasClass("can")) {
    } else {
        $(".roxs").removeClass("can");
        $(this).addClass("can");
        $('html, body').animate({scrollTop: 2500},300);return false;
    }
});

$(".rrub").click(function() {
    if ($(this).hasClass("rcan")) {
    } else {
        $(".rroxs").removeClass("rcan");
        $(this).addClass("rcan");
        $('html, body').animate({scrollTop: 3340},300);return false;
    }
});
$(".rub").click(function() {
    if ($(this).hasClass("can")) {
    } else {
        $(".roxs").removeClass("can");
        $(this).addClass("can");
        $('html, body').animate({scrollTop: 3340},300);return false;
    }
});
$(".rruc").click(function() {
    if ($(this).hasClass("rcan")) {
    } else {
        $(".rroxs").removeClass("rcan");
        $(this).addClass("rcan");
        $('html, body').animate({scrollTop: 4200},300);return false;
    }
});
$(".ruc").click(function() {
    if ($(this).hasClass("can")) {
    } else {
        $(".roxs").removeClass("can");
        $(this).addClass("can");
        $('html, body').animate({scrollTop: 4200},300);return false;
    }
});
$(".rrud").click(function() {
    if ($(this).hasClass("rcan")) {
    } else {
        $(".rroxs").removeClass("rcan");
        $(this).addClass("rcan");
        $('html, body').animate({scrollTop: 5160},300);return false;
    }
});
$(".rud").click(function() {
    if ($(this).hasClass("can")) {
    } else {
        $(".roxs").removeClass("can");
        $(this).addClass("can");
        $('html, body').animate({scrollTop: 5160},300);return false;
    }
});
$(window).scroll(function(){
	if(($(window).scrollTop()>=500) && ($(window).scrollTop()<=3000)){
		 $(".roxs").removeClass("can");
		 $(".rroxs").removeClass("rcan");
         $(".rua").addClass("can");
		 $(".rrua").addClass("rcan");
	}else if(($(window).scrollTop()>=3100)&&($(window).scrollTop()<=3900)){
		$(".roxs").removeClass("can");
		 $(".rroxs").removeClass("rcan");
         $(".rub").addClass("can");
		 $(".rrub").addClass("rcan");
	}else if(($(window).scrollTop()>=4000)&&($(window).scrollTop()<=4600)){
		$(".roxs").removeClass("can");
		 $(".rroxs").removeClass("rcan");
         $(".ruc").addClass("can");
		 $(".rruc").addClass("rcan");
	}else if(($(window).scrollTop()>=4700)&&($(window).scrollTop()<=6800)){
		$(".roxs").removeClass("can");
		 $(".rroxs").removeClass("rcan");
         $(".rud").addClass("can");
		 $(".rrud").addClass("rcan");
	}
});

//

$(".frua").click(function() {
    if ($(this).hasClass("fcan")) {
    } else {
        $(".froxs").removeClass("fcan");
        $(this).addClass("fcan");
        $('html, body').animate({scrollTop: 2700},300);return false;
    }
});

$(".frub").click(function() {
    if ($(this).hasClass("fcan")) {
    } else {
        $(".froxs").removeClass("fcan");
        $(this).addClass("fcan");
        $('html, body').animate({scrollTop: 3700},300);return false;
    }
});

$(".fruc").click(function() {
    if ($(this).hasClass("fcan")) {
    } else {
        $(".froxs").removeClass("fcan");
        $(this).addClass("fcan");
        $('html, body').animate({scrollTop: 4900},300);return false;
    }
});

$(".ffrua").click(function() {
    if ($(this).hasClass("fcan")) {
    } else {
        $(".ffroxs").removeClass("fcan");
        $(this).addClass("fcan");
        $('html, body').animate({scrollTop: 2700},300);return false;
    }
});

$(".ffrub").click(function() {
    if ($(this).hasClass("fcan")) {
    } else {
        $(".ffroxs").removeClass("fcan");
        $(this).addClass("fcan");
        $('html, body').animate({scrollTop: 3700},300);return false;
    }
});

$(".ffruc").click(function() {
    if ($(this).hasClass("fcan")) {
    } else {
        $(".ffroxs").removeClass("fcan");
        $(this).addClass("fcan");
        $('html, body').animate({scrollTop: 4900},300);return false;
    }
});



$(window).scroll(function(){
	if(($(window).scrollTop()>=500) && ($(window).scrollTop()<=3400)){
		 $(".froxs").removeClass("fcan");
		 $(".ffroxs").removeClass("fcan");
         $(".frua").addClass("fcan");
		 $(".ffrua").addClass("fcan");
	}else if(($(window).scrollTop()>=3500)&&($(window).scrollTop()<=4700)){
		 $(".froxs").removeClass("fcan");
         $(".frub").addClass("fcan");
		 $(".ffroxs").removeClass("fcan");
         $(".ffrub").addClass("fcan");
	}else if(($(window).scrollTop()>=4800)&&($(window).scrollTop()<=7000)){
		 $(".froxs").removeClass("fcan");
         $(".fruc").addClass("fcan");
		 $(".ffroxs").removeClass("fcan");
         $(".ffruc").addClass("fcan");
	}
});

	

//涓婄幇涓嬮殣
$(function(){

    window.onmousewheel = wheel;

         function wheel(e){

                  if(e.wheelDelta){

                     if(e.wheelDelta>0){

                             if(document.documentElement.scrollTop>0){

                            $(".header").removeClass("hshow");
                            $(".sbdkn").addClass("txiu");
                             }

                          }else{
                            $(".header").addClass("hshow");
                            $(".sbdkn").removeClass("txiu");
                          }

                  }

    }

});

//涓婄幇涓嬮殣
$(function(){

    window.onmousewheel = wheel;

         function wheel(e){

                  if(e.wheelDelta){

                     if(e.wheelDelta>0){

                             if(document.documentElement.scrollTop>0){

                            $(".nnyo").removeClass("hshow");
                            $(".sbdkn").addClass("txiu");
                             }

                          }else{
                            $(".nnyo").addClass("hshow");
                            $(".sbdkn").removeClass("txiu");
                          }

                  }

    }

});






// JavaScript Document
function setTab(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menu=document.getElementById(name+i); 
var con=document.getElementById("con_"+name+"_"+i); 
menu.className=i==cursel?"hover":""; 
con.style.display=i==cursel?"block":"none"; 
} 
} 



// tab

function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("dd");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
} 



/*莽禄鈥斆柯�2莽禄鈥懊ヂ垛€γㄋ喡懊ヂ柯�*/
function switchmodTag(modtag,modk) {
    for(i=1; i <20; i++) {
      if (i==modk) {
        document.getElementById(modtag+i).className=modtag+"On";document.getElementById(modtag+'a'+i).className=modtag;}
      else {
      if(document.getElementById(modtag+i)){
		  document.getElementById(modtag+i).className=modtag+"No";document.getElementById(modtag+'a'+i).className=modtag+"_none";}
	  }
    }
  }
//--> 

/*莽禄鈥斆柯�3莽禄鈥懊ヂ垛€γㄋ喡懊ヂ柯�*/

var tablink_idname = new Array("tablink","tab")
//Set the id name of your tabcontentarea (without a number at the end)
var tabcontent_idname = new Array("tabcontent","tabcont") 
//Set the number of your tabs
var tabcount = new Array("4","2")
//Set the Tab wich should load at start (In this Example:Tab 2 visible on load)
var loadtabs = new Array("1","1")  
//Set the Number of the Menu which should autochange (if you dont't want to have a change menu set it to 0)
var autochangemenu = 1;
//the speed in seconds when the tabs should change
var changespeed = 3;
//should the autochange stop if the user hover over a tab from the autochangemenu? 0=no 1=yes
var stoponhover = 0;
//END MENU SETTINGS

/*Swich EasyTabs Functions - no need to edit something here*/
function easytabs(menunr, active) {if (menunr == autochangemenu){currenttab=active;}if ((menunr == autochangemenu)&&(stoponhover==1)) {stop_autochange()} else if ((menunr == autochangemenu)&&(stoponhover==0))  {counter=0;}menunr = menunr-1;for (i=1; i <= tabcount[menunr]; i++){document.getElementById(tablink_idname[menunr]+i).className='tab'+i;document.getElementById(tabcontent_idname[menunr]+i).style.display = 'none';}document.getElementById(tablink_idname[menunr]+active).className='tab'+active+' tabactive';document.getElementById(tabcontent_idname[menunr]+active).style.display = 'block';}var timer; counter=0; var totaltabs=tabcount[autochangemenu-1];var currenttab=loadtabs[autochangemenu-1];function start_autochange(){counter=counter+1;timer=setTimeout("start_autochange()",1000);if (counter == changespeed+1) {currenttab++;if (currenttab>totaltabs) {currenttab=1}easytabs(autochangemenu,currenttab);restart_autochange();}}function restart_autochange(){clearTimeout(timer);counter=0;start_autochange();}function stop_autochange(){clearTimeout(timer);counter=0;}

window.onload=function(){
var menucount=loadtabs.length; var a = 0; var b = 1; do {easytabs(b, loadtabs[a]);  a++; b++;}while (b<=menucount);
if (autochangemenu!=0){start_autochange();}
}

//--> 



$(".alk1").click(function() {
	var cara = document.getElementById("csqh");
    if ($(this).hasClass("liso")) {
    } else {
        $(".alka").removeClass("liso");
        $(this).addClass("liso");
		cara.setAttribute('class','lisaocm1');
    }
});
$(".alk2").click(function() {
    var cara = document.getElementById("csqh");
    if ($(this).hasClass("liso")) {
    } else {
        $(".alka").removeClass("liso");
        $(this).addClass("liso");
		cara.setAttribute('class','lisaocm2');
    }
});
$(".alk3").click(function() {
    var cara = document.getElementById("csqh");
    if ($(this).hasClass("liso")) {
    } else {
        $(".alka").removeClass("liso");
        $(this).addClass("liso");
		cara.setAttribute('class','lisaocm3');
    }
});
$(".alk4").click(function() {
    var cara = document.getElementById("csqh");
    if ($(this).hasClass("liso")) {
    } else {
        $(".alka").removeClass("liso");
        $(this).addClass("liso");
		cara.setAttribute('class','lisaocm4');
    }
});
$(".alk5").click(function() {
    var cara = document.getElementById("csqh");
    if ($(this).hasClass("liso")) {
    } else {
        $(".alka").removeClass("liso");
        $(this).addClass("liso");
		cara.setAttribute('class','lisaocm5');
    }
});


$(".cls1").click(function() {
    var ffox = document.getElementById("ffox");
    if ($(this).hasClass("ccls")) {
    } else {
        $(".cals").removeClass("ccls");
        $(this).addClass("ccls");
		ffox.setAttribute('class','finfobx1');
    }
});
$(".cls2").click(function() {
    var ffox = document.getElementById("ffox");
    if ($(this).hasClass("ccls")) {
    } else {
        $(".cals").removeClass("ccls");
        $(this).addClass("ccls");
		ffox.setAttribute('class','finfobx2');
    }
});

$(".zkonl").click(function() {
    var kolon = document.getElementById("kolon");
    if ($(this).hasClass("aa1")) {
		
	} else if ($(this).hasClass("aa2"))  {
        $(this).removeClass("aa2");
		$(this).addClass("aa1");
		$(".zkonr").removeClass("bb2");
		$(".zkonr").addClass("bb1");
		kolon.setAttribute('class','kbt1');
    }else if ($(this).hasClass("aa3"))  {
        $(this).removeClass("aa3");
		$(this).addClass("aa2");
		$(".zkonr").removeClass("bb3");
		$(".zkonr").addClass("bb2");
		kolon.setAttribute('class','kbt2');
    }
	//else if ($(this).hasClass("aa4"))  {
        //$(this).removeClass("aa4");
		//$(this).addClass("aa3");
		//$(".zkonr").removeClass("bb4");
		//$(".zkonr").addClass("bb3");
		//kolon.setAttribute('class','kbt3');
    //}
});

$(".zkonr").click(function() {
    var kolon = document.getElementById("kolon");
    if ($(this).hasClass("bb1")) {
		 $(this).removeClass("bb1");
		$(this).addClass("bb2");
		$(".zkonl").removeClass("aa1");
		$(".zkonl").addClass("aa2");
		kolon.setAttribute('class','kbt2');
	} else if ($(this).hasClass("bb2"))  {
        $(this).removeClass("bb2");
		$(this).addClass("bb3");
		$(".zkonl").removeClass("aa2");
		$(".zkonl").addClass("aa3");
		kolon.setAttribute('class','kbt3');
    }else if ($(this).hasClass("bb3"))  {
        //$(this).removeClass("bb3");
		//$(this).addClass("bb4");
		//$(".zkonl").removeClass("aa3");
		//$(".zkonl").addClass("aa4");
		//kolon.setAttribute('class','kbt4');
    }
	//else if ($(this).hasClass("bb4"))  {
    //}
});


$(".hudff").click(function() {
    if ($(this).hasClass("bth")) {
		$(this).removeClass("bth");
		$(".hudfu").removeClass("nyy");
    } else {
        $(this).addClass("bth");
		$(".hudfu").addClass("nyy");
    }
});