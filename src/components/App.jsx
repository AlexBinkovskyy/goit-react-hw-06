import { useSelector, useDispatch } from 'react-redux';
import { deposit } from '../redux/balanceSlice';
import { withdraw } from '../redux/balanceSlice';
import {LangSwitcher} from './LangSwitcher'

export const App = () => {
  const balance = useSelector(state => state.balance.value);
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang)

  return (
    <div>
      <LangSwitcher/>
      <p>Current language: {lang}</p>
      <hr/>
      <p>Balance: {balance} credits</p>
      <hr/>
      <button onClick={()=> dispatch(deposit(10))}>deposit 10$</button>
      <button onClick={()=> dispatch(withdraw(5))}>withdraw 5$</button>
    </div>
  );
};
