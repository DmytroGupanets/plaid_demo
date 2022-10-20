import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllLoans } from "../api/api";
import Button from '../components/Button/Button';
import LoanCard from "../components/LoanCard/LoanCard";
import NavBar from "../components/NavBar/NavBar";


export default function Home() {
    const [loans, setLoans] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const router = useRouter();

    const getLoans = async () => {
        setLoading(true);
        const loansData = await getAllLoans()
        setLoans(loansData)
        setLoading(false);
    }

    useEffect(() => { getLoans() }, []);

    const onLoanClick = (loanId: string, loan) => {
        localStorage.setItem('loan_id', loanId)
        localStorage.setItem('loan', loan)
        router.push('/initiate_payment')
    }

    return (
        <div className={'container'}>
            <NavBar />
            <h1>User`s loans</h1>
            <p>Choose loan you wish to initiate payment</p>
            {isLoading ?
                <p>Loading...</p>
                :
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {loans.length && loans.map(loan => (
                        <li key={loan.id} >
                            <LoanCard loan={loan} onLoanClick={onLoanClick} />
                        </li>
                    ))}
                </ul>
            }
        </div >
    )
}