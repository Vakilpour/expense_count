import './ExpenseItem.css'; 
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
      <ExpenseDate
      key={props.date.getTime()}
      date={props.date}
      />
            <div className='expense-item__description' >
                <h2>Example Price</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>)
}

export default ExpenseItem;