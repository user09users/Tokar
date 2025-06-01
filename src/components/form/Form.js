import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import useTocarService from 'services/TocarService';
import ThanksModal from 'components/thanksModal/ThanksModal';
import './form.scss';

const Form = ({
    btnClass,
    extraFieldClass = '',
    extraFormClass = '',
    policyClass,
    extraBtnPlace = false,
    extraField = false,
}) => {
    const { postData, clearError } = useTocarService();
    const [success, setSuccess] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const closeModal = useCallback(() => {
        setSuccess(null);
    }, []);

    const onSubmit = async (data) => {
        clearError();
        try {
            const res = await postData(data);
            if (res) {
                setSuccess(true);
                reset();
            } else {
                setSuccess(false);
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            setSuccess(false);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`form ${extraFormClass}`}
            >
                {extraField && (
                    <>
                        <div className="contacts__nav-item">
                            <img
                                className="contacts__nav-item-img"
                                src="/icons/User.svg"
                                alt="User"
                            />
                            <input
                                type="text"
                                placeholder="Введите имя"
                                className="contacts__nav-item-input"
                                {...register('name', {
                                    required: 'Обязательное поле!',
                                    pattern: {
                                        value: /^[A-Za-zА-Яа-яЁё\s\-]+$/,
                                        message: "Имя не должно содержать цифры",
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'Минимум 2 символа!',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Максимум 20 символа!',
                                    },
                                })}
                            />
                        </div>
                        {errors.name && (
                            <div className="error-message">{errors.name.message}</div>
                        )}
                    </>
                )}

                <div className={`form-item ${extraFieldClass}`}>
                    <div className="language">
                        <span></span>
                        <span></span>
                        <span className="icon-down-open"></span>
                    </div>

                    <input
                        className="form-input"
                        type="tel"
                        placeholder="+38 XXX XXX XX XX"
                        {...register('phone', {
                            required: 'Поле обязательно!',
                            pattern: {
                                value: /^\+?\d{10,15}$/,
                                message: 'Некорректный номер',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Максимум 20 символа!',
                            },
                        })}
                    />
                </div>
                {errors.phone && !extraBtnPlace && (
                    <div className="error-message">{errors.phone.message}</div>
                )}

                <button type="submit" className={btnClass} disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Заказать'}
                </button>
            </form>
            {errors.phone && extraBtnPlace && (
                <div className="error-message">{errors.phone.message}</div>
            )}

            {success !== null && <ThanksModal result={success} onClose={closeModal} />}

            <div className={policyClass}>
                Отправляя данные, Вы соглашаетесь на обработку{' '}
                <span>персональных данных</span>
            </div>
        </>
    );
};

export default Form;
