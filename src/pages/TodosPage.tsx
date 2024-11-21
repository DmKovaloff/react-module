import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Todos from "../components/Todos";
import {ITodo} from "../models/ITodo";

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodo[]>()

    const[query, setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        const page = query.get('page');
        console.log('page is - ' + page)
        if(page) {
            apiService.todo.getAll(+page).then(value => setTodos(value))
        }
    }, [query]);


    return (
        <div>
            <h2>Todos Page</h2>
            <Todos todos={todos}/>
            <PaginationComponent/>
        </div>
    );
};

export default TodosPage;