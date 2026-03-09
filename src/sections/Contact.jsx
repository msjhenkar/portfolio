import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h3>This is Contact Page</h3>
        </div>
    )
})

export default Contact
