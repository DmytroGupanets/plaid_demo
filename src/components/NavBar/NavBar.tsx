import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'react-bootstrap'
import { NavBarStyled } from './NavBarStyled'

const NavBar = () => {
    const router = useRouter()

    const buttons = [
        {
            id: 'main',
            label: 'Main',
            link: '/main'
        },
        {
            id: 'loans',
            label: 'Loans',
            link: '/loans'
        },
        {
            id: 'accounts',
            label: 'Accounts',
            link: '/accounts'
        },
        {
            id: 'payments',
            label: 'Payments',
            link: '/payments'
        },
        {
            id: 'recurrin_payments',
            label: 'Reccuring payments',
            link: '/recurring_payments'
        },
        {
            id: 'round-ups',
            label: 'Round Ups',
            link: '/round_ups'
        },
        {
            id: 'transactions',
            label: 'Transactions',
            link: '/transactions'
        },
        {
            id: 'recommendations',
            label: 'Recommendations',
            link: '/recommendations'
        },
        {
            id: 'logout',
            label: 'Logout',
            link: '/'
        },
    ]



    const onChooseActionClick = (path: string) => {
        router.push(path)
    }

    return <NavBarStyled>
        {buttons.map(btn => (<Button className='button' key={btn.id} onClick={() => onChooseActionClick(btn.link)}>{btn.label}</Button>))}
    </NavBarStyled>


}

export default NavBar