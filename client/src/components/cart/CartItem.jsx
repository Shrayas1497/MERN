import { Box, Card, makeStyles, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';

//componenets
import GroupButtons from './GroupButtons';


const useStyle = makeStyles({
  component: {
    display: 'flex',
    borderRadius: 0,
    borderTop: '1px solid #f0f0f0'
  },
  leftcomponent: {
    margin: 20,
    display:'flex',
    flexDirection:'column'
  },
  rightcomponent: {
    margin: 20

  }, smallText: {
    fontSize: 14
  },
  greyTextColor: {
    color: '#878787'
  }, price: {
    fontSize: 18,
    fontWeight: 600
  },
  image: {
    height: 110,
    width: 110
  },
  remove: {
    marginTop: 20,
    fontSize: 16
  }
})
const CartItem = ({ item, removeItemFromCart }) => {
  const classes = useStyle();

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <Card className={classes.component}>
      <Box className={classes.leftcomponent}>
        <img src={item.url} className={classes.image} />
        <GroupButtons/>
      </Box>
      <Box className={classes.rightcomponent}>
        <Typography> {item.title.longTitle} </Typography>
        <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{ marginTop: 10 }}>Seller:SuperComnet
          <span> <img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
        </Typography>
        <Typography style={{ margin: '20px 0' }}>
          <span className={classes.price}> ₹{item.price.cost} </span> &nbsp;&nbsp;&nbsp;
          <span className={classes.greyTextColor} ><strike> ₹{item.price.mrp}  </strike> </span>&nbsp;&nbsp;&nbsp;
          <span style={{ color: '#388E3C' }}> {item.price.discount}off </span>
        </Typography>
        <Button className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
      </Box>

    </Card>
  )
}

export default CartItem
