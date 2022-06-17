import Navbar from "./Navbar";
import Section from "./Section";
import Paragraph from "./Paragraph";
import Hello from "./Hello";
import pic1 from "./img1.jpg";
import pic2 from "./img2.jpg";
import pic3 from "./img3.jpg";

const style={
  width: '70vw',
  margin: "auto",
  color: "#000000",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}

function App() {
  return (
  <div style={style}>
    <Navbar/>
    <Section content={<Hello text="Lorem Ipsum"/>}/>
    <Section content={<p></p>} />
    <Section content={<Paragraph img = {pic1} header3="What is Lorem Ipsum?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>} />
    <Section content={<Paragraph img = {pic2} header3="Why do we use it?" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>} />
    <Section content={<Paragraph img = {pic3} header3="Lorem Ipsum" text="Curabitur sit amet tortor id turpis mattis euismod. Cras at risus vel lorem tincidunt fringilla. Mauris a metus tincidunt, varius dolor id, ornare erat. In vitae commodo diam. Vestibulum at commodo metus. Sed porttitor tempus purus, tempus luctus tortor mattis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla at enim accumsan, aliquam ante vitae, ullamcorper nulla. Aliquam a leo sollicitudin, mollis ligula a, malesuada nibh. Sed mauris arcu, posuere sed porttitor vel, mattis at ex. Sed ultricies orci fringilla, dapibus sapien ultricies, bibendum augue."/>} />
  </div>
  );
}

export default App;
