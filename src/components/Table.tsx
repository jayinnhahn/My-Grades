import React from 'react';
import Items from './Items';

interface TableProps {
	titleCards: string[];
	tableValues: {
		courseNo: string;
		courseName: string;
		units: number;
		grade: string;
	}[];
	textValue: string;
}

const Table: React.FC<TableProps> = ({
	titleCards,
	tableValues,
	textValue,
}) => {
	return (
		<div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden mt-10">
			<table className="min-w-full leading-normal border-gray-100 rounded-lg border-2">
				<thead>
					<tr>
						{titleCards.map((title, index) => (
							<th
								key={index}
								className="px-5 py-3 border-b-2 rounded-x-lg border-gray-100 bg-blue-700 text-white text-left text-xs font-semibold uppercase tracking-wider"
							>
								{title}
							</th>
						))}
						<th className="py-3 border-b-2 border-gray-200 bg-white text-center"></th>
					</tr>
				</thead>
				<tbody>
					<Items tableValues={tableValues} query={textValue} />
				</tbody>
			</table>
		</div>
	);
};

export default Table;
