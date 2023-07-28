import React from 'react'

const NotAuthorized = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#111",
            color: "#fff"
        }}>
            <h1 style={{
                fontSize: "15rem ",
                letterSpacing: "1rem",
            }}>401
                <sub style={{
                    fontSize: "6rem",
                    fontWeight: "normal",
                    letterSpacing: "0.5rem",
                }}>
                    ERROR
                </sub>
            </h1>
            <h2 style={{
                fontSize: "2.3rem",
                wordSpacing: "0.3rem",
                marginTop: "2rem",
                fontWeight: "normal",
            }}>Sorry , You are not Authenticated</h2>
        </div>
    )
}

export default NotAuthorized