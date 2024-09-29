import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotification("");

        if (!name) {
            setNotification((prev) => prev + "Name is required.<br />");
        }
        if (!email) {
            setNotification((prev) => prev + "Email is required.<br />");
        } else if (!validateEmail(email)) {
            setNotification((prev) => prev + "Invalid email address.<br />");
        }
        if (!message) {
            setNotification((prev) => prev + "Message is required.<br />");
        }

        if (name && validateEmail(email) && message) {
            alert("Form submitted successfully!");
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <section id="contact" className="content-section">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
            <div dangerouslySetInnerHTML={{ __html: notification }} />
        </section>
    );
};

export default Contact;
