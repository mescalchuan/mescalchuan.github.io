# 对象

### 示例

```java
public class Hi {
  // 构造器，类似其他语言的 constructor
  public Hi(String name, int age) {
    this.name = name;
    this.age = age;
  }
  // 属性
  public String name;
  public int age;
  // 静态属性
  public static int a = 1;
  // 方法
  public String getAge() {
    return "年龄为：" + this.age;
  }
  public void setAge(int age) {
    this.age = age;
  }
  public String getName() {
    return "姓名为：" + this.name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public static void main(String[] args) {
    Hi hi = new Hi("张三", 18);
    System.out.println(hi.getName());
    System.out.println(hi.getAge());
    hi.setName("李四");
    hi.setAge(20);
    System.out.println(hi.getName());
    System.out.println(hi.getAge());
    System.out.println(Hi.a);
  }
}
```

### 内存分配机制

java 内存结构包括：
* 栈：存放基本数据类型（局部变量）。
* 堆：存放对象。
* 方法区：常量池（常量，比如字符串），类加载信息。

java 创建对象流程：
```java
Person p = new Person();
p.name = "qc";
System.out.println("ok");
```
* 先加载 `Person` 类信息（属性和方法），只加载一次。
* 在堆中分配空间（地址）。
* 完成对象初始化，顺序：默认初始化 `String name;` -> 显式初始化 `String name = 1;` -> 构造器初始化 `Person(String name) { this.name = name }`。
* 把堆中的地址赋给 `p`，`p` 指向了对象 `Person` 的引用。
* 执行后续逻辑，比如 `p.name = "qc"` `System.out.println("ok")`。

### 属性
* 属性的定义类型可以为任意类型（基本 + 引用）。
* 属于有默认值，同数组。

### 方法
* 当程序执行到方法时，开辟一个独立的栈空间。
* 当方法执行完毕，或执行到 return 时，返回。
* 返回到调用方法的地方。
* 返回后，继续执行方法后面的代码。
* 当 main 方法（栈）执行完毕，整个程序退出。

内存整体原理和 js 相似。方法的形参也区分基本类型和引用类型，形参为对象或数组，传入的也是地址。

递归：和 js 一样，注意栈溢出的问题。

### 方法重载
允许同一个类中，多个同名方法的存在，但形参列表必须不一致！
```java
public String getName() {
  return this.name;
}
public String getName(String format) {
  return this.name + format;
}
public String getName(int format) {
  return this.name + " + int + " + format;
}
// 错误，和第一个形参列表相同了，即便返回类型不一样也不行，不能重载
public void getName() {
  
}
```

### 延伸 - 可变参数

在形参的最后位置，可以通过数组接收相同类型的可变参数，一个方法只能有一个可变参数。

```java
public void getSum(String description, int... arrs) {
  int res = 0;
  for(int i = 0; i < arrs.length; i++) {
    res += arrs[i];
  }
  System.out.println(description + ":" + res);
}
p.getSum("计算 1～9 的累加", 1, 2, 3, 4, 5, 6, 7, 8, 9);
```

### 作用域
和 js 的 `let` 相似，不存在提升，同一作用域不能重名，调用时就近原则，声明周期取决于自己的作用域。

### 构造器

未声明构造器的时候，java 会初始化一个默认构造器（没有任何逻辑的）。

初始化对象时，入参必须和构造器形参一致（数量 + 类型），不能多不能少，如果希望初始化部分属性，可以使用构造器重载。
```java
public Person {
  public Person(String name, int age) {

  }
}
Person p = new Person("qc"); // 错误，少了 age
Person p = new Person("qc", 1, 1); // 错误，多了
Person p = new Person(); // 错误，少了 name、age
Person p = new Person("qc", 1); // 正确
```

```java
public class Person {
  public Person(String name, int age) {

  }
  // 重载，可以只传 name
  public Person(String name) {

  }
  // 重载，可以什么都不传
  public Person() {

  }
}
```

### This

与 js 不同，this 仅指向实例本身，不存在隐式、显式绑定。

不使用 this 也能访问本对象的属性，但是存在：构造器形参不能和属性一致、方法内存在同名变量将无法再访问本属性等问题：

```java
public class Person {
  public String name;
  public int age;
  public Person(String pName, int pAge) {
    // 没问题，name、age 都是属性，且被赋值。缺点：形参要换名字
    name = pName;
    age = pAge;
  }
  public String getName() {
    // 也没问题，返回 name 属性
    return name;
  }
  public String getSelfName() {
    String name = "txy";
    // 不使用 this，getSelfName 就只能返回 txy 了
    return name;
  }
}
```

```java
public class Person {
  public Person() {
    // 访问另一个构造器，必须位于本构造器第一行
    this("qc", 18);
    System.out.println("qc, 18");
  }
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
```