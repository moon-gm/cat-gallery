import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import _2013 from '../config/2013.json'

const Gallery = () => {
    const [path, setPath] = useState('/')

    const splitPath = path.split('/')
    const year = splitPath[2]
    const gallerys = year === '2013' && _2013

    useEffect(() => {
        setPath(window.location.pathname)
    }, [path])

    return gallerys ? (
        <Container sx={{ mt: '40px' }}>
            {/* End hero unit */}
                {gallerys.map((cards, idx) => (
                    <React.Fragment key={`${ cards[0].id }${ idx }`}>
                        <Typography gutterBottom variant="h4" component="h1">
                            { cards[0].id }
                        </Typography>
                        <Card sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mb: '40px', justifyContent: 'space-around', p: '10px' }}>
                            {cards.map((card, idx2) => (
                                    <Card
                                        sx={{ display: 'flex', flexDirection: 'column', m: '10px' }}
                                        key={`${ card.id }${ idx2 }`}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={`/${year}/${cards[0].id}/${ card.src }`}
                                            alt={ card.name }
                                            sx={{ height: 'auto', width: 'auto', maxWidth: '300px', maxHeight: '300px'}}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                { card.name }
                                            </Typography>
                                            <Typography>
                                                { card.content }
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" href={`/image/${year}/${cards[0].id}/${ card.src }`}>View</Button>
                                        </CardActions>
                                    </Card>
                                ))}
                        </Card>
                    </React.Fragment>
                ))}
        </Container>
    ) : (
        <Container
            sx={{ mt: '40px' }}
            align="center"
        >
            <Typography
                component="h2"
                variant="h5"
                gutterBottom
            >
                No Data
            </Typography>
        </Container>
    )
}

export default Gallery
