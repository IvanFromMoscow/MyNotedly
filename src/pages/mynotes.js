import React, { useEffect}  from 'react';
import { GET_MY_NOTES } from '../gql/query';
import NoteFeed from './../components/NoteFeed';
import { useQuery, gql} from '@apollo/client';

const MyNotes = () => {
    useEffect(() => {
        document.title = 'My notes - NOtedly';
    })
    const { loading, error, data } = useQuery(GET_MY_NOTES);
    if(loading) return 'Loading...';
    if(error) return  `Error! ${error.message}`;

    if(data.me.notes.length !== 0) {
        return <NoteFeed notes={data.me.notes}/>;
    } else {
        return <p>No notes yet</p>;
    }
};
export default MyNotes;