
module.exports = function toReadable (number) {

    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        if (number == 0) return "zero";
        else return readableMillions(number);
    
        function readableMillions(number) {
            if (number >= 1000000) {
              return `${readableMillions(Math.floor(number / 1000000))}` + " million " + `${readableThousands(number % 1000000)}`;
            } else {
              return readableThousands(number);
            }
          }
        
          function readableThousands(number) {
            if (number >= 1000) {
              return `${readableHundreds(Math.floor(number / 1000))}` + " thousand " + `${readableHundreds(number % 1000)}`;
            } else {
              return readableHundreds(number);
            }
          }
        
          function readableHundreds(number) {
            if (number > 99 && number % 100 !== 0) return `${units[Math.floor(number / 100)]}` + " hundred " + `${readableTens(number % 100)}`;
            else if (number % 100 == 0) return `${units[(number / 100)]}` + " hundred";
            else {
              return readableTens(number);
            }
          }
        
          function readableTens(number) {
            if (number < 10) return `${units[number]}`;
            else if (number > 10 && number < 20) return `${teens[number - 10]}`;
            else if (number % 10 == 0 && number != 0) return `${tens[(number / 10)]}`;
            else {
              return `${tens[Math.floor(number / 10)]}` + " " + `${units[number % 10]}`;
            }
          }     
}
  




