let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好，
*我是一名前端新人
*这是我第一次尝试制作的一份动态页面
**/

#shape{
    border: 1px solid red;
    width:200px;
    height:200px;
    position: fixed;
    top:0;
    right:0;
}

/*接下来我把这个图形变成一个八卦图
* 首先，把它变成一个圆
**/

#shape{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;

}
/*八卦一黑一白  用背景渐变
**/
#shape{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*加一个黑球一个白球*/
#shape::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%); 
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#shape::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

`;

let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        /*
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === '') {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }*/

        string2 += string[n] === "\n" ? "<br>" : string[n];

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);

        window.scrollTo(0,99999);
        html.scrollTo(0, 99999);

        if (n  < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();

