import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';

const Image = () => {

    const [path, setPath] = useState()

    useEffect(() => {
        const pathName = window.location.pathname
        const splitPath = pathName.split('image')
        setPath(splitPath[1])

    }, [path])

    return (
        <div style={{ textAlign: 'center' }}>
            <img src={path} width="100%"/>
            <Button
                variant="contained"
                sx={{ mt: '20px' }}
                onClick={() => window.history.back()}
            >
                Back
            </Button>
        </div>
    )
}

export default Image
