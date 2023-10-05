import Table from './components/Table';
import Searchbar from './components/Searchbar';
import Form from './components/Form';
import { useState } from 'react';

function App() {
	const grades = ['A', 'B+', 'B', 'C+', 'C', 'D', 'F'];
	const titleCards = ['Course No', 'Course Name', 'Units', 'Grade'];
	const samplePlaceHolders = ['C314', 'Computer Programming', '3', 'A'];

	const [form, setForm] = useState({
		'course name': '',
		'course no': '',
		units: 0,
		grade: '',
	});

	const [tableValues, setTableValues] = useState([
		{
			courseId: 1,
			courseNo: 'C402',
			courseName: 'Operating System',
			units: 3,
			grade: 'A',
		},
		{
			courseId: 2,
			courseNo: 'C203',
			courseName: 'Digital Design',
			units: 4,
			grade: 'B',
		},
		{
			courseId: 3,
			courseNo: 'C312',
			courseName: 'FullStack Development',
			units: 3,
			grade: 'C',
		},
	]);

	const [textValue, setTextValue] = useState('');
	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { id, value } = e.target;
		setForm({ ...form, [id]: value });
	};
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isNaN(Number(form.units))) {
			if (Number(form.units) < 6) {
				setTableValues([
					...tableValues,
					{
						courseId: tableValues.length + 1,
						courseNo: form['course no'].toString(),
						courseName: form['course name'].toString(),
						units: Number(form.units),
						grade: form.grade,
					},
				]);
			} else {
				alert(
					'No Units should exceed 6 (wala pa koy naagihan na subject na ana ang units hehe)'
				);
			}
		} else {
			alert('You should input a number for the units');
		}
	};
	const gradeEquivalent = {
		A: 4,
		'B+': 3.5,
		B: 3,
		'C+': 2.5,
		C: 2,
		D: 1,
		F: 0,
	};

	const totalGradePoints = tableValues.reduce(
		(total, { units, grade }) =>
			total + units * gradeEquivalent[grade as keyof typeof gradeEquivalent],
		0
	);

	const totalUnits = tableValues.reduce(
		(total, { units }) => total + Number(units),
		0
	);

	const finalGrade =
		totalUnits !== 0 ? (totalGradePoints / totalUnits).toFixed(2) : '0';

	return (
		<div className="flex justify-center align-center h-screen bg-gray-100">
			<div className="p-8 flex rounded-lg overflow-hidden">
				<aside className="flex flex-col">
					<div className="h-full px-5 py-4 overflow-y-auto">
						<Form
							titleCards={titleCards}
							grades={grades}
							samplePlaceHolders={samplePlaceHolders}
							form={form}
							onChange={handleForm}
							onSubmit={handleSubmit}
						/>
					</div>
				</aside>

				<div className="flex justify-center align-center h-fit rounded-lg bg-white shadow-md p-8 mt-4 mx-4">
					<div className="inline-block min-w-full overflow-hidden">
						<Searchbar
							value={textValue}
							onChange={(e) => setTextValue(e.target.value)}
							onSearch={handleSearch}
						/>
						<div className="relative overflow-x-auto">
							<Table
								titleCards={titleCards}
								tableValues={tableValues}
								textValue={textValue}
							/>
						</div>
						<div className="text-right mr-2 mt-2">
							<h1 className="font-medium">Total QPI: {finalGrade}</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute right-0 bottom-0 p-4">
				<p className="font-medium"> Powered By: Jay Tan</p>
			</div>
		</div>
	);
}

export default App;
