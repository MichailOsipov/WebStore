import * as React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Grid
} from '@material-ui/core';

export const ProductInfoView = ({
    productInfo,
    onGoShoppingCart,
    onAddProductToCart,
    onGoMainPage
}) => {
    const {name, description, imageSrc} = productInfo || {};
    return (
        <Grid container spacing={16} direction="column">
            <Grid item>
                <Typography variant="h5">
                    Информация о товаре:
                </Typography>
            </Grid>
            <Grid item>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            style={{height: 300}}
                            title={`product-${name}`}
                            image={imageSrc}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button color="primary" onClick={onAddProductToCart}>Добавить продукт в корзину</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={onGoShoppingCart}>Перейти в корзину</Button>
                <Button onClick={onGoMainPage}>На главную</Button>
            </Grid>
        </Grid>
    );
};
