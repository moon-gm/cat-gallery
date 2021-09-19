import { useState, useEffect } from 'react'

const Gallery = () => {
  const [path, setPath] = useState('/gallery/2013/1')
  const splitPath = path.split('/')
  const year = splitPath[2]
  const month = splitPath[3]

  useEffect(() => {
    setPath(window.location.pathname)
  }, [path])

  return (
    <div>
        Gallery/{year}/{month}
    </div>
  );
}

export default Gallery;
