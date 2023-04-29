<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №6 "CSS" </p>

<p align="right">Выполнил: Алексеев Максим Максимович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Лабораторная работа по селекторам CSS.</p>

<h2>Цели и задачи</h2>
Сделать много чего.
<h2>Решение задач</h2>

<h3>HTML</h3>

```
<!DOCTYPE html>
<html>
	<head>
		<title>Лабораторная 6</title>
		<link rel="stylesheet" href="style.css">
	</head>
	
	<body>
		<!--1.Селектор: div p{}-->
		<div>
			<p>Txt</p>
		</div>
			
		<!--2.Селектор: div h2{}-->
		<div>
			<h2>H2</h2>
		</div>
			
		<!--3.Селектор: #test p{}-->
		<div id="test">
				<p>Txt</p>
		</div>
			
		<!--4.Селектор: #test h2{}-->
		<div id="test">
			<h2>H2</h2>
		</div>
			
		<!--5.Селектор:.bbb{}-->
		<div class="bbb">Txt</div>
			
		<!--6.Селектор: #test .bbb{}-->
		<div id="test">
			<div class="bbb">Txt</div>
		</div>
			
		<!--7.Селектор: p.bbb{}-->
		<p class="bbb">Txt</p>
			
		<!--8.Селектор: h2.bbb{}-->
		<h2 class="bbb">H2</h2>
			
		<!--9.Селектор: #test p.bbb{}-->
		<div id="test">
			<p class="bbb">Txt</p>
		</div>
			
		<!--10.Селектор: .bbb,.xxx{}-->
		<div class="bbb">Txt</div>
		<div class="xxx">H</div>
			
		<!--11.Селектор: p.bbb,h2.xxx{}-->
		<p class="bbb">Text</p>
		<h2 class="xxx">H2</h2>
			
		<!--12.Селектор: #test p.bbb,#test p.xxx{}-->
		<div id="test">
			<p class="bbb">Txt</p>
			<p class="xxx">H</p>
		</div>
			
		<!--13.Селектор: .fff{}-->
		<div class="fff">Txt</div>
			
		<!--14.Селектор: .fff p{}-->
		<p class="fff">Txt</p>
			
		<!--15.Селектор: p.fff{}-->
		<p class="fff">Text</p>
			
		<!--16.Селектор: .fff.bbb{}-->
		<div class="fff">
			<div class="bbb">Txt</div>
		</div>	
			
		<!--17.Селектор: .fff h2.bbb{}-->
		<div class="fff">
			<h2 class="bbb">H2</h2>
		</div>
			
		<!--18.Селектор: #test a:link, #test a:visited-->
		<div id="test">
			<a href="#" class="www">Link</a>
			<a href="#" class="www">Vlink</a>
		</div>
			
		<!--19.Селектор: a.www:link, a.www:visited-->
		<a href="#" class="www">Link</a>
		<a href="#" class="www">Vlink</a>
			
		<!--20.Селектор: #test a.www:link,#test a.www:visited{}-->
		<div id="test">
			<a href="#" class="www">www</a>
		</div>
			
		<!--21.Селектор: .eee a.www:link, .eee a.www:visited{}-->
		<div class="eee">
			<a href="#" class="www">www</a>
		</div>				
	</body>
</html>	
```

```
<!DOCTYPE html>
<html>
	<head>
		<title>Лабораторная 6</title>
		<link rel="stylesheet" href="style.css">
	</head>
	
	<body>
		
			<style>
				.block{
					border: 2px dotted black;
					width: 500px;
					height: auto;
					margin-bottom: 20px;
				}
				
				.z23{
					margin-left: 10px;
					margin-top: 10px;
					margin-bottom: 10px;
					border: 1px solid red;
					width: 100px;
					height: 100px;	
				}
				
				.z24{
					margin-left: 10px;
					margin-top: 10px;
					margin-bottom: 10px;
					border: 2px dotted blue;
					width: 300px;
					height: 100px;
				}
				
				.z25{
					margin-left: 10px;
					margin-top: 10px;
					margin-bottom: 10px;
					border: 2px dotted green;
					border-radius: 10px 20px 10px 20px;
					width: 200px;
					height: 200px;	
				}
				
				.z26{
					margin-left: 10px;
					margin-top: 10px;
					margin-bottom: 10px;
					border: 1px solid red;
					border-radius: 100px;
					width: 100px;
					height: 100px;	
				}
				
			</style>
			
			<div class="frame">
				<p style="text-decoration: underline">Привет мир!</p>
				<p style="text-decoration: line-through">Привет мир!</p>
				<p style="text-decoration: overline">Привет мир!</p>
			</div>
			
			<div class="block">
				<div class="z23"> </div>
			</div>
			
			<div class="block">
				<div class="z24"> </div>
			</div>
			
			<div class="block">
				<div class="z25"> </div>
			</div>
			
			<div class="block">
				<div class="z26"> </div>
			</div>		

			<div class="block">
				<a href="#" style="margin-left:10px; text-decoration:underline; color:green;">ссылка</a><br/>
				<a href="#" style="margin-left:10px; text-decoration:underline; color:red;">ссылка</a><br/>
				<a href="#" style="margin-left:10px; text-decoration:none; color:black;">ссылка</a><br/>
			</div>
			
		</div>					

	</body>
</html>	
```

<h3>CSS</h3>

```
 div p{}

div h2{}

#test p{}

#test h2{}

.bbb{}

#test.bbb{}

p.bbb{}

h2.bbb{}

#test p.bbb{}

.bbb,.xxx{}

p.bbb,h2.xxx{}

#test p.bbb,#test p.xxx{}

.fff{}

p.fff{}

.fff.bbb{}

.fff h2.bbb{}

#test a:link, #test a:visited {
	text-decoration: none;
	color: red;
}

#test a:hover {
	text-decoration: underline;
	color: blue;
}

a.www:link, a.www:visited{
	text-decoration: underline;
	color: blue;
}

a.www:hover{
	text-decoration: none;
}

#test a.www:link,#test a.www:visited{
	color: gray;
}

.eee a.www:link, .eee a.www:visited{
	color: white;
}
```

<h3>Задачи CodeWars</3>

```
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
```

<h2>Вывод</h2>
Я сделал задачи codewars.
