const React = require('react');
import ApiService from '../services/api';

class HomePage extends React.Component {

    componentDidMount() {
        ApiService.getCats().then((res) => {
            console.log("Response: ", res)
        });
        
    }

    render() {
        return (
            <div className='container'>
                <p>Hi This is the hompage</p>
            </div>
        )
    }
}

export default HomePage;