// import React, { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch(
            'https://api.dino.com.br/v2/news/'
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
        console.log(items)

        if(!isLoaded) {
            return <div> Loading... </div>
        } else {
            return (
                <div>
                    <ul>
                        {
                            items.Items.map((item) => (
                                <li>
                                    <h1 className='title'>{item.Title}</h1>
                                    <img src={item.Image || ''} alt='' />
                                    <Link to={`/news/${item.$id}`}><h2 className='summary'> {item.Summary || 'No summary available'} </h2></Link>
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

export default News



// const SearchApi = () => {

//     useEffect(() => {
//         fetchItems()
//     }, []);

//     const [ items, setItems ] = useState([]);

//     const fetchItems = async () => {
//         const data = await fetch(
//             'https://jsonplaceholder.typicode.com/posts'
//             // 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
//         );
//         const items = await data.json();
//         console.log(items[0].title);
//         setItems(items);
//     }
//     console.log(items[0].title)

//     return (
//         <div>
//             {
//                 <h1>{items[0].title}</h1>
//             }
//         </div>
//     )
// }

// export default SearchApi