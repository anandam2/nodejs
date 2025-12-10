var userInfo = require("./day4_cw_userinfo");
var formatName = require("./day4_cw_formatName");

var formattedName = formatName(userInfo.name);
var uppercaseHobby = userInfo.hobby.toUpperCase();
var hobbyLength = userInfo.hobby.length;

console.log("Formatted Name:", formattedName);
console.log("Uppercase Hobby:", uppercaseHobby);
console.log("Hobby Length:", hobbyLength);