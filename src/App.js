import "./App.css";
import Balance from "./Component/Balance";
import Header from "./Component/Header";
import IncomeExpenses from "./Component/IncomeExpenses";
import TransactionList from "./Component/TransactionList";
import AddTransaction from "./Component/AddTransaction";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
