import { connect } from 'react-redux';
import { startLoading, finishLoading } from './actions';

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    startLoading,
    finishLoading
};

export const connectComponent = (Component) => {
    return connect(mapStateToProps, mapDispatchToProps)(Component);
};
