import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardMedia, Typography, ButtonBase } from '@material-ui/core';
import { IMAGE_URL } from '../../constants/apiConstants';
import capitalize from '../../utils/capitalize';
import useStyles from './styles';

const Pokemon = ({ pokemon }) => {
    const classes = useStyles();
    const history = useHistory();
    const pokemonAttr = pokemon.url.split('/');
    const pokemonId = pokemonAttr[pokemonAttr.length - 2];
    const openPokemonDetails = () => {
        history.push(`/pokemon/${pokemonId}`);
    }
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openPokemonDetails}>
                <CardMedia className={classes.media} image={`${IMAGE_URL}/${pokemonId}.png`} />
                <Typography className={classes.title} variant="h5">{capitalize(pokemon.name)}</Typography>
            </ButtonBase>
        </Card>
    )
}

export default Pokemon
