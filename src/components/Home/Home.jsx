import React from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import Card from "../Card/Card";

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                Home
                <Card></Card>
                <NewsLetter></NewsLetter>
            </section>
        );
    }
}

export default Home;