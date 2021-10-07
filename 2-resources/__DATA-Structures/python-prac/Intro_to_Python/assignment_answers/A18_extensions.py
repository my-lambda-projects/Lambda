""" Assignment 18

1. Detail the steps to Cythonize a Python module.


Stretch Goal:
1. Detail the steps to Cythonize a C++ Header Library. Include code examples.
2. Read the documentation for Cython.
"""


# Answer
"""
1. Create a pyx file or change the file extension of a python module to `.pyx`
2. Use the `ext_modules` keyword in the setup file to declare the extension.
3. Use the `cythonize` function in the Cython library to create the extension.
4. Install your app before you attempt to use it.
"""


# Stretch Goal
"""
1. Same as above but you must import into the pyx file all the required 
objects from the C++ header.
```
cdef extern from "Storm.hpp":
    int _percent_true "Storm::percent_true"(double)
```

2. You must also add the following line to the top of the pyx file...
`#distutils: language = c++`

3. You must write wrappers for each C++ function to be accessible from the 
Python environment.
```
def percent_true(truth_factor: float = 50.0) -> bool:
    ''' Percent True
    Produces True or False based on the probability of True as a percentage.

    @param truth_factor: Float. Default is 50. Probability of True.
    @return: Random bool.
    '''
    return _percent_true(truth_factor) == 1
```

4. Finally you must specify extra options in the setup file to indicate the 
c++ language, as well as any other compile time arguments or compiler directives.
```
setup(
    name="Fortuna",
    ext_modules=cythonize(
        Extension(
            name="Fortuna",
            sources=["Fortuna.pyx"],
            language=["c++"],
            extra_compile_args=["-std=gnu++17"],
        ),
        compiler_directives={
            'embedsignature': True,
            'language_level': 3,
        },
    ),
)
```
"""
