# 包

### 路径

没有相对路径，只有绝对路径，以 `src` 作为根路径，向下寻找。

```js
// js 根路径为 src，src/com/aaa/AAA.vue
import AAA from '_app/com/aaa/AAA.vue';
// 当前与 com 同级的文件中引入
import AAA from './aaa/AAA.vue';
// 当前在 src/source/index.vue 中
import AAA from '../com/aaa/AAA.vue'
```

```java
// java 根路径为 src，src/com/aaa/AAA.java
// 无论当前文件在哪，引入路径只有这一种
import com.aaa.AAA;
```

### 定义包

```js
// AAA.vue
export default {  }
```

```java
// com/aaa/AAA.java
// 必须与路径一致
package com.aaa;
public class AAA {
  
}
```

```java
// 错误，路径不对
package com.bbb;
```

### 引入包

```java 
import com.aaa.AAA;
public class UsePackage {
  public static void main(String[] args) {
    AAA a = new AAA();
  }
}
```

```java 
import com.aaa.*;
public class UsePackage {
  public static void main(String[] args) {
    AAA a = new AAA();
  }
}
// 不推荐使用 *，因为会把 aaa 下的所有 java 类都导入进来，增大 jar 包大小，并且不利于追溯究竟用了哪些 java 类
```

### 同名

```js
// src/com/aaa/AAA.vue
// src/com/bbb/AAA.vue
import AAA from '_app/com/aaa/AAA'
import BBB from '_app/com/bbb/AAA'
```

```java
import com.aaa.AAA;
// 报错，类名重复
import com.bbb.AAA:
```

### 导入完整包

```java
// js 只能 import 一个文件
// java 可以 import 一个文件夹下的所有 java 类
// 导入 aaa 下面的所有类
import com.aaa.*;
// 导入 bbb 下面的所有类
import com.bbb.*;
public class UsePackage {
  public static void main(String[] args) {
    com.aaa.AAA a = new com.aaa.AAA();
    com.bbb.AAA b = new com.bbb.AAA();
  }
}
```

### 官方包

```java
import java.lang.*;
import java.util.*;
import java.net.*;
// import java.util.Scanner;
```