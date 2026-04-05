var generate = function(numRows) {
    const result=[]
    result.push([1])
    for(let i=1;i<numRows;i++){
        const lastRow =result[i-1];
        let subarray =[]
        for(let j=0;j<=i;j++){
           let firstNumber =0;
           let secondNumber =0;
           if(lastRow[j-1]){
            firstNumber=lastRow[j-1]
           }
           if(lastRow[j]){
            secondNumber = lastRow[j]
           }
           let sum =firstNumber + secondNumber
           subarray.push(sum)
        }
        result.push(subarray)
    }
    return result
};
let numRows=5;
console.log(generate(numRows))