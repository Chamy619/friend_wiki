import { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initialize, changeField } from '../../modules/write';
import Editor from '../../components/write/Editor';

function EditorContainer({ match }) {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const { owner } = match.params;

  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch],
  );

  useEffect(() => {
    return () => dispatch(initialize(owner));
  }, [dispatch, owner]);

  return <Editor title={title} body={body} onChangeField={onChangeField} />;
}

export default withRouter(EditorContainer);
