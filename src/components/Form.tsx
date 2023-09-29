import React from 'react';

interface FormProps {
	titleCards: string[];
	grades: string[];
}

const Form: React.FC<FormProps> = ({ titleCards, grades }) => {
	return (
		<form>
			<div className="flex flex-col mb-3">
				{titleCards.map(
					(titleCard) =>
						titleCard !== 'Grade' && (
							<div key={titleCard}>
								<label className="block mb-1 text-sm font-medium text-gray-900">
									{titleCard}
								</label>
								<input
									type="text"
									className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
									placeholder="name@flowbite.com"
								/>
							</div>
						)
				)}
			</div>

			{titleCards.includes('Grade') && (
				<div>
					<h4>Grade</h4>
					<div className="grid grid-cols-2">
						{grades.map((grade) => (
							<div key={grade} className="flex items-center mb-4">
								<input
									type="radio"
									name=""
									value=""
									className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
									{grade}
								</label>
							</div>
						))}
					</div>
				</div>
			)}

			<button
				type="button"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
