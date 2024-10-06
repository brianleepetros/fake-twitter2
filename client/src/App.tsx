// import Header from './components/Header/header.tsx';
// import Footer from './components/Footer/footer.tsx';
import Table from "./components/Table/table.tsx";

function App() {
  document.title = "Project 2 App";

  const myCards = [
    "1H",
    "2H",
    "AS"
  ];

  return (
    <div className="blackjack-table">


      <ul>
        <li className="border inline m-8 p-4">{myCards[0]}</li>
        <li className="border inline m-8 p-4">{myCards[1]}</li>
      </ul>
    </div>

    // <div>
    //   <Header />

    //   <Footer />
    // </div>
  );
}

export default App;
