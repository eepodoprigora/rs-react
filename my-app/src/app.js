import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './app.module.css';
import { useRef } from 'react';

// const emailRegEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
const fieldsSchema = yup.object().shape({
	email: yup.string().email(),
	password: yup
		.string()
		.min(6, 'Пароль должен быть больше 6 символов')
		.required('Поле обязательно для заполнения'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
		.required('Поле обязательно для заполнения'),
});

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		resolver: yupResolver(fieldsSchema),
		// mode: 'onChange',
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	const buttonRef = useRef(null);

	const focusButton = () => {
		if (isValid && buttonRef.current) {
			buttonRef.current.focus();
		}
	};

	const sendFormData = (formData) => {
		console.log(formData);
		alert('Данные успешно отправлены');
		reset();
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				<h1>Регистрация</h1>
				<div className={styles.field}>
					<label htmlFor="email" className={styles.label}>
						Email
					</label>
					<input
						className={styles.input}
						name="email"
						type="email"
						{...register('email')}
					/>
					{emailError && <div className={styles.error}>{emailError}</div>}
				</div>
				<div className={styles.field}>
					<label htmlFor="email" className={styles.label}>
						Пароль
					</label>
					<input
						className={styles.input}
						name="password"
						type="password"
						{...register('password')}
					/>
					{passwordError && <div className={styles.error}>{passwordError}</div>}
				</div>
				<div className={styles.field}>
					<label htmlFor="email" className={styles.label}>
						Пароль
					</label>
					<input
						className={styles.input}
						name="confirmPassword"
						type="password"
						{...register('confirmPassword')}
						onBlur={focusButton}
					/>
					{confirmPasswordError && (
						<div className={styles.error}>{confirmPasswordError}</div>
					)}
				</div>

				<button
					className={styles.button}
					type="submit"
					disabled={!isValid}
					ref={buttonRef}
				>
					Отправить
				</button>
			</form>
		</div>
	);
};
