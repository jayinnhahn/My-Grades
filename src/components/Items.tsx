interface ItemsProps {
	tableValues: {
		courseNo: string;
		courseName: string;
		units: number;
		grade: string;
	}[];
	query: string;
}

const Items: React.FC<ItemsProps> = ({ tableValues, query }) => {
	return (
		<>
			{tableValues
				.filter((item) =>
					item.courseName.toLowerCase().includes(query.toLowerCase())
				)
				.map((item, index) => (
					<tr key={index} className="bg-white border-b">
						<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
							{item.courseNo}
						</td>
						<td className="px-6 py-4">{item.courseName}</td>
						<td className="px-6 py-4">{item.units}</td>
						<td className="px-6 py-4">{item.grade}</td>
					</tr>
				))}
		</>
	);
};
export default Items;
