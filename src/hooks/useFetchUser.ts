import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User as UserType } from "../interfaces/User.interface";

export default function useFetchUser() {
    const { id } = useParams();
    const [user, setUser] = useState<null | UserType>(null);
    const [error, setError] = useState<null | Error>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log(data);
                    if (Object.keys(data).length > 0) setUser(data);
                    else setError(new Error("User Not Found"));
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                    setError(error);
                }
            );
    }, [id]);

    return { user, error, isLoading }
}