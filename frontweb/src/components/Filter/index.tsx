import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Store, StoreFilterData } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  onSubmitFilter: (data: StoreFilterData) => void;
};

const Filter = ({ onSubmitFilter }: Props) => {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<StoreFilterData>();

  const onSubmit = (formData: StoreFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeStore = (value: Store) => {
    setValue('store', value);
    const obj: StoreFilterData = {
      store: getValues('store'),
    };
    onSubmitFilter(obj);
  };

  useEffect(() => {
    makeRequest({ url: '/stores' }).then((response) => {
      setSelectStores(response.data);
    });
  }, []);
  return (
    <div className="base-card filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="store-filter-form">
        <Controller
          name="store"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Select
              options={selectStores}
              isClearable
              placeholder="Selecione a loja"
              classNamePrefix="store-filter-select"
              onChange={(value) => handleChangeStore(value as Store)}
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default Filter;
