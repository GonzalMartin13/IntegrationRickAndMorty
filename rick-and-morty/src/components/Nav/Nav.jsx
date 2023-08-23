import SearchBar from "../SearchBar/SearchBar";

export default function Nav ({onSearch}) {

    return (
        <div>
            <img src="logoRyM.jpg" alt="LogoRickAndMorty" />
            <SearchBar onSearch = {onSearch}/>
        </div>
    );
}