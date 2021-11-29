[![Aayushi Johari](https://miro.medium.com/fit/c/96/96/0*qi14KVra23cQqJzE)](https://medium.com/@aayushijohari?source=post_page-----75e1e764a42f--------------------------------)

![](https://miro.medium.com/max/1280/1*xirHnHmmq5w6xXGMl1qrag.png)

Python Pattern Programs — Edureka

Python programming language is quite easy to learn. The implementation of various libraries with the ease of syntax makes it stand out, one of the many reasons why it has become the most popular programming language in this decade. While the learning part is easy, the interviewers often seek your approach in building the logic for pattern programs. As tricky as it may sound, with python it is a piece of cake. In this article, we will learn about various pattern programs in python. The following topics are covered in this blog:

- Star Pattern Programs

1.  Pyramid Pattern Program
2.  Half-Pyramid Pattern Program
3.  Diamond Shaped Pattern Program
4.  Start Pattern Program
5.  Hourglass Pattern Program

- Number Pattern Programs

1.  Simple Numbers In A Pyramid
2.  Pascal’s Triangle Pattern
3.  Diamond Pattern Program

- Characters Patter Programs

The pattern programs incorporate a lot of nested loops. So if you are not familiar with loops in python, make sure to check out the detailed tutorial on loops in python.

Following are a few star pattern programs in python.

## Pyramid Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 for i in range(0,n):  
 for j in range(0,k):  
 print(end=" ")  
 k = k - 1  
 for j in range(0, i+1):  
 print("\*", end=" ")  
 print("\\r")  
pattern(5)

**Output:**

![](https://miro.medium.com/max/584/1*DqURUhmc89HbQ1ANcVH3QA.png)

## Reverse Pyramid Pattern Program

def pattern(n):  
 k = 2\*n -2  
 for i in range(n,-1,-1):  
 for j in range(k,0,-1):  
 print(end=" ")  
 k = k +1  
 for j in range(0, i+1):  
 print("\*", end=" ")  
 print("\\r")  
pattern(5)

## **Output:**

![](https://miro.medium.com/max/688/1*3J_03usjsD2lbPpzxtUm6A.png)

## Right Start Pattern Program

def pattern(n):  
 for i in range(0, n):  
 for j in range(0, i + 1):  
 print("\* ", end="")  
 print("\\r")  
 for i in range(n, 0 , -1):  
 for j in range(0, i + 1):  
 print("\* ", end="")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/682/1*C8aPlqjKeJJARtz2rZ5mew.png)

## Left Start Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 for i in range(0, n-1):  
 for j in range(0, k):  
 print(end=" ")  
 k = k - 2  
 for j in range(0, i + 1):  
 print("\* ", end="")  
 print("\\r")  
 k = -1  
 for i in range(n-1,-1,-1):  
 for j in range(k,-1,-1):  
 print(end=" ")  
 k = k + 2  
 for j in range(0, i + 1):  
 print("\* ", end="")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/690/1*xG33Yolx2dygujHv7lT5zA.png)

## Hourglass Pattern Program

def pattern(n):  
 k = n - 2  
 for i in range(n, -1 , -1):  
 for j in range(k , 0 , -1):  
 print(end=" ")  
 k = k + 1  
 for j in range(0, i+1):  
 print("\* " , end="")  
 print("\\r")  
 k = 2 \* n - 2  
 for i in range(0 , n+1):  
 for j in range(0 , k):  
 print(end="")  
 k = k - 1  
 for j in range(0, i + 1):  
 print("\* ", end="")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/684/1*IWT8HRQK557amfhUlDn7wA.png)

## Half-Pyramid Pattern Program

def pattern(n):  
 for i in range(0,n):  
 for j in range(0, i+1):  
 print("\* " , end="")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/674/1*zWlHhk9V9XTAcLXKVIExqQ.png)

## Left Half-Pyramid Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 for i in range(0, n):  
 for j in range(0, k):  
 print(end=" ")  
 k = k - 2  
 for j in range(0, i + 1):  
 print("\* ", end="")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/674/1*dUMgURC4GqV8v-O6aQihXw.png)

## Downward Half-Pyramid Pattern Program

def pattern(n):  
 for i in range(n, -1, -1):  
 for j in range(0, i + 1):  
 print("\* ", end="")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/678/1*pYM-1MA1SmwYV6LaLT_wig.png)

## Diamond Shaped Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 for i in range(0, n):  
 for j in range(0 , k):  
 print(end=" ")  
 k = k - 1  
 for j in range(0 , i + 1 ):  
 print("\* ", end="")  
 print("\\r")  
 k = n - 2  
 for i in range(n , -1, -1):  
 for j in range(k , 0 , -1):  
 print(end=" ")  
 k = k + 1  
 for j in range(0 , i + 1):  
 print("\* ", end="")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/678/1*-mg79KFazzs6_xBcEYVu6g.png)

## Diamond Star Pattern Program

