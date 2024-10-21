let Temperature = function(cel) {
    if (cel < -273) {
        throw new Error("Nhiet do khong the < 273 do C");
    }
    this.cel = cel;
    //chuyen tu do C sang do F
    this.toF = function () {
        return (this.cel * 9/5) + 32;
    }
    //chuyen doi sang Kevin
    this.toKevin = function () {
        return this.cel + 273.15;
    }
};

//Khoi tao doi tuong Temperature voi gia tri 25 do C
let myTemperature = new Temperature(25);
//Hien thi ra man hinh do F va Kevin
let f = myTemperature.toF();
let kevin = myTemperature.toKevin();

document.getElementById('tempIn4').innerHTML =
    ` Nhiet do: ${myTemperature.cel} C <br>
      Nhiet do tuong ung: ${f.toFixed(2)} F <br>
      Nhiet do tuong ung: ${kevin.toFixed(2)} K`;