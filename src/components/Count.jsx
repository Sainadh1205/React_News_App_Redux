import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/count/action";
import { display } from "../redux/show/action";

function Count() {
  const count = useSelector((state) => state.count.count);
  const show = useSelector((state) => state.show.show);

  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <Button variant="info" onClick={() => dispatch(display())}>
        Show/Hide
      </Button>
      <br />
      <br />

      {show && (
        <>
          <Button
            variant="danger"
            onClick={() => dispatch(decrementCounter(5))}
          >
            Decrement - 5
          </Button>
          <br />
          <br />
          <Button variant="danger" onClick={() => dispatch(decrementCounter())}>
            Decrement - 1
          </Button>
          <h1 className="display-1">{count}</h1>
          <Button
            variant="success"
            onClick={() => dispatch(incrementCounter())}
          >
            Increment + 1
          </Button>
          <br />
          <br />
          <Button
            variant="success"
            onClick={() => dispatch(incrementCounter(5))}
          >
            Increment + 5
          </Button>
          <br />
          <br />
        </>
      )}
    </div>
  );
}

export default Count;

/*
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/count/action'

function Count({ count, incrementCounter, decrementCounter }) {
  return (
    <div className='text-center'>
    <Button variant='primary' onClick={() => decrementCounter(5) }>Decrement ny 5</Button>
        <br /><br />
        <Button variant='primary' onClick={() => decrementCounter() }>Decrement</Button>
        <h1 className="display-1">
        { count }
        </h1>
        <Button variant='primary' onClick={() => incrementCounter() }>Increment</Button>
        <br /><br />
        <Button variant='primary' onClick={() => incrementCounter(5) }>Increment by 5</Button>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    incrementCounter: (num) => dispatch(incrementCounter(num)),
    decrementCounter: (num) => dispatch(decrementCounter(num))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
*/
