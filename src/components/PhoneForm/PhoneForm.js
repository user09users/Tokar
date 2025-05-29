import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import './phoneForm.scss';

import useTocarService from 'services/services';

const PhoneForm = ({ extraInputClass }) => {
    const { postData, clearError } = useTocarService();

    return (
        <Formik
            initialValues={{ phone: '' }}
            validationSchema={Yup.object({
                phone: Yup.string()
                    .matches(/^\+?\d{10,15}$/, 'Некорректный номер')
                    .required('Поле обязательно!'),
            })}
            onSubmit={({ phone }, { resetForm }) => {
                clearError();
                postData(phone);
                resetForm();
            }}
        >
            <Form data-form className="phoneForm" >
                <div className="phoneForm-item">
                    <div className="language">
                        <span></span>
                        <span></span>
                        <span className="icon-down-open"></span>
                    </div>

                    <Field
                        className="phoneForm-input"
                        type="tel"
                        name="phone"
                        placeholder="+38 XXX XXX XX XX"
                    />
                    <FormikErrorMessage component="div" className="phone-error-message" name="phone" />
                </div>
            </Form>
        </Formik>
    );
};

export default PhoneForm;
