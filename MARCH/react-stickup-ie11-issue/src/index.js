import React from "react";
import ReactDOM from "react-dom";

import '@babel/polyfill'

import { StickyProvider, Sticky } from "react-stickup"; // eslint-disable-line

const container1 = React.createRef();
const container2 = React.createRef();
const containerBrown = React.createRef();

const Header = ({ style }) => (
  <h1 style={{ margin: 0, padding: "10px", color: "white", ...style }}>
    Header
  </h1>
);

function App() {
  return (
    <StickyProvider>
      <div ref={container1}>
        <Sticky container={container1}>
          <Header style={{ background: "black" }}>My Header</Header>
        </Sticky>
        <div
          style={{ padding: "10px", height: "1000px", background: "orange" }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, per
          diam cras cum convallis massa nostra, condimentum pretium congue mi
          dis non erat. Euismod dui hendrerit enim nostra eros nibh vulputate,
          vitae gravida sem pretium sociosqu luctus eget placerat, justo porta
          senectus mauris ante porttitor. Vitae tempus sem felis enim natoque
          purus nam at augue nascetur, urna semper dictum egestas leo habitasse
          aliquet consequat dis fermentum, ornare feugiat pretium nisi venenatis
          hac cras interdum nostra.
        </div>
      </div>
      {/* @begin STICKY IN CONTAINER */}
      <div ref={containerBrown} style={{ height: '500px' }}>
        <Sticky
          container={containerBrown}
          style={{ zIndex: 50 }}
        >
          {({ isSticky }) => (
            <Header
              style={{ 
                'textDecoration': isSticky ? 'line-through' : 'none', 
                'color': isSticky ? 'black' : 'white', 
                background: isSticky ? 'white' : 'brown', 
                border: isSticky ? '2px solid black' : '', 
              }}
            >
              <h1>Header!<small>children as function</small></h1>
            </Header>
          )}
        </Sticky>
        <div style={{ height: "1000px", background: "yellow" }}>
          Tempus scelerisque mauris in iaculis metus ridiculus mi nibh augue,
          purus malesuada dis aenean pellentesque diam magnis primis eu erat,
          enim luctus nullam turpis ac molestie taciti vitae. Dui primis
          pharetra cras erat habitasse ut urna congue molestie, maecenas
          placerat leo orci morbi ullamcorper potenti sagittis, mus fusce
          parturient lobortis tempus volutpat ultricies libero. Quisque
          consequat phasellus sodales pretium fames bibendum, cubilia fusce
          tellus purus ligula odio sociosqu, aliquet vel dignissim potenti
          laoreet.
        </div>
      </div>
     {/* @end STICKY IN CONTAINER  */}
      <div ref={container2}>
        <Sticky container={container2}>
          <Header style={{ background: "red" }}>My Header</Header>
        </Sticky>
        <div style={{ height: "1000px", background: "orange" }}>
          Tempus scelerisque mauris in iaculis metus ridiculus mi nibh augue,
          purus malesuada dis aenean pellentesque diam magnis primis eu erat,
          enim luctus nullam turpis ac molestie taciti vitae. Dui primis
          pharetra cras erat habitasse ut urna congue molestie, maecenas
          placerat leo orci morbi ullamcorper potenti sagittis, mus fusce
          parturient lobortis tempus volutpat ultricies libero. Quisque
          consequat phasellus sodales pretium fames bibendum, cubilia fusce
          tellus purus ligula odio sociosqu, aliquet vel dignissim potenti
          laoreet.
        </div>
      </div>
      <Sticky>
        <Header style={{ background: "green" }}>My Footer</Header>
      </Sticky>
    </StickyProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
