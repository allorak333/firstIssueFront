import React from 'react';
import styles from './SearchBar.module.css';
import search from '../assets/search.svg'

const SearchBar = () => {
  return (
    <div style={{width: 1139, height: 44, background: 'white',borderRadius: 15, border: '1px #D0CECE solid'}}>
        <img src={search} style={{height : 24, left: 16, position:'absolute', top : 10}}></img>
        <div style={{width: 70, right: 10, top:11, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>+</div>
        <div style={{right: 30, top:10, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>필터</div>
    </div>
  );
};

export default SearchBar;
