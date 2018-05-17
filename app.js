var colors = ["red","blue","green"];

//Es5遍历数据方法
for(var i = 0; i < colors.length; i++){
  //  console.log(colors[i])
};

//Es6 forEach
colors.forEach(function(color){
  //  console.log(color);
});

//练习：遍历数组中的值，并计算总和
var numbers = [1,2,3,4,5];

var sum = 0;

function adder(number){
    sum += number;
}

numbers.forEach(adder);

//console.log(sum)

var doubledNumbers = [];
//ES5
for(var i= 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}

//console.log(doubledNumbers)

//ES6  map
var doubled = numbers.map(function(number){
    return number * 2;
})

// console.log(doubled)

//ES6 forEach
doubled.forEach(function(number){
    // console.log(number)
});

var cars = [
    {model:"Buick",price:"CHEAP"},
    {model:"BMW",price:"expensive"},       
];

var prices = cars.map(function(car){
    return car.model;
})

//console.log(prices);

var products = [
    {name:"小白菜",type:"蔬菜"},
    {name:"apple",type:"水果"},
    {name:"上海青",type:"蔬菜"},
    {name:"orange",type:"水果"}
]

//es5 
var filter1 = []

for(var i = 0; i < products.length; i++){
    if(products[i].type === "蔬菜"){
        filter1.push(products[i]);
    }
}

//console.log(filter1)


//es6 filter
var filter2 = products.filter(function(product){
    return product.type === "水果";
})

var post = {id:4,title:"javascript"};

var products = [
    {name:"小白菜",type:"蔬菜",quantity:20,price:8,postId:3},
    {name:"apple",type:"水果",quantity:20,price:8,postId:3},
    {name:"上海青",type:"蔬菜",quantity:20,price:15,postId:4},
    {name:"orange",type:"水果",quantity:20,price:8,postId:3}
]


var filter3 = products.filter(function(product){
    return product.type === "水果" && product.quantity > 15 && product.price < 10
})

// console.log(filter3);

function comments(post,products){
    return products.filter(function(comert){
        return comert.postId === post.id
    })
}

// console.log(comments(post,products));

var users = [
    {name:"Jill"},
    {name:"Alex"},
    {name:"Bill"}
];

// ES5 弊端：找到所在第二的"Alex"后 依然会遍历之后的值 ，不想遍历之后就用break；
var user;

for(var i = 0; i < users.length; i++){
    if(users[i].name === "Alex"){
        user = users[i];
        break;
    }
}

// console.log(user)

//ES6 find  好处是找到第一个后就不再执行，即使后面有第二个
user = users.find(function(user){
    return user.name === "Bill";
})

// console.log(user);

var posts = [
    {id:1,title:"Node.js"},
    {id:2,title:"React.js"}
];

var comment = {postId:1,content:"Hello World!"};

function postForComment(posts,comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    })
}

//console.log(postForComment(posts,comment));

//ES5
var computers = [
    {name:"Apple",ram:8},
    {name:"IBM",ram:4},
    {name:"Acer",ram:32},
];

var everyComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
    var computer = computers[i];
    if(computer.ram < 16){
        everyComputersCanRunProgram = false;
    }else{
        someComputersCanRunProgram = true;
    }
}

// console.log(everyComputersCanRunProgram);
// console.log(someComputersCanRunProgram);

/*
every：一假既假
some：一真既真
*/

//ES6

var every = computers.every(function(computer){
    return computer.ram > 16;
})


var some = computers.some(function(computer){
    return computer.ram > 16;
})

// console.log("=========");
// console.log(every);
// console.log(some);




function Field(value){
    this.value = value;
}

Field.prototype.validate = function(){
    return this.value.length > 0;
}

var username = new Field("henrywu");
var telepgone = new Field("1888888888");
var password = new Field("my_password");

// console.log(username.validate());

// console.log(telepgone.validate());

var fields = [username,telepgone,password];

var formIsValid = fields.every(function(field){
    return field.validate();
});

// console.log(formIsValid);

