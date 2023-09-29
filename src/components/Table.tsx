import React from 'react';
import Items from './Items';

interface TableProps {
	titleCards: string[];
	tableValues: {
		courseNo: number;
		courseName: string;
		units: number;
		grade: string;
	}[];
}
const Table: React.FC<TableProps> = ({ titleCards, tableValues }) => {
	return (
		<table className="w-full text-sm text-left text-gray-500 border-2 border-solid">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					{titleCards.map((card, index) => (
						<th key={index} scope="col" className="px-6 py-3">
							{card}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				<Items tableValues={tableValues} />
			</tbody>
		</table>
	);
};

export default Table;
