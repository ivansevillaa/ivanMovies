import React, { Component } from 'react'
import Home from './components/Home.jsx'
import Categories from '../../components/Categories/Categories.jsx'
import Header from '../../components/Header/Header.jsx'
import ModalContainer from '../../components/widgets/ModalContainer.jsx'
import Modal from '../../components/widgets/Modal.jsx'
import HandleErrorContainer from '../../components/errors/HandleErrorContainer.jsx'
import VideoPlayerContainer from '../../components/VideoPlayer/VideoPlayerContainer.jsx'

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
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
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

export default HomeContainer