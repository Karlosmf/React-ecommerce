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
    <Card variant="outlined"
      sx={{
        maxWidth: 1/4,
        margin: 'auto',
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 2,
      }}>
      <CardMedia
        sx={{ height: 140, width:1, aspectRatio: 1 }}
        image={imageUrl}
        title="{title}"
      />
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
        <a href={`/item/${id}`}><Button size="small">Ver detalles</Button></a>
      </CardActions>
    </Card>
  );
};

export default Item;