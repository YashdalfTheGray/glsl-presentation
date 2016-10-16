# OpenGL Shader Language

## Author

Yash Kulshrestha ([@yashdalfthegray](https://twitter.com/YashdalfTheGray))

[Github](https://github.com/YashdalfTheGray)

## Introduction

* The OpenGL Shader Language is a high-level shading language that can run on multiple platforms.
* Any kind of viewport is basically represented by a 2D buffer with each element being a color.
* OpenGL iterates over each of those elements and lets you set the color that you want (at a high level).
* OpenGL does this through putting an initial viewport through a collection of matrix transformations.
* The display buffer is then picked up by the rendering engine and displayed on the screen. 
* And that's how graphics work (again, at a high level).

## General Syntax

Most of the GLSL syntax looks familiar to C++ or javascript syntax except for a few things -

* GLSL programs must use a finite amount of memory and terminate in a finite time. This means no infinite loops, no recursion, no memory allocation and no strings.
* GLSL has only three scalar types, `bool`, `int`, `float`.
* GLSL variables need to have a type assigned to it when they are declared.
* You can specify range and precision for `float` types, `lowp`, `mediump` and `highp`.
* A lot of math functions are built into the language to help with scalar manipulations.
* You can set the precision globally for all `float`s by using the `precision` keyword.
* GLSL has conditionals and loops just like any other language but conditionals are very expensive so use them sparingly.

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
vec4 a(1, 2, 3, 4);
a.x == a.r == a.s == a[0];
a.y == a.g == a.t == a[1];
a.z == a.b == a.u == a[2];
a.w == a.a == a.v == a[3];
    ```

* GLSL also has accessors for pieces of vectors

    ```
vec4 a(1, 2, 3, 4);
b = a.yz; // b = vec2(2, 3)
c = a.tuv; // c = vec3(2, 3, 4)
d = a.rrgg; // d = vec4(1, 1, 2, 2)
    ```

* All standard math operations are available for vectors in addition to `length`, `distance`, `normalize`, `cross` and `dot`.

## Matrices

* GLSL also supports 2x2, 3x3 and 4x4 floating point matrices.
* Matrices are organized in column-major order which is different than 2-dimensional arrays in other languages
* Component-wise addition is supported as well as multiplication by a scalar.
* The `*` operator does matrix multiplication in the linear algebra sense.
* Use `matrixCompMult` to do Component-wise multiplication.

```
mat2 a = mat2(1.0, 0.0,
              0.0, 1.0);

mat2 b = mat2(1.0); // constructs a 2x2 identity matrix

// constructing a 3x3 matrix by specifying columns
vec3 c1 = vec3(0, 1, 2);
vec3 c2 = vec3(3, 4, 5);
vec3 c3 = vec3(6, 7, 8);

mat3 c = mat3(c1, c2, c3);
```

## Fragment Shaders

* A GLSL fragment is a piece of a pixel. Usually the mapping is 1:1 but with Anti-aliasing, this could be different.
* You can write a fragment file to tell GLSL what do render on your screen.
* Every fragment file contains a `main()` method that takes no parameters and returns no value.
* The variable `gl_FragCoord` can be used to determine what fragment GLSL is processing right now.
* The variable `gl_FragColor` can be used to set a specific color for that fragment.
* The `discard` keyword can be used to prevent anything from being written to the buffer for that particular fragment.
* `uniform` variables can be passed from the application down to the fragment. This can include small values like changing screen sizes or large textures which are stored in a sampler variable (`sampler2D` for a 2D texture).
* To look up the value of a texture at any point, use the `texture2D` function.

```
// filename: fragment.glsl
// shows an image masked by a 128 unit radius circle centered at 256, 256.

#define COLOR_BLACK vec4(0.0, 0.0, 0.0, 1.0);

uniform sampler2D image;

void main() {
    vec2 origin = vec2(256, 256);

    if (distance(origin, gl_FragCoord.xy) <= 128.0) {
        gl_FragColor = texture2D(image, gl_FragCoord.xy);
    }
    else {
        gl_FragColor = COLOR_BLACK;
    }
}
```
