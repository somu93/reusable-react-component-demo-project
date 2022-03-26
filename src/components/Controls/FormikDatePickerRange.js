import { TextField } from "@material-ui/core";
import { getIn } from "formik";

const { default: DateFnsUtils } = require("@date-io/date-fns");
const { MuiPickersUtilsProvider, DateRangeDelimiter, DateRangePicker } = require("@material-ui/pickers");

const FormikDatePickerRange = (props) => {
    const { label, form: { touched, errors, setFieldValue }, field: { value = [], name, onBlur: fieldOnBlur }, onBlur, minDate, maxDate, format = "MM/dd/yyyy", children, helperText = "", ...rest } = props;

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;



    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateRangePicker
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
                renderInput={(startProps, endProps) => (
                    <>
                        <TextField {...startProps} />
                        <DateRangeDelimiter> to </DateRangeDelimiter>
                        <TextField {...endProps} />
                    </>
                )}

                error={showError}
                helperText={showError ? fieldError : helperText}
                {...rest}
            />
        </MuiPickersUtilsProvider>
    );
};

export default FormikDatePickerRange;