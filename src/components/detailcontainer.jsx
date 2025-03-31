import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ShoppingCartRounded } from '@mui/icons-material';

// accept image url, title, description, price props
const Item = ({ id, imageUrl, title, description, price }) => {

  return (
    <div className="flex">
    <img src={imageUrl} alt={title} className="w-1/3"  />
    <Card variant="outlined"
      sx={{
        maxWidth: 2/3,
        margin: 'auto',
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 2,
      }}>
      
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {title} - # {id}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography 
          variant="body1" color="text.primary" sx={{ fontWeight: 'bold', alignContent: 'right', width: 1, display: 'flex', justifyContent: 'flex-end' }}
        >
          $ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" variant="outlined" startIcon={<ShoppingCartRounded />}>
          Comprar
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Item;