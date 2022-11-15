// external components
import { useEffect, useRef, useState } from "react";

// internal components
import "./Trainers.css";

const Trainers = ({ getTrainer, setTrainer }) => {
	const [trainerDrop, setTrainerDrop] = useState("");

	// for close dropdown when outside clicked start
	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current?.contains(e.target)) {
			setTrainerDrop(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	// for close dropdown when outside clicked end

	return (
		<>
			<div
				className={
					trainerDrop ? "trainer-container active" : "trainer-container"
				}
				onClick={() => setTrainerDrop(!trainerDrop)}
				ref={myRef}
			>
				<input
					type="text"
					placeholder="Select Trainer"
					readOnly
					value={getTrainer}
					required
				/>
				<div className="option" ref={myRef}>
					<div onClick={() => setTrainer("Jaspreet kaur")}>
						<span>Jaspreet kaur</span>
					</div>
					<div onClick={() => setTrainer("Kamini Rani")}>
						<span>Kamini Rani</span>
					</div>

					<div onClick={() => setTrainer("Lovepreet kaur")}>
						<span>Lovepreet kaur</span>
					</div>

					<div onClick={() => setTrainer("Vikas kamboj")}>
						<span>Vikas kamboj</span>
					</div>

					<div onClick={() => setTrainer("Harpreet kaur")}>
						<span>Harpreet kaur</span>
					</div>

					<div onClick={() => setTrainer("Manju")}>
						<span>Manju</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Trainers;
