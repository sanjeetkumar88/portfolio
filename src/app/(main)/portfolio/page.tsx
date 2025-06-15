import React from 'react'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
                <div>
            <h1>Portfolio</h1>          
            <p>Welcome to my portfolio page!</p>
            <p>Here you can find my projects, skills, and contact information.</p>
            <p>Feel free to explore and reach out if you have any questions.</p>
            <p>Thank you for visiting!</p>
        </div>
    </div>
        
    

        )
}

export default Page
