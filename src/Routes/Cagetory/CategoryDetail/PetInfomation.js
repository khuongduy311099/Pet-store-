import {isContentEditable} from "@testing-library/user-event/dist/utils";
import {Button, Col, Row} from "antd";
import {useState} from "react";
import {Link} from "react-router-dom";

import "../category.scss";

function PetInformation({information}) {
    information = [
        {
            title: "THÔNG TIN VỀ CHÓ PUG MẶT XỆ",
            content: {
                desc1: "Pug là giống chó mặt xệ nổi tiếng xuất hiện khá lâu đời từ Trung Quốc. Được mang đến châu Âu và bắt đầu phát triển rộng rãi vào thế kỷ 16. Chúng trở thành thú cưng rất được yêu thích trong Hoàng gia, đặc biệt là ở Anh và Hà Lan. Năm 1885, chó Pug được Hiệp hội AKC chính thức công nhận là một giống chó riêng. Từ thế kỷ 19 cho đến nay, dòng chó quý tộc này ngày càng phổ biến, được xếp vào top những giống chó yêu chuộng nhất thế giới.",
                img1: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-pug-mat-xe-7-375x490.jpg",
            },
        },
        {
            title: "LÝ DO NÊN NUÔI PUG MẶT XỆ",
            content: {
                feature1: "Mặt Xê Đặc Trưng",
                desc1: "Khuôn mặt biểu cảm độc đáo với rất nhiều nếp nhăn của loài chó này khiến những người không yêu thích chó mèo cũng phải ấn tượng ngay trong lần đầu tiên tiếp xúc. Chúng được xếp vào Top 1 giống chó cảnh có khuôn mặt xệ nhất trong tất cả các giống chó mặt xệ.",
                img1: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-pug-mat-xe-1.png",
                feature2: "Dễ Gần, Cá Tính",
                desc2: "Chó Pug sống tình cảm, gần gũi và thích quấn quýt chủ. Chúng yêu thích trẻ em, sống hòa đồng với mọi người và các loài vật nuôi khác..",
                img2: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-pug-mat-xe-2.jpg",
                feature3: "Thông Minh, Cá Tính",
                desc3: "Dòng chó này cực kì thông minh, có phần ranh mãnh & “đanh đá” dù chúng chỉ có kích thước khiêm tốn. Chúng luôn vui vẻ, ồn ào và đặc biệt hiếu động. Đó là lý do chó Pug trở thành người bạn lý tưởng khiến cuộc sống của mọi gia đình trở nên sôi động hơn.",
                img3: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-pug-mat-xe-3-1024x854.jpg",
                feature4: "Dễ Huấn Luyện",
                desc4: "Chó Pug cực kỳ thông minh và lanh lợi. Bạn sẽ nhận thấy điều đó trong quá trình huấn luyện giống chó này. Pug nhận thức nhanh, ham học hỏi và có khả năng hoàn thành các bài tập huấn luyện một cách dễ dàng.",
                img4: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-pug-mat-xe-8-1536x1024.jpg",
            },
        },
        {
            title: "ĐẶC ĐIỂM CHÓ PUG MẶT XỆ",
            content: {
                desc1: "Chó Pug có kích thước trung bình, sở hữu body “vuông”, gọn gàng với những bó cơ săn chắc. Chiều cao khiêm tốn khoảng 25 -35cm tính đến vai, cân nặng từ 6,5 – 10kg khi trưởng thành.",
                img1: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-pug-mat-xe-1-375x409.jpg",
                desc2: "Chó Pug có 2 màu lông chính: Vàng và đen. Khung xương rộng, chân ngắn, cổ to và dày; Cùng với bộ lông mỏng sát da nên mất rất ít thời gian để chăm sóc",
            },
        },
        {
            title: "LƯU Ý KHI CHỌN MUA CHÓ PUG",
            content: {
                desc1: "Ngoại hình tổng thể: Chọn những bé có thân hình vuông vức, cơ thể săn chắc, dáng đi vững vàng.",
                desc2: "Đầu và mặt: Phần đầu lớn, nhìn ngang có hình vòng cung, không lõm hay gãy. Mặt có nhiều nếp nhăn dãn dài và xếp chồng lên nhau. Mõm ngắn, mũi tẹt, mắt tròn to, sẫm màu.",
                desc3: "Phần cổ: Lớn, ngực to ngang hơn so với hông. Đuôi nhỏ, cuộn lên phía trên lưng. Các chi song song và thẳng, chi sau nhỏ hơn chi trước.",
                desc4: "Lông: Ngắn sát cơ thể, mềm và óng mượt.",
                desc5: "(*) Lưu ý: Chỉ mua những bé có tuổi đời > 50 ngày tuổi, đã được tiêm phòng ít nhất 1 mũi & tẩy giun đầy đủ. Yêu cầu bên bán cung cấp đầy đủ hợp đồng mua bán, sổ theo dõi sức khỏe, giấy tờ chứng minh nguồn gốc xuất xứ, chính sách bảo hành trong từng trường hợp cụ thể.",
                img5: "https://azpet.b-cdn.net/wp-content/uploads/2021/06/cho-pug-mat-xe-5.jpg",
            },
        },
        {
            title: "LƯU Ý KHI NUÔI DẠY",
            content: {
                desc1: "Pug là giống chó dễ nuôi, không kén ăn. Chúng ăn nhiều và lười vận động nên dễ bị béo phì gây ra nhiều bệnh nguy hiểm. Bạn cần kiểm soát lượng thức ăn và thành phần dinh dưỡng cung cấp cho chúng mỗi bữa để đảm bảo sức khỏe.",
                desc2: "Loài chó này hợp sống trong điều kiện thời tiết ôn hòa, chúng chịu nóng, lạnh rất kém. Nếu nuôi chó ở Việt Nam, lưu ý bố trí cho chúng không gian sống thoáng mát, sạch sẽ. Mùa hè tránh cho chó chơi ngoài nắng, mùa lạnh thì cần giữ ấm cẩn thận.",
                desc3: "Huấn luyện chó ngay từ nhỏ lúc mới bắt về. Với những bài tập cơ bản, như ngồi xuống, nằm, đi vệ sinh đúng nơi quy định,… Đồng thời luyện cho chúng thói quen sinh hoạt, ăn uống vào khung giờ hợp lý.",
                desc4: "Cần dẫn chó ra ngoài đi dạo, tập thể dục khoảng 15 – 30 phút mỗi ngày. Nên đi vào sáng sớm hoặc chiều tối mát mẻ, tránh cho chó hoạt động lâu vào những thời điểm quá nóng hoặc quá lạnh. Cũng không nên để chó nằm quá nhiều, lười vận động dễ khiến chúng chây ì, thiếu linh hoạt và dễ bị béo phì.",
            },
        },
    ];

    const [moreContent, setMoreContent] = useState(false);

    const handleShowMore = () => {
        setMoreContent(!moreContent);
    };
    return (
        <div style={{transition: "all 0.3s"}}>
            <Row
                style={{marginTop: "50px", marginLeft: "50px"}}
                align="center"
                justify="center"
            >
                <Col span={14}>
                    <Row
                        id={information[0]?.title}
                        className="information-title"
                    >
                        <h2>{information[0]?.title}</h2>
                    </Row>
                    <Row className="information-desc breakpoint-show-content">
                        {information[0]?.content?.desc1}
                    </Row>
                    {moreContent &&
                        information.map((item, index) =>
                            index === 0 ? (
                                <div style={{display: "none"}}></div>
                            ) : (
                                <div style={{marginBottom: "10px"}}>
                                    <Row
                                        id={item?.title}
                                        className="information-title"
                                    >
                                        <h2>{item?.title}</h2>
                                    </Row>
                                    {!!item?.content?.feature1 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature1}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc1 ? (
                                        <Row className="information-desc">
                                            {item?.content.desc1}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img1 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img1}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature2 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature2}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc2 ? (
                                        <Row className="information-desc">
                                            {item?.content.desc2}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img2 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img2}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature3 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature3}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc3 ? (
                                        <Row className="information-desc">
                                            {item?.content.desc3}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img3 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img3}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature4 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature4}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc4 ? (
                                        <Row className="information-desc">
                                            {item?.content.desc4}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img4 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img4}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.feature5 ? (
                                        <Row className="information-desc">
                                            <strong>
                                                {item?.content.feature5}
                                            </strong>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.desc5 ? (
                                        <Row className="information-desc">
                                            {item?.content.desc5}
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                    {!!item?.content?.img5 ? (
                                        <Row className="information-img-wrapper">
                                            <img
                                                className="information-img"
                                                src={item?.content?.img5}
                                                alt={item.name}
                                            ></img>
                                        </Row>
                                    ) : (
                                        <div style={{display: "none"}}></div>
                                    )}
                                </div>
                            )
                        )}
                </Col>
                <Col className="appendix" span={5} offset={3}>
                    <Row className="appendix-title">Phụ lục</Row>
                    {information.map((item, i) => (
                        <Row>
                            <a
                                className="appendix-inner"
                                href={`#${item.title}`}
                            >
                                {i + 1}. {item.title}
                            </a>
                        </Row>
                    ))}
                </Col>
            </Row>
            <Row align="center" justify="center">
                <Button
                    size="large"
                    style={{
                        fontSize: "22px",
                        width: "fit-content",
                        height: "fit-content",
                        borderRadius: "10px",
                        backgroundColor: "#b90000",
                        color: "white",
                    }}
                    onClick={handleShowMore}
                >
                    {!moreContent ? "Xem Thêm" : "Thu Gọn"}
                </Button>
            </Row>
        </div>
    );
}

export default PetInformation;
