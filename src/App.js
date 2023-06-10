import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {

  const title = "To Do List"
  return (
    <div className='app'>
      <Header title={title}/>
      
      <Main/>

      <Footer/>
    </div>
  );
}

export default App;
