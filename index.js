/********* BÀI TẬP 1 : Tính ngày tháng năm
*input: nhập ngày, tháng, năm
*Process: (pseudo code)
    1. input (user interface) UI
    2. Xét các điều kiện chung:
    - Năm nhuần , năm không nhuần (Kiểm tra các tháng có 30 ngày,các tháng có 31 ngày,tháng 2 có 28 (năm không nhuần), 29 ngày(năm nhuần))
    - Năm > 1920 , tháng: lớn hơn 0 và nhỏ hơn 12, ngày: lơn hơn 0 và nhỏ hơn 31
    3. Ngày hôm qua: Ngày -1; (switch case)
    * đối với ngày đầu tháng:
    - Các tháng 5,7,10,12 nếu nhập vào ngày 1 thì Ngày Hôm Qua là ngày 30 tháng -1 
    - Các tháng  1,2,4,6,8,9,11 nếu nhập ngày 1 thì Ngày Hôm Qua là ngày 31 tháng -1
    - Tháng 3 nếu nhập ngày 1 thì:
        + Năm nhuần Ngày Hôm Qua là 29/2
        + Năm không nhuần Ngày Hôm Qua là 28/2
    ---- Đối ngày đầu Năm thì Hôm Qua là 1/1 -> 31/12 , năm -1
    4. Ngày mai: Ngày +1 (switch case)
    * đối với ngày cuối tháng
    - Các tháng 1,3,5,7,8,10,12 Nếu nhập ngày 31 thì Ngày Mai là ngày 1, tháng +1;
    - Các tháng 4, 6, 9, 11 Nếu nhập ngày 30 thì ngày mai là ngày 1, tháng +1;
    - Tháng 2 :
        + Năm nhuần: Ngày Mai của ngày 29/2 là 1/3
        + Năm không nhuần: Ngày Mai của ngày 28/2 là 1/3
     ---- Đối ngày cuối Năm thì Ngày mai là 31/12 -> 1/1 , Năm +1
*Output: - click Ngày hôm qua, giá ngày sẽ trừ đi 1(các giá trị tháng năm sẽ thay đổi theo điều kiện năm nhuần, tháng có 30 hay 31ngày,..,)
         - clicl ngày mai, giá trị ngày tăng 1 ((các giá trị tháng năm sẽ thay đổi theo điều kiện năm nhuần, tháng có 30 hay 31ngày,..,))
*/
function isYear(year) {
    if (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)) {
        return year;
    }
}
document.getElementById("yesterday").onclick = function () {
    let day = +document.getElementById("day").value;
    let month = +document.getElementById("month").value;
    let year = +document.getElementById("year").value;
    let result = document.getElementById("resultBai5");
    if (!(day > 0 && day <= 31)) {
        alert("Nhập sai điều kiên Ngày!!");
        return;
    }
    if (!(month > 0 && month <= 12)) {
        alert("Nhập sai điều kiên Tháng!!");
        return;
    }
    if (!(year > 1920)) {
        alert("Nhập sai điều kiên năm!!");
        return;
    }
    switch (month) {
        case 1:
            if (day === 1) {
                day = 31;
                month = 12;
                year--;
                result.value = `${day}/${month}/${year}`;
            } else {
                --day;
                month;
                result.value = `${day}/${month}/${year}`;
            }
            break;
        case 2:
            if (isYear(year) && day === 29) {
                --day;
                month;
                result.value = `${day}/${month}/${year}`;
            }
            else if (day === 1) {
                day = 31;
                --month;
                result.value = `${day}/${month}/${year}`;
            } else if (day < 29) {
                --day;
                month;
                result.value = `${day}/${month}/${year}`;
            }
            else {
                alert("Điều kiện không hợp lệ!!(Không phải Năm Nhuần nên không có ngày 29)");
            }
            break;
        case 3:
            if (day === 1) {
                if (isYear(year)) {
                    day = 29;
                    --month;
                    result.value = `${day}/${month}/${year}`;
                } else {
                    day = 28;
                    --month;
                    result.value = `${day}/${month}/${year}`;
                }
            } else {
                --day;
                month;
                result.value = `${day}/${month}/${year}`;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day === 1) {
                day = 31;
                --month;
                result.value = `${day}/${month}/${year}`;
            } else if (day <= 30) {
                --day;
                month;
                result.value = `${day}/${month}/${year}`;
            } else {
                alert("Điều kiện không hợp lệ!!");
            }
            break;
        case 8:
            if (day === 1) {
                day = 31;
                --month;
                result.value = `${day}/${month}/${year}`;
            } else if (day <= 31) {
                --day;
                month;
                result.value = `${day}/${month}/${year}`;
            } else {
                alert("Điều kiện không hợp lệ!!");
            }
            break;
        case 5:
        case 7:
        case 10:
        case 12:
            if (day === 1) {
                day = 30;
                --month;
                result.value = `${day}/${month}/${year}`;
            } else {
                --day;
                month;
                result.value = `${day}/${month}/${year}`;
            }
            break;
    }
}
document.getElementById("tomorrow").onclick = function () {
    let day = +document.getElementById("day").value;
    let month = +document.getElementById("month").value;
    let year = +document.getElementById("year").value;
    let result = document.getElementById("resultBai5");
    if (!(day > 0 && day <= 31)) {
        alert("Nhập sai Ngày!!")
    }
    if (!(month > 0 && month <= 12)) {
        alert("Nhập sai Tháng!!")
    }
    if (!(year > 1920)) {
        alert("Nhập sai năm!!")
    }
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (day === 31) {
                day = 1;
                ++month;
                result.value = `${day}/${month}/${year}`;
            } else {
                ++day;
                month;
                result.value = `${day}/${month}/${year}`;
            }
            break;
        case 2:
            if (isYear(year)) {
                if (day === 29) {
                    day = 1;
                    ++month;
                    result.value = `${day}/${month}/${year}`;
                } else if (day <= 28) {
                    ++day;
                    month;
                    result.value = `${day}/${month}/${year}`;
                }
            }
            else {
                if (day === 28) {
                    day = 1;
                    ++month;
                    result.value = `${day}/${month}/${year}`;
                } else if (day <= 27) {
                    ++day;
                    month;
                    result.value = `${day}/${month}/${year}`;
                } else {
                    alert("Điều kiện không hợp lệ!!(Không phải Năm Nhuần nên không có ngày 29)");
                }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day === 30) {
                day = 1;
                ++month;
                result.value = `${day}/${month}/${year}`;
            } else if (day < 30) {
                ++day;
                month;
                result.value = `${day}/${month}/${year}`;
            } else {
                alert("Điều kiện không hợp lệ!!");
            }
            break;
        case 12:
            if (day === 31) {
                day = 1;
                month = 1;
                ++year;
                result.value = `${day}/${month}/${year}`;
            } else {
                ++day;
                month;
                result.value = `${day}/${month}/${year}`;
            }
            break;
    }
}


