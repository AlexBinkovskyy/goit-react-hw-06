import { useDispatch, useSelector } from "react-redux";
import { langSwitch } from "../redux/localeSlice";

export const LangSwitcher = () => {
    const lang = useSelector(state => state.locale.lang)
    const dispatch = useDispatch();
    
  return (
    <div>
      <select value={lang} onChange={(e) => dispatch(langSwitch(e.target.value))}>
        <option value="en">Eng</option>
        <option value="ua">Ukr</option>
        <option value="Bobr, kurwa">Pl</option>
      </select>
    </div>
  );
};