for i in range(5):  
 for j in range(5):  
 if i + j == 2 or i - j == 2 or i + j == 6 or j - i == 2:  
 print("\*", end="")  
 else:  
 print(end=" ")  
 print()

## **Output:**

![](https://miro.medium.com/max/676/1*wXxW5Zs8fALUxyQllsFkIQ.png)

Here are a few programs with numeric patterns in java.

## Simple Numbers Program

def pattern(n):  
 x = 0  
 for i in range(0 , n):  
 x += 1  
 for j in range(0, i + 1):  
 print(x , end=" ")  
 print("\\r")  
pattern(5)

## **Output:**

![](https://miro.medium.com/max/680/1*rwF3z5gqHGQUnABOfS2icQ.png)

## Pascal’s Triangle Program

def pascal(n):  
 for i in range(0, n):  
 for j in range(0, i + 1):  
 print(function(i, j)," ", end="")  
 print()

def function(n, k):  
 res = 1  
 if (k > n - k):  
 k = n - k  
 for i in range(0, k):  
 res = res \* (n - i)  
 res = res // (i + 1)

     return res

pascal(7)

## **Output:**

![](https://miro.medium.com/max/682/1*DJFqfuqUn-oC3H5Dz6IxOg.png)

## Half-Pyramid Pattern With Numbers

def pattern(n):  
 for i in range(1, n):  
 for j in range(1, i + 1):  
 print(j, end= " ")  
 print("\\r")  
pattern(5)

## **Output:**

![](https://miro.medium.com/max/678/1*M0o3ligs_2EiwvstD3OtGA.png)

## Diamond Pattern With Numbers

def pattern(n):  
 k = 2 \* n - 2  
 x = 0  
 for i in range(0, n):  
 x += 1  
 for j in range(0, k):  
 print(end=" ")  
 k = k - 1  
 for j in range(0, i + 1):  
 print(x, end=" ")  
 print("\\r")  
 k = n - 2  
 x = n + 2  
 for i in range(n, -1, -1):  
 x -= 1  
 for j in range(k, 0, -1):  
 print(end=" ")  
 k = k + 1  
 for j in range(0, i + 1):  
 print(x, end=" ")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/682/1*s7d9gHEyn4762d-df5WDLQ.png)

## Descending Order Pattern Program

def pattern(n):  
 for i in range(n, 0, -1):  
 for j in range(1, i + 1):  
 print(j, end=" ")

         print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/684/1*TJEH6Tv6W6aD5PlFmeb5Ag.png)

## Binary Numbers Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 for i in range(0, n):  
 for j in range(0, k):  
 print(end=" ")  
 k = k - 1  
 for j in range(0, i + 1):  
 print('10', end="")

         print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/676/1*2FC_AxVkj9Kat-hpwyEYVA.png)

Here are a few pattern programs in python with characters.

## Right Alphabetical Triangle

def pattern(n):  
 x = 65  
 for i in range(0, n):  
 ch = chr(x)  
 x += 1  
 for j in range(0, i + 1):  
 print(ch, end=" ")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/678/1*VxNb7TJ7orHKKN6_XFDZfQ.png)

## Character Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 x = 65  
 for i in range(0, n):  
 for j in range(0, k):  
 print(end=" ")  
 k = k - 1  
 for j in range(0, i + 1):  
 ch = chr(x)  
 print(ch, end=" ")  
 x += 1  
 print("\\r")

pattern(7)

## **Output:**

