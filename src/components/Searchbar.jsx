import { GoSearch } from "react-icons/go"


const Searchbar = () => {
  return (
    <div className='search-bar p-2 rounded d-flex align-items-center'>
        <input type="text" placeholder="Search Song, Artist" className="w-100 text-light"/>
        <GoSearch/>
    </div>
  )
}

export default Searchbar