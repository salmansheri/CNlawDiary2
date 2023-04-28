import React from 'react'

const EmptyState = ({title, subtitle}) => {
  return (
    <div className="flex flex-col gap-3 h-screen justify-center items-center">
        <h1 className="text-3xl text-neutral-900">{title}</h1>
        <p className="text-xl text-red-600">{subtitle}</p>
    </div>
  )
}

export default EmptyState