/********************************
 * 面向对象程序设计
 * Author: George Wayne
 ********************************/




/**
 * 数据类型
 **/

/**
 * 函数
 **/

/**
 * 对象
 **/

/**
 * 闭包
 **/


/**
 * 原型
 **/


/**
 * 继承
 *
 * Javascript实现继承的方式：prototype原型、构造函数、call()和apply()、工厂方式、混合工厂方式
 *
 **/

/*************** 1、工厂方式 ***************/
function createCar(Color, Doors, Money) {
    var Car = new Object;//第一步：创建对象
    Car.color = Color;//第二步：给对象添加属性和属性值
    Car.doors = Doors;
    Car.money = Money;
    /*最好的方式，是把showColor写成独立函数，这里用指针的形式来调用 oTempCar.showColor = showColor;*/
    Car.showColor = function () {
        alert(this.color);
    };
    return Car;//第三步：返回这个对象
}

var Car1 = createCar("red", 4, 23);//第四步：不需要用new对象的方式来实例化
var Car2 = createCar("blue", 3, 25);

Car1.showColor();
Car2.showColor();


/*************** 2、构造函数方式 ***************/
function Student(name, age) {//第一步：构造函数名首字母大写
    this.name = name;//第二步：用this声明成员变量
    this.age = age;
    this.showName = function () {
        console.log('stu2.showName()', this.name);
    };
}
var stu1 = new Student("george", 4);//第三步：用new来实例化
var stu2 = new Student("wayne", 3);

console.log('stu1.name', stu1.name);
stu2.showName();


/*************** 2、prototype函数原型方式 ***************/
function Book(name, price) {//第一步：必须是构造函数
    this.name = name;
    this.price = price;
}

Book.prototype.outPrice = function () {//用prototype给函数添加属性
    console.log('page', this.price);
};
var book = new Book('上下五千年', 60);
book.outPrice();//根据原型链检索
console.log('book', book.name, book.price);

function History() {
}
History.prototype = new Book('历史书', 35);
History.prototype.size = 'small';
var his = new History();
History.prototype.color = 'yellow';
his.outPrice();
console.log('his', his.color, his.name, his.price, his.size);


/*************** 4、call() 和 apply()方式 ***************/
function Skye(age, gender) {
    this.age = age;
    this.gender = gender;
    this.profile = function () {
        console.log('Age is ' + this.age + ' and ' + 'gender is ' + this.gender);
    };
}

function George(age, gender) {
    Skye.call(this, age, gender);//call的方式：this指当前所在的对象，参数以列表的形式传入。
}
var george01 = new George(25, 'male');
george01.profile();
console.log('george01', george01.age, george01.gender);

function Wayne(age, gender) {
    Skye.apply(this, [age, gender]);//apply的方式：this指当前所在的对象，参数以数组的形式传入。
}
var wayne01 = new Wayne(30, 'female');
wayne01.profile();
console.log('wayne01', wayne01.age, wayne01.gender);