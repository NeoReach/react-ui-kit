import React from 'react';
import './SearchComponent.scss';
import { FunctionTypeStringToVoid } from '../../../../../../CommonTypes/BaseViewModel';
type SearchComponentProps = {
    onChange: FunctionTypeStringToVoid;
};
declare const SearchComponent: React.FC<SearchComponentProps>;
export default SearchComponent;
