import { Box, makeStyles } from '@material-ui/core';
//components
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import MidSection from './MidSection';


import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';
const useStyle = makeStyles(theme => ({

    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightcomponent: {
        background: '#FFFFFF',
        margin: '12px 0 0 10px',
        width: '17%',
        padding: 5,
        [theme.breakpoints.down('md')]: {
            display: 'none'

        }
    }
}));

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('asdsad');
        dispatch(listProducts())

    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.leftComponent}>
                        <Slide
                            timer={true}
                            title="deal of the day"
                            products={products}
                        />
                    </Box>
                    <Box className={classes.rightcomponent}>
                        <img src={adURL} style={{ width: 230, height: 'auto' }} />
                    </Box>

                </Box>
                <MidSection />
                <Slide
                    timer={false}
                    title="dicounts for you"
                    products={products}
                />

                <Slide
                    timer={false}
                    title="suggested items"
                    products={products}
                />

                <Slide
                    timer={false}
                    title="Top selection"
                    products={products}
                />

                <Slide
                    timer={false}
                    title="Recomended items"
                    products={products}
                />

                <Slide
                    timer={false}
                    title="Best sellers"
                    products={products}
                />



            </Box>
        </div>
    )
}

export default Home
