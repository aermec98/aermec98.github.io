$(document).ready(function () {

  $("#btnSubmit").click(function () {
    var x = $("#input_x").val();
    var y = $("#input_y").val();
    var z = $("#input_z").val();

    if (x == "") {
      alert("Vui lòng nhập số lượng thanh 1m (x)!");
      return false;
    }
    if (y == "") {
      alert("Vui lòng nhập số lượng thanh 3m (y)!");
      return false;
    }
    if (z == "") {
      alert("Vui lòng nhập số lượng thanh 4m (z)!");
      return false;
    }

    result = calculate(x, y, z)

    return true;


    function calculate(x, y, z) {

      var x = Number(x);
      var y = Number(y);
      var z = Number(z);

      var sell = z;
      var res = 2 * z;
      var comment = "<br> Mua " + z + " thanh 6m --> thu được " + z + " thanh 4m, còn dư " + z + " thanh 2m";

      var res_y = (y % 2 == 0) ? 0 : 3;
      var sell_y = (y % 2 == 0) ? y / 2 : (y - y % 2) / 2 + 1
      sell += sell_y;
      res += res_y
      comment += "<br> Mua thêm " + sell_y + " thanh 6m --> thu được " + y + " thanh 3m, còn dư " + (2 * sell_y - y) + " thanh 3m";

      var sell_x = 0
      if (x > res) {
        sell_x = ((x - res) % 6 == 0) ? (x - res) / 6 : ((x - res) - (x - res) % 6) / 6 + 1
      }

      if (sell_x > 0) {
        sell += sell_x
        res = 6 * sell_x + res - x
        comment += "<br> Mua thêm " + sell_x + " thanh 6m, kết hợp với cắt các phần dư trên --> thu được " + x + " thanh 1m, còn dư " + res + " m";
      }
      else {
        sell += sell_x
        res = res - x
        comment += "<br> Cắt các phần dư trên --> thu được " + x + " thanh 1m, còn dư " + res + " m";
      }

      $('#textOutput').empty();

      var result = document.createElement('p');
      result.innerHTML = "<b>Số lượng thanh 6m cần mua</b>: " + sell + " (thanh)";
      var process = document.createElement('p');
      process.innerHTML = "<b>Quy trình cắt ghép</b>: " + comment;
      var residual = document.createElement('p');
      residual.innerHTML = "<b>Số lượng nhôm còn dư</b>: " + res + " (m)";

      $('#textOutput').append(result);
      $('#textOutput').append(process);
      $('#textOutput').append(residual);
    }

  })

});
