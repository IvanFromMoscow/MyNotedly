import  React  from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_NOTE, GET_ME } from '../gql/query';
import NoteForm from '../components/NoteForm';
import { EDIT_NOTE } from '../gql/mutation';

const EditNote = props => {
    const id = props.match.params.id;

    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    const { data: userdata } = useQuery(GET_ME);
    const [editNote] = useMutation(EDIT_NOTE, {
        variables: {
            id
        }
    , onCompleted: () => {
        props.history.push(`/note/${id}`);
    }
});
    if(loading) return <p>Loading ...</p>;
    if(error) return <p>Error! Note not found!</p>;
    if (userdata.me.id !== data.note.author.id) {
        props.history.push(`/`);
    }
    return <NoteForm content={data.note.content} action={editNote} />;
}
export default EditNote;