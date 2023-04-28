function add(...params) {
    let sum = 0;
    for(let i=0;params.length > i;i++) sum += params[i]/(i+1);
    return Math.round(sum);
}

function arrayPacking(a) {
    let sum;
    function assist(x) {
        x = x.toString(2);
        for(let i=0;x.length < 8;i++) x = '0'+x;
        return x; 
    }
    let a1 = assist(a[0]);
    let a2 = assist(a[1]);
    let a3 = assist(a[2]);
    sum = a3 + a2 + a1;
    return parseInt(sum, 2);
}

function initials(n){
    arr = n.split(' ');
    n = ""
    for(let i=0;arr.length-1 > i;i++) n = n + arr[i][0].toUpperCase() + '.';
    n = n + arr[arr.length-1][0].toUpperCase()+arr[arr.length-1].substring(1,arr[arr.length-1].length);
    return n;
}

function titleToNumber(title) {

    function Pow(ch,step) {
        let sch = 1;
        if (step == 0) return 1;
        for(let i=0;i < step;i++) sch *= ch;
        return sch;
    }

    let numb = 0;
    for(let i = title.length-1;i >= 0;i--) n += title[title.length-1-i].charCodeAt()*Pow(26,i);
    return n;
}

function maskify(cc) {
    return cc.length > 4?'#'.repeat(cc.length-4)+cc.substring(cc.length-4,cc.length):""+cc;
}