/********* BÀI TẬP 2 : Tính ngày.
 * Input: nhập tháng , năm
* Process: (if- else)
    - các điều kiện nhập tháng từ 0 đến 12, năm trên 1920
    - Kiểm tra năm nhuận ( Function isYear)
    - các tháng 1,3,5,7,8,10,12 sẽ có 31 ngày
    - các tháng 4,6,9,11 sẽ có 30 ngày
    - Tháng 2 đối vơi năm nhuần có 29 ngày, ngược lại 28 ngày
* Output: tháng đó có bao nhiêu ngày
*/
document.getElementById("calcDay").onclick = function () {
    let month = +document.getElementById("month2").value;
    let year = +document.getElementById("year2").value;
    let resultDay = document.getElementById("resultBai2");
    let day = 0;
    if (!(month > 0 && month <= 12)) {
        alert("Nhập sai điều kiên Tháng!!")
        return;
    }
    if (!(year > 1920)) {
        alert("Nhập sai điều kiên năm!!")
        return;
    }
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        day = 31;
        resultDay.value = `Tháng ${month} năm ${year} có ${day} ngày`
    } else if (month === 2) {
        if (isYear(year)) {
            day = 29;
            resultDay.value = `Tháng ${month} năm ${year} có ${day} ngày`
        }
        else {
            day = 28;
            resultDay.value = `Tháng ${month} năm ${year} có ${day} ngày`;
        }
    } else {
        day = 30;
        resultDay.value = `Tháng ${month} năm ${year} có ${day} ngày`;
    }
}

/********* BÀI TẬP 4  : Đếm số.
 * Input: nhập số có 3 chữ số
* Process: (if- else)
    - tách các sô hàng trăm chục đơn vị
    - dùng switch case để đọc số
    - các số hàng chục nếu số không đọc là lẻ, số 1 đọc là mươi
    - các số hàng đơn vị nếu số không không đọc
* Output: đọc sô ( .. trăm...mươi...)
*/

