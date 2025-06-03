import "./css/PricingPage.css";

export default function PricingPage() {
    return (
        <div>
            <div className="pricing-page-title">
                BITCHBOY
            </div>
            <button className="pre-order-button">
                PRE-ORDER →
            </button>
            <div className="offer-background">
                <img
                    src={"/images/pricing-page/offer-background.svg"}
                    alt={""}
                />
            </div>
            <div className="offer-text">
                <div className="offer-text-title">
                    BITCHBOY ORIGINAL MODEL
                </div>
                <div className="offer-text-price">
                    $500
                </div>
                <div className="offer-text-info">
                    billed just once
                </div>
                <img
                    className="offer-text-image"
                    src={"/images/pricing-page/model.png"}
                    alt={""}
                />
            </div>
            <div className="offer-description">
                <div className="offer-description-title">
                    Benefits
                </div>
                <div className="offer-description-points">
                    <div className="offer-description-point">
                        <img
                            src={"/images/pricing-page/check-mark.svg"}
                            alt={""}
                        />
                        <div className="offer-description-point-text">
                            BITCHBOY board
                        </div>
                    </div>
                    <div className="offer-description-point">
                        <img
                            src={"/images/pricing-page/check-mark.svg"}
                            alt={""}
                        />
                        <div className="offer-description-point-text">
                            Free shipping in Europe
                        </div>
                    </div>
                    <div className="offer-description-point">
                        <img
                            src={"/images/pricing-page/check-mark.svg"}
                            alt={""}
                        />
                        <div className="offer-description-point-text">
                            Join our growing community
                        </div>
                    </div>
                    <div className="offer-description-point">
                        <img
                            src={"/images/pricing-page/check-mark.svg"}
                            alt={""}
                        />
                        <div className="offer-description-point-text">
                            Special promotions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}