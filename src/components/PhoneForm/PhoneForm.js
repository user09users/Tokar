import { useState, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useTocarService from 'services/TocarService';
import './phoneForm.scss';
import ThanksModal from 'components/thanksModal/ThanksModal';

const PhoneForm = ({ btnClass, extraFieldClass = '', extraFormClass = '', policyClass, extraField = false, }) => {

    const { postData, clearError } = useTocarService();
    const [success, setSuccess] = useState(null);

    const closeModal = useCallback(() => {
        setSuccess(null);
    }, []);

    const validationSchema = Yup.object({
        phone: Yup.string()
            .matches(/^\+?\d{10,15}$/, 'Некорректный номер')
            .required('Поле обязательно!'),
        name: extraField
            ? Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле!')
            : Yup.string(),
    });

    return (
        <>
            <Formik
                initialValues={{ phone: '', name: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    clearError();
                    try {
                        const res = await postData(values);
                        if (res) {
                            setSuccess(true);
                            resetForm();
                        } else {
                            setSuccess(false);
                        }
                    } catch (error) {
                        console.error('Ошибка отправки:', error);
                        setSuccess(false);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <>
                        <Form data-form className={`phoneForm ${extraFormClass}`}>
                            {extraField && (
                                <div className="contacts__nav-item">
                                    <img
                                        className="contacts__nav-item-img"
                                        src="/icons/User.svg"
                                        alt="User"
                                    />
                                    <Field
                                        name="name"
                                        placeholder="Введите имя"
                                        className="contacts__nav-item-input"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="name-error-message"
                                    />
                                </div>
                            )}

                            <div className={`phoneForm-item ${extraFieldClass}`}>
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
                            </div>
                            <button
                                type="submit"
                                className={btnClass}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Отправка...' : 'Заказать'}
                            </button>
                        </Form>
                        <ErrorMessage
                            component="div"
                            className="phone-error-message"
                            name="phone"
                        /></>
                )}
            </Formik>

            {success !== null && (
                <ThanksModal result={success} onClose={closeModal} />
            )}

            <div className={policyClass}>
                Отправляя данные, Вы соглашаетесь на обработку
                <span>персональных данных</span>
            </div>
        </>
    );
};

export default PhoneForm;
