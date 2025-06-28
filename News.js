import React, { Component } from 'react';
import NewsItems from './NewsItems';

export class News extends Component {
    constructor() {
        // console.log(`constructor is called`)
        super();
        this.state = {
            articles: [],
            page: 1,
        };
    }
    async componentDidMount() {
        // console.log(`cdm`);
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=89f25202b24a4b058f83ed8c145a7798";
        let data = await fetch(url);
        let parseData = await data.json();
        //  console.log(parseData);
        this.setState({ articles: parseData.articles })
    }

    handlePreClick = async () => {
        // console.log("handlepreclick")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=89f25202b24a4b058f83ed8c145a7798&page=${this.state.page}`;
        let data = await fetch(url);
        let parseData = await data.json();
        //  console.log(parseData);
        this.setState({ articles: parseData.articles, page: this.state.page })


    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=89f25202b24a4b058f83ed8c145a7798&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        //  console.log(parseData);
        this.setState({ articles: parseData.articles, page: this.state.page + 1 })

    }
    render() {
        //  console.log(`render method is called`)
        return (
            <div>
                <h1>News Components</h1>
                <div className='container'>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            // console.log(ele)
                            return (
                                <div className='col-md-4' key={element.url}>
                                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>)
                        })}
                    </div>

                    <div className='container d-flex justify-content-between'>
                        <button
                            className='btn btn-primary'
                            disabled={this.state.page <= 1}
                            onClick={this.handlePreClick}>Previous
                        </button>
                        <button
                            className='btn btn-primary'
                            onClick={this.handleNextClick}>Next
                        </button>


                    </div>
                </div>
            </div>
        )
    }
}

export default News
