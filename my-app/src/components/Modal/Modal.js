import { ModalLayout } from './ModalLayout';
import { useRequestAddInputValue } from '../../hooks';
import { useRequestGetTodo } from '../../hooks/use-request-get-todo';

export const Modal = ({ isModalOpened, setIsModalOpened }) => {
	const { refreshTodos } = useRequestGetTodo();
	const { addNewTask, addInputValue, changeAddInputValue } =
		useRequestAddInputValue(refreshTodos);

	return (
		<ModalLayout
			addNewTask={addNewTask}
			addInputValue={addInputValue}
			changeAddInputValue={changeAddInputValue}
			isModalOpened={isModalOpened}
			setIsModalOpened={setIsModalOpened}
		/>
	);
};
