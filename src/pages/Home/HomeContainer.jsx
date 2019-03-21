import React, { Component } from 'react'
import Home from './components/Home.jsx'
import Categories from '../../components/Categories/Categories.jsx'
import Header from '../../components/Header/Header.jsx'
import ModalContainer from '../../components/widgets/ModalContainer.jsx'
import Modal from '../../components/widgets/Modal.jsx'
import HandleErrorContainer from '../../components/errors/HandleErrorContainer.jsx'
import VideoPlayerContainer from '../../components/VideoPlayer/VideoPlayerContainer.jsx'
import { connect } from 'react-redux'
import { List as list } from 'immutable'

class HomeContainer extends Component {
    state = {
        modalVisibility: false
    }
    handleOpenModal = (movie) => {
        this.setState({
            modalVisibility: true,
            movie: movie
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisibility: false
        })
    }
    render() {
        return(
            <HandleErrorContainer>
                <Home>
                    <Header />
                    <Categories 
                        categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.state.modalVisibility &&
                        <ModalContainer>
                            <Modal
                                handleCloseModal={this.handleCloseModal}
                            >
                                <VideoPlayerContainer 
                                    autoplay={true}
                                    src={this.state.movie.src}
                                    title={this.state.movie.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </Home>
            </HandleErrorContainer>
        )
    }
}

function mapStateToProps(state, props) {
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    })
    let results = list()
    const search = state.get('data').get('search')
    if (search) {
        const movieList = state.get('data').get('entities').get('movie')
        results = movieList.filter((item) => {
            return item.get('title').toLowerCase().includes(search.toLowerCase())
        }).toList()
    }
    return {
        categories: categories,
        search: results
    }
}

export default connect(mapStateToProps)(HomeContainer)