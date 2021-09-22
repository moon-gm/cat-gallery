import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { siteTitle } from './../config/global.json'

const Index = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    { siteTitle }
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Introduce our lovely cat, Kuh!
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                    It was June, 2013 that he came to our house.
                    He was alone when we saw him in Hiratsuka.
                    His mother or family were not arrond there.
                    He looked like small and hungry, we decided to protect him right now.
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                We took him to our house and feed some cat foods.
                    Then, he was fine and started walking around and playing with some toys.
                    This wonderful day when we met came to be his birthday, because it was no way to know his birthday.
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                    From that time to nowadays he has been growing up smarter and smarter.
                    Recently, he has been the strongest cat than any other human being in our home.
                    So he often bites our hands, legs, ..etc.
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                    But he is peaceful and kind.
                    He cannot even kill bugs, for exsample, mosquetoes, ants.
                    They are friends of him, he protects them when we are going to kill them.
                    He dosen't like any conflict.
                    He is very smart and we respect him.
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                    Finally, we think we want to introduce his many faces.
                </Typography>
            </Container>
        </Box >
    )
}

export default Index;
