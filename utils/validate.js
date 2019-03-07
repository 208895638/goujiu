
let vali = {
	is_phone(tel) {
	    let testPhone = /^1[1|2|3|4|5|6|7|8|9]\d{9}$/;
	    // console.log(n.value);
	    if (!testPhone.test(tel)) {
	
	        return false;
	    }
	    return true;
	},
	is_email(val) {
	    let testEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	    if (!testEmail.test(val)) {
	
	        return false;
	    }
	    return true;
	},
	is_Number(val) {
	    let reg = /^[0-9]+$/;
	    if (val != "" && !reg.test(val)) {
	        return false;
	    }
	    return true;
	},
	is_chinese(val) {
	    let reg = /^[\u0391-\uFFE5]+$/;
	    if (val != "" && !reg.test(val)) {
	
	        return false;
	    }
	    return true;
	},
	isRealNum(val) {
	    // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
	    if (val === "" || val == null) {
	        return false;
	    }
	    if (!isNaN(val)) {
	        return true;
	    } else {
	        return false;
	    }
	},
	is_ZmOrNum(val) {
	    let zmnumReg = /^[0-9a-zA-Z]*$/;
	    if (val != "" && !zmnumReg.test(val)) {
	        return false;
	    }
	    return true;
	},
	checkDate(obj) { //检验时间大小(与当前时间比较) 
	    let obj_value = obj.replace(/-/g, "/");//替换字符，变成标准格式(检验格式为：'2009-12-10') 
	    // let obj_value=obj.replace("-","/");//替换字符，变成标准格式(检验格式为：'2010-12-10 11:12') 
	    let date1 = new Date(Date.parse(obj_value));
	    let date2 = new Date();//取今天的日期 
	    if (date1 > date2) {
	        return false;
	    }
	    return true;
	},
	check_other_char(str) { 验证用户名是否含有特殊字符
	    let arr = ["&", "\\", "/", "*", ">", "<", "@", "!"];
	    for (let i = 0; i < arr.length; i++) {
	        for (let j = 0; j < str.length; j++) {
	            if (arr[i] == str.charAt(j)) {
	                return true;
	            }
	        }
	    }
	    return false;
	}
}
export default vali