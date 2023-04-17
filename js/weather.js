$(document).ready(function () {
  //页面准备就绪时更新天气数据
  updateInfo();
  //监听下拉菜单
  $("#city").change(function () {
    updateInfo();
  });
});

//和风天气API
var key = "55c35db292f0497ca86c33ec63c0e153";

//获取指定城市的天气预报数据
function getWeather(cityID) {
  $.getJSON(
    "https://devapi.qweather.com/v7/weather/now?key=" +
      key +
      "&location=" +
      cityID,
    function (data) {
      //获取失败
      if (data.code != "200") return;

      //当前气候
      var now = data.now;
      console.log(now);

      //更新当前气候相关数据
      $("#icon").attr("src", "image/icons/" + now.icon + ".svg"); //图标
      $("#temp").text(now.temp); //气温
      $("#text").text(now.text); //气候（晴，多云等描述）
      $("#feelsLike").text(now.feelsLike); //体感温度
      $("#humidity").text(now.humidity); //湿度
      $("#precip").text(now.precip); //降水量
      $("#pressure").text(now.pressure); //气压
      $("#vis").text(now.vis); //能见度
      $("#windScale").text(now.windScale); //风力等级
      $("#windDir").text(now.windDir); //风力方向
    }
  );
}

//更新页面数据
function updateInfo() {
  //获取当前城市名称
  var cityID = $("#city").val();
  //获取当前城市的全部天气数据
  getWeather(cityID);
}
