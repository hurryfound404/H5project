// 始终让模态框居中显示
var timer;
window.onload = function (){
  timer=setInterval(animat,3000);

    var sightHeight =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
      var top = (sightHeight-350)/2;
      $(".codeAsk").css({
           top:top+"px"
      });
      // 弹窗控制
      $(".section3").click(function(){
          $(".hiddenBody").css({
            "display":"block"
          });
          $(".codeAsk").css({
            "display":"block"
          });
      });
      $(".timeGet").click(function(){
        $(".hiddenBody").css({
          "display":"block"
        });
        $(".codeAsk").css({
          "display":"block"
        });
    });
      $(".closeMessage").click(function(){
          $(".hiddenBody").css({
            "display":"none"
          });
          $(".codeAsk").css({
            "display":"none"
          });
      })
    
   }
   // 添加动画样式
 function animat(){
    $(".section3 img").addClass("animated");
    $(".section3 img").addClass("pulse");
    $(".section3 img").addClass("infinite");
  }