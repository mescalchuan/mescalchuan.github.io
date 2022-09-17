# 常见算法

### 链表反转

```js
function reverse( linkedList ){
    var head = linkedList.head;

    // 如果只有一个节点 或者 是空链表
    if( head === null || head.next === null ){
        return;
    }
    var p = head;
    var q = p.next;
    // 反转后的头结点变成尾节点
    head.next = null;
    while(q){
        r = q.next;
        q.next = p;
        p = q;
        q = r;
    }
    // 退出循环后 r = q.next = null, q.next = q; p=q; q=null;
    // p指向原来节点的尾节点， 那么翻转后，尾节点变成头结点
    linkedList.head = p;
}
```

### 快排

```js
quicksort = function(a,p,r) {
	if(p>r) return 
	var q = partition(a,p,r);
	quicksort(a,p,q-1);
	quicksort(a,q+1,r);

}

partition = function(a,p,r) {
	var x = a[r],i=p-1;
	for(var j = p;j<r;j++) {
		if(a[j] <= x) {
			i++;
			exchange(a[j], a[i]);
		}
	}
	exchange(a[i+1],a[r]);
	return i+1;
} 
```