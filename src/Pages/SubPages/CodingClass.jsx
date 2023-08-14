import React from 'react'

const CodingClass = ({ onPage }) => {
    return (
        <div className='text-8xl text-white'>

            {onPage == 'Coding Class' &&
                <div>
                    <stripe-pricing-table
                        pricing-table-id="prctbl_1NetcxBiXRHCNCMj3wIkvlpS"
                        publishable-key="pk_test_51Nend2BiXRHCNCMjlvVC6REAz6mYAzgBvvNSRPUj0YPCveLwtXpcwJmDz22pZb9fx46pgDjr3Oqv1PzYVLzq24DZ00uEtNVi8G"
                    >
                    </stripe-pricing-table>
                </div>
            }

        </div>
    )
}

export default CodingClass