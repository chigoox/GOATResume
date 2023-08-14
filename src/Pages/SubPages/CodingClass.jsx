import React from 'react'

const CodingClass = ({ onPage }) => {
    return (
        <div className='text-8xl text-white'>

            {onPage == 'Coding Class' &&
                <div className='mb-52'>
                    <h1 className='text-center text-4xl my-4'>Join My Coding Class Today</h1>

                    <stripe-pricing-table
                        pricing-table-id="prctbl_1Nf3hKBiXRHCNCMjzNEr8Zon"
                        publishable-key="pk_live_51Nend2BiXRHCNCMj3rHVP9lhAWQDRXvB0PjJ6t9ga4hpg8hn8grmoapR5fHynzWnpURcz3WmmeUxGYmz2a2Qahty0027vrCkRC"
                    >
                    </stripe-pricing-table>
                </div>
            }

        </div>
    )
}

export default CodingClass