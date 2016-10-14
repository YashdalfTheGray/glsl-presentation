# OpenGL Shader Language

## Author

Yash Kulshrestha ([@yashdalfthegray](https://twitter.com/YashdalfTheGray))

[Github](https://github.com/YashdalfTheGray)

## Syntax

Most of the GLSL syntax looks familiar to C++ or javascript syntax except for a few gotchas.

* GLSL programs must use a finite amount of memory and terminate in a finite time. This means no infinite loops, no recursion, no memory allocation and no strings.
* GLSL has only three scalar types, `bool`, `int`, `float`.
* GLSL variables need to have a type assigned to it when they are declared.
* You can specify range and precision for `float` types, `lowp`, `mediump` and `highp`.
