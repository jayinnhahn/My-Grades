import Table from './components/Table';
import Searchbar from './components/Searchbar';
import Form from './components/Form';
import { useState } from 'react';
function App() {
	const grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'];
	const titleCards = ['Course No', 'Course Name', 'Units', 'Grade'];
	const [tableValues, setTableValues] = useState([
		{ courseNo: 1, courseName: 'Baseball', units: 9.99, grade: 'a' },
		{ courseNo: 2, courseName: 'Football', units: 49.99, grade: 'b' },
		{ courseNo: 3, courseName: 'Basketball', units: 29.99, grade: 'c' },
	]);
	const [textValue, setTextValue] = useState('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Searching for:', textValue);
	};

	return (
		<div className="w-full flex flex-row">
			<aside className="flex flex-col pd-20 align-center z-40 w-64 h-screen">
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
					<Form titleCards={titleCards} grades={grades} />
				</div>
			</aside>

			<div>
				{textValue}
				<Searchbar
					value={textValue}
					onChange={(e) => setTextValue(e.target.value)}
					onSearch={handleSearch}
				/>
				<div className="relative overflow-x-auto">
					<Table titleCards={titleCards} tableValues={tableValues} />
				</div>
			</div>
		</div>
	);
}

export default App;