![](https://miro.medium.com/max/674/1*x4hYWl-qJXCFIjKIQ4f97w.png)

## K Shape Character Program

for i in range(7):  
 for j in range(7):  
 if j == 0 or i - j == 3 or i + j == 3:  
 print("\*", end="")  
 else:  
 print(end=" ")  
 print()

## **Output:**

![](https://miro.medium.com/max/686/1*g2-GY8RrxTQ7cxUCKxLAxg.png)

## Triangle Character Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 x = 65  
 for i in range(0, n):  
 ch = chr(x)  
 x += 1  
 for j in range(0, k):  
 print(end=" ")  
 k = k - 1  
 for j in range(0, i + 1):  
 print(ch, end=" ")  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/672/1*rbaa5FMt49N-6rbKCaZBtQ.png)

## Diamond Shaped Character Pattern Program

def pattern(n):  
 k = 2 \* n - 2  
 for i in range(0, n):  
 for j in range(0, k):  
 print(end=" ")  
 k = k - 1  
 x = 65  
 for j in range(0, i + 1):  
 ch = chr(x)  
 print(ch, end=" ")  
 x += 1  
 print("\\r")  
 k = n - 2  
 x = 65  
 for i in range(n, -1, -1):  
 for j in range(k, 0, -1):  
 print(end=" ")  
 k = k + 1  
 for j in range(0, i + 1):  
 ch = chr(x)  
 print(ch, end=" ")  
 x += 1  
 print("\\r")

pattern(5)

## **Output:**

![](https://miro.medium.com/max/680/1*o2aKiGKCEXWGC-ZbL1nFQA.png)

This brings us to the end of this article where we have learned how we can implement different patterns in python using asterisk, numbers, and characters with the help of loops in python. I hope you are clear with all that has been shared with you in this tutorial.

If you wish to check out more articles on the market’s most trending technologies like Artificial Intelligence, DevOps, Ethical Hacking, then you can refer to [Edureka’s official site.](https://www.edureka.co/blog/?utm_source=medium&utm_medium=content-link&utm_campaign=python-pattern-programs)

Do look out for other articles in this series which will explain the various other aspects of Python and Data Science.

> 1\. [Machine Learning Classifier in Python](https://medium.com/edureka/machine-learning-classifier-c02fbd8400c9)
>
> 2\. [Python Scikit-Learn Cheat Sheet](https://medium.com/edureka/python-scikit-learn-cheat-sheet-9786382be9f5)
>
> 3\. [Machine Learning Tools](https://medium.com/edureka/python-libraries-for-data-science-and-machine-learning-1c502744f277)
>
> 4\. [Python Libraries For Data Science And Machine Learning](https://medium.com/edureka/python-libraries-for-data-science-and-machine-learning-1c502744f277)
>
> 5\. [Chatbot In Python](https://medium.com/edureka/how-to-make-a-chatbot-in-python-b68fd390b219)
>
> 6\. [Python Collections](https://medium.com/edureka/collections-in-python-d0bc0ed8d938)
>
> 7\. [Python Modules](https://medium.com/edureka/python-modules-abb0145a5963)
>
> 8\. [Python developer Skills](https://medium.com/edureka/python-developer-skills-371583a69be1)
>
> 9\. [OOPs Interview Questions and Answers](https://medium.com/edureka/oops-interview-questions-621fc922cdf4)
>
> 10\. [Resume For A Python Developer](https://medium.com/edureka/python-developer-resume-ded7799b4389)
>
> 11\. [Exploratory Data Analysis In Python](https://medium.com/edureka/exploratory-data-analysis-in-python-3ee69362a46e)
>
> 12\. [Snake Game With Python’s Turtle Module](https://medium.com/edureka/python-turtle-module-361816449390)
>
> 13\. [Python Developer Salary](https://medium.com/edureka/python-developer-salary-ba2eff6a502e)
>
> 14. [Principal Component Analysis](https://medium.com/edureka/principal-component-analysis-69d7a4babc96)
>
> 15\. [Python vs C++](https://medium.com/edureka/python-vs-cpp-c3ffbea01eec)
>
> 16\. [Scrapy Tutorial](https://medium.com/edureka/scrapy-tutorial-5584517658fb)
>
> 17\. [Python SciPy](https://medium.com/edureka/scipy-tutorial-38723361ba4b)
>
> 18\. [Least Squares Regression Method](https://medium.com/edureka/least-square-regression-40b59cca8ea7)
>
> 19\. [Jupyter Notebook Cheat Sheet](https://medium.com/edureka/jupyter-notebook-cheat-sheet-88f60d1aca7)
>
> 20\. [Python Basics](https://medium.com/edureka/python-basics-f371d7fc0054)
>
> 21.[Web Scraping With Python](https://medium.com/edureka/web-scraping-with-python-d9e6506007bf)
>
> 22\. [Generators in Python](https://medium.com/edureka/generators-in-python-258f21e3d3ff)
>
> 23\. [Python Decorator](https://medium.com/edureka/python-decorator-tutorial-bf7b21278564)
>
> 24. [Python Spyder IDE](https://medium.com/edureka/spyder-ide-2a91caac4e46)
>
> 25\. [Mobile Applications Using Kivy In Python](https://medium.com/edureka/kivy-tutorial-9a0f02fe53f5)
>
> 26\. [Top 10 Best Books To Learn & Practice Python](https://medium.com/edureka/best-books-for-python-11137561beb7)
>
> 27\. [Robot Framework With Python](https://medium.com/edureka/robot-framework-tutorial-f8a75ab23cfd)
>
> 28\. [Snake Game in Python using PyGame](https://medium.com/edureka/snake-game-with-pygame-497f1683eeaa)
>
> 29\. [Django Interview Questions and Answers](https://medium.com/edureka/django-interview-questions-a4df7bfeb7e8)
>
> 30\. [Top 10 Python Applications](https://medium.com/edureka/python-applications-18b780d64f3b)
>
> 31\. [Hash Tables and Hashmaps in Python](https://medium.com/edureka/hash-tables-and-hashmaps-in-python-3bd7fc1b00b4)
>
> 32\. [Python 3.8](https://medium.com/edureka/whats-new-python-3-8-7d52cda747b)
>
> 33\. [Support Vector Machine](https://medium.com/edureka/support-vector-machine-in-python-539dca55c26a)
>
> 34\. [Python Tutorial](https://medium.com/edureka/python-tutorial-be1b3d015745)
