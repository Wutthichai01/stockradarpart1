import {useState, useEffect} from 'react'
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import Footer from './Components/Footer.js';

function App() {
    const [data, setData] = useState([])
    const [searchBox, setSearchBox] = useState("")
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        fetch('https://stockradars.co/assignment/data.php')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    function searchBoxChange(e) {
        const findStockName = e.target.value
        setSearchBox(findStockName)

        const result = data.filter(item => item.N_name.startsWith(findStockName.toUpperCase()))
        setSearchResult(result)
    }

    function stockDataSelector() {
        if (searchResult.length > 0) {
            return searchResult
        } else if (data) {
            return data
        }
    }



    return (
        <div className="container-fluid p-0 bg-black stock-container">
            <Header searchBox={searchBox} searchBoxChange={searchBoxChange}/>
            <main className="mainContent p-4">
                <div className="row bg-black">
                    {
                        stockDataSelector().map((item,index) => {
                            return <div className={'col-md-3 col-sm-6 p-2'} key={index} >
                                <Card border="primary" className="p-0 m-1 stock-list">
                                    <Card.Header className="fw-bold">{item.N_name}</Card.Header>
                                    <Card.Body className={'scrollable'}>
                                        <Card.Title>{item.N_COMPANY_T}</Card.Title>
                                        <Card.Title className="fw-bold">ประเภทธุรกิจ</Card.Title>
                                        <Card.Text>
                                            {item.N_BUSINESS_TYPE_T}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        })
                    }
                </div>

            </main>
            <Footer/>
        </div>
    );
}

export default App;