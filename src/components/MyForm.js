import React, { useState } from 'react'
import { Formik, Form as FormikForm, Field } from 'formik';
import { FormikSelect, FormikInputField, MatButton, FormikCheckBox,FormikRadioGroup,FormikDatePicker,FormikDatePickerRange } from '../components/Controls';
import { FormGroup, Grid } from '@material-ui/core';
import * as yup from 'yup';



const studentList =  [
    {'label': "sourish Dutta","id" : "3iui3u3"},
    {'label': "Fayaz Kabir","id" : "8ry38ry3"},
    {'label':"Shahrukh","id":"Akhtar"}
];

const genderList = [
    {'label': "Male","id" : "M"},
    {'label': "Female","id" : "F"},
];
const employeeFormSchema = yup.object().shape({
    selectEmployee: yup.string().required("Select Employee!"),
    employeeIdCode: yup.string().required("Epmloyee Id is Required!"),
    hireDate: yup.string().required("Epmloyee Hire Date is Required!"),
    gender: yup.string().required("Gender is Required!"),
    workingStatus: yup.boolean().oneOf([true, false], "Working status is Required!"),
    
})


const MyForm = () => {

    const [initialValue, setInitialValue] = useState({
        selectEmployee: '',
        employeeIdCode: '',
        hireDate: '',
        gender: '',
        workingStatus: true,
       
    });


    const setInitialValueForForm = () => {
        setInitialValue({
            selectEmployee: '',
            employeeIdCode: '',
            hireDate: '',
            gender: '',
            workingStatus: true,
            
        })
    }

    
    const handleReset = () => {
        if (window.confirm('Want to Reset Form?')) {
            setInitialValueForForm();
        }
    };

    const onSubmit = (values, actions) => {
        console.log(values);
        console.log(actions);
    }

  return (
    <>
         <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={employeeFormSchema}
            enableReinitialize
        >
            {(props) => (
                <FormikForm>
                    <Grid container spacing={2} justify={'space-around'}>
                        <Grid item xs={12} md={6} lg={4}>
                            <FormGroup>
                                <Field
                                    component={FormikSelect}
                                    label="Select Employee*"
                                    name="selectEmployee"
                                    id="employeeSelect"
                                    options={studentList}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <FormGroup>
                                <Field label="Employee ID*" name="employeeIdCode" component={FormikInputField} />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <FormGroup>
                                <Field component={FormikDatePicker} name="hireDate" label="Hire Date" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <FormGroup>
                                <Field component={FormikRadioGroup} name="gender" label="Gender" items={genderList} />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}
                        >
                            <FormGroup>
                                <FormikCheckBox
                                    name="workingStatus"
                                    label="Is Currentlty Working*"
                                    color="primary"
                                />
                            </FormGroup>
                        </Grid>

                        {/* <Grid item xs={12} md={12} lg={12}
                        >
                            <FormGroup>
                                <Field  component={FormikDatePickerRange} name="workingDuaration" label="Working Duaration" />
                            </FormGroup>
                        </Grid> */}

                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <MatButton
                            color="primary"
                            size="medium"
                            text="Submit"
                            type="submit"
                            varient="contained"
                            disabled={props.isSubmitting}
                        />
                        <MatButton
                            size="medium"
                            text="Reset"
                            type="button"
                            varient="contained"
                            onClick={handleReset.bind(null)}
                        />
                    </div>
                </FormikForm>
            )}
        </Formik>
    </>
  )
}

export default MyForm