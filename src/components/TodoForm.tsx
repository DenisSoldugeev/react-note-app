import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }
    return (
        <div className="input-field mt-2">
            <input
                ref={ref}
                type="text"
                id='title'
                placeholder={'Введите название дела'}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className={'active'}>Введите название дела</label>
        </div>
    )
}