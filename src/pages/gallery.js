import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SvgIcon from '@material-ui/core/SvgIcon';
import _2013 from '../config/gallery/2013.json'
import _2014 from '../config/gallery/2014.json'
import _2015 from '../config/gallery/2015.json'
import _2016 from '../config/gallery/2016.json'
import _2017 from '../config/gallery/2017.json'
import _2018 from '../config/gallery/2018.json'
import _2019 from '../config/gallery/2019.json'
import _2020 from '../config/gallery/2020.json'

const CardItems = ({ card, year, allPhotoShow }) => {

    const Cards = []
    const returnZeroIdx = (idx) => (idx < 10 ? '0' + String(idx) : String(idx))

    let length = 3
    if (String(allPhotoShow) === card.id) length = card.itemNum

    for (let idx = 1; idx <= length; idx++) {

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
                    alt={ card.title.default ? card.title.name[0] : card.title.name[idx] }
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
                        { card.title.default ? card.title.name[0] : card.title.name[idx] } { card.title.index && idx }
                    </Typography>
                    <Typography>
                        { card.content.default ? card.content.name[0] : card.content.name[idx] } { card.content.index && idx }
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
    const [allPhotoShow, setAllPhotoShow] = useState(0)
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
                            id={card.month}
                            sx={{ borderBottom: '1px solid black' }}
                        >
                            <SvgIcon>
                                <path fill="currentColor" d="M6,19L9,15.14L11.14,17.72L14.14,13.86L18,19H6M6,4H11V12L8.5,10.5L6,12M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />
                            </SvgIcon>
                            { card.month }
                        </Typography>
                        <Button
                            href="#top"
                            variant="contained"
                            sx={{ ml: '20px' }}
                        >
                            Top
                        </Button>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                mb: '40px', mt: '15px', p: '10px',
                            }}
                        >
                            <CardItems
                                card={card}
                                year={year}
                                allPhotoShow={allPhotoShow}
                            />
                            {(String(allPhotoShow) !== card.id) && (
                                <Button
                                    variant="contained"
                                    sx={{
                                        height: '50px',
                                        m: '20px'
                                    }}
                                    onClick={() => {
                                        switch(card.id) {
                                            case '1': setAllPhotoShow(1); break
                                            case '2': setAllPhotoShow(2); break
                                            case '3': setAllPhotoShow(3); break
                                            case '4': setAllPhotoShow(4); break
                                            case '5': setAllPhotoShow(5); break
                                            case '6': setAllPhotoShow(6); break
                                            case '7': setAllPhotoShow(7); break
                                            case '8': setAllPhotoShow(8); break
                                            case '9': setAllPhotoShow(9); break
                                            case '10': setAllPhotoShow(10); break
                                            case '11': setAllPhotoShow(11); break
                                            case '12': setAllPhotoShow(12); break
                                            default: setAllPhotoShow(0); break
                                        }
                                        window.location.href = '#' + card.month
                                    }}
                                >
                                    View More
                                </Button>
                            )}
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
