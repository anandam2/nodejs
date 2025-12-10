var managerInfo = require("./day4_hw_managerinfo");
var capitalizeName = require("./day4_hw_capitalizeName");

var formattedName = capitalizeName(managerInfo.name);
var upperRole = managerInfo.role.toUpperCase();
var roleLength = managerInfo.role.length;
var inventoryPosition = managerInfo.role.search("inventory");

console.log("Formatted Name:", formattedName);
console.log("Uppercase Role:", upperRole);
console.log("Role Length:", roleLength);
console.log("Position of 'inventory':", inventoryPosition);