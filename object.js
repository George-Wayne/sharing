/********************************
 * JS对象
 * Author: George Wayne
 ********************************/


/**
 * JS创建对象的方式：对象自面量的方式、直接new内置对象的方式、自定义对象构造
 **/

/*************** 1、对象自面量的方式 ***************/
var car = {
    name: 'Jeep',
    color: 'red',
    price: '$100000'
};
car.age = '2 years';
console.log('Json的方式', car.name, car.price, car.age, car);


/*************** 2、new对象实例的方式 ***************/
var dog = new Object();
dog.name = 'HaHa';
dog.color = 'white';

var cat = dog;
cat.age = '3 years';//这种方式也会把属性添加到dog对象上
console.log('new内置对象', dog, cat);


/*************** 3、自定义对象构造 ***************/
/*此方式请参照oop.js中‘javascript实现继承的方式’*/


/*************** 4、Object.create的方式 ***************/
function People() {
    this.color = 'yellow';
    this.part = 'water';
};
function George() {
    this.name = 'George';
}
George.prototype = Object.create(People.prototype);
George.prototype.constructor = George;
var wayne = new George();
console.log('create的方式', wayne.color);



/**
 * JS创建对象内置方法：defineProperty、hasOwnProperty、、
 **/