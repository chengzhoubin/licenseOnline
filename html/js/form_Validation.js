$(function() {
  // 密码的可见与隐藏
  $(".form_pswhide").on("click", function() {
    var thsib = $(this).siblings(".form_password");
    var thch = $(this).children("img");
    var flagth = thsib.attr("type");
    if (flagth == "password") {
      thch.attr("src", "images/showpsw.png");
      thsib.attr("type", "text");
    } else {
      thch.attr("src", "images/hidepsw.png");
      thsib.attr("type", "password");
    }
  });

  // 注册获取验证码倒计时60s
  var sdc = $(".send_dentifying_code");
    sdc.bind("click", function() {
      Countdown(sdc);
    });
  var Countdown = function (arg) {
      arg.unbind("click");
      var outTime = 60;
      var timeOut = setInterval(function() {
        outTime -= 1;
        if (outTime <= 0) {
          arg.html("获取短信验证码");
          arg.css("color", "#238cdf");
          arg.bind("click", function() {
            Countdown(arg);
          });
          clearInterval(timeOut);
        } else {
          arg.html(outTime + "秒后可重发");
          arg.css("color", "#999999");
        }
      }, 1000);
    }
  // 正则验证
  // 手机号验证
  var thatphone = $('input[name="phone"]');
  var thatph = $('input[name="phone"]').siblings("span");
  var vphone = function () {
      var vph = thatphone.val();
      var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
      if($.trim(vph)== ""){
          thatphone.val("请输入手机号").css("color","#ff0033");
          return false;
      }else if (!reg.test(vph)) {
          thatph.html("手机号码输入错误！");
          return false;
      }else{
          thatph.html("");
      }
  }
  thatphone.blur(function() {
    vphone();
  });
  thatphone.focus(function() {
    var vph_sec = thatphone.val();
    if(vph_sec === "请输入手机号"){
      thatphone.css("color", "#666666").val("");
      return false;
    }else{
      this.select();
    }
    thatph.html("");
  });


  // 密码验证--不为空，大于8位小于16位
  var thatpassword = $('input[name="password"]');
  var thatprompt = $('input[name="sec_password"]');
  var thatpsw = $('input[name="password"]').siblings("span");
  var sec_prompt = $('input[name="sec_password"]').siblings("span");
  var vpassword = function () {
      var vpsw = thatpassword.val();
      var vpsw_sec = thatprompt.val();
      if($.trim(vpsw) == ""){
          thatpassword.val("请输入密码").css("color", "#ff0033").attr("type", "text");
          return false;
      }else if(vpsw.length<8||vpsw.length>16){
          thatpsw.html("密码输入错误！");
          return false;
      }else if (vpsw_sec!=""&&vpsw!=vpsw_sec) {
          sec_prompt.html("两次密码输入不一致！");
          return false;
      }else{
          thatpsw.html("");
          sec_prompt.html("");
      }
  }
  // 新密码与再次输入的密码要保持一致
  thatprompt.blur(function() {//失焦
    var first_pa = thatpassword.val();
    var sec_pa = thatprompt.val();
    if (sec_pa != first_pa && $.trim(sec_pa) != "") {
      sec_prompt.html("两次密码输入不一致！");
      return false;
    } else if ($.trim(sec_pa) == "") {
      thatprompt.val("请输入确认密码").css("color", "#ff0033").attr("type", "text");
      return false;
    } else if (sec_pa.length < 8 || sec_pa.length > 16) {
      sec_prompt.html("确认密码输入错误！");
      return false;
    } else {
      sec_prompt.html("");
    }
  });

  thatpassword.blur(function() {
    vpassword();
  });

  thatpassword.focus(function() {
    var psw_val = thatpassword.val();
    if (psw_val === "请输入密码") {
      thatpassword.css("color", "#666666").val("").attr("type", "password");
      return false;
    } else {
      this.select();
    }
    thatpsw.html("");
  });
  thatprompt.focus(function() {
    var psw_val = thatprompt.val();
    if (psw_val === "请输入确认密码") {
      thatprompt.css("color", "#666666").val("").attr("type", "password");
      return false;
    } else {
      this.select();
    }
    sec_prompt.html("");
  });


  // 短信验证码验证--是否为空，是否为6位
  var that_code = $('input[name="vcode"]');
  var thatcod = $('input[name="vcode"]').siblings("span");
  var vcode = function () {
      var vcod = that_code.val();
      if ($.trim(vcod) == "") {
        that_code.val("请输入短信验证码").css("color", "#ff0033");
        return false;
      } else if (vcod.length != 6) {
        thatcod.html("短信验证码错误！");
        return false;
      } else {
        thatcod.html("");
      }
  }
  that_code.blur(function() {
    vcode();
  });

  that_code.focus(function() {
    var psw_val = that_code.val();
    if (psw_val === "请输入短信验证码") {
      that_code.css("color", "#666666").val("");
      return false;
    } else {
      this.select();
    }
    thatcod.html("");
  });


  // 验证身份证号
  var thatID = $('input[name="vID"]');
  var thatcard = $('input[name="vID"]').siblings("span");
  var vID = function () {
    var vic = thatID.val();
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if ($.trim(vic) == "") {
      thatID.val("身份证号不能为空！").css("color", "#ff0033");
      return false;
    } else if (!reg.test(vic)) {
      thatcard.html("身份证号输入错误！");
      return false;
    } else {
      thatcard.html("");
    }
  }
  thatID.blur(function() {
    vID();
  });

  thatID.focus(function() {
    var thatID_val = thatID.val();
    if (thatID_val === "身份证号不能为空！") {
      thatID.css("color", "#666666").val("");
      return false;
    } else {
      this.select();
    }
    thatcard.html("");
  });

  //登录页验证码
  var that_oper = $('input[name="operation_code"]');
  var thatoper = $('input[name="operation_code"]').siblings("span");
  that_oper.blur(function() {
    var voper = that_oper.val();
    if ($.trim(voper) == "") {
      that_oper.val("请输入验证码").css("color", "#ff0033");
      return false;
    } else if (voper.length != 4) {
      thatoper.html("验证码错误！");
      return false;
    } else {
      thatoper.html("");
    }
  });

  that_oper.focus(function() {
    var oper_val = that_oper.val();
    if (oper_val === "请输入验证码") {
      that_oper.css("color", "#666666").val("");
      return false;
    } else {
      this.select();
    }
    thatoper.html("");
  });

});
