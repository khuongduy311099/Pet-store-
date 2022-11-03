import {Col, Row} from "antd";
import CagetoryItem from "./cagetoryItem";
import FilterBox from "./filterBox";

function Cagetory() {
    const listItem = [
        {
            name: "Pug",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Pug.jpg",
        },
        {
            name: "Afghan Hound",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Afghan-Hound.jpg",
        },
        {
            name: "Akita",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Akita.jpg",
        },
        {
            name: "Alabai",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Alabai.jpg",
        },
        {
            name: "Alaska",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Alaska.jpg",
        },
        {
            name: "American Bully",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/American-Bully.jpg",
        },
        {
            name: "Australian Shepherd",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Australian-Shepherd.jpg",
        },
        {
            name: "Bắc Hà",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Bac-Ha.jpg",
        },
        {
            name: "Bắc Kinh",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Bac-Kinh.jpg",
        },
        {
            name: "Basenji",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Basenji.jpg",
        },
        {
            name: "Basset Hound",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Basset-Hound.jpg",
        },
        {
            name: "Beagle",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Beagle.jpg",
        },
        {
            name: "German Becgie",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Becgie-Duc.jpg",
        },
        {
            name: "Malinos Becgie",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Becgie-Ha-Lan.jpg",
        },
        {
            name: "Bichon Frise",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Bichon.jpg",
        },
        {
            name: "Border Collie",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Border-Collie.jpg",
        },
        {
            name: "Boston Terrier",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Boston-Terrier.jpg",
        },
        {
            name: "Boxer",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Boxer.png",
        },
        {
            name: "English Bull Dog",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Bull-Anh.jpg",
        },
        {
            name: "French Bull Dog",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Bull-Phap.jpg",
        },
        {
            name: "Bull Terrier",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Bull-Terrier.jpg",
        },
        {
            name: "Pug",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Pug.jpg",
        },
        {
            name: "Caucasian Shepherd",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Caucasian-Shepherd.jpg",
        },
        {
            name: "Cavalier King Charles Spaniel",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Cavalier-King-Charles-Spaniel.jpg",
        },
        {
            name: "Chihuahua",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Chihuahua.jpg",
        },
        {
            name: "Chinese Crested",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Chinese-Crested.jpg",
        },
        {
            name: "Chow Chow",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Chow-Chow.jpg",
        },
        {
            name: "Cocker Spaniel",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Cocker-Spaniel.jpg",
        },
        {
            name: "Pembroke Welsh Corgi",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi.jpg",
        },
        {
            name: "Dalmatian",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Dalmatian.jpg",
        },
        {
            name: "Doberman",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Doberman.jpg",
        },
        {
            name: "German Pinscher",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/German-Pinscher.jpg",
        },
        {
            name: "Golden Retriever",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Golden-Retriever.jpg",
        },
        {
            name: "Great Dane",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Great-Dane.jpg",
        },
        {
            name: "H'mong Cộc",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Hmong.jpg",
        },
        {
            name: "Husky",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Husky.jpg",
        },
        {
            name: "Icelandic Sheepdog",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Icelandic-Sheepdog.jpg",
        },
        {
            name: "Irish Setter",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Irish-Setter.jpg",
        },
        {
            name: "Samoyed",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Samoyed.jpg",
        },
        {
            name: "Shiba",
            img: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/Shiba.jpg",
        },
    ];
    return (
        <Col span={24}>
            <Row
                style={{
                    alignItem: "center",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <FilterBox />
            </Row>
            <Row
                style={{
                    alignItem: "center",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1%",
                }}
            >
                <Row align="center" style={{width: "86%", marginTop: "10px"}}>
                    {listItem.map((item) => (
                        <CagetoryItem item={item} />
                    ))}
                </Row>
            </Row>
        </Col>
    );
}

export default Cagetory;
