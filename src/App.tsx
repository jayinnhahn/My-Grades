import { useState } from 'react';
import Items from './components/Items';
import Table from './components/Table';
function App() {
  const grades = ['a', 'b', 'c', 'd', 'e', 'f']
  const titleCards = ['Course No', 'Course Name', 'Units', 'Grade']

  return (
    <div className="w-full flex flex-row">
      <div className='flex flex-col'> 
      <form> 
        <div className='flex flex-col'>
          {titleCards.map(titleCard => (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900">{titleCard}</label>
              <input type="text" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder="name@flowbite.com"/>
            </div>
          ))}
        </div>

        <div>
          <h4>Grade</h4>
          <div className='grid grid-cols-2'> 
            {grades.map(grade => (
              <div className="flex items-center mb-4">
                <input  type="radio" name="" value="" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {grade}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Default</button>
      </form>
      </div>

      <div> 
      <form>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Anything" required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 border-2 border-solid">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {titleCards.map(card => (
                <th scope="col" className="px-6 py-3">
                  {card}
                </th>
              ))}
            </tr>
        </thead>
        <tbody>
          <Items/>
        </tbody>
    </table>
    </div>

      </div>
    </div>
  )
}

export default App
