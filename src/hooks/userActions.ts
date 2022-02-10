import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AllActionsCreators} from 'store/reducers/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllActionsCreators, dispatch);
};
