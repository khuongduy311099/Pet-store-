import { Button, Col, Row } from "antd";
import { t } from "i18next";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../Context/globalContext";
import "../category.scss";
function PetInformation({ information, name }) {
  const [moreContent, setMoreContent] = useState(false);
  const handleShowMore = () => {
    setMoreContent(!moreContent);
  };

  const globalContext = useContext(GlobalContext);
  return (
    <div className="information-wrapper">
      <Row
        style={{ marginTop: "50px", marginLeft: "50px" }}
        align="center"
        justify="center"
      >
        <Col className="content-inner" span={14}>
          <Row id={information[0]?.title} style={{ marginTop: "20px" }}>
            <h2
              className={
                !globalContext.darkmode
                  ? "information-title"
                  : "information-title-dark-mode"
              }
            >
              {t(information[0]?.title)}
            </h2>
          </Row>
          {!!information[0]?.content.desc1 ? (
            <Row
              className={`${
                !globalContext.darkmode
                  ? "information-desc"
                  : "information-desc-dark-mode"
              } ${
                moreContent
                  ? null
                  : `breakpoint-show-content${
                      !globalContext.darkmode ? "" : "-dark-mode"
                    }`
              }`}
            >
              {t(information[0]?.content?.desc1)}
            </Row>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          {!!information[0]?.content.desc2 && moreContent ? (
            <Row
              className={
                !globalContext.darkmode
                  ? "information-desc"
                  : "information-desc-dark-mode"
              }
            >
              {t(information[0]?.content?.desc2)}
            </Row>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          {!!information[0]?.content.desc3 && moreContent ? (
            <Row
              className={
                !globalContext.darkmode
                  ? "information-desc"
                  : "information-desc-dark-mode"
              }
            >
              {t(information[0]?.content?.desc3)}
            </Row>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          {moreContent ? (
            <Row className="information-img-wrapper">
              {information[0]?.content?.img1 ? (
                <img
                  className="information-img"
                  src={information[0]?.content?.img1}
                  alt={information[0]?.title}
                ></img>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </Row>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          {moreContent &&
            information.map((item, index) =>
              index === 0 ? (
                <div style={{ display: "none" }}></div>
              ) : (
                <div style={{ marginBottom: "10px" }}>
                  <Row id={item?.title} className="information-title">
                    <h2
                      className={
                        !globalContext.darkmode
                          ? "information-title"
                          : "information-title-dark-mode"
                      }
                    >
                      {t(item?.title)}
                    </h2>
                  </Row>
                  {!!item?.content?.feature1 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      <strong>{t(item?.content.feature1)}</strong>
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.desc1 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      - {t(item?.content.desc1)}
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
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
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.feature2 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      <strong>{t(item?.content.feature2)}</strong>
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.desc2 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      - {t(item?.content.desc2)}
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
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
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.feature3 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      <strong>{t(item?.content.feature3)}</strong>
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.desc3 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      - {t(item?.content.desc3)}
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
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
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.feature4 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      <strong>{t(item?.content.feature4)}</strong>
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.desc4 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      - {t(item?.content.desc4)}
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
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
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.feature5 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      <strong>{t(item?.content.feature5)}</strong>
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
                  )}
                  {!!item?.content?.desc5 ? (
                    <Row
                      className={
                        !globalContext.darkmode
                          ? "information-desc"
                          : "information-desc-dark-mode"
                      }
                    >
                      - {t(item?.content.desc5)}
                    </Row>
                  ) : (
                    <div style={{ display: "none" }}></div>
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
                    <div style={{ display: "none" }}></div>
                  )}
                </div>
              )
            )}
        </Col>
        <Col
          className={
            !globalContext.darkmode ? "appendix" : "appendix-dark-mode"
          }
          span={5}
          offset={3}
        >
          <Row
            className={
              !globalContext.darkmode
                ? "appendix-title"
                : "appendix-title-dark-mode"
            }
          >
            {t("Appendix")}
          </Row>
          {information.map((item, i) => (
            <Row>
              <a
                className={
                  !globalContext.darkmode
                    ? "appendix-inner"
                    : "appendix-inner-dark-mode"
                }
                href={`#${item?.title}`}
              >
                {i + 1}. {t(item.title)}
              </a>
            </Row>
          ))}
        </Col>
      </Row>
      <Row align="center" justify="center">
        <Button
          size="large"
          style={{
            fontSize: "15px",
            width: "100px",
            height: "40px",
            padding: "0 4px",
            borderRadius: "10px",
            backgroundColor: "#b90000",
            color: "white",
          }}
          onClick={handleShowMore}
        >
          {!moreContent ? t("See more") : t("See less")}
        </Button>
      </Row>
    </div>
  );
}

export default PetInformation;
