import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({ ...filter, query: event.target.value })}
                placeholder="Поиск..." />
            <MySelect
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                value={filter.sort}
                options={[
                    {
                        value: "title",
                        name: "По названию"
                    },
                    {
                        value: "body",
                        name: "По описанию"
                    }
                ]}
                defaultValue="Сортировка" />
        </div>
    );
};

export default PostFilter;
