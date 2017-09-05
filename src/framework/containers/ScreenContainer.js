import { connect } from 'react-redux';
import ScreenLayout from '../components/ScreenLayout/ScreenLayout';
import { getActionByType } from './selectors/buttonActionSelector';


const mapStateToProps = state => ({
  onClick: getActionByType('SCREEN')(state),
});

export default connect(mapStateToProps)(ScreenLayout);
