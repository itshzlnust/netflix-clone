import BrowseLayout from "@layouts/BrowseLayout"
import MovieList from "@mods/BrowsePage/MovieList"
import Jumbotron from "@mods/BrowsePage/Jumbotron"
import Modal from "@mods/BrowsePage/Modal"
import SearchMovies from "@mods/BrowsePage/SearchMovies"
import { useAtom } from "jotai"
import { searchMoviesAtom } from "@/jotai/atoms"

function Browse() {
    const [searchQuery] = useAtom(searchMoviesAtom)

    return (
        <BrowseLayout>
            {searchQuery ? <SearchMovies /> : (
                <>
                    <Jumbotron />
                    <MovieList title={"Now Playing"} moviesType={"now_playing"} />
                    <MovieList title={"Popular Movies"} moviesType={"popular"} />
                    <MovieList title={"Top Rated Movies"} moviesType={"top_rated"} />
                </>
            )}
            <Modal />
        </BrowseLayout>
    )
}

export default Browse