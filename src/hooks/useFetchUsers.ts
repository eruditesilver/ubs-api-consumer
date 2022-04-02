import React, { useState, useEffect } from "react";
import { User as UserType } from "../interfaces/User.interface";

export default function useFetchUsers() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [error, setError] = useState<null | Error>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoading(false);
                    if (Object.keys(data).length > 0 || data.length > 0) setUsers(data);
                    else setError(new Error("No Data responsed from API"));
                },
                (error) => {
                    setIsLoading(false);
                    setError(error);
                }
            );
    }, []);

    return { users, error, isLoading }
}