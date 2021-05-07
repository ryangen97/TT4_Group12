import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidebar__link'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidebar__link'
    },
    {
        title: 'Transaction History',
        path: '/transaction-history',
        icon: <FaIcons.FaRegMoneyBillAlt/>,
        cName: 'sidebar__link'
    },
    {
        title: 'Send Money',
        path: '/add-transaction',
        icon: <FaIcons.FaRegMoneyBillAlt/>,
        cName: 'sidebar__link'
    }
]