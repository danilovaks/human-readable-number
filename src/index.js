module.exports = function toReadable (number) {
    let simpleNumArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoTenArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numberValue = number;
    let numeral = numberValue % 10;           
    numberValue = (numberValue - numeral) / 10;       
    let tens = numberValue % 10;
    numberValue = (numberValue - tens) / 10;          
    let hundred = numberValue % 10; 
    numberValue = (numberValue - hundred) / 10;       
    
    let simpleNumText;
    if (tens === 1 || (hundred !== 0 || tens !== 0) &&  numeral === 0) {
        simpleNumText = '';
    } else if ((hundred !== 0 || tens !== 0 && tens !== 1) && numeral !== 0 || (hundred == 0 || tens == 0) && (numeral === 0 || numeral !== 0))  {
        simpleNumText = simpleNumArr[numeral];
    } 

    let tensText;
    if (tens === 1) {
        tensText = twoTenArr[numeral];
    } else if (tens !== 0 && tens !== 1) {
        tensText = tensArr[tens];
    } else if (tens === 0){
        tensText = '';
    }
    
    let hundredText; 
    if (hundred !== 0) {
        hundredText = `${simpleNumArr[hundred]} hundred`;
    } else {
        hundredText = '';
    }       

    let resultArr = [hundredText, tensText, simpleNumText];
    return resultArr.filter(element => element !== '').join(' ');
}