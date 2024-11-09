import { useState, useEffect } from "react";

import styles from "./Counter.module.css";


function Counter() {
  const tabs = [
    {
      id: 1,
      label: "Tab 1",
      header : "مقدمه و اهمیت جنگل‌های مانگرو در ذخیره کربن",
      content:
        "جنگل‌های مانگرو به‌عنوان یکی از زیست‌بوم‌های ارزشمند ساحلی نقش حیاتی در کاهش آثار تغییرات اقلیمی و حفاظت از محیط‌زیست ایفا می‌کنند. این جنگل‌ها نه تنها زیستگاه گونه‌های متنوع گیاهی و جانوری هستند، بلکه قابلیت قابل توجهی در ذخیره کربن دارند. در این مطالعه، تمرکز بر بررسی تأثیر کاشت و توسعه جنگل‌های مانگرو در مناطق شور بنگلادش و ارتباط آن با میزان ذخیره کربن در خاک و بیومس گیاهی است.",
      image: "./images/image1.jpg",
    },
    {
      id: 2,
      label: "Tab 2",
      header:"روش‌شناسی تحقیق و جمع‌آوری داده‌ها" , 
      content:
        "نتایج مطالعه نشان می‌دهد که با افزایش سن جنگل‌های مانگرو، میزان ذخیره کربن به طور قابل‌توجهی افزایش می‌یابد و جنگل‌های بالغ‌تر (با سن 35 سال) بیشترین ظرفیت ذخیره کربن را دارا هستند. همچنین، گونه Sonneratia apetala که گونه‌ای غالب در این جنگل‌هاست، سهم بیشتری در ذخیره کربن نسبت به دیگر گونه‌ها دارد. این نتایج نشان می‌دهد که گونه‌های غالب می‌توانند نقش کلیدی در بهبود ذخیره کربن در مناطق مانگرو ایفا کنند و به عنوان بخشی از برنامه‌های کاشت و بازسازی محیط‌زیستی مورد توجه قرار گیرند.",
      image: "./images/2.jpg",
    },
    {
      id: 3,
      label: "Tab 3",
      header:" نتایج و تحلیل داده‌ها" , 
      content:
        "این مطالعه به‌منظور بررسی تغییرات ذخیره کربن در جنگل‌های مانگرو با سنین مختلف (3 تا 35 سال) انجام شده است. در این تحقیق، تیم پژوهشی با استفاده از روش‌های استاندارد نمونه‌برداری از خاک و اندازه‌گیری پارامترهای زیستی گیاهان، بیومس گیاهی و کربن آلی خاک را محاسبه کرده است. از فرمول‌های آلومتریک خاص برای تخمین بیومس و کربن ذخیره‌شده در گونه‌های غالب استفاده شده است. این داده‌ها جهت ارزیابی اثر سن و ترکیب گونه‌ای بر ذخیره کربن، و تحلیل روند تغییرات ذخیره کربن در خاک و بیومس، مورد استفاده قرار گرفته‌اند.",
      image: "./images/3.jpg",
    },
    {
      id: 4,
      label: "Tab 4",
      header:"نتیجه‌گیری و توصیه‌هایی برای سیاست‌گذاری و مدیریت" , 
      content:
        "نتایج این تحقیق نشان‌دهنده اهمیت جنگل‌های مانگرو در بهبود ذخیره کربن و کاهش تغییرات اقلیمی است. با توجه به سهم بالای گونه Sonneratia apetala در ذخیره کربن، پیشنهاد می‌شود که سیاست‌گذاران محیط‌زیستی با تمرکز بر کاشت گونه‌های مؤثر و مدیریت پایدار جنگل‌های مانگرو، نقش این جنگل‌ها را در حفظ تعادل کربن افزایش دهند. همچنین، توسعه بیشتر مناطق مانگرو و کاهش دخالت‌های انسانی می‌تواند به حفاظت و پایداری بیشتر این مناطق کمک کند و در بلندمدت به اهداف ملی و جهانی کاهش کربن دست یافت.",
      image: "./images/4.jpeg",
    },
  ];
  
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? parseInt(savedTab) : 1;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
    
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);
  return (
    <>
      <header className={styles.header}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${styles.button} ${activeTab === tab.id ? styles.buttonActive : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </header>
      <div className={styles.wrapper} dir="rtl">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{activeTabContent.header}</h2>
          <p>{activeTabContent.content}</p>
          
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={activeTabContent.image} alt={activeTabContent.label}
          className={styles.image}
        />
      </div>
      </div>
      </>
  );
}

export default Counter;
