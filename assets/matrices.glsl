// declaring a matrix
mat2 a = mat2(1.0, 0.0,
              0.0, 1.0);

// identity matrix
mat2 b = mat2(1.0);

// constructing a 3x3 matrix by specifying columns
vec3 c1 = vec3(0, 1, 2);
vec3 c2 = vec3(3, 4, 5);
vec3 c3 = vec3(6, 7, 8);

mat3 c = mat3(c1, c2, c3);

// adding two Matrices
d = c + mat3(1.0);

// matrix multiplication
e = c * mat3(1.0);

// component-wise multiplication
f = c * mat3(1.0);
