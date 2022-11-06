import {Col, Row} from "antd";
import "../../../translation/i18n";
import {useTranslation} from "react-i18next";
import "./product.scss";
function Privilege() {
    const [t] = useTranslation();
    return (
        <Col className="privilege-wrapper" span={24}>
            <Row className="privilege-label">{t("Privilege")}</Row>
            <Row style={{margin: "10px 20px"}}>
                <ul>
                    <li className="privilege-content">
                        {t(
                            "Accept interest installment payment within 12 months"
                        )}
                    </li>
                    <li className="privilege-content">
                        {t("Warranty up to up to 365 days")}.
                    </li>
                    <li className="privilege-content">
                        {t("Pet health insurance up to 1.000.000 VND")}
                    </li>
                    <li className="privilege-content">
                        {t("Free shipping nationally")}
                    </li>
                    <li className="privilege-content">
                        {t("Discount 50% when purchasing 2nd pet")}
                    </li>
                    <li className="privilege-content">
                        {t(
                            "Discount 20% for spa and grooming services - Only for HaNoi citizen"
                        )}
                    </li>
                </ul>
            </Row>
        </Col>
    );
}

export default Privilege;
