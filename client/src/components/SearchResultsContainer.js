import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultsList from "./ResultsList";
import axios from "axios";
import API from "../utils/API";

class SearchResultsContainer extends Component {
    state = {
        search: "",
        results: [],
        saved: {}
    };


    componentDidMount() {
        this.searchNYTimes("art");
    };

    searchNYTimes = query => {
        API.search(query)
        .then(res => 
            // console.log(res.data.response.docs))
        this.setState({results: res.data.response.docs}))
        .catch(err => console.log(err))
        console.log(query)

    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchNYTimes(this.state.search);
    };

    saveArticles = id => {
        let oneArticle = (this.state.results.filter((item)=> {
            return item._id=== id
        }))
        // console.log(oneArticle)
        // this.setState({ saved: oneArticle })
        // console.log(this.state.saved)

        axios.post("api/articles", oneArticle)
        .then((res)=>{
            console.log(res)
            // this.setState({ saved: {}})
        })
        .catch((err)=>{
            console.log(err)
        })
        
    //     this.setState({ saved: oneArticle }, ()=>{
    //     axios.post("api/articles", this.state.saved)
    //     .then((res)=>{
    //         console.log(res)
    //         this.setState({ saved: {}})
    //     })
    // })
    }

    render() {
        console.log(this.state.saved)
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                {/* {this.state.results.map((item) => {
                    
                })} */}
                <ResultsList results={this.state.results} save={this.saveArticles}/>

            </div>
        );
    }
}

export default SearchResultsContainer;