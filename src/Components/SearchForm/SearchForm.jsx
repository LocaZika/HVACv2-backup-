import './SearchForm.scss';
import { useState } from 'react';
import { useFetch } from 'Services/Hooks';
import { Button, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { searchFormSlice } from './searchFormSlice';

export default function SearchForm({path, onSetKeyword}) {
  const [search, setSearch] = useState({
    isEmpty: false,
    keyword: '',
  });
  const dispatch = useDispatch();
  const {result} = searchFormSlice.actions;
  const api = useFetch(path);
  const handleChange = (e) => setSearch({
    ...search, keyword: e.target.value
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if( search.keyword === '' ){
      setSearch({...search, isEmpty: true})
    }else{
      const keyword = search.keyword.toLowerCase();
      api.get('GET',{search: keyword}).then(({data}) => {
        dispatch(result(data));
        onSetKeyword(keyword);
      });
      setSearch({...search, isEmpty: false});
    }
  }
  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <TextField
        error={search.isEmpty}
        helperText={search.isEmpty === false ? '' : 'Please enter keyword'}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        placeholder='Searching...'
        onChange={handleChange}
        className='search-form__input'
        value={search.keyword}
      />
      <Button type='submit' style={search.isEmpty === false ? null : {height: '70%'}}>
        <FontAwesomeIcon icon={faMagnifyingGlass} color='#aaaab3' fontSize={'14px'} />
      </Button>
    </form>
  )
}
