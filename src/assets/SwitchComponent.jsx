import { useReducer } from 'react';
import Switch from 'react-switch';

const initialState = { checked: false };
const TOGGLE = 'toggle';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, checked: !state.checked };
    default:
      throw new Error('Unknown action type');
  }
};

const SwitchContainer = ({ onToggle, checked }) => {
  const [switchState, dispatch] = useReducer(reducer, initialState);

  const handleToggle = () => {
    dispatch({ type: TOGGLE });
  };

  const darkModeText = switchState.checked ? 'Light Mode' : 'Dark Mode';

  const bodyStyle = {
    color: switchState.checked ? '#ddd' : '#333'
  };

  return (
    <div style={bodyStyle}>
      <Switch
        onChange={onToggle}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#3a3a3a"
        offColor="#8f88ff"
      />
    </div>
  );
};

export default SwitchContainer;

