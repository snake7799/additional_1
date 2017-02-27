module.exports = function sum() {
    let summa = 0;
    
    for(let key in arguments)
        summa += arguments[key];
    
    let ret = sum.bind(null, summa);

    ret.valueOf = () => summa;
    
    return ret;
}
