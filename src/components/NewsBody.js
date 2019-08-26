import React from 'react'
import { Link } from 'react-router-dom'
import { removeHTMLTags } from '../helpers/helpers'

class NewsBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch(
            `https://api.dino.com.br/v2/news/`
        )
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
    }

    render() {

        const { isLoaded, items } = this.state;
        console.log()

        if(!isLoaded) {
            return <div className='loading'> Loading... </div>
        } else {
            return (
                <div className='body-news'>
                    <ul>
                        {
                            //Alterar para o método Filter()
                            items.Items.map((item) => (
                                <li>
                                    {
                                        item.$id === this.props.match.params.id ? 
                                        <h1 className='title'>{item.Title}</h1> : ''
                                    }
                                    <hr/>

                                    {
                                        item.$id === this.props.match.params.id ? 
                                        <h3 className='body'>{removeHTMLTags(item.Body)}</h3> : ''
                                    }
                                    <hr/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default NewsBody
