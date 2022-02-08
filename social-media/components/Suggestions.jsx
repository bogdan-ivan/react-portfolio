import React, { useEffect, useState } from 'react'
import faker from '@faker-js/faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-gray-400 text-sm font-bold">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={suggestion.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full p-[2px] border-2 object-contain 
        cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          />
          <div className='flex-1 ml-4'>
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className='text-xs text-gray-400 truncate'>Works at {suggestion.company.name}</h3>
          </div>
          <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
