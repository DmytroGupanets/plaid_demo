import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getAccount } from "../api/api";
import Button from "../components/Button/Button";

const MainPage = () => {
    const [isDisable, setIsDisable] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onChooseActionClick = (path: string) => {
        router.push(path)
    }

    const getUserAccount = async () => {
        setLoading(true);
        const account = await getAccount()
        if (account) setIsDisable(true)
        setLoading(false)
    }


    useEffect(() => {
        getUserAccount()
    }, [])


    return (
        <div className="container" >
            <h1>Choose your action</h1>
            {loading ? <p>Loading...</p> :
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
                    {isDisable &&
                        <p style={{ fontSize: '12px', color: 'red', opacity: 0.7 }}>Checking account already connected!</p>}
                    <Button theme="fill" isDizActiveButton={isDisable} onClick={() => onChooseActionClick('/connect_checking')}>Connect checking account</Button>
                    <Button theme="fill" onClick={() => onChooseActionClick('/loans')}>Choose loan</Button>
                </div>
            }
        </div >
    );
};

export default MainPage;