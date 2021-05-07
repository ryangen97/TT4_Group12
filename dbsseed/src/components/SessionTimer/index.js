import React, { useEffect, useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import { useAuth } from '../../contexts/AuthContext'
import { Modal, Button } from 'react-bootstrap'
function IdleTimerContainer({ children }) {
    const { user, logout } = useAuth()
    const idleTimerRef = useRef(null)
    const [show, setShow] = useState(false)
    const sessionTimeoutRef = useRef(null)

    const onIdle = () => {
        console.log('User is idle')
        setShow(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }

    const handleClose = () => {
        setShow(false)
    }

    const stayActive = () => {
        setShow(false)
        clearTimeout(sessionTimeoutRef.current)
    }

    const logOut = () => {
        setShow(false)
        logout()
        clearTimeout(sessionTimeoutRef.current)

    }

    if (!user.isAuthenticated || user.isAuthenticated == undefined)
        return (<></>)


    return (
        <>
            {children}
            <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle} />
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header>
                    <Modal.Title>You've been inactive for a while!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You will be logged out soon</Modal.Body>
                <Modal.Footer>
                    <Button onClick={logOut}>Log me out</Button>
                    <Button onClick={stayActive}>Keep me signed in </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default IdleTimerContainer
