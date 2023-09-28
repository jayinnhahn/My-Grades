import React from 'react'

const Items = () => {
  return (
    <>
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">
                Silver
            </td>
            <td className="px-6 py-4">
                Laptop
            </td>
            <td className="px-6 py-4">
                $2999
            </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr> 
    </>
  )
}

export default Items