// if(formIsValid){
//     console.log("注册成功!");
// }else{
//     console.log("您需要填写所有必填信息!");
// }

var numbers = [10,20,30];
var sum = 0;

//ES5
for(i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

// console.log(sum)

//ES6
var sumValue = numbers.reduce(function(sum1,number1){
    return sum1 + number1;
},20);    

//,20为 传递给sum的初始值，不给默认为零

// console.log(sumValue);

var primaryColors = [
    {color:"red"},
    {color:"yellow"},
    {color:"blue"}
]

var colors = primaryColors.reduce(function(previous,primaryColor){
    previous.push(primaryColor.color);
    return previous;
},[]);


// console.log(colors);

//小案例判断字母串是否对称
function balancedParens(string){
    return !string.split("").reduce(function(previous,char){
        if(char == "("){return ++previous};
        if(char == ")"){return --previous};
        return previous;
    },0);
}

// console.log(balancedParens("()()"))

//变量定义关键字  var let const
//Var
function testVar(){
    var a = 30;

if(true){
    var a = 50;
    console.log(a);
};
console.log(a);
}

// testVar()

//Let
function testLet(){
    let a = 30;

if(true){
    let a = 50;
    console.log(a);
};
console.log(a);
}
//Let 不会查找域内变量；注意看不同   
// testLet()

//const 常量，一旦被定义不能改变类型，是数组可以添加PUSH
const x = 10;
// x = 100;

var colorss = [];
colorss.push("red");
colorss.push("blue");

// console.log(colorss)


let name = "Henry";

function makeUppercase(word){
    return word.toUpperCase();
}

let template =
    `
    <h1>${makeUppercase('Hello')},${name}!</h1>
    <p>感谢大家收看我们的视频，ES6为我们提供了很多遍好用的方法和语法！</p>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
    `;

// document.getElementById('template').innerHTML = template;

/*
*箭头函数
*解决的问题
*1，缩减代码
*2，改变this指向
*/

const double1 = function(number){
    return number * 2;
}

const double2 = (number) => {
    return number * 2;
}

const double3 = (number) => number * 2;

const double4 = number => number * 2;

const double5 = (number => number * 2);

const double6 = (number,number1) => number * 2;

const double7 = (number,number1) => 
    {sum = number * number1
    return sum;}

    // console.log(double7(10,20))

// map一个数组，让数组中的值以double形式展现 const可以探测变量名是否有覆盖，有则报错
const numbers1 = [1,2,3];
var newNumbers = numbers1.map(function(number){
    return number * 2;
});

// 箭头函数简化代码 
var newNumbers1 = numbers1.map(number4 => number4 * 2);

// console.log(newNumbers1);


//改变this指向 es5
const team1 = {
    members:["Henry","Elyse"],
    teamName:"es5",
    teamSummary:function(){
        let self = this;
        return self.members.map(function(member){
            // 层层return This 会迷路 因而 let self = this; 保存this指向。
            return `${member}隶属于${self.teamName}小组`;
        })
    }
}

const team2 = {
    members:["Henry","Elyse"],
    teamName:"es5",
    teamSummary:function(){
        return this.members.map(function(member){
           
            return `${member}隶属于${this.teamName}小组`;
        }.bind(this))
         // 层层return This 会迷路 因而 .bind(this) 拿到外部this值 （常用）。
    }
}

const team = {
    members:["Henry","Elyse"],
    teamName:"es6",
    teamSummary:function(){
        return this.members.map((member) => {
          return `${member}隶属于${this.teamName}小组`;
        })
         // 层层return This 会迷路 =>箭头函数 会在This找不到指向时找寻父元素或者向上寻找
    }
}

// console.log(team.teamSummary());

//增强字面量
// new object(); {}

// new Array[]; []

function createBookShop(inventory){
    return {
        inventory,
        inventoryValue:function(){  //:function()可以省略
            return this.inventory.reduce((total,book) => total + 
            book.price,0);
        },
        priceForTitle:function(title){//:function()可以省略
            return this.inventory.find(book => book.title === title)
            .price;
        }
    }
}

const inventory = [
    {title:"Vue",price:10},
    {title:"Angular",price:15},   
];

const bookShop = createBookShop(inventory);

// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle("Vue"));

// function savFile(url,data){
//     $.ajax({
//         url, // url:url
//         data, // data:data
//         method:"POST"
//     });
// }

// const url = "http://www.baidu.com";
// const data = {color:"red"};

// savFile(url,data);

//默认函数参数

function makeAjaxRjaxRequest(url,method){
    if(!method){
        method = "GET";
    }
    return method;
}

function makeAjaxRjaxRequest(url,method = "GET"){
    return method;
}


// console.log(makeAjaxRjaxRequest("google.com"));
// console.log(makeAjaxRjaxRequest("google.com","POST"));

//给用户一个ID

function User(id){
    this.id = id;
};

// console.log(new User(1));

function randomId(){
    return Math.random() * 10000;
};

// console.log(new User(randomId()));

function createAdminUser(user = new User(randomId())){
    user.admin = true;
    return user;
}

const user1 = new User(2);

// console.log(createAdminUser(user))

/*
* spread operator 展开运算符
* 更快，更便捷的操作数组
*/

// function addNumbers(numbers){
//     return numbers.reduce((sum,number) => {
//         return sum + number;
//     },0)
// }

// const numbers2 = [1,2,3,4,5];

// function addNumbers(a,b,c,d,e){
//     let numbers = [a,b,c,d,e];
//     return numbers.reduce((sum,number) => {
//         return sum + number;
//     },0)
// }

// console.log(addNumbers(1,2,3,4,5));

// function addNumbers(...numbers){   //numbers 只是名称 可以随意
//     return numbers.reduce((sum,number) => {
//         return sum + number;
//     },0)
// }

// console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));

var defaultColors = ["red","greed"];
var favoriteColors = ["orange","yellow"];

// concat 拼接数组
// defaultColors = defaultColors.concat(favoriteColors);
// console.log(defaultColors);

//展开运算符
// console.log(["red",...defaultColors,...favoriteColors]);

//练习 检查库存
function validateShoppingList(...items){
    if(items.indexOf('milk') < 0){
        return ["milk",...items];
    }
    return items;
}

// console.log(validateShoppingList(...defaultColors,...favoriteColors))


/*
*  解构
*  更快，更便捷
*/

var expense = {
    type: "es6",
    amount: "45"
}

// console.log(expense.type,expense.amount)

//解构  若解构中没有 例如abc选项，会返回 undefined 无效值
const { type,amount,abc } = expense;
// console.log(type,amount,abc);

var saveFiled = {
    extension: "jpg",
    name: "girl",
    size:14040
};

// es5
function fileSammary(name,extension,size){
    return `${file.name}.${file.extension}的总大小是${file.size}`;
}

// console.log(fileSammary(saveFiled));

function fileSammary({name,extension,size}){
    return `${name}.${extension}的总大小是${size}`;
  }
  
// console.log(fileSammary(saveFiled));

// 解构数组

const names = ["Henry1","Bucky","Emily"];
//拿值
// const [name1,name2,name3] = names;
// console.log(name1,name2,name3);

//返回数组个数
// const {length} = names;
// console.log(length);

//结合展开运算符
// const [name1,...rest] = names;
// console.log(name1);

// let a,b;

// [a,b] = [100,200];

// console.log(b);

//对象数组
const people = [
    {name:'Henry',age:20},
    {name:'Bucky',age:25},
    {name:'Emily',age:30}
];

//es5
// var age = people[0].age;
// console.log(age);

//es6解构
// const [age] = people; //此处疑问 只拿得到数组第一个对象，想拿后面的怎么办？
// const [{age}] = people;

// console.log(age);


//将数组转化为对象

const points =[
    [4,5],
    [10,1],
    [0,40]
];

//期望数据格式
//[
//     {x:4,y:5},
//     {x:10,y:1},
//     {x:0,y:40},   
// ]

//es6

// let newPoints = points.map(pair => {
//     // const x = pair[0];
//     // const y = pair[1];
//     const [x,y] = pair;
//     return {x,y}
// })

let newPoints = points.map(([x,y]) => {
    // const x = pair[0];
    // const y = pair[1];
    // const [x,y] = pair;
    return {x,y}
})

// console.log(newPoints);



/**
 *  Class
 *  万事皆对象
 */

// function Car(options){
//   this.title = options.title;
// }

// Car.prototype.drive = function(){
//   return "Vroom";
// }

// const car = new Car({title:"BMW"});
// // console.log(car);
// // console.log(car.drive());


// // 继承
// function Toyota(options){
//   Car.call(this,options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// const toyota = new Toyota({color:"red",title:"Focus"});
// console.log(toyota);
// console.log(toyota.drive());


// es6
class Car{
    constructor({title}){
      this.title = title;
    }
    drive(){
      return 'vroom';
    }
  }

// const car = new Car({title:"BMW"});
// console.log(car);
// console.log(car.drive());

class Toyota extends Car{
    constructor(options){
      super(options);
      this.color = options.color;
    }
  }
  
  const toyota = new Toyota({color:"red",title:"Focus"});
  
//   console.log(toyota);
//   console.log(toyota.drive());
  

  //斐波那契数列
  function fib(max){
      var a = 0,b = 1,arr = [0,1];

      while(arr.length < max){
          [a,b] = [b,a + b];
          arr.push(b);
      }
      return arr;
  }

// console.log(fib(5));
// console.log(fib(10));

function* fib(max){
    var a = 0, b = 1, n = 0;
    while (n < max){
        yield a;
        [a,b] = [b, a + b];
        n++;
    }
    return;
}

// var f = fib(10);

// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// for(var y of fib(10)){
//     console.log(y);
// }

//迭代器还原生成器的结构
function nameIterator1(names){
    let nextIndex = 0;
    return {
        next:function(){
            return nextIndex < names.length ?
                {value: names[nextIndex++],done:false}:
                {value: undefined,done:true}
            }
    }
}

const nameArray = ["Henry","Bucky","Emily"];

const names1 = nameIterator1(nameArray);

// console.log(names1.next().value)
// console.log(names1.next())
// console.log(names1.next())
// console.log(names1.next())


//生成器
function* sayNames(){
    yield 'Henry';
    yield 'Henry';
    yield 'Henry';
}

const name1 = sayNames();

// console.log("=============");
// console.log(name1.next().value);
// console.log(name1.next());
// console.log(name1.next());
// console.log(name1.next());


//ID自增 （es 生成器）

function* createIds(){
    let index = 1;

    while(true){
        yield index++;
    }
}

const gen = createIds();

for(var i = 0; i < 10; i++){
    // console.log(gen.next().value);
}

const data = [
    {
      name: '米斯特吴',
      age: 30,
      gender: '男',
      lookingfor: '女',
      location: '北京',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
      name: '吴先生',
      age: 32,
      gender: '男',
      lookingfor: '女',
      location: '上海',
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
      name: '李女士',
      age: 24,
      gender: '女',
      lookingfor: '男',
      location: '北京',
      image: 'https://randomuser.me/api/portraits/women/83.jpg'
    }
  ];


//迭代器方法
// function profileIterator(profiles){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < profiles.length ?
//                 {value:profiles[nextIndex++],done:false}:
//                 {value:undefined,done:true}
//         }
//     }
// }

function* profileIterator(){
    yield data[0];
    yield data[1];
    yield data[2];
}

const profiles = profileIterator(data);

// console.log(profiles.next());

//手动调佣 设置初始页面
nextProfile();

document.getElementById('next').addEventListener("click",nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">姓名: ${currentProfile.name}</li>
          <li class="list-group-item">年龄: ${currentProfile.age}</li>
          <li class="list-group-item">位置: ${currentProfile.location}</li>
          <li class="list-group-item">性别: ${currentProfile.gender} 寻找的目标对象是${currentProfile.lookingfor}性朋友</li>
        </ul>
       `;
       document.getElementById('imageDisplay').innerHTML = `
         <img src="${currentProfile.image}"/>
       `;
    }else{
        window.location.reload();
    }
}

/** 
 * 数据结构: map
 * 键值对: 与对象不同的是键和值可以是任何类型
 */

 
const map1 = new Map();

// 设置key键
const key1 = 'some string',
      key2 = {},
      key3 = function(){};

// 为key设置value值
map1.set(key1,'Value of key1');
map1.set(key2,'Value of key2');
map1.set(key3,'Value of key3');

// 根据key获取对应的value
//  console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// 获取对应的value数量
//  console.log(map1.size);

// for...of遍历map1中的key and value
//  for(let [key,value] of map1){
//    console.log(`${key} = ${value}`);
//  }

// only key
// for(let key of map1.keys()){
//   console.log(key);
// }

// only value
// for(let value of map1.values()){
//   console.log(value);
// }

// forEach遍历map1
// map1.forEach((value,key) => {
//   console.log(`${key} = ${value}`);
// })

// 将map1转化为正常的数组
// const keyValueArray = Array.from(map1);
// console.log(keyValueArray);

// 将map1中的key转化为数组
// const keyArray = Array.from(map1.keys());
// console.log(keyArray);

// 将map1中的value值转换为数组
// const valueArray = Array.from(map1.values());
// console.log(valueArray);


/*
*构造函数：Promise
*一个非常牛逼闪电的东西；
*/

let promise = new Promise((resolve,reject) => {
    // reject();
    resolve();
});

// promise
//     .then(() => console.log("成功,没有任何问题!"))
//     .then(() => console.log("成功,可以无限调用then方法!"))
//     .catch(() => console.log("uh oh,出现了重大问题!"))
    //使用 reject(); 就会 执行.catch 因为reject()没有then方法


let url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))

document.getElementById('button1').addEventListener('click',
getText);
document.getElementById('button2').addEventListener('click',
getJson);
document.getElementById('button3').addEventListener('click',
getExternal);

//获取本地纯文本数据
function getText(){
    fetch("test.txt")
        .then((res) => res.text())
        .then(data => {
            console.log(data)
            document.getElementById('output').innerHTML = data;
        }) 
        .catch(err => console.log(err));   //问题：貌似无效
}

//获取本地json数据
function getJson(){
    fetch("posts.json")
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            let output = '';
            data.forEach((post) => {
                output += `
                <ul>
                <li>${post.title}</li>
                <li>${post.body}</li>
                </ul>
                `;
            })

            document.getElementById('output').innerHTML = output;
        }) 
        .catch(err => console.log(err));   //问题：貌似无效
}

//请求网络api
function getExternal(){
    fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            let output = '';
            data.forEach((user) => {
                output += `
                <ul>
                <li>${user.login}</li>
                <li>${user.id}</li>
                </ul>
                `;
            })

            document.getElementById('output').innerHTML = output;
        }) 
        .catch(err => console.log(err));   //问题：可以实现，需要域名不存在
}


var http = new EasyHttp;
//请求数据

// http.get("http://jsonplaceholder.typicode.com/users")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

//传输数据
const data1 = {
    name:"Summer",
    usrname:'夏天',
    email:"370959322@qq.com"
};
// post user
// http.post("http://jsonplaceholder.typicode.com/users",data)
//     .then(data => console.log(data1))
//     .catch(err => console.log(err));

// update user
// http.put("http://jsonplaceholder.typicode.com/users/2",data1)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// delete user
// http.delete("http://jsonplaceholder.typicode.com/users/2")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// async function myFunc(){
//   // return "Hello World!";

//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Hello World!'),2000)
//   })

//   // 错误信息
//   const error = true;

//   if(!error){
//     // 等待resolve执行完毕之后,才会执行
//     const res = await promise;
//     return res;
//   }else{
//     await Promise.reject(new Error("error: 报错了!"));
//   }
// }

// // console.log(myFunc());

// myFunc()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// 请求数据
async function getUsers(){
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }
  
  getUsers().then(users => console.log(users))