import { getIn } from "formik";

const { default: DateFnsUtils } = require("@date-io/date-fns");
const { MuiPickersUtilsProvider, KeyboardDatePicker } = require("@material-ui/pickers");

const FormikDatePicker = (props) => {
    const { label, form: { touched, errors, setFieldValue }, field: { value = null, name, onBlur: fieldOnBlur }, onBlur, minDate, maxDate, format = "MM/dd/yyyy", children, helperText = "", ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;



    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                value={value}
                label={label}
                name={name}
                minDate={() => minDate ? new Date(minDate) : null}
                maxDate={() => maxDate ? new Date(maxDate) : null}
                format={format}
                onBlur={
                    onBlur ??
                    function (e) {
                        fieldOnBlur(e ?? name);
                    }
                }
                onChange={value => {
                    setFieldValue(name, value);
                }}
                error={showError}
                helperText={showError ? fieldError : helperText}
                {...rest}
            />
        </MuiPickersUtilsProvider>
    );
};

export default FormikDatePicker;