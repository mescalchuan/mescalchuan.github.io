# 循环

do while：先执行后判断。
```java
do {
  // 代码
} while(boolean)
```

标签：多层循环时指定 break 跳出哪一层。

```java
label1:
  for() {
    label2:
      for() {
        break label1;
      }
  }
```

continue：退出本次循环，执行下一次循环，也支持标签。

return：用在方法时，退出方法，用在 main 中则结束程序。

```java
public static void main(String args[]) {
  for(int i = 1; i <= 5; i++) {
    if(i == 3) {
      System.out.println("到了");
      // break continue return
    }
    System.out.println("继续");
  }
  System.out.println("结束");
}
// break：继续 继续 到了 结束
// continue：继续 继续 到了 继续 继续 结束
// return：继续 继续 到了
```