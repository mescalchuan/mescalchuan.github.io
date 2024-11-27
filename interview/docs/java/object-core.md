# 对象核心

<p style="color: red;">面向对象编程三大特征：封装、继承、多态。</p>

## 封装

把抽象出的数据（属性）和对数据的操作（方法）封装在一起，数据被保护在内部，程序的其他部分只有通过被授权的操作（调用方法）才能对数据进行操作。

封装三步骤：
* 将属性进行私有化 private。
* 提供一个 public set 方法，对属性赋值（属性值校验等）。
* 提供一个 public get 方法，获取属性的值（权限校验等）。

### 访问修饰符

修饰符可以修饰类中的属性、方法甚至是类本身，规则如下：

* public：同类、同包、子类内部（与父类同包、与父类不同包）、不同包均可访问。
* protected：同类、同包、子类内部（与父类同包、与父类不同包）可访问。
* 默认（无）：同类、同包、子类内部（与父类同包）可访问。
* private：仅同类可访问。

> 只有 public 和默认修饰符才可以修饰类本身。


## 继承
子类自动拥有父类的属性和方法，父类又叫超类、基类，子类又叫派生类。

* 子类继承了父类所有的属性和方法（不受修饰符限制），但是，非 private 的属性和方法可以直接访问，private 属性和方法不能直接访问，必须通过父类提供的非 private 方法去访问。
* 子类必须调用父类的构造器，完成父类的初始化。当创建子类时，默认会调用父类的无参构造器。若父类没有该构造器或子类想调用父类的其他构造器，则需要在子类中手动调用（super）。
```java
public class Cat {
  public Cat() {

  }
  public Cat(String name, int age) {

  }
}
public class Meiduan extends Cat {
  public Meiduan(String name, int age) {
    // 默认调用 Cat()
    // 下面是手动调用 Cat 的 Cat(String name, int age) 构造器
    super(name, age);
  }
}
```
* super 必须放在构造器的第一行。
* 所有类都是 Object 的子类。
* 父类构造器的调用不限于父类本身，将一直追溯到 Object 类（类似原型链）。
* java 是单继承机制，即子类只能继承一个父类。
* 子类和父类必须满足 is-a 的关系，不能滥用。

访问属性、方法的过程：先看子类是否有该成员，如果有且可以访问，则返回信息。如果没有，则向上查找父类有没有属性，如果有且可以访问，则返回信息。如果还没有，则继续向上查找直到 Object。

### Super

父类的引用，用于访问父类的属性（非 private）、方法（非 private）、构造器。

* 调用父类构造器的好处：分工明确（父类属性由父类初始化，子类属性由子类初始化）。
* 当子类中有和父类成员重名的属性、方法时，为了访问父类的成员，必须使用 super。访问过程同上面的「过程」，遵循原型链原则。

<table>
  <thead>
    <tr>
      <th>区别点</th>
      <th>this</th>
      <th>super</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>访问属性</td>
      <td>访问本类中的属性，如果本类没有则从父类中继续查找</td>
      <td>从父类开始查找属性</td>
    </tr>
    <tr>
      <td>调用方法</td>
      <td>访问本类中的方法，如果本类没有则从父类中继续查找</td>
      <td>从父类开始查找属性</td>
    </tr>
    <tr>
      <td>调用构造器</td>
      <td>调用本类的构造器，必须放在构造器的首行</td>
      <td>调用父类的构造器，必须放在构造器的首行</td>
    </tr>
    <tr>
      <td>特殊</td>
      <td>表示当前对象</td>
      <td>子类中访问父类对象</td>
    </tr>
  </tbody>
</table>

### 重写

重写父类的方法逻辑。

条件：
* 子类方法的参数、方法名称和父类方法完全一样。
* 子类方法的返回类型和父类方法一样或是父类返回类型的子类。
* 子类方法不能缩小父类方法的访问权限。

```java
// 父类
public Object test(String name) {
  return xxx
}
// 子类
// 方法名、参数、返回类型（String 是 Object 的子类）都满足条件，父类 test 逻辑被重写
public String test(String name) {
  return yyy + xxx
}
// 错误，不能缩小权限
protected String test(String name) {
  return yyy + xxx
}
// 访问子类方法
this.test("xxx")
// 访问原本父类方法
super.test("xxx")
```

<table>
  <thead>
    <tr>
      <th>名称</th>
      <th>发生范围</th>
      <th>方法名</th>
      <th>形参列表</th>
      <th>返回类型</th>
      <th>修饰符</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>重载</td>
      <td>本类</td>
      <td>必须一样</td>
      <td>类型、个数或者顺序至少有一个不同</td>
      <td>无要求</td>
      <td>无要求</td>
    </tr>
    <tr>
      <td>重载</td>
      <td>父子类</td>
      <td>必须一样</td>
      <td>相同</td>
      <td>子类重写的方法，返回的类型和父类返回的类型一致或者是其子类</td>
      <td>子类方法不能缩小父类方法的访问范围</td>
    </tr>
  </tbody>
