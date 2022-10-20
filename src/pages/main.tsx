import { useRouter } from "next/router"
import React from "react"
import Button from "../components/Button/Button"
import NavBar from "../components/NavBar/NavBar"



const MainPage = () => {
    const router = useRouter()

    const onChooseActionClick = (path: string) => {
        router.push(path)
    }

    return (
        <div className="container" >
            <NavBar />


            <div style={{ display: 'flex', alignContent: 'center', flexWrap: 'wrap', flexDirection: 'column' }}>
                <h1>Choose your action</h1>

                <ul style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, listStyle: 'none', padding: 0 }}>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/payments')}>List of User`s payments</Button>
                    </li>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/recurring_payments')}>Recurring payments</Button>
                    </li>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/accounts')}>List of User`s accounts</Button>
                    </li>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/loans')}>Choose loan</Button>
                    </li>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/round_ups')}>Round Ups</Button>
                    </li>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/transactions')}>Transactions</Button>
                    </li>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/recommendations')}>Recommendations</Button>
                    </li>
                    <li>
                        <Button theme="fill" onClick={() => onChooseActionClick('/liabilities')}>Liabilities</Button>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default MainPage;