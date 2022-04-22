import { useRouter } from "next/router"
import React from "react"
import Button from "../components/Button/Button"

const MainPage = () => {
    const router = useRouter()

    const onChooseActionClick = (path: string) => {
        router.push(path)
    }


    return (
        <div className="container" >
            <h1>Choose your action</h1>

            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
                <Button theme="fill" onClick={() => onChooseActionClick('/payments')}>List of User`s payments</Button>
                <Button theme="fill" onClick={() => onChooseActionClick('/recurring_payments')}>Recurring payments</Button>
                <Button theme="fill" onClick={() => onChooseActionClick('/accounts')}>List of User`s accounts</Button>
                <Button theme="fill" onClick={() => onChooseActionClick('/loans')}>Choose loan</Button>
            </div>

        </div >
    );
};

export default MainPage;