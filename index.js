// code your solution here
function superbowlWin(array){
    const resultObject = array.find(extraFunc)
    if(resultObject===undefined) return undefined;
    return resultObject.year
}

function extraFunc(element, index, array){
    return (element.result==='W')
}