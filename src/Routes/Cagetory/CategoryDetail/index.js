import { Col, Row } from "antd";
import "../../../translation/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CategoryDetailItem from "./CategoryItem";
import PetInformation from "./PetInfomation";
import ContentContainer from "../../../Layout/LayoutComponents/ContentContainer/footer";

import { GlobalContext } from "../../../Context/globalContext";
import { useContext } from "react";
function CategoryDetailItems({ item }) {
  const [t] = useTranslation();
  const globalContext = useContext(GlobalContext);
  return (
    <ContentContainer>
      <Col span={24} style={{ marginTop: "80px" }}>
        <Row
          align="center"
          justify="center"
          style={{
            borderBottom: "10px solid #f2f2f2",
            paddingBottom: "20px",
          }}
        >
          {!!item?.listProduct ? (
            item?.listProduct?.map((item) => {
              if (!!item) {
                return <CategoryDetailItem item={item} />;
              }
            })
          ) : (
            <Row
              align="center"
              justify="center"
              style={{
                height: "200px",
                fontSize: "30px",
                color: "#999",
                lineHeight: "200px",
              }}
            >
              {t("This Type Currently Don't Have Any Product")}.
            </Row>
          )}
        </Row>
        <Row>
          <Col span={24}>
            {item?.information.length > 0 ? (
              <PetInformation information={item.information} />
            ) : (
              <Row
                align="center"
                justify="center"
                className="update-information"
              >
                {t("We will update information about ")}
                {t(item?.name)} {t("soon")}!!!
              </Row>
            )}
          </Col>
        </Row>
      </Col>
    </ContentContainer>
  );
}

export default CategoryDetailItems;
