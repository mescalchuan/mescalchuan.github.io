# 类型转换

### 自动转换

当进行赋值或运算时，精度小的类型会自动转换为精度大的类型，精度大小排序为（两条转换路线）：

* char -> int -> long -> float -> double。
* byte -> short -> int -> long -> float -> double。

```java
int a = 'c'; // ok 99
double b = 80; // ok 80.0
```

* 有多种类型的数据混合运算时，自动将所有数据转换成精度最大的，然后进行计算。当大精度赋值给小精度会报错，反之则自动类型转换。

```java
char a = 'c';
int b = 1;
float c = 1.1f;
float d = a + b + c; // 101.1
int e = a + b + c; // 错误: 不兼容的类型: 从float转换到int可能会有损失
d = d + 1.1; // 错误，1.1 默认是 double。
d = d + 1.1f; // ok
```

* byte、short、char 三者可以计算，计算时首先转换为 int。

```java
byte a = 1;
short b = 2;
char c = 'c';
int d = a + b + c; // 102
```

* boolean 不参与任何转换。
* 计算结果的类型自动提升为操作数中最大的类型。

### 强制类型转换

人工把精度大的类型转换为精度小的类型，可能造成精度降低或溢出。

```java
int i = (int)1.9; // 1
int j = 100;
byte k = (byte)j; // 100
k = (byte)100000; // -96（溢出了）
```

### 基本数据类型和 String 的转换

```java
100 + 98 -> 198
"100" + 98 -> "10098"
100 + 3 + "hello" -> "103hello"
"hello" + 100 + 3 -> "hello1003"
```

```java
int a = 1;
float b = 1.1f;
double c = 1.11;
boolean d = true;
String a1 = a + ""; // "1"
String b1 = b + ""; // "1.1"
String c1 = c + ""; // "1.11"
String d1 = d + ""; // "true"
int a2 = Integer.parseInt(a1); // 1
float b2 = Float.parseFloat(b1); // 1.1
double c2 = Double.parseDouble(c1); // 1.11
boolean d2 = Boolean.parseBoolean(d1); / true
// 还有 Byte.parseByte Short.parseShort Long.parseLong
```