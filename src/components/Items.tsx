interface ItemsProps {
	tableValues: {
		courseNo: number;
		courseName: string;
		units: number;
		grade: string;
	}[];
}

const Items: React.FC<ItemsProps> = ({ tableValues }) => {
	return (
		<>
			{tableValues.map((item, index) => (
				<tr key={index} className="bg-white border-b">
					<td
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
					>
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
