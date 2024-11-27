# 数组

数组可以存放多个同一类型的数据。

```java
double[] hens = { 3, 5, 1.1, 2, 50 };
hens[0] // 取值 3
double hens1[] = new double[5]; // 创建长度为 5 的 double 数组
// double[] xxx 和 double xxx[] 一样，但推荐 double[] xxx 这种
```

java 数组的元素类型和数组的大小都是确定的，不能像 js 一样动态调整空间，也不能插入其他类型（不能自动转换）的数据。
```java
int[] a = new int[3];
a[0] = 1;
a[1] = true; // 错误: 不兼容的类型: boolean无法转换为double
a[2] = 'a'; // 97
a[3] = 4; // java.lang.ArrayIndexOutOfBoundsException
a[100]; // java.lang.ArrayIndexOutOfBoundsException
```

数组创建后，如果没有赋值，则会自动初始化为默认值：int 0、short 0、byte 0、long 0、float 0.0、double 0.0、char \u0000（''）、boolean false、String null。

和 js 一样，数组是引用类型。
```java
int[] a = { 1, 2, 3 };
int[] b = a;
b[0] = 0;
a[0] // 0
```

### 二维数组

```java
int[][] a = { { 1, 2, 3 }, { 1, 2, 3 } };
int[][] b = new int[2][3];
int[][] c = new int[2][]; // 先不给二维开辟空间，后续再 c[i] = new int[xxx]
```

注意：二维数组不代表每个数组长度必须一致，但二维必须要是 int 数组，不能是其他类型。
```java
int[][] a = { { 1 }, { 1, 2 }, { 1, 2, 3 } }; // 可以，二维分别为 1、2、3长度的 int 数组
a[0][0] // 1
a[0].length // 1
a[0][1] = 2 // java.lang.ArrayIndexOutOfBoundsException
a[0] = 'a' // 错误: 不兼容的类型: char无法转换为int[]
```