</table>

## 多态

方法或对象具有多种形态，多态是建立在封装和继承基础之上的。

### 前提

* 一个对象的编译类型和运行类型可以不一致。
* 编译类型再定义对象时就确定了，不能改变。
* 运行类型是可以变化的。
* 编译类型看定义时 = 号的左边，运行类型看 = 的右边。

### 实现

必要条件：

* 继承
* 重写
* 父类引用指向子类对象（向上转型）

```java
// 多态
Animal animal = new Dog();
// Dog、Cat 均重写了 Animal 的 say
// 调用 Dog 的 say
animal.say();
animal = new Cat();
// 调用 Cat 的 say
animal.say();
```

本质：父类的引用指向了子类的对象。

编译类型为父类类型，运行类型为子类类型。可以调用父类中的所有成员（遵循访问权限），不能调用子类特有成员。

<p style="color: red;">调用方法时，首先检查父类中是否有该方法，如果没有，则编译错误。如果有，再去调用子类的同名方法；调用属性时，首先检查父类中是否有该属性，如果没有，则编译错误。如果有，直接访问父类属性。</p>

```java
public class Animal {
  public String name = "dongwu";
  public void say() {
    System.out.println(name);
  }
}
class Cat extends Animal {
  public String name = "mao";
  public void say() {
    System.out.println("猫：" + name);
  }
}
Animal animal = new Cat();
System.out.println(animal.name);
animal.say();
// dongwu
// 猫：mao
```

### 向下转型

前提：目标对象必须是父类的引用，不能是父类的对象。且父类的引用必须指向的是当前目标类型的对象。

```java
// animal1 是父类的引用，指向目标类型 Cat
Animal animal1 = new Cat();
// animal2 是父类的对象
Animal animal2 = new Animal();
// Cat 是目标类型
Cat cat1 = (Cat) animal1; 
// 错误，Animal cannot be cast to Cat
Cat cat2 = (Cat) animal2;
System.out.println(cat1.name);
cat1.say();
// mao
// 猫：mao
```

编译类型和运行类型均为子类型，可以调用子类中的所有成员，和直接 new 一个子类无差异。

`instanceOf` 判断对象的类型是否为 xx 类型或是否为 xx 类型的子类型

```java
Animal animal1 = new Cat();
Animal animal2 = new Animal();
Cat cat = (Cat) animal1;
animal1 instanceOf Animal; // true
animal1 instanceOf Cat; // true
animal2 instanceOf Animal; // true
animal2 instanceOf Cat; // false
cat instanceOf Animal; // true
cat instanceOf Cat; // true
```

### 属性重写

<p style="color: red;">多态下，属性没有重写一说！属性的值看编译类型（= 号的左边）</p>

```java
class Base {
  public int count = 10;
  public int getCount() {
    return this.count;
  }
}
class Sub extends Base {
  int count = 20;
}
Base base1 = new Base();
Sub base2 = new Sub();
Base base3 = new Sub();
base1.count; // 10
base2.count; // 20
// 看 = 左边，Base 类型，访问 Base 的 count
base3.count; // 10
```

### 动态绑定机制

<ul style="color: red;">
<li>当调用对象方法时，该方法会和该对象的内存地址/运行类型所绑定（动态绑定机制）。</li>
<li>当调用对象属性时，没有动态绑定机制，哪里声明的，就哪里使用。（见属性重写中的例子）</li>
</ul>

```java
// 正常返回 Base 类 count
base1.getCount(); // 10
// 这里注意，由于子类没有 getCount 方法，所以调用父类的 getCount，而父类的 return this.count 则是 10
base2.getCount(); // 10
// 调用子类的 getCount，由于子类没有 getCount 方法，所以调用父类的 getCount，而父类的 return this.count 则是 10
base3.getCount(); // 10
```

```java
class Sub extends Base {
  int count = 20;
  public int getCount() {
    return this.count;
  }
}
// 正常返回 Base 类 count
base1.getCount(); // 10
// 调用子类的 getCount，return this.count 则是 20
base2.getCount(); // 20
// 调用子类的 getCount，return this.count 则是 20
base3.getCount(); // 20
```

<p style="color: red;">从上面的例子可以总结出：直接访问属性看 = 号左边；访问方法看 = 号右边，但是如果右边没有这个方法，则向上（原型链）找父类的（此时父类方法里的 this 已经指向父类了，所以多态的前提要求是方法必须重写，来避免这种 case）。</p>