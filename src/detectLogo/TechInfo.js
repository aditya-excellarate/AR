import {StyleSheet} from 'react-native';
import React from 'react';
import {
  ViroAnimations,
  ViroARScene,
  ViroFlexView,
  ViroMaterials,
  ViroText,
} from '@viro-community/react-viro';
import {useState} from 'react';
const dummyTech = {
  React: {
    title: 'React',
    description: `ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.
    Our ReactJS tutorial includes all the topics which help to learn ReactJS. These are ReactJS Introduction, ReactJS Features, ReactJS Installation, Pros and Cons of ReactJS, ReactJS JSX, ReactJS Components, ReactJS State, ReactJS Props, ReactJS Forms, ReactJS Events, ReactJS Animation and many more.`,
  },
  React_native: {
    title: 'React_native',
    description: `React Native has been successfully adopted by hundreds of businesses worldwide, including Uber, Microsoft, and Facebook, and is used across a whole range of industries.However, before you decide to go all-in with React Native, it’s crucial that you understand how it works, and decide if it’s the best fit for your project.
    What are its top advantages and biggest drawbacks? How is it different from other cross-development platforms?nAnd last but not least – what do your developers need to be aware of before they embark on the React Native journey? In the following article, we’ll answer these and other questions – all so you can make an educated choice and see if React Native is ideal for your business.React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.
    React Native was first released by Facebook as an open-source project in 2015. In just a couple of years, it became one of the top solutions used for mobile development. React Native development is used to power some of the world’s leading mobile apps, including Instagram, Facebook, and Skype. We discuss these and other examples of React Native-powered apps further in this post.
    There are several reasons behind React Native’s global success. Firstly, by using React Native, companies can create code just once and use it to power both their iOS and Android apps. This translates to huge time and resource savings.
    Secondly, React Native was built based on React – a JavaScript library, which was already hugely popular when the mobile framework was released. We discuss the differences between React and React Native in detail further in this section.    
    Thirdly, the framework empowered frontend developers, who could previously only work with web-based technologies, to create robust, production-ready apps for mobile platforms.    
    Interestingly, as with many revolutionary inventions, React Native was developed as a response to...a big technological mistake.`,
  },
  Angular: {
    title: 'Angular',
    description: `Angular is a JavaScript framework which makes you able to create reactive Single Page Applications (SPAs). This is a leading front-end development framework which is regularly updated by Angular team of Google. Angular 7 is completely based on components. It consists of several components forming a tree structure with parent and child components.
    In this tutorial, you will learn how to prepare your development environment to start building your amazing modern websites with the cutting-edge framework Angular 7. This tutorial includes Angular 7 introduction and features, Angular 7 components, Angular 7 directives, databinding, event binding, property binding, modules, templates, pipes, services, routing etc.`,
  },
  Vue: {
    title: 'React',
    description: `Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:
    Enhancing static HTML without a build step
    Embedding as Web Components on any page
    Single-Page Application (SPA)
    Fullstack / Server-Side Rendering (SSR)
    Jamstack / Static Site Generation (SSG)
    Targeting desktop, mobile, WebGL, and even the terminal
    If you find these concepts intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge, and you should be able to follow along without being an expert in any of these.
    If you are an experienced developer interested in how to best integrate Vue into your stack, or you are curious about what these terms mean, we discuss them in more detail in Ways of Using Vue.
    Despite the flexibility, the core knowledge about how Vue works is shared across all these use cases. Even if you are just a beginner now, the knowledge gained along the way will stay useful as you grow to tackle more ambitious goals in the future. If you are a veteran, you can pick the optimal way to leverage Vue based on the problems you are trying to solve, while retaining the same productivity. This is why we call Vue "The Progressive Framework": it's a framework that can grow with you and adapt to your needs.`,
  },
  Node: {
    title: 'node',
    description: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
    Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[7]
    The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS Foundation, which is facilitated by the Linux Foundation's Collaborative Projects program.[9]
    `,
  },
  Jenkins: {
    title: 'node',
    description: `Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.Jenkins can be installed through native system packages, Docker, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.Jenkins offers a simple way to set up a continuous integration or continuous delivery (CI/CD) environment for almost any combination of languages and source code repositories using pipelines, as well as automating other routine development tasks. While Jenkins doesn’t eliminate the need to create scripts for individual steps, it does give you a faster and more robust way to integrate your entire chain of build, test, and deployment tools than you can easily build yourself.
    “Don’t break the nightly build!” is a cardinal rule in software development shops that post a freshly built daily product version every morning for their testers. Before Jenkins, the best a developer could do to avoid breaking the nightly build was to build and test carefully and successfully on a local machine before committing the code. But that meant testing one’s changes in isolation, without everyone else’s daily commits. There was no firm guarantee that the nightly build would survive one’s commit.`,
  },
};

const TechInfo = ({selectedTech, onPressTechnology, onPressTechnologyLogo}) => {
  const [tech, setTech] = useState(dummyTech[selectedTech]);

  ViroAnimations.registerAnimations({
    bounced: {
      delay: 200,
      duration: 500,
      properties: {
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      },
    },
  });

  ViroMaterials.createMaterials({
    technologyBG: {
      normalTexture: require('./technologyBG.png'),
      diffuseTexture: require('./technologyBG.png'),
    },
  });

  return (
    <ViroARScene>
      <ViroFlexView
        width={5}
        height={8}
        position={[0, 0, -10]}
        animation={{
          name: 'bounced',
          loop: false,
          run: true,
        }}
        scale={[0, 0, 0]}
        rotation={[0, 0, 0]}
        style={{
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255,0.8)',
          padding: 0.2,
          alignItems: 'center',
        }}>
        <ViroText
          text={tech?.description}
          textClipMode="clipToBounds"
          color="#000"
          style={{flexGrow: 1}}
          width={4}
          height={7}
        />
      </ViroFlexView>
    </ViroARScene>
  );
};

export default TechInfo;

const styles = StyleSheet.create({});
