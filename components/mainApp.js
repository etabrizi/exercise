
import React, { Component } from 'react';
import Excercise from './excercise';
import Search from './search';
import Container from './container';
import Heading from './heading';
import Controls from './controls'


type State = {
    work: Array<exercises>,
    step: string,
    counter: number,
    gender: boolean,
    infoToggle: boolean,
    searchToggle: boolean,
    searchTerm: string,
    imageStatus: string,
    userSearchActive: boolean,
    userSearchFound: {
        name: string,
        transcript: string,
        female: string,
        male: string
    }
}


class MainApp extends Component<Props, State> {

    state = {
        work: this.props.work.exercises,
        step: 'start',
        counter: 1,
        gender: true,
        infoToggle: true,
        searchToggle: true,
        searchTerm: '',
        imageStatus: '',
        userSearchActive: false,
        userSearchFound: {
            name: '',
            transcript: '',
            female: '',
            male: ''
        }
    };

    toggleGender = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({
            gender: !this.state.gender
        })
    }

    closeAll = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({
            searchToggle: true,
            infoToggle: true
        })
    }

    toggleSearch = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({
            searchToggle: false,
            infoToggle: true
        })
    }

    toggleInfo = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({
            searchToggle: true,
            infoToggle: false
        })
    }

    counterIncrease = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({
            userSearchActive: false
        })

        if (this.state.counter === (this.state.work.length - 1)) {
            this.setState({ counter: 0 })
        } else {
            this.setState({ counter: this.state.counter + 1 })
        }
    }

    counterDecrease = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (this.state.counter === 0) {
            this.setState({ counter: (this.state.work.length - 1) })
        } else {
            this.setState({ counter: this.state.counter - 1 })
        }
    }


    getSearchValue = (event: SyntheticEvent<HTMLInputElement>) => {
        var search = event.target.value;
        this.setState({ searchTerm: search })
    }

    updateCard = (event: SyntheticEvent<HTMLInputElement>) => {

        var exerciseSelected = event.currentTarget.innerHTML;

        var userSearch = this.state.work.filter((item: Object) => {
            return item.name === exerciseSelected
        });

        if (userSearch) {
            this.setState({
                userSearchActive: true,
                infoToggle: true,
                searchToggle: true,
                userSearchFound: {
                    name: userSearch[0].name,
                    transcript: userSearch[0].transcript,
                    female: { image: userSearch[0].female.image },
                    male: { image: userSearch[0].male.image }
                }
            })
        }
    }

    render() {

        const app = this.state.work.length > 0 ? (

            <div>
                <Excercise
                    transcript={this.state.userSearchActive ? this.state.userSearchFound.transcript : this.state.work[this.state.counter].transcript}
                    infoToggle={this.state.infoToggle} title={this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name}
                />
                <Search searchToggle={this.state.searchToggle} excercises={this.state.work} updateCard={this.updateCard} searchTerm={this.state.searchTerm} getSearchValue={this.getSearchValue} />
                <Heading searchToggle={this.state.searchToggle} infoToggle={this.state.infoToggle} title={this.state.userSearchActive ? this.state.userSearchFound.name : this.state.work[this.state.counter].name} />
                <Controls closeAll={this.closeAll} searchToggle={this.state.searchToggle} toggleSearch={this.toggleSearch} toggleGender={this.toggleGender} gender={this.state.gender} counterDecrease={this.counterDecrease} counterIncrease={this.counterIncrease} toggleInfo={this.toggleInfo} infoToggle={this.state.infoToggle} />
            </div>
        ) : (
                <p>Sorry Unable to load application content - Please try again later.</p>
            );

        return (
            <Container excercises={this.state.work} searchToggle={this.state.searchToggle} infoToggle={this.state.infoToggle} img={this.state.userSearchActive ? this.state.userSearchFound[this.state.gender ? 'male' : 'female'].image : this.state.work[this.state.counter][this.state.gender ? 'male' : 'female'].image}>

                {this.state.step === 'start' && app}
                {this.state.imageStatus}

            </Container>
        );
    }
}

export default MainApp;
