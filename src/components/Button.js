const Button = ({name}) => {
    return (
        <div>
            <button className="border border-gray-200 mx-2 my-3 py-1 px-3 hover:bg-gray-200">{name}</button>
        </div>
    )
}

export default Button;