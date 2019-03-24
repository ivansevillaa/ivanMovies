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
import * as actions from '../../actions/index.js'
import { bindActionCreators } from 'redux'

class HomeContainer extends Component {
    handleCloseModal = (event) => {
        this.props.actions.closeModal()
    }
    render() {
        return(
            <HandleErrorContainer>
                <Home>
                    <Header />
                    <Categories 
                        categories={this.props.categories}
                        search={this.props.search}
                    />
                    {
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal
                                handleCloseModal={this.handleCloseModal}
                            >
                                <VideoPlayerContainer 
                                    autoplay={true}
                                    id={this.props.modal.get('movieId')}
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
        search: results,
        modal: state.get('modal')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)