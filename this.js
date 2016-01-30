/********************************
 * JS关键字this
 * Author: George Wayne
 ********************************/


/**
 * this的指向及作用域
 **/

/********* 1、指向所处环境的父级对象（对象的方法中） ********/

/********* 2、指向window或者global（普通的函数中，全局变量都是window对象的属性） ********/

/********* 3、指向新构造的对象（构造函数以及call，apply构造新的对象属性） ********/





//易错案例01：
var scope = 'top';
var f1 = function () {
    console.log(scope);
};
f1(); // 输出 top
var f2 = function () {
    var scope = 'f2';
    f1();
};
f2(); // 输出 top


//易错案例02：
var someuser = {
    name: 'byvoid',
    func: function () {
        console.log(this.name);
    }
};
var foo = {
    name: 'foobar'
};

someuser.func(); // 输出 byvoid

foo.func = someuser.func;
foo.func(); // 输出 foobar

name = 'global';
func = someuser.func;
func(); // 输出 global