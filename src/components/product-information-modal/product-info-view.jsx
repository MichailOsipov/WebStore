import * as React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions
} from '@material-ui/core';

export const ProductInfoView = ({
    productInfo,
    onGoShoppingCart,
    onAddProductToCart,
    onGoMainPage
}) => {
    const {name, description, imageSrc} = productInfo || {};
    return (
        <div>
            <Typography variant="h6">
                Информация о товаре:
            </Typography>
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
            <Button variant="contained" onClick={onGoShoppingCart}>Перейти в корзину</Button>
            <Button onClick={onGoMainPage}>На главную</Button>
        </div>
    );
};
