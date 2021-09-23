import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import _2013 from '../config/gallery/2013.json'
import _2014 from '../config/gallery/2014.json'
import _2015 from '../config/gallery/2015.json'
import _2016 from '../config/gallery/2016.json'
import _2017 from '../config/gallery/2017.json'
import _2018 from '../config/gallery/2018.json'
import _2019 from '../config/gallery/2019.json'
import _2020 from '../config/gallery/2020.json'

const CardItems = ({ card, year }) => {

    const Cards = []
    const returnZeroIdx = (idx) => (idx < 10 ? '0' + String(idx) : String(idx))

    for (let idx = 1; idx <= card.itemNum; idx++) {

        let fileName = String(year) + '-' + returnZeroIdx(card.id) + '_' + returnZeroIdx(idx) + '.jpg'

        Cards.push(
            <Card
                key={`${ card.month }_${ idx }`}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: '10px'
                }}
            >

                <CardMedia
                    component="img"
                    image={`/${year}/${card.id}/${ fileName }`}
                    alt={ card.title }
                    sx={{
                        width: 'auto', maxWidth: '300px',
                        height: 'auto', maxHeight: '300px'
                    }}
                    loading="lazy"
                />

                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        component="h2"
                        variant="h5"
                        gutterBottom
                    >
                        { card.title } { card.index && idx }
                    </Typography>
                    <Typography>
                        { card.content } { card.index && idx }
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button
                        size="small"
                        href={`/image/${year}/${card.id}/${ fileName }`}
                    >
                        View
                    </Button>
                </CardActions>

            </Card>
        )
    }
    return Cards
}

const Gallery = () => {

    const [path, setPath] = useState('')
    const splitPath = path.split('/')
    const year = splitPath[2]

    let gallerys = []
    switch(year) {
        case '2013': gallerys = _2013; break
        case '2014': gallerys = _2014; break
        case '2015': gallerys = _2015; break
        case '2016': gallerys = _2016; break
        case '2017': gallerys = _2017; break
        case '2018': gallerys = _2018; break
        case '2019': gallerys = _2019; break
        case '2020': gallerys = _2020; break
        default: gallerys = _2013; break
    }

    useEffect(() => {
        setPath(window.location.pathname)
    }, [path])

    return gallerys ? (
        <Container sx={{ mt: '40px' }}>

                {gallerys.map((card, idx) => (
                    <React.Fragment key={`${ card.month }${ idx }`}>
                        <Typography
                            component="h1"
                            variant="h4"
                            gutterBottom
                        >
                            { card.month }
                        </Typography>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                mb: '40px', p: '10px',
                            }}
                        >
                            <CardItems
                                card={card}
                                year={year}
                            />
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
