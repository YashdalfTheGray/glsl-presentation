// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    // Appear,
    // BlockQuote,
    // Cite,
    CodePane,
    Deck,
    // Fill,
    Heading,
    // Image,
    // Layout,
    Link,
    ListItem,
    List,
    // Markdown,
    // Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {};

preloader(images);

const theme = createTheme({
    primary: '#5381ac'
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500}>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="black">
                            OpenGL Shader Language
                        </Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>
                            Yash Kulshrestha @yashdalfthegray
                        </Text>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Introduction
                        </Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>
                            It's all about viewports, buffers and math!
                        </Text>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            GLSL Syntax
                        </Heading>
                        <CodePane lang="glsl" source={require('raw!../assets/syntax.glsl')} margin="20px auto"/>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Math...
                        </Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>
                            ...more math and all the math!
                        </Text>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} fit textColor="black">
                            Function parameter modifiers
                        </Heading>
                        <CodePane lang="glsl" source={require('raw!../assets/parameter-modifiers.glsl')} margin="20px auto"/>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Vectors
                        </Heading>
                        <CodePane lang="glsl" source={require('raw!../assets/vectors.glsl')} margin="20px auto"/>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Matrices
                        </Heading>
                        <CodePane lang="glsl" source={require('raw!../assets/matrices.glsl')} margin="20px auto"/>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Fragment Shaders
                        </Heading>
                        <CodePane lang="glsl" source={require('raw!../assets/fragment-shaders.glsl')} margin="20px auto"/>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Vertex Shaders
                        </Heading>
                        <CodePane lang="glsl" source={require('raw!../assets/vertex-shaders.glsl')} margin="20px auto"/>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Geometry and MVP
                        </Heading>
                        <Text textSize="1em" margin="20px 0px 0px" bold>
                            Translations, rotations, scales and reflections and the viewport!
                        </Text>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <Heading size={1} lineHeight={1} textColor="black">
                            Resources
                        </Heading>
                        <List>
                            <ListItem>
                                <Link href="https://github.com/YashdalfTheGray/glsl-presentation/blob/master/presentation/outline.md">
                                    <Text textColor="secondary">Presentation Outline</Text>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.opengl.org/documentation/glsl/">
                                    <Text textColor="secondary">OpenGL Shader Language Home</Text>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.opengl.org/sdk/docs/man/">
                                    <Text textColor="secondary">GLSL Documentation</Text>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://en.wikipedia.org/wiki/Transformation_matrix">
                                    <Text textColor="secondary">GLSL Matrix Transforms</Text>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://formidable.com/open-source/spectacle/">
                                    <Text textColor="secondary">Spectacle by FormidableLabs</Text>
                                </Link>
                            </ListItem>
                        </List>
                    </Slide>
                    <Slide transition={['slide']} bgColor="primary">
                        <CodePane source={"npm install -g shader-school"} textSize="36px"/>
                            <Text textSize=".8em" margin="20px 0px 0px" bold>
                                ...and thanks for listening!
                            </Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
