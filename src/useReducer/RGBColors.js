import { useReducer } from "react"

// Reducer logic

const initialState = { red: 0, green: 0, blue: 0 }

const rgbReducer = (state = initialState, action) => {
	const {
		payload: { colorId, value }
	} = action

	switch (action.type) {
		case "INCREMENT": {
			return Object.assign({}, state, {
				[colorId]: limitRGB(state[colorId] + 1)
			})
		}
		case "DECREMENT": {
			return Object.assign({}, state, {
				[colorId]: limitRGB(state[colorId] - 1)
			})
		}
		case "UPDATE": {
			return Object.assign({}, state, {
				[colorId]: limitRGB(value)
			})
		}
		default: {
			return state
		}
	}
}

// This hook is responsible for handle the reducer state and perfom actions like incrementation and decrementation, also direct updates via input events.

const useRGBReducer = (initialState) => {
	const [{ red, green, blue }, dispatch] = useReducer(rgbReducer, initialState)

	const handleDispatch = (type) => (e, args) => {
		dispatch({
			type,
			payload: {
				colorId: e.target.name,
				...args
			}
		})
	}

	const handleUpdate = (e) => {
		if (e && e.target && e.target.value >= 0 && e.target.value <= 255)
			handleDispatch("UPDATE")(e, { value: e.target.value })
	}

	return {
		values: { red, green, blue },
		increment: handleDispatch("INCREMENT"),
		decrement: handleDispatch("DECREMENT"),
		update: handleUpdate
	}
}

// Utility

const RGB = (r, g, b) => `rgb(${r},${g},${b},1)`

const limitRGB = (value) => (value < 0 ? 0 : value > 255 ? 255 : value)

// UI components

const ColorOption = ({
	colorId,
	handleIncrement,
	handleDecrement,
	handleChange,
	colorValue
}) => {
	return (
		<div>
			<button onClick={handleDecrement} name={`${colorId}`}>
				-
			</button>
			<input name={colorId} onChange={handleChange} value={colorValue} />
			<button onClick={handleIncrement} name={`${colorId}`}>
				+
			</button>
		</div>
	)
}

const ColoredBox = ({ r, g, b }) => {
	return (
		<div style={{ backgroundColor: RGB(r, g, b), width: 100, height: 100 }}>
			hello
		</div>
	)
}

const RGBColors = () => {
	const {
		values: { red, green, blue },
		increment,
		decrement,
		update
	} = useRGBReducer(initialState)

	return (
		<div className="container">
			<ColorOption
				colorId="red"
				handleDecrement={decrement}
				handleIncrement={increment}
				handleChange={update}
				colorValue={red}
			/>
			<ColorOption
				colorId="green"
				handleDecrement={decrement}
				handleIncrement={increment}
				handleChange={update}
				colorValue={green}
			/>
			<ColorOption
				colorId="blue"
				handleDecrement={decrement}
				handleIncrement={increment}
				handleChange={update}
				colorValue={blue}
			/>
			<ColoredBox {...{ r: red, g: green, b: blue }} />
		</div>
	)
}

export default RGBColors
