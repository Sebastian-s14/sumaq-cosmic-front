import React from 'react'

export const SubTitle = ({
    text,
    theme = 'primary',
}: {
    text: string
    theme?: 'primary' | 'secondary'
}) => {
    return (
        <h3 className="flex flex-col gap-2 text-4xl">
            <div
                className={`${
                    theme === 'primary' ? 'text-white' : 'text-black'
                }  font-bold`}
            >
                {text}
            </div>
            <div className="px-6">
                <div className="h-1 bg-[#F92942] pt-2"></div>
            </div>
        </h3>
    )
}
