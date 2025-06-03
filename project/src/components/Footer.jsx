import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <div>Something went wrong in the footer.</div>;
        }
        return this.props.children;
    }
}

const Footer = () => {
    const hours = [
        {
            id: 1,
            day: "Monday",
            time: "9:00 AM - 11:00 PM",
        },
        {
            id: 2,
            day: "Tuesday",
            time: "12:00 PM - 12:00 AM",
        },
        {
            id: 3,
            day: "Wednesday",
            time: "10:00 AM - 10:00 PM",
        },
        {
            id: 4,
            day: "Thursday",
            time: "9:00 AM - 9:00 PM",
        },
        {
            id: 5,
            day: "Monday",
            time: "3:00 PM - 9:00 PM",
        },
        {
            id: 6,
            day: "Saturday",
            time: "9:00 AM - 3:00 PM",
        },
    ];

    return (
        <ErrorBoundary>
            <footer className={"container"}>
                <hr />
                <div className="content">
                    <div>
                        <img src="/logo.png" alt="logo" className="logo-img"/>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/appointment"}>Appointment</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Hours</h4>
                        <ul>
                            {hours.map((element) => (
                                <li key={element.id}>
                                    <span>{element.day}</span>
                                    <span>{element.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                    </div>
                </div>
            </footer>
        </ErrorBoundary>
    );
};

export default Footer;
