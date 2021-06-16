[![bikash bhandari](https://miro.medium.com/fit/c/96/96/0*KnD0M9wTOPYeNcMC)](https://medium.com/@bikash.bhandari05?source=post_page-----db3f15cec185--------------------------------)

![](https://miro.medium.com/max/1768/1*hY3Cg_EXNnEllJt4BN1hAQ.png)

In this articles, i will explain about spread and rest operator in javascript by examples.

**Spread Operator:S**pread syntax allow an iteratable such as an array expression or string to be expanded in a place where zero or more elements are expected  
or an object expression to be expanded where zero or more key-value pairs are expected. _Syntax: …geek_

Example 1:

<script>  
 let a=\[10,20,30\];  
 let b=a;  
 a\[0\]=50;  
 console.log(‘value of a is ‘,a)//OUTPUT: \[50,20,30\]  
 console.log(‘value of b is ‘,b)//OUTPUT: \[50,20,30\]  
</script>

In above code we declare value of ‘a’ as array and we assign value of ‘a’ to ‘b’ which copies value of array ‘a’ to ‘b’ and we see the result  
as both ‘a’ and ‘b’ has same value.

but when we change the value of first index of array ‘a’ as a\[0\]=50 then we see the value of ‘b’ also changes. this is because in javascript, array is reference type i.e it copies reference not value

this causes problem because when we change the value of element inside array ‘a’ then the value of element of ‘b’ also change.

so to get rid from such problem,we use spread operator here..it copies data by value not by reference

Example2.  
 <script>  
 let a=\[10,20,30\];  
 let b=\[…a\]  
 a\[0\]=50;  
 console.log(‘value of a is ‘,a)//OUTPUT: \[50,20,30\]  
 console.log(‘value of b is ‘,b)OUTPUT: \[10,20,30\]  
</script>

From above Example2,we see when we use sperad operator to copy the value, the change in array ‘a’ doesn’t effect ‘b’

We can merged or add more data using spread operator as:

Example3:  
 <script>  
 let a=\[10,20,30\];  
 let b=\[…a,40,50,60\]//adding new data to array ‘b’  
 console.log(‘value of a is ‘,a)//OUTPUT: \[10,20,30\]  
 console.log(‘value of b is ‘,b)//OUTPUT: \[10,20,30,40,50,60\]</script>

Similary we can add new data before or after to spread operator as below:

Example4:  
 <script>  
 let a=\[10,20,30\];  
 let b=\[5,6,…a,40,50,60\]//adding data before and after spread   operator  
 console.log(‘value of a is ‘,a)//OUTPUT: \[10,20,30\]  
 console.log(‘value of b is ‘,b)//OUTPUT: \[5,6,10,20,30,40,50,60\]</script>Example5: Suppose ‘a’ & ‘b’ are two array then we can assign value of ‘a’ and ‘b’ to ‘c’ as below  
 <script>let a=\[10,20,30\];  
 let b=\[40,50,60\];  
 let c=\[…a,…b\]//c gets value of both a and bconsole.log(‘value of a is ‘,a)  
 console.log(‘value of b is ‘,b)  
 console.log(‘value of c is ‘,c)//OUTPUT: \[10,20,30,40,50,60\]  
</script>

**Spread operator in object:T**he object is also reference type in javascript

Example6:  
<script>let a={name:’bikash’,profession:’programmer’}  
 let b=a  
 a.name=”padam”;  
 console.log(‘value of a is ‘,a)  
 console.log(‘value of b is ‘,b)  
 </script>

In above Example6, the value of object ‘a’ is assign to ‘b’ as by reference and when we change the value of a.name=”padam” then it also change the value of b object , so to get rid from this we use spread operator

Example 7.  
<script>let a={name:’bikash’,professional:’programmer’}  
 let b={…a}  
 a.name=”padam”;  
 console.log(‘value of a is ‘,a)  
 console.log(‘value of b is ‘,b)</script>here we can see any change in value of ‘a’ object doesn’t effect in ‘b’we can add new value to object ‘b’ as   
Example 8:  
<script>let a={name:’bikash’,professional:’programmer’}  
let b={…a,age:28,height:’5feet 10 inch’}  
console.log(‘value of a is ‘,a)  
 console.log(‘value of b is ‘,b)</script>

**Rest Operator:** Rest syntax looks exactly like spread syntax, but is used for destructuring arrays and objects.Rest syntax is the opposite of spread syntax. Spread syntax “expands” an array into its elements, while rest syntax collects multiple elements and “condenses” them into a single element.It allow to represent an indefinite number of arguments as an array. _Syntax: …rest_

**NOTE:**_The rest parameter must be the last parameter to a function, we cannot set rest parameter before or in between to any parameter to a function. …rest here you can set any variable name in name ‘rest’_

eg.  
function test(param1,paramt2,…rest)  
{  
//this is correct  
}function test(param1,paramt2,…rest,param3)  
{  
//this is wrong  
}Example 9: Function with simple parameter  
<script>function display(a)  
 {  
 document.write(a)  
 }display(10)//function call</script>Example 10:Function with rest parameter  
 <script>function display(a,...rest)  
      {  
          document.write(a+'<br/>')  
          document.write(rest)  
      } display(10,20,30,40)</script>

In above Example 10, we see that value 10 is assign to parameter ‘a’ and rest of value 20,30,40 is assign to …rest parameter in form of array

Accessing the element of rest parameter

Example 11:  
 <script>function display(a,…rest)  
 {  
 document.write(a+’<br/>’)  
 document.write(rest\[0\]+’<br/>’)  
 document.write(rest\[1\]+’<br/>’)  
 document.write(rest\[2\]+’<br/>’)  
 }display(10,20,30,40)</script>

From above Example 11, we can see value 10 is assign to parameter ‘a’ and remaining value to rest parameter as array, now we can access value of rest parameter by their index. rest\[0\] holds value of 20, rest\[1\] holds value of 30 and so on..

If we use rest parameter like below then you will get error because rest parameter must be the last parameter to a function

Example 12:  
 <script>function display(a,…rest,c,d)  
 {  
 document.write(a+’<br/>’)  
 document.write(rest\[0\]+’<br/>’)  
 document.write(rest\[1\]+’<br/>’)  
 document.write(rest\[2\]+’<br/>’)  
 }display(10,20,30,40)</script>  
The script is wrong

Thus we see that, Rest Syntax is the opposite of Spread Syntax. The Spread syntax “expands” an array into its elements, while Rest syntax collects multiple elements and “condenses” them into a single element