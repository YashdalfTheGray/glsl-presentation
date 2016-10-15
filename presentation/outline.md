# OpenGL Shader Language

## Author

Yash Kulshrestha ([@yashdalfthegray](https://twitter.com/YashdalfTheGray))

[Github](https://github.com/YashdalfTheGray)

## General Syntax

Most of the GLSL syntax looks familiar to C++ or javascript syntax except for a few things -

* GLSL programs must use a finite amount of memory and terminate in a finite time. This means no infinite loops, no recursion, no memory allocation and no strings.
* GLSL has only three scalar types, `bool`, `int`, `float`.
* GLSL variables need to have a type assigned to it when they are declared.
* You can specify range and precision for `float` types, `lowp`, `mediump` and `highp`.
* A lot of math functions are built into the language to help with scalar manipulations.
* You can set the precision globally for all `float`s by using the `precision` keyword.

## Function Parameters Modifiers

* Function parameters can be modified using `in`, `out`, `inout` or `const`.
* The `out` keyword can be used to pass in an uninitialized value and pass a value out.
* The `in` keyword passes the parameter by value.
* The `inout` keyword passes the parameter by reference.
* The `const` keyword passes the parameter as a constant. 
