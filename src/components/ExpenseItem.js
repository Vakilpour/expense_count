import './ExpenseItem.css';

function ExpenseItem() {
    let date = new Date
    return (
        <div className='expense-item'>
            <div>{date.toLocaleDateString()}</div>
            <div className='expense-item__description' >
                <h2>Example Price</h2>
                <div className='expense-item__price'>59 pln</div>
            </div>
        </div>)
}

export default ExpenseItem;