int foo(in int p1, out float p2, inout bool p3, const float p4) {
    p1 = 5;
    p2 = 2.0;
    p3 = false;
    return 9001;
}

int a = 7;
float b, d = 3.14;
bool c = true;

int e = foo(a, b, c, d);
// a == 7, b == 2.0, c == false, d = 3.14, e == 9001
