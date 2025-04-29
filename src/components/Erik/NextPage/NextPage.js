import { useState } from 'react';
import { Pagination, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import './NextPage.css';

const YourComponent = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    const emptyPageUrl = window.location.origin;
    window.location.href = emptyPageUrl;
    setCurrent(page);
  };

  const handleNext = () => {
    const emptyPageUrl = window.location.origin;
    window.location.href = emptyPageUrl;
  };

  return (
    <div className="nextPage__div">
      <Button type="primary" onClick={handleNext}>
        {t('ՀԱՅՈՐԴԸ')}
      </Button>
      <Pagination
        current={current}
        total={100}
        pageSize={10}
        showSizeChanger={false}
        onChange={onChange}
      />
    </div>
  );
};

export default YourComponent;