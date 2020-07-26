import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './imageList';
import ReactPaginate from 'react-paginate';
import './index.css';

class App extends React.Component {
    state = { images: [], pageCount: 6, pageSelected: 1, term: '', pagination: false };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term, per_page: 15, page: this.state.pageSelected ? this.state.pageSelected : 1 },
            headers: {
                Authorization: `Client-ID cIaHLWm6oecKVQS3ddmRAmCjYR3_dI3SVEuYkVdRa5c`
            }
        })

        this.setState({ images: response.data.results, term: term, pagination:true })
    }

    handlePageClick = (data) => {
        console.log("data clicked => ", data);

        this.setState({
            pageSelected: data.selected + 1
        }, () => this.onSearchSubmit(this.state.term))
    }

    render() {
        return (
            <div>
                <SearchBar userSubmit={this.onSearchSubmit} />
                <span style={{ marginBottom: '20px', fontSize: '17px', display: 'block' }}>
                    <span style={{ fontWeight: '900' }}>Found: </span>{this.state.images.length} images
                </span>
                {
                    this.state.pagination ?
                        <div className='pagination-controls'>
                            <div className="commentBox">
                                <ReactPaginate
                                    previousLabel={'<<'}
                                    nextLabel={'>>'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={'pagination'}
                                    subContainerClassName={'pages pagination'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </div>
                        : null
                }
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }

}

export default App;
