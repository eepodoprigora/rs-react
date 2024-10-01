import { useRef, useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	// основной стейт
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// стейт ошибок
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');

	const [showEmailError, setShowEmailError] = useState(false);
	const [showPasswordError, setShowPasswordError] = useState(false);
	const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

	//валидность формы для кнопки
	const [isFormValid, setIsFormValid] = useState(false);

	// regex для email
	const emailRegEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

	// ref кнопки
	const registerButtonRef = useRef(null);

	// валидация
	const validateEmail = (value) => {
		if (!emailRegEx.test(value)) {
			setEmailError('Некорректный Email');
			return false;
		} else {
			setEmailError('');
			return true;
		}
	};

	const validatePassword = (value) => {
		if (value.length < 6) {
			setPasswordError('Пароль должен быть не менее 6 символов');
			return false;
		} else {
			setPasswordError('');
			return true;
		}
	};

	const validateConfirmPassword = (confirmPasswordValue, passwordValue) => {
		if (confirmPasswordValue !== passwordValue) {
			setConfirmPasswordError('Пароли не совпадают');
			return false;
		} else {
			setConfirmPasswordError('');
			return true;
		}
	};

	const validateForm = (email, password, confirmPassword) => {
		const isEmailValid = validateEmail(email);
		const isPasswordValid = validatePassword(password);
		const isConfirmPasswordValid = validateConfirmPassword(confirmPassword, password);

		setIsFormValid(isEmailValid && isPasswordValid && isConfirmPasswordValid);
	};

	// обработчики
	const handleEmailChange = ({ target }) => {
		const newEmail = target.value;
		setEmail(newEmail);
		validateForm(newEmail, password, confirmPassword);
	};

	const handlePasswordChange = ({ target }) => {
		const newPassword = target.value;
		setPassword(newPassword);
		validateForm(email, newPassword, confirmPassword);
	};

	const handleConfirmPasswordChange = ({ target }) => {
		const newConfirmPassword = target.value;
		setConfirmPassword(newConfirmPassword);
		validateForm(email, password, newConfirmPassword);
	};

	// показ ошибок

	const handleEmailBlur = () => {
		setShowEmailError(true);
		validateEmail(email);
	};

	const handlePasswordBlur = () => {
		setShowPasswordError(true);
		validatePassword(password);
	};

	const handleConfirmPasswordBlur = () => {
		setShowConfirmPasswordError(true);
		validateConfirmPassword(confirmPassword, password);
	};

	// Обработчик отправки формы
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isFormValid) {
			console.log({
				email,
				password,
			});
			registerButtonRef.current.focus();
			handleReset();
		}
	};

	// очищение формы
	const handleReset = () => {
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		setIsFormValid(false);
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1>Регистрация</h1>
				<div className={styles.field}>
					<label className={styles.label} htmlFor="email">
						Email
					</label>
					<input
						onChange={handleEmailChange}
						onBlur={handleEmailBlur}
						className={styles.input}
						type="email"
						value={email}
					/>
					{showEmailError && <div className={styles.error}>{emailError}</div>}
				</div>
				<div className={styles.field}>
					<label className={styles.label} htmlFor="password">
						Пароль
					</label>
					<input
						onChange={handlePasswordChange}
						onBlur={handlePasswordBlur}
						className={styles.input}
						type="password"
						value={password}
					/>
					{showPasswordError && (
						<div className={styles.error}>{passwordError}</div>
					)}
				</div>
				<div className={styles.field}>
					<label className={styles.label} htmlFor="confirmPassword">
						Повторите пароль
					</label>
					<input
						onChange={handleConfirmPasswordChange}
						onBlur={handleConfirmPasswordBlur}
						className={styles.input}
						type="password"
						value={confirmPassword}
					/>
					{showConfirmPasswordError && (
						<div className={styles.error}>{confirmPasswordError}</div>
					)}
				</div>

				<button
					className={styles.button}
					type="sumbit"
					ref={registerButtonRef}
					disabled={!isFormValid}
				>
					Отправить
				</button>
			</form>
		</div>
	);
};
