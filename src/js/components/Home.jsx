import React, { useState } from "react";




//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	return (
		<div className="container w-50">
			<h1>My Todo List!</h1>
			<ul className="list-group">
				<li className="list-group-item active" aria-current="true">
					<input className="bg-primary rounded text-white w-100" type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue))
								setInputValue("")
							}

						}}
						placeholder="Que necesitas hacer?" />
				</li>
				{todos.length === 0 && (
					<li className="list-group-item text-center text-muted">
					No hay tareas, añade tareas!!
					</li>
				)}
				{todos.map((text, index) => (
					<li className="list-group-item d-flex justify-content-between">
						{text}
						<i class="fa-solid fa-trash-can" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				)
				)}

			</ul>
			<div className="m-3">
				{todos.length} Tareas por hacer!
			</div>

		</div>
	)
};

export default Home;