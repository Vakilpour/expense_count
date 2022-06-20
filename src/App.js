import ExpenseItemGenerator from './components/ExpenseItemGenerator'

function App() {
  const expense = [
    { date: new Date, amount: '599 pln' },
    { date: new Date, amount: '699 pln' },
    { date: new Date, amount: '799 pln' }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItemGenerator
      data={expense}/>
    </div>
  );
}

export default App;
