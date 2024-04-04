import axios from 'axios';

export default class PostService {
    static async getAllUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response;
    }

    static async getUserPosts(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
        return response;
    }

    static async getUserAlbums(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + id);
        return response;
    }

    // static async getAllUsers(limit = 10, page = 1) {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
    //             params: {
    //                 _limit: limit,
    //                 _page: page,
    //             }
    //         }
    //     );
    //     return response;
    // }
}