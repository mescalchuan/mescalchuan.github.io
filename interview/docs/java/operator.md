# 运算

注意运算结果的类型。

```java
int a = 10;
int b = 4;
int c = a / b; // 2
double d = a / b; // 2.0 因为先进行两个 int 的运算，得 2，再将 2 转为 2.0
double d = (double)a / (double)b; // 2.5
```

java 没有 `===` 和 `!==`，没有等号两边的隐式转换。
```java
int a = 1;
String b = "1";
System.out.println(a == b); // 错误: 不可比较的类型: int和String
```

java 也不可以通过 `!` 将其他类型转为 boolean。
```java
int a = 1;
System.out.println(!a); // 错误: 一元运算符 '!' 的操作数类型int错误
```

复合赋值运算符会进行类型转换。
```java
byte a = 1;
a = a + 1; // 错误: 不兼容的类型: 从int转换到byte可能会有损失
a += 1; // ok，1 强转成了 byte
a++ // ok
```