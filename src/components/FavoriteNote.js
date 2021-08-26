import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import ButtonAsLink from './ButtonAsLink';
import { TOOGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';

const FavoriteNote = props => {
    console.log(props)
    const [count, setCount] = useState(props.favoriteCount);
    const [favorited, setFavorited] = useState(props.me.favorites.filter(note => note.id === props.noteId).length > 0);
    console.log(count, favorited);
    const [toogleFavorite] = useMutation(TOOGLE_FAVORITE, {
        variables: {
            id: props.noteId
        },   
        refetchQueries: [{ query: GET_MY_FAVORITES }],
        onCompleted: data => {
            props.history.push(`/mynotes`);
        }
    });
    return (
        <React.Fragment>
            {favorited ? <ButtonAsLink 
                            onClick={() => {toogleFavorite(); setFavorited(false); setCount(count - 1);}}
                         >Remove Favorite</ButtonAsLink>: (
                            <ButtonAsLink 
                            onClick={() => {toogleFavorite(); setFavorited(true); setCount(count + 1);}}
                         >Add Favorite</ButtonAsLink>)}
            
        : {count}
        </React.Fragment>)
        
}

export default withRouter(FavoriteNote);