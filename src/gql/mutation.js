import { gql } from '@apollo/client';

const EDIT_NOTE = gql`
    mutation updateNote($id: ID!, $content: String!){
        updateNote(id: $id, content: $content) {
            id
            content
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }
`;

const DELETE_NOTE = gql`
    mutation deleteNote($id: ID!){
        deleteNote(id: $id)
    }
`;

const TOOGLE_FAVORITE = gql`
    mutation toogleFavorite($id: ID!){
        toogleFavorite(id: $id) {
            id
            favoriteCount
        }
    }
`;

export { EDIT_NOTE, DELETE_NOTE, TOOGLE_FAVORITE };