import {createContext, useEffect, useReducer, useContext, useState} from "react"
import {faker} from "@faker-js/faker"
const PostContext = createContext()
const BASE_URL = "http://localhost:8000/data";
const initialValue = {
    posts: [],
    isLoading: true
}
const randomPost = () => {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase()
    }
}
const reducer = (state, action) => {
    switch(action.type) {
        case "post/load":
            return {...state, isLoading: true}
        case "post/loaded":
            return {...state, isLoading: false, posts: action.payload}
        case "post/create":
            console.log(state.posts)
            return {...state, posts: [...state.posts, action.payload]}
        case "post/clear":
            return {...state, posts: []}
        case "post/search":
            const keyword = action.payload
            const filteredPosts = keyword === "" ? action.initialPosts : state.posts.slice().filter(post => `${post.title} ${post.description}`.toLowerCase().includes(keyword))
            return {...state, posts: filteredPosts}
        case "post/archivePost":
            const archivedPosts = Array.from({length: 10000}, (e) => randomPost())
            return {...state, archivedPosts}
        case "post/removeArchivePost":
            const removedArchivedPost = action.payload
            console.log(state.archivedPosts)
            console.log(removedArchivedPost)
            const newListArchivePost = state.archivedPosts.slice().filter(archivePost => archivePost.title === removedArchivedPost.title && archivePost.description === removedArchivedPost.description ? false : true)
            return {...state, archivedPosts: newListArchivePost}
    }
}

function PostProvider({children}) {
    const [initialPosts, setIntialPosts] = useState([])
            const [{isLoading, posts, archivedPosts}, dispatch] = useReducer(reducer, initialValue)
    useEffect(() => {
        dispatch({type: "post/load"})
        async function fetchData() {
            fetch(BASE_URL).then((res) => {
                if (!res.ok) throw new Error("Something went wrong when fetching data")

                return res.json()
            }).then((result) => {
                setIntialPosts(result)
                dispatch({type: "post/archivePost"})
                dispatch({type: "post/loaded", payload: result})
            });
        }
        fetchData()
    }, [])

    async function addPost(post) {
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify(post),
            header: {
                "Content-Type": "application/json"
            }
        }
        fetch(BASE_URL, fetchOptions).then((res) => {
            if (!res.ok) throw new Error("Something went wrong when adding new data")
            return res.json()
        }).then(result => {
            setIntialPosts((posts) => [...posts, result])
            dispatch({type: "post/create", payload: result})
        })
    }

    async function clearPost() {
        const promiseAll = posts.reduce((arr, post) => {
            return [...arr, new Promise((resolve) => {
                const URL = `${BASE_URL}/${post.id}`
                const fetchOptions = {
                    method: "DELETE"
                }
                fetch(URL, fetchOptions).then((res) => {
                    if (!res.ok) throw new Error(`Something went wrong when deleting ${post.id}`)
                    resolve()
                })
            })]
        },[])
        Promise.all(promiseAll).then(() => {
            setIntialPosts((posts) => [])
            dispatch({type: "post/clear"})
        })

    }

    async function removeArchivePost(post) {
        dispatch({type: "post/removeArchivePost", payload: post})
    }

    function searchPost(keyword) {
        dispatch({type: "post/search", payload: keyword, initialPosts})
    }

  
 
    return (
        <PostContext.Provider value={{posts, isLoading,archivedPosts, addPost, clearPost, searchPost, removeArchivePost}}>{children}</PostContext.Provider>
    )
}

const usePost = () => {
    const context = useContext(PostContext)
    if (context === undefined) return;
    return context
}

export {usePost, PostProvider}