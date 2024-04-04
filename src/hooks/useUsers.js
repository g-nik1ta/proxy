import { useMemo } from "react";

export const useSortedUsers = (users, sort) => {
    const sortedUsers = useMemo(() => {
        if (sort === 'asc') {
            return [...users].sort((a, b) => a['username'].localeCompare(b['username']))
        } else if (sort === 'desc') {
            return [...users].sort((a, b) => b['username'].localeCompare(a['username']))
        }
        return users;
    }, [sort, users])

    return sortedUsers;
}

export const useUsers = (users, sort, query) => {
    const sortedUsers = useSortedUsers(users, sort);

    const sortedSearchUsers = useMemo(() => {
        return sortedUsers.filter(user => user.username.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedUsers]);

    return sortedSearchUsers;
}