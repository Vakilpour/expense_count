import './ExpenseItemGenerator.css';
import ExpenseItem from './ExpenseItem';

function ExpenseItemGenerator(props) {
    let rows = props.data.map((res,index) => {
        return <ExpenseItem
            key={res.date.getTime()+index}
            date={res.date}
            amount={res.amount}
        />
    })
    return (
        <div className='expenses'>
            {rows}
        </div>)
}

export default ExpenseItemGenerator;