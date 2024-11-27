# 基本类型

```java
// Hello.java
// 根类名必须与文件名一致
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello");
  }
}
```

```shell
javac Hello.java
java Hello // Hello
```

### 数据类型

* byte：8 位（1 字节），`-2^7`-`2^7-1`。
* short：16 位（2 字节），`-2^15`-`2^15-1`。
* int：32 位（4 字节），`-2^31`-`2^31-1`。
* long：64 位（8 字节），`-2^31`-`2^31`。
* float：32 位（4 字节），单精度浮点型，符合 IEEE 754 标准的浮点数。
* double：64位（8 字节），双精度浮点型，符合 IEEE 754 标准的浮点数。
* boolean。
* char：单一的 16 位 Unicode 字符。

### 整型

整型包括：byte、short、int、long，且默认为 int。声明 long 时最好加 l/L 作为标记。

```java
byte a = 1; // ok
short b = 1; // ok
int c = 1; // ok
long d = 1; // ok
long f = 1l; // ok
```

### 浮点型

浮点型包括：float、double，且默认为 double。声明 float 时必须加 f/F。

浮点数在机器中存放形式：浮点数 = 符号位 + 指数位 + 尾数位。

建议使用 double，它比 float 更精确。

```java 
float a = 1; // ok
float b = 1.1; // 错误: 不兼容的类型: 从 double 转换到 float 可能会有损失
float c = 1.1f; // ok
double d = 1; // ok
double e = 1.1; // ok
```

### 字符类型

* char：单个字符，两个字节，`''` 表示。
* String：多字符，`""` 表示，非基本类型，本质是对象。

char 的本质是一个整数，代表字符对应的 unicode 码，因此可以直接给 char 赋一个整数，输出整数对应的内容。且 char 可以进行运算（整数运算）。

```java
char a = 'a';
char b = 97; // 'a'
int c = a + b; // 194，参考类型转换一章
```

字符类型本质：
* 存储：'a' -> 码值 97 -> 二进制 -> 存储。
* 读取：二进制 -> 97 -> 'a' -> 显示。

### 布尔类型

* 1 个字节。
* 只允许 true 或 false，不允许 0、1 等其他 truly、falsly 形式。