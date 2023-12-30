import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){

    return(
        <button className={styles.btn}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired, //prop 타입이 string만 사용 가능
}
export default Button;