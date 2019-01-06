import * as React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions
} from '@material-ui/core';

export const ProductCard = ({name, imageSrc, actions}) => (
    <Card style={{maxWidth: 345}}>
        <CardActionArea>
            <CardMedia
                style={{height: 140}}
                title={`product-${name}`}
                image={imageSrc}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
            </CardContent>
        </CardActionArea>
        {actions && (
            <CardActions>
                {actions}
            </CardActions>
        )}
    </Card>
);
