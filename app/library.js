  
  'use strict'

module.exports = {
 
 computeAverage: function(num1,num2,num3) {
   var average = 0;
   var sum = num1 + num2 + num3;
   var total = sum / 3;
   return total;
 },
 
 computeFactorial: function(num) {
   var factorial = 1;
   for (var i = 1; i <= num; i++) {
       factorial = factorial * i
   }
   return factorial; 
 },

 convertTempCtoF: function(cTemp) {
   var fTemp = cTemp * (9/5);
   var fTemp1 = fTemp + 32;
   return fTemp1; 
 },

 convertTempFtoC: function(fTemp) {
   var cTemp = fTemp - 32;
   var cov = 5/9;
   var cTemp1 = cTemp * cov;
   return cTemp1; 
 }
}