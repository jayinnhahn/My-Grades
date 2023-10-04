import React from 'react';

interface SearchbarProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ value, onChange, onSearch }) => {
	return (
		<form onSubmit={onSearch}>
			<input
				type="search"
				id="default-search"
				className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
				placeholder="Search Anything"
				required
				value={value}
				onChange={onChange}
			/>
		</form>
	);
};

export default Searchbar;
