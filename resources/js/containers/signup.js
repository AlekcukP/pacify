import { connect } from 'react-redux';
import { setSignUpType } from "../store/actions/signup";
import SignUpPage from "../modules/signup";

const mapStateToProps = (state) => {
    return {
        signUpType: state.signUpType,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUpType: signUpType => dispatch(setSignUpType(signUpType))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
