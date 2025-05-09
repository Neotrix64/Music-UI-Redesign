function SearchSection(){
    return(
        <div className="text-white bg-[#181818] h-[88vh] w-full rounded-md mr-3 overflow-y-scroll">
           <div className="content m-4">
            <div className="filter flex gap-5">
                <p>All</p>
                <p>Songs</p>
                <p>Albums</p>
                <p>Artists</p>
                <p>all</p>
            </div>
                <h3 className="text-2xl font-semibold p-5">Best Match Results</h3>
                <div className="flex justify-evenly gap-10">
                    <div className="ml-5 size-52 rounded-md w-96 bg-white">
                </div>
                <div className="ml-5 size-52 rounded-md w-96 bg-white">
                </div>
                </div>
                <div className="flex justify-evenly">
                    <h3 className="text-2xl font-semibold p-5">Songs</h3>
                    <h3 className="text-2xl font-semibold p-5">Albums</h3>
                </div>
                <div className="flex justify-center">
                    <h3 className="text-2xl font-semibold p-5">Artist</h3>
                    <h3 className="text-2xl font-semibold p-5">People</h3>
                </div>
           </div>
        </div>
    );
};

export default SearchSection