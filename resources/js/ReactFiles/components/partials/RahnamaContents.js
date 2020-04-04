import React from "react";

function RahnamaContents() {
    return (
        <div className="container row p-0 m-0 mx-auto rahnamaCollapse">
            <div className="col-12 ml-auto p-0" id="accordion">
                <div className="card my-0">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link font3"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                چگونه با فروشندگان ارتباط برقرار کنیم؟
                            </button>
                        </h5>
                    </div>

                    <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            روی کارت فروشنده ی مورر نظر خود کلیک کرده،کارت
                            میچرخد و به راحتی به شماره فروشنده دسترسی خواهید
                            داشت
                        </div>
                    </div>
                </div>
                <div className="card my-0">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                چگونه سیمکارت مورد نظر خود را بیابیم؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            در بخش جستجو تمام آیکن های مورد نظر خود اعم از قیمت
                            ، استان ارزشمندی و ... را کامل پر کنید و سپس کلید
                            جستجو را لمس کنید.
                        </div>
                    </div>
                </div>
                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                فروشندگان شخصی چگونه به ارزش واقعی سیمکارت خود
                                برسند؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body font3">
                            فروشندگان شخصی میتوانند به سیمکارت خود اصطلاحا چوب
                            حراج زده و گزینه ی به بالاترین قیمت پیشنهادی را
                            انتخاب کنند تا به قیمت اصلی سیمکارت خود برسند و با
                            تصمیم درست معامله ی باب میل خود را انجام دهند.
                        </div>
                    </div>
                </div>
                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                معیار انتخاب فروشندگان برتر هفته چیست؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseFour"
                        className="collapse font2"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            بر اساس الگوریتمهای سایت و میزان ارتباطات فروشندگان
                            با مشتریان درجه بندی می شوند.
                        </div>
                    </div>
                </div>
                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                چگونه ثبت نام کنم؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            سمت چپ بالای صفحه میتوانید گزینه ی ثبت نام را انتخاب
                            کرده و با تکمیل مراحل ، ثبت نام خود را انجام دهید.
                        </div>
                    </div>
                </div>
                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collpaseSix"
                                aria-expanded="false"
                                aria-controls="collpaseSix"
                            >
                                حدودا چقدر زمان میبرد تا سیمکارتم رو بفروشم؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collpaseSix"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            بسته به نوع سیمکارت و قیمت و ارزش واقعی هر سیمکارت
                            متفاوت است اما برای تضمین فروش میتوانید از گزینه ی
                            بروز رسانی استفاده کنید.
                        </div>
                    </div>
                </div>
                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collpaseSeven"
                                aria-expanded="false"
                                aria-controls="collpaseSeven"
                            >
                                آیا وب سایت از مراودات بین مالک و خریدار نفع
                                میبرد؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collpaseSeven"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            خیر این سایت به هیچ عنوان از مراودات بین فروشنده و
                            خریدار سودی نمیبرد تنها هدف این سایت جلب رضایت هم
                            میهنان عزیز و خدمت به شما بزرگواران است
                        </div>
                    </div>
                </div>

                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collpaseEight"
                                aria-expanded="false"
                                aria-controls="collpaseEight"
                            >
                                آیا وب سایت از مراودات بین مالک و خریدار نفع
                                میبرد؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collpaseEight"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            خیر این سایت به هیچ عنوان از مراودات بین فروشنده و
                            خریدار سودی نمیبرد تنها هدف این سایت جلب رضایت هم
                            میهنان عزیز و خدمت به شما بزرگواران است
                        </div>
                    </div>
                </div>

                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collpaseNine"
                                aria-expanded="false"
                                aria-controls="collpaseNine"
                            >
                                داشبورد به ما چه امکاناتی میدهد؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collpaseNine"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            داشبورد به ما امکان اصلاح و حذف آگهی و همچنین امکان
                            تغییر رمز عبور از طریق پیامک را میدهد.
                        </div>
                    </div>
                </div>

                <div className="card my-0">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed font3"
                                data-toggle="collapse"
                                data-target="#collpaseTen"
                                aria-expanded="false"
                                aria-controls="collpaseTen"
                            >
                                به چه خطی رُند گفته میشود و در سایت چگونه و توسط
                                چه کسی رند بودن سیمکارت مشخص میگردد؟
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collpaseTen"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body font2">
                            اصولا خط رُند به خطی گفته میشود که از نظر ارقام و
                            اعداد و موسیقی لفظی به گونه ای روان و سلیس باشد که
                            در ذهن افراد بماند که امروزه در حوزه های مختلف
                            بیزینسی این مطلب از اهمیت ویژه ای برخوردار است و اما
                            گونه های مختلفی از سیکارت رُند وجود دارد که در روند
                            تشخیص نوع رُند بودن خط به ما کمک میکند که البته سایت
                            سیم۷ کار را برای کاربران راحت کرده و بخش "ارزشمندی"
                            را به سایت اضافه کرده که در این بخش خط ثبت شده به
                            طور خودکار به سمع و نظر کارشناس سایت رسیده و پس از
                            تایید کارشناس در یکی از ۴ دسته ی ۱. معمولی ۲. نیمه
                            رُند ۳. رُند ۴۰ فوق رند قرار میگیرند
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RahnamaContents;
