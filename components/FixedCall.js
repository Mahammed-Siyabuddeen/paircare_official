import { Call } from '@mui/icons-material'
import React from 'react'

function FixedCall() {
    return (
        <div className="fixed_call_container" onClick={() => location.href = 'tel:8792635047'}>
            <div>
                <Call sx={{ color: '#fff' }} />
            </div>
        </div>
    )
}

export default FixedCall