# General Notes

## JavaScript Null vs Undefined

> Understanding the difference between null and undefined

Null and Undefined are both data types in JavaScript.

**Undefined** is a variable that has been declared but not assigned a value.

**Null** as an assignment value. So you can assign the value `null` to any variable which basically means it’s blank.

So by not declaring a value to a variable, JavaScript automatically assigns the value to `undefined`. However, when you assign `null` to a variable, you are declaring that this value is _explicitly empty_.

![](https://miro.medium.com/max/60/1*SYsFgvpVRVrCl_d393PNFA.png?q=20)

![](https://miro.medium.com/max/974/1*SYsFgvpVRVrCl_d393PNFA.png)

Null and Undefined

JavaScript will never automatically assign the value to `null`. That must be done by you in your code.

Let’s get some more info on these.

![](https://miro.medium.com/max/60/1*bMAdPGGzZZXnyr6taL-Dag.png?q=20)

![](https://miro.medium.com/max/1144/1*bMAdPGGzZZXnyr6taL-Dag.png)

Typeof null and undefined

We see here that the type of `null` is an **object** but the type of `undefined` is **undefined**.

Since these are different data types, if we compare them with strict equality `===`, we get `false`.

![](https://miro.medium.com/max/60/1*8LcVAKAnmNfSLW9WqhUtLQ.png?q=20)

![](https://miro.medium.com/max/1144/1*8LcVAKAnmNfSLW9WqhUtLQ.png)

Comparison between null and undefined

But if we compare them with abstract equality `==`, we get `true`.

So JavaScript does consider these to be relatively equal since they both represent an empty value.

![](https://miro.medium.com/max/60/1*59myGFyjC5CKybc68poKPQ.png?q=20)

![](https://miro.medium.com/max/1026/1*59myGFyjC5CKybc68poKPQ.png)

So if you need to check if a value is either `null` or `undefined`, you can check for abstract equality and compare it to either null or undefined. Both will return the same result.