function Dem(num) {
    switch (num) {
        case 0:
            num = "Không";
            return num;
        case 1:
            num = "một ";
            return num;
        case 2:
            num = "hai ";
            return num;
        case 3:
            num = "ba ";
            return num;
        case 4:
            num = "bốn ";
            return num;
        case 5:
            num = "năm ";
            return num;
        case 6:
            num = "sáu ";
            return num;
        case 7:
            num = "bảy ";
            return num;
        case 8:
            num = "tám ";
            return num;
        case 9:
            num = "chín ";
            return num;
    }
}
document.getElementById("countNum").onclick = function () {
    let num = document.getElementById("num").value;
    let resultNum = document.getElementById("resultBai3");
    let num1;
    let num2;
    let num3;
    if (num >= 100 && num <= 999) {
        num1 = Math.floor(num / 100);
        num2 = Math.floor((num % 100) / 10);
        num3 = Math.floor(num % 10);
        let hangChuc = Dem(num2);
        let hangDonVi = Dem(num3);
        if (hangChuc === "Không" && hangDonVi === "Không") {
            hangChuc = "";
        } else if (hangChuc === "Không") {
            hangChuc = "lẻ";
        } else if (hangChuc === "một ") {
            hangChuc = "mười";
        } else {
            hangChuc += "mươi";
        }
        if (hangDonVi === "Không") {
            hangDonVi = "";
        }
        resultNum.value = `${Dem(num1)}trăm ${hangChuc} ${hangDonVi}`;
    } else {
        alert("Nhập sai!!");
        return;
    }
}

/********* BÀI TẬP 5 : Tìm sinh viên xa trường nhất
 * Input: 
    - nhập số thông tin của 3 sinh viên( tên, tọa độ x, tọa độ y)
    - nhập tọa độ trường học
* Process:
    - tạo UI
    - d là độ dài đoạn đường. (x1, y1) là tọa độ điểm đầu (toạ độ nhà sinh viên). (x2, y2) là tọa độ điểm cuối (toạ độ ngôi trường)
    - dùng công thức tính đoạn thẳng ( Math sqrt(), pow())
    - So sanh độ dài các đoạn (if else) 
* Output: Xuất tên sinh viên xa trường học nhất
*/

document.getElementById("search").onclick = function () {
    let SV1 = document.getElementById("name1").value;
    let x1 = +document.getElementById("toaDoX1").value;
    let y1 = +document.getElementById("toaDoY1").value;
    let SV2 = document.getElementById("name2").value;
    let x2 = +document.getElementById("toaDoX2").value;
    let y2 = +document.getElementById("toaDoY2").value;
    let SV3 = document.getElementById("name3").value;
    let x3 = +document.getElementById("toaDoX3").value;
    let y3 = +document.getElementById("toaDoY3").value;
    let x = +document.getElementById("toaDoTruongX").value;
    let y = +document.getElementById("toaDoTruongY").value;
    let result = document.getElementById("resultBai4");
    let temp1 = Math.pow((x - x1), 2) + Math.pow((y - y1), 2);
    let d1 = Math.sqrt(temp1);
    console.log(d1);
    let temp2 = Math.pow((x - x2), 2) + Math.pow((y - y2), 2);
    let d2 = Math.sqrt(temp2);
    console.log(d2);
    let temp3 = Math.pow((x - x3), 2) + Math.pow((y - y3), 2);
    let d3 = Math.sqrt(temp3);
    console.log(d3);

    if (d1 > d2 && d1 > d3) {
        result.value = "Sinh viên xa trường nhất: " + SV1;
    } else if (d2 > d1 && d2 > d3) {
        result.value = "Sinh viên xa trường nhất: " + SV2;
    } else if (d3 > d1 && d3 > d2) {
        result.value = "Sinh viên xa trường nhất: " + SV3;
    } else if (d1 === d2 && d1 > d3) {
        result.value = "Sinh viên xa trường nhất: " + SV1 + " và " + SV2;
    } else if (d2 === d3 && d2 > d3) {
        result.value = "Sinh viên xa trường nhất: " + SV2 + " và " + SV3;
    } else if (d3 === d1 && d3 > d2) {
        result.value = "Sinh viên xa trường nhất: " + SV3 + " và " + SV1;
    }
}





