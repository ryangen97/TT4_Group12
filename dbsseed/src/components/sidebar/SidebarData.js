import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidebar__link active_menu_link'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <ImIcons.ImProfile />,
        cName: 'sidebar__link'
    },
    {
        title: 'Balance',
        path: '/balance',
        icon: <FaIcons.FaMoneyBillWave />,
        cName: 'sidebar__link'
    },
    {
        title: 'Transaction',
        path: '/transaction',
        icon: <FaIcons.FaRegMoneyBillAlt/>,
        cName: 'sidebar__link'
    }
]