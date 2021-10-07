# List Directory Contents

```python
import os

get_directory = input("Enter path : ")
d = os.listdir(get_directory)
for dir in d:
    currrent_path = os.path.abspath(dir)
    print(currrent_path)
```
