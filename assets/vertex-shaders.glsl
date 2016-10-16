// get a position from the application
attribute vec4 position;
attribute vec4 color;

// this will be connected to a fragment shader
varying vec4 fragmentColor;

void main() {
    gl_Position = position;
    fragmentColor = color;
}
