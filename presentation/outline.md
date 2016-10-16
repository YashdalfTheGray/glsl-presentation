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

## Vectors

* Vectors are a very important part of any graphics framework and so is the case with GLSL.
* Vectors can be either in 2, 3 or 4 dimension flavors and can be created out of `int`, `bool` and `float`.
* GLSL loves syntactic sugar when it comes to vectors

    ```
a = vec4(1, 2, 3, 4);
a.x == a.r == a.s == a[0];
a.y == a.g == a.t == a[1];
a.z == a.b == a.u == a[2];
a.w == a.a == a.v == a[3];
    ```

* GLSL also has accessors for pieces of vectors

    ```
a = vec4(1, 2, 3, 4);
b = a.yz; // b = vec2(2, 3)
c = a.tuv; // c = vec3(2, 3, 4)
d = a.rrgg; // d = vec4(1, 1, 2, 2)
    ```

* All standard math operations are available for vectors in addition to `length`, `distance`, `normalize`, `cross` and `dot`.
