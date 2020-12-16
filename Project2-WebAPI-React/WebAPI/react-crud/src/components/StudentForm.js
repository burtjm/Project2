import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles,  Button} from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/student";
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
            
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    email: '',
    age: '',
    program: ''

}
        //firstname,lastname,mobile,email,age,program

const StudentForm = ({ classes, ...props }) => {

    //toast msg.
    const { addToast } = useToasts()

    //validate()
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
                //firstname,lastname,mobile,email,age,program

        if ('firstname' in fieldValues)
            temp.firstname = fieldValues.firstname ? "" : "This field is required."
        if ('lastname' in fieldValues)
            temp.lastname = fieldValues.lastname ? "" : "This field is required."           
        
        if ('program' in fieldValues)
            temp.program = fieldValues.program ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

  

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId == 0)
                props.createStudent(values, onSuccess)
            else
                props.updateStudent(props.currentId, values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.studentList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root}>
            <Grid container>
                <Grid item xs={6}>

                    <TextField
                        name="firstname"
                        variant="outlined"
                        label="First Name"
                        value={values.firstname}
                        onChange={handleInputChange}
                        {...(errors.firstname && { error: true, helperText: errors.firstname })}
                    />
                     <TextField
                        name="lastname"
                        variant="outlined"
                        label="Last Name"
                        value={values.lastname}
                        onChange={handleInputChange}
                        {...(errors.lastname && { error: true, helperText: errors.lastname })}
                    />
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        {...(errors.email && { error: true, helperText: errors.email })}

                    />
                 
         
                </Grid>
                <Grid item xs={6}>

                    <TextField
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                   
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                            onSubmit={handleSubmit}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}


const mapStateToProps = state => ({
    studentList: state.student.list
})

const mapActionToProps = {
    createStudent: actions.create,
    updateStudent: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(StudentForm));