<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>云模管理后台</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="baidu-site-verification" content="elXuCAMAW3">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/admin_bootstrap.css">
<link rel="stylesheet" href="css/admin_reset.css">
<link rel="stylesheet" href="css/admin_style.css">
<link rel="stylesheet" href="css/index_style.css">
<link rel="stylesheet" href="css/jquery-ui.css">
<link rel="stylesheet" href="css/yp_style.css">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2.js"></script>
<script type="text/javascript" src="js/admin_right.js"></script>
</head>
<body style="background-color: #fff;" onload = "load()">
<div class="mainContainer">
<div id="indexNew" class="rightmain clearfix">
<div class="app-framework-cpt">
<div class="back-index-cpt clearfix">
  <div class="middle">
    <div class="clearfix">
      <div class="line1-2 line" >
        <div class="today-data-cpt cpt">
          <div class="title" style="background-color:#6699FF;">今日数据</div>
          <div class="content three">
            <div class="item item1"> <span></span>今日发送条数 </div>
            <div class="data"><span id = "todaysentcount"></span> 条 </div>
            <div class="item"> <span class="span2"></span>到达率 </div>
            <div class="data"> <span>【成功】</span> <span id = "todaysentsuccesscount"></span><span>%</span><span>【失败】</span> <span id = "todaysentfailcount"></span><span>%</span><span>【未知】</span><span id = "todaysentunknowncount"></span><span>%</span> </div>
            <div class="item item3"> <span class="span3"></span>请求失败数 </div>
            <div class="data"><span id = "todayrequestfailcount"></span>条 </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line2 line">
      <div class="guide-user-cpt cpt">
        <div class="title" style="background-color:#6699FF;">新用户接入</div>
        <div class="content clearfix">
          <div class="item">
            <div class="iteminner">
            <div class="desc">验证码 通知 会员营销短信 四步轻松设置</div>
              <a href="devauth.html" class="start">开发者信息认证</a>
              <a href="templet01.html" class="start">新增签名</a>
              <a href="templet02.html" class="start">新增模板</a>
              <a href="API.html" class="start">API接入</a>
              <div class="shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div data-page="BackIndexPage"></div>
</body>
</html>