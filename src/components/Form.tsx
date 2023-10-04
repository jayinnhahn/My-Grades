import React from 'react';

interface FormProps {
	titleCards: string[];
	grades: string[];
	samplePlaceHolders: string[];
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	form: { [key: string]: string | number };
}

const Form: React.FC<FormProps> = ({
	titleCards,
	grades,
	samplePlaceHolders,
	onSubmit,
	onChange,
	form,
}) => {
	return (
		<form onSubmit={onSubmit}>
			<div className="flex flex-col mb-3 p-4 shadow-md rounded-lg overflow-hidden bg-white">
				{titleCards.map(
					(titleCard) =>
						titleCard !== 'Grade' && (
							<div key={titleCard}>
								<label className="block mb-2 text-sm font-medium text-gray-900">
									{titleCard}
								</label>
								<input
									type="text"
									className="border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mb-3"
									placeholder={
										samplePlaceHolders[titleCards.indexOf(titleCard)]
									}
									id={titleCard.toLowerCase()}
									value={form[titleCard.toLowerCase()]}
									onChange={onChange}
								/>
							</div>
						)
				)}
			</div>
			{titleCards.includes('Grade') && (
				<div className="flex flex-col mb-3 p-4 shadow-md rounded-lg overflow-hidden mt-10 bg-white">
					<label className="block mb-3 text-sm font-medium text-gray-900">
						Grade
					</label>
					<div className="grid grid-cols-2">
						{grades.map((grade) => (
							<div key={grade} className="flex items-center mb-4">
								<input
									type="radio"
									id="grade"
									name="grade"
									value={grade}
									className="w-4 h-4"
									onChange={onChange}
								/>
								<label className="block ml-2 text-sm font-medium text-black">
									{grade}
								</label>
							</div>
						))}
					</div>
				</div>
			)}

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm mt-3 px-5 py-2.5 w-full"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
