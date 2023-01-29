import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  // const style = {
  //   App: {
  //     backgroundColor: "black",
  //   }
  // }
  const counterProps = {
    initialValue: undefined,
    a: 3,
    b: 5,
  };

  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter {...counterProps} />
        <MyFooter />
      </div>
    </Container>
  );
}
export default App;
