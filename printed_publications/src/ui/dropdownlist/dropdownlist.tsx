import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Dropdownlist: React.FC = () => (
  <Select
    showSearch
    placeholder="Выберите автора"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    style={{width: "442px", height: "52px", textAlign: 'left'}}
    options={[
      {
        value: 'сергей',
        label: 'Сергей',
      },
      {
        value: 'андрей',
        label: 'Андрей',
      },
      {
        value: 'антон',
        label: 'Антор',
      },
    ]}
  />
);

export default Dropdownlist;