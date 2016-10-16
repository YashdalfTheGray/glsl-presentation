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
