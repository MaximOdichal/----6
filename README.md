<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №5 "CSS" </p>

<p align="right">Выполнил: Алексеев Максим Максимович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Лабораторная работа по созданию скриптов на языке JavaScript.</p>

<h2>Цели и задачи</h2>
Сделать много чего.
<h2>Решение задач</h2>


```html
  <!DOCTYPE html>
  <html lang="ru">

  <head>

    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
      <title>Eh 5</title>

  </head>

  <body>

    <script>
      let str = 'hdfgv';
      document.write(str[0] + str[1] + str[4]);
    </script>
      </br>

    <script>
      document.write(60*60);
    </script>
    </br>

    <script>
      var num = 1;
      num +=12;
      num -= 14;
      num *= 5;
      num /= 7;
      num++;
      num--;
      alert(num);
    </script>

    </br>

    <script>
      let num = 3;
      alert(num);
    </script>

    </br>

    <script>
      let a = 10;
      let b = 2;
      document.writeln("Сумма:" + (a+b));
      document.writeln("Разность:" + (a-b));
      document.writeln("Произведение:" + (a*b));
      document.writeln("Частное:" + (a/b));
    </script>

    </br>

    <script>
      let c = 15;
      let d = 2;
      let result = c + d;
      document.writeln("Результат:" + (c+d));
    </script>

    </br>

    <script>
      a=10;
      b=2;
      c=5;
      document.writeln("Сумма:" + (a+b+c));
    </script>

    </br>

    <script>
      a=17;
      b=10;
      c=a-b;
      d=7;
      result=c+d
      document.writeln("result:" + (result));
    </script>

    </br>

    <script>
      var ch = 60;
      var sut = 24;
      var month = 31;
      document.writeln("Час:" + (ch*60));
      document.writeln("Сутки:" + (sut*ch*60));
      document.writeln("Месяц:" + (month*sut*ch*60));
    </script>

    </br>

    <script>
      let date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      document.writeln(hour +":"+ min +":"+ sec);
    </script>

    </br>

    <script>
      let test1 = 5;
      document.writeln(Math.pow(test1,2));
    </script>

    </br>

    <script>
      let arr = [1,2,3,4,5,6,7,8,9,10];
      for(let i=0,r=0;i<arr.length; i++,r = arr[i]%2==0?r+Math.pow(arr[i],2):r+0,document.writeln(r));
    </script>

    </br>

    <script>
      let apple = 1.15;
      let orange = 2.30;
      document.writeln(apple+orange);
    </script>

    </br>

    <script>
      let x = 5;
      alert(x++);
    </script>

    </br>

    <script>
      document.writeln([]+false-null+true);
    </script>

  </body>

  </html>
```

```html
  <!DOCTYPE html>
  <html lang="ru">

  <head>

    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
      <title>Eh 5.2</title>

  </head>

  <body>

    <script>
      let y = 1;
      let x = y = 2;
      console.log(x);
    </script>

    </br>

    <script>
      document.writeln([]+1+2);
    </script>

    </br>

    <script>
      let a6=5%3;
      let a7=3%5;
      let a8=5+'3';
      let a9='5'-3;
      let a10=75+'кг';
      document.writeln(a6);
      document.writeln(a7);
      document.writeln(a8);
      document.writeln(a9);
      document.writeln(a10);
    </script>

    </br>

    <script>
      let height = 23;
      let weidth = 10;
      let s = height*weidth;
      document.writeln(s+'см^2');
    </script>

    </br>

    <script>
      let heightC = 23;
      let dC = 4;
      let v = Math.PI*Math.pow(dC/2,2)*heightC;
      document.writeln(v+'м^3');
    </script>

    </br>

    <script>
      let S = 2000000;
      let p = 10;
      let years=5;
      let perepl = S*(p*5/100);
      document.writeln(perepl+'рублей');
    </script>

    </br>

    <script>
      let str = "Привет";
      let num = 123;
      let flag = true;
      let txt = "true";
      document.writeln(typeof str);
      document.writeln(typeof num);
      document.writeln(typeof flag);
      document.writeln(typeof txt);
    </script>

  </body>

  </html>
```

<p>Задачи CodeWars</p>

```html
  <!DOCTYPE html>
  <html lang="ru">

  <head>

    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
      <title>Eh 5.3</title>

  </head>

  <body>

    <script>
      let st;
      let numb;
      function obr()
      {
        document.getElementById('out1').innerHTML = -document.getElementById('vvod1').value;
      }
      function mj()
      {
        st = document.getElementById('vvod2').value;
        document.getElementById('out2').innerHTML = st[1]=='Y'?"Поздравляю!У вас будет сын":"Поздравляю!У вас будет дочь";
      }
      function chet() 
      {
        numb = document.getElementById('vvod3').value;
        document.getElementById('out3').innerHTML = numb%2==0?numb*8:numb*9;
      }
      function sqroll() 
      {
        numb = document.getElementById('vvod4').value;
        document.getElementById('out4').innerHTML = Math.pow(Math.round(Math.sqrt(Math.abs(numb))),2);
      }
      function kub() 
      {
        numb = document.getElementById('vvod5').value;
        document.getElementById('out5').innerHTML = Math.pow(Math.abs(numb)+1,3)-Math.pow(Math.abs(numb)-1,3);
      }
      function probel() 
      {
        let st2 = "";
        st = document.getElementById('vvod7').value;
        for (let i = 0; i < st.length; i++) st2 += st[i] != ' '?st[i]:'';
        document.getElementById('out7').innerHTML = st2;
      }
    </script>

    <input id="vvod1" type="number">
    <button onclick="obr()" style="width:10px;height:20px"></button>
    <p id='out1'></p>

    <input id="vvod2" type="text">
    <button onclick="mj()" style="width:10px;height:20px"></button>
    <p id='out2'></p>

    <input id="vvod3" type="number">
    <button onclick="chet()" style="width:10px;height:20px"></button>
    <p id='out3'></p>

    <input id="vvod4" type="number">
    <button onclick="sqroll()" style="width:10px;height:20px"></button>
    <p id='out4'></p>

    <input id="vvod5" type="number">
    <button onclick="kub()" style="width:10px;height:20px"></button>
    <p id='out5'></p>

    <input id="vvod7" type="text">
    <button onclick="probel()" style="width:10px;height:20px"></button>
    <p id='out7'></p>
  </body>

  </html>
```

<h2>Вывод</h2>
Я сделал задачи codewars